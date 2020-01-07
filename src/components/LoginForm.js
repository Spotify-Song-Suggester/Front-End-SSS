import React from 'react';
import { withFormik, Field } from 'formik';
import axiosWithAuth from '../utils/AxiosWithAuth';
import axios from 'axios';
import { StyledField, LargeButton, CenterText } from  '../styles.js';
import styled from 'styled-components';


const LoginForm = props => {
    const { handleSubmit, errors, isSubmitting } = props;

    return (
        <form onSubmit={handleSubmit}>
            {errors.invalidCredentials && 
            <p style={{color: 'red'}}>Invalid credentials</p>}
            <StyledField>
                <label>
                    Username
                    <Field type="text" name="username" />
                </label>
            </StyledField>
            <StyledField>
                <label>
                    Password
                    <Field type="password" name="password" />
                </label>
            </StyledField>
            <CenterText>
                <LargeButton type="submit" disabled={isSubmitting}>Login</LargeButton>
                <p>Don't have an account? <a href="#">Sign Up</a></p>
            </CenterText>
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
        // axios
        // .get('https://postman-echo.com/basic-auth', values)

            .then(res => {
                console.log(res.data.message);
                console.log(res);
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