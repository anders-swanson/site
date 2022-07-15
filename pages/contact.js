import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';


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

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {
        // display form data on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        return false;
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                        <button type="submit">Register</button>
                        <button type="button" onClick={() => reset()}>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    );
}