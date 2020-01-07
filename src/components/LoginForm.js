import React from 'react';
import { withFormik, Field } from 'formik';
import axios from 'axios';
import { StyledField, LargeButton } from  '../styles.js';
import styled from 'styled-components';

const StyledForm = styled.form`
    .center {
        text-align: center;
    }
`;

const LoginForm = props => {
    const { handleSubmit, errors, isSubmitting } = props;

    return (
        <StyledForm onSubmit={handleSubmit}>
            {errors.invalidCredentials && 
            <p style={{color: 'red'}}>Invalid credentials</p>}
            <StyledField>
                <label>
                    Email / Username
                    <Field type="text" name="email" />
                </label>
            </StyledField>
            <StyledField>
                <label>
                    Password
                    <Field type="password" name="password" />
                </label>
            </StyledField>
            <div className="center">
                <LargeButton type="submit" disabled={isSubmitting}>Login</LargeButton>
                <p>Don't have an account? <a href="#">Sign Up</a></p>
            </div>
        </StyledForm>
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