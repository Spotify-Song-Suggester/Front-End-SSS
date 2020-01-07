import React from 'react';
import { withFormik, Field } from 'formik';
import axiosWithAuth from '../utils/AxiosWithAuth';


const LoginForm = props => {
    const { handleSubmit, errors, isSubmitting } = props;

    return (
        <form onSubmit={handleSubmit}>
            {errors.invalidCredentials && 
            <p style={{color: 'red'}}>Invalid credentials</p>}
            <label>
                Username
                <Field type="text" name="username" />
            </label>
            <label>
                Password
                <Field type="password" name="password" />
            </label>
            <button type="submit" disabled={isSubmitting}>Login</button>
        </form>
    );
};

// const handleSuccessfulLogin = () => {
//     // redirect user to correct logged-in view
//     console.log('Login successful!');
// };

export default withFormik({
    mapPropsToValues: (props) => ({
        username: props.username || '',
        password: props.password || ''
    }),
    handleSubmit: (values, {props, setSubmitting, setErrors }) => {
        // const { username, password } = values;
        axiosWithAuth()
        .post('/login',  values )
            .then(res => {
                console.log(res.data.message);
                localStorage.setItem('token', res.data.token);
                // handleSuccessfulLogin();
                console.log('Login successful!')
                props.history.push('/success');
            })
            .catch(err => {
                console.warn(err);
                setSubmitting(false);
                setErrors({ invalidCredentials: true });
            })
            .finally(() => {
                // setSubmitting(false);
                // causes memory leak on login, after history.push it's already unmounted
            });
    }
})(LoginForm);