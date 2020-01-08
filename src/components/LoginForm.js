import React from 'react';
import { withFormik, Field } from 'formik';
import axiosWithAuth from '../utils/AxiosWithAuth';
import { connect } from 'react-redux';
import { setUserID } from '../actions';
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
            <div className="center">
                <LargeButton type="submit" disabled={isSubmitting}>Login</LargeButton>
                <p>Don't have an account? <a href="#">Sign Up</a></p>
            </div>
        </StyledForm>
    );
};

// const handleSuccessfulLogin = () => {
//     // redirect user to correct logged-in view
//     console.log('Login successful!');

// };

const FormikLoginForm = withFormik({
    mapPropsToValues: ({ username, password }) => ({
        username: username || '',
        password: password || ''
    }),
    handleSubmit: (values, {props, setSubmitting, setErrors }) => {
        // const { username, password } = values;
        axiosWithAuth()
        .post('/auth/login',  values )
        // axios
        // .get('https://postman-echo.com/basic-auth', values)

            .then(res => {
                console.log(res.data.message);
                console.log(res);
                localStorage.setItem('token', res.data.token);
                // handleSuccessfulLogin();
                console.log('Login successful!')
                props.setUserID(res.data.id)
                props.history.push('/');
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

export default connect(null, { setUserID })(FormikLoginForm);