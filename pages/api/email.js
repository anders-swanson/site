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
 
export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).send(methodNotAllowed)
    }

    const { email, name, msg, subject, captcha } = req.body
    if (!email || !name || !msg || !subject || !captcha) {
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
        client.send({
            text: text,
            from: process.env.SMTP_USERNAME,
            to: process.env.SMTP_USERNAME,
            subject: subject,
        })
    } catch(e) {
        res.status(400).end(JSON.stringify({ message: e }))
        return;
    }
    res.status(200).end(JSON.stringify({ message:'Sent' }))
}
