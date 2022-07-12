import { SMTPClient } from 'emailjs';
 
 
export default function handler(req, res) {
 
    const sender = req.body.sender;
    const subject = sender + ': ' + req.body.subject
    const text = req.body.text
    
    // console.log(process.env)

    const client = new SMTPClient({
    user: process.env.SMTP_USERNAME,
    password: process.env.SMTP_PASSWORD,
    host: 'smtp.gmail.com',
    ssl:true
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