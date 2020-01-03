import React from 'react';
import { withFormik, Field } from 'formik';
import axios from 'axios';

const LoginForm = props => {
    const { handleSubmit, errors, isSubmitting } = props;

    return (
        <form onSubmit={handleSubmit}>
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

export default withFormik({
    mapPropsToValues: () => ({
        email: '',
        password: ''
    }),
    handleSubmit: values => {
        const { email, password } = values;
        axios.post('https://postman-echo.com/post', { email, password })
            .then(res => console.log(res))
            .catch(err => console.warn(err));
    }
})(LoginForm);