import React from 'react';
import { withFormik, Field } from 'formik';
import axios from 'axios';

const LoginForm = props => {
    const { handleSubmit, errors, isSubmitting } = props;

    return (
        <form onSubmit={handleSubmit}>
            {errors.invalidCredentials && 
            <p style={{color: 'red'}}>Invalid credentials</p>}
            <label>
                Email / Username
                <Field type="text" name="email" />
            </label>
            <label>
                Password
                <Field type="password" name="password" />
            </label>
            <button type="submit" disabled={isSubmitting}>Login</button>
        </form>
    );
};

const handleSuccessfulLogin = () => {
    // redirect user to correct logged-in view
    console.log('Login successful!');
};

export default withFormik({
    mapPropsToValues: () => ({
        email: '',
        password: ''
    }),
    handleSubmit: (values, { setSubmitting, setErrors }) => {
        const { email, password } = values;
        axios.get('https://postman-echo.com/basic-auth', { email, password })
            .then(res => {
                console.log(res);
                handleSuccessfulLogin();
            })
            .catch(err => {
                console.warn(err);
                setErrors({ invalidCredentials: true });
            })
            .finally(() => {
                setSubmitting(false);
            });
    }
})(LoginForm);