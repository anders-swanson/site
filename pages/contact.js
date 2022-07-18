import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import config from '../lib/config';
import * as Yup from 'yup';
import Layout from '../components/layout';
import ReCAPTCHA from 'react-google-recaptcha'
import React, { useState } from 'react';


const recaptchaPublicKey = process.env.NEXT_PUBLIC_RECAPTCHA_PUBLIC_KEY

export default function Contact() {
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required("Name is required"),
        subject: Yup.string()
            .required("Subject is required"),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        msg: Yup.string()
            .required("Message is required"),

    });
    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;
    const [formData, setFormData] = useState({})
    const recaptchaRef = React.useRef(null);

    function onSubmit(data) {
        setFormData(data)
        recaptchaRef.current.execute()
        return false;
    }

    const onCAPTCHAChange = async (captchaCode) => {
        if (!captchaCode) {
            return;
        }
        try {
            const response = await fetch("/api/email", {
                method: "POST",
                body: JSON.stringify({
                    email: formData.email,
                    name: formData.name,
                    subject: formData.subject,
                    msg: formData.msg,
                    captcha: captchaCode,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
          })
            if (response.ok) {
                alert("Email sent.")
                reset()
            } else {
                const error = await response.json()
                throw new Error(error.message)
            }
        } catch (error) {
            alert(error?.message || "Something went wrong")
        } finally {
            recaptchaRef.current.reset()
            setFormData({})
        }
    };

    return (
        <Layout
            headerText={'Contact Us'}
            description={`Contact us!`}
        >
            <div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            size="invisible"
                            sitekey={recaptchaPublicKey}
                            onChange={onCAPTCHAChange}
                        />
                        <div>
                            <div>
                                <label>Name</label>
                                <input name="name" type="text" {...register('name')}/>
                                <div>{errors.name?.message}</div>
                            </div>
                            <div>
                                <label>Subject</label>
                                <input name="subject" type="text" {...register('subject')}/>
                                <div>{errors.subject?.message}</div>
                            </div>
                            <div>
                                <label>Email</label>
                                <input name="email" type="text" {...register('email')}/>
                                <div>{errors.email?.message}</div>
                            </div>
                            <div>
                                <label>Message</label>
                                <input name="msg" type="text" {...register('msg')}/>
                                <div>{errors.msg?.message}</div>
                            </div>
                        </div>
                        <div>
                            <button type="submit">Submit</button>
                            <button type="button" onClick={() => reset()}>Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

function sendmail(data) {
    (async () => {
        const uri = process.env.DEV_MODE === 'true' ? 'http://localhost:3000' : config.domain
        const res = await fetch(`${uri}/api/email`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        const content = await res.json()
        alert(JSON.stringify(content))
    })()
}
