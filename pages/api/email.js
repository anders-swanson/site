import { SMTPClient } from 'emailjs';
import config from '../../lib/config';
import nodemailer from 'nodemailer';

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
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.SMTP_USERNAME,
            pass: process.env.SMTP_PASSWORD,
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN
        }
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
        console.log(JSON.stringify(captchaValidation))
        if (captchaValidation.success) {
            const mailObject = {
                text: text,
                from: process.env.SMTP_USERNAME,
                to: process.env.SMTP_USERNAME,
                subject: `New contact from ${email}`,
            }
            console.log("Sending email")
            transporter.sendMail(mailObject, function(err, data) {
                if (err) {
                    console.log("Error sending email: " + err)
                    res.status(400).end(JSON.stringify({ message: err }))
                    return
                } else {
                    console.log("Email sent successfully");
                }
            });
        } else {
            console.log("Failed captcha validation")
            res.status(400).end(JSON.stringify({ message: 'Unauthorized' }))
            return
        }
    } catch(e) {
        console.log("Error sending email: " + e)
        res.status(400).end(JSON.stringify({ message: e }))
        return
    }
    res.status(200).end(JSON.stringify({ message: 'Sent' }))
}
