import { SMTPClient } from 'emailjs';
import config from '../../lib/config';

const badRequest = JSON.stringify({
    message: 'Bad Request',
    code: 400,
})

const methodNotAllowed = JSON.stringify({
    message: 'Method Not Allowed',
    code: 405,
})
 
export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).send(methodNotAllowed)
    }

    const { email, name, msg, captcha } = req.body
    if (!email || !name || !msg || !captcha) {
        console.log(JSON.stringify(req.body))
        return res.status(400).send(badRequest)
    }

    const text = `From: ${name}, ${email}\n\n${msg}`
    const client = new SMTPClient({
        user: process.env.SMTP_USERNAME,
        password: process.env.SMTP_PASSWORD,
        host: config.smtp.server,
        ssl: true
    });

    try {
        const captchaURI = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`
        const captchaRes = await fetch(captchaURI, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
            },
        })
        const captchaValidation = await captchaRes.json();
        if (captchaValidation.success) {
            client.send({
                text: text,
                from: process.env.SMTP_USERNAME,
                to: process.env.SMTP_USERNAME,
                subject: `New contact from ${email}`,
            })
        } else {
            res.status(400).end(JSON.stringify({ message: 'Unauthorized' }))
            return
        }
    } catch(e) {
        res.status(400).end(JSON.stringify({ message: e }))
        return
    }
    res.status(200).end(JSON.stringify({ message: 'Sent' }))
}
