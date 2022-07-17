import { SMTPClient } from 'emailjs';
import config from '../../lib/config';

 
export default function handler(req, res) {
    const text = `From: ${req.body.name}, ${req.body.email}\n\n${req.body.msg}`
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
            subject: req.body.subject,
        })
    } catch(e) {
        res.status(400).end(JSON.stringify({ message: e }))
        return;
    }
    res.status(200).end(JSON.stringify({ message:'Sent' }))
}
