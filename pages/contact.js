import utilStyles from '../styles/utils.module.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Layout from '../components/layout';
import ReCAPTCHA from 'react-google-recaptcha'
import React, { useState } from 'react';
import { ThreeDots } from 'react-loading-icons/'


const recaptchaPublicKey = process.env.NEXT_PUBLIC_RECAPTCHA_PUBLIC_KEY
const maxInputLength = 100
const maxMessageLength = 5000

export default function Contact() {
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required("* Name is required")
            .max(maxInputLength, `* Name must be at most ${maxInputLength} characters.`),
        email: Yup.string()
            .required('* Email is required')
            .max(maxInputLength, `* Email must be at most ${maxInputLength} characters.`)
            .email('* Email is invalid'),
        msg: Yup.string()
            .required("* Message is required")
            .max(maxMessageLength, `* Message must be at most ${maxMessageLength} characters.`),

    })
    const formOptions = { resolver: yupResolver(validationSchema) }
    const { register, handleSubmit, reset, formState } = useForm(formOptions)
    const { errors } = formState
    const [formData, setFormData] = useState({})
    const recaptchaRef = React.useRef(null)
    const formRef = React.useRef(null)
    // display loading bars instead of submit button if true
    const [loading, setLoading] = useState(false)
    // displays check mark instead of submit button if true
    const [emailSent, setEmailSent] = useState(false)

    function onSubmit(data) {
        setFormData(data)
        recaptchaRef.current.execute()
        return false
    }

    const onCAPTCHAChange = async (captchaCode) => {
        if (!captchaCode) {
            return
        }
        setLoading(true)
        try {
            const response = await fetch("/api/email", {
                method: "POST",
                body: JSON.stringify({
                    email: formData.email,
                    name: formData.name,
                    msg: formData.msg,
                    captcha: captchaCode,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
          })
            if (response.ok) {
                setEmailSent(true)
            } else {
                const error = await response.json()
                throw new Error(error.message)
            }
        } catch (error) {
            alert("Something went wrong, please try again later")
        } finally {
            recaptchaRef.current.reset()
            setFormData({})
            setLoading(false)
        }
    }

    return (
        <Layout
            headerText={'Contact Us'}
            description={`Contact us!`}
            >
                <div className={utilStyles.contactForm}>
                    <div className={`${utilStyles.centered} ${utilStyles.formHeader}`}>
                        {`Send us a message if you have questions, comments, or just want to connect!`}
                    </div>
                    

                    <form
                        className={utilStyles.centered}
                        onSubmit={handleSubmit(onSubmit)}
                        ref={formRef}
                    >
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            size="invisible"
                            sitekey={recaptchaPublicKey}
                            onChange={onCAPTCHAChange}
                        />
                        <div>
                            <div>
                                <label>Name</label><br/>
                                <input name="name" type="text" {...register('name')} placeholder='Type full name'/>
                                <div className={utilStyles.errorMessage}>{errors.name?.message}</div>
                            </div>
                            <div>
                                <label>Email</label><br/>
                                <input name="email" type="text" {...register('email')} placeholder='Type email address'/>
                                <div className={utilStyles.errorMessage}>{errors.email?.message}</div>
                            </div>
                            <div>
                                <label>Message</label><br/>
                                <textarea name="msg" type="text" {...register('msg')}/>
                                <div className={utilStyles.errorMessage}>{errors.msg?.message}</div>
                            </div>
                            <div style={{'float': 'right', 'display': 'flex'}}>
                                {emailSent && <div style={{'paddingRight': '50px', 'marginTop': '10px'}}>✔️</div>}
                                {loading && !emailSent && <ThreeDots className={utilStyles.formLoader} stroke='grey'/>}
                                {!loading && !emailSent && <button type="submit" className={utilStyles.submitButton}>Send Email</button>}
                                <button style={{'marginTop': '10px'}} type="button" onClick={() => {
                                    setEmailSent(false)
                                    reset()
                                }} className={utilStyles.resetButton}>Reset</button>
                            </div>
                        </div>
                    </form>
                </div>
        </Layout>
    )
}
