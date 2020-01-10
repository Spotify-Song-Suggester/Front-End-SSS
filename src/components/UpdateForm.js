import React from 'react';
import { withFormik, Field } from 'formik';
import axiosWithAuth from '../utils/AxiosWithAuth';
import { connect } from 'react-redux';
import { StyledField, MediumButton } from  '../styles.js';
import styled from 'styled-components';

const StyledForm = styled.form`
    .center {
        text-align: center;
    }
`;

const UpdateForm = props => {
    console.log('props updateform', props)
    const { handleSubmit, errors, isSubmitting } = props;

    return (
        <StyledForm onSubmit={handleSubmit}>
            {errors.invalidCredentials && 
            <p style={{color: 'red'}}>Update failed</p>}
            <h2>Edit Profile</h2>
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
                <MediumButton type="submit" disabled={isSubmitting}>Update</MediumButton>
            </div>
        </StyledForm>
    );
};

const FormikUpdateForm = withFormik({
    mapPropsToValues: ({ username, password }) => ({
        username: username || '',
        password: password || ''
    }),
    handleSubmit: (values, {props, setSubmitting, setErrors }) => {

        console.log(props);
        axiosWithAuth()
            .put(`/auth/${props.userID}`,  values )
    
            .then(res => {
                console.log('Update successful!')
                props.history.push('/');
            })
            .catch(err => {
                console.warn(err);
            })

    }
})(UpdateForm);

const mapStateToProps = state => {
    return {
        userID: state.userID
    };
};

export default connect(mapStateToProps, {})(FormikUpdateForm);