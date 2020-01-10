import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import axiosWithAuth from "../utils/AxiosWithAuth";
import * as Yup from "yup";
import { StyledField, LargeButton, CenterText } from  '../styles.js';
 const RegistrationForm = (
    {
        values, errors, touched, status

    }) => {

    const [users, setUsers] = useState([]);
         useEffect(() => {

        status && setUsers(users => [
            ...users, status
        ]);
    }, [status]);

    return (
        <Form>
            <StyledField>
                <label>
                    Username*
                </label>
                <Field
                    type="text"
                    name="username"
                />
                {touched.username && errors.username && (
                    <p className="errors">
                        {errors.username}
                    </p>
                )}
            </StyledField>

            <StyledField>
                <label>
                    Email*
                </label>
                <Field
                    type="email"
                    name="email"
                />
                {touched.email && errors.email && (
                    <p>
                        {errors.email}
                    </p>
                )}
            </StyledField>

            <StyledField>
                <label>
                    Password*
                </label>
                <Field
                    type="text"
                    name="password"

                />
                {touched.password && errors.password && (
                    <p className="errors">
                        {errors.password}
                    </p>
                )}
            </StyledField>
            <CenterText>
                <LargeButton type="submit">
                    Sign Up!
                </LargeButton>
            </CenterText>
        </Form>
    );
};

const FormikForm = withFormik({
    mapPropsToValues(props) {
        return {
            username: props.username || "",
            email: props.email || "",
            password: props.password || "",
            
        };
    }, 

    validationSchema: Yup.object().shape({
        username: Yup.string().required("username required!"),
        email: Yup.string().required("valid email required!"),
        password: Yup.string().required("password required!"),
    
    }),
    handleSubmit(
        values, { props, setStatus, resetForm }
    ) {
        axiosWithAuth()
            .post("/auth/register", values)
            .then(res => {
                setStatus(res.data);
                resetForm();
                props.history.push('/login');
            })

            .catch(error =>
                alert("Failed to register", error)
            );
    }
})(RegistrationForm);
export default FormikForm;
