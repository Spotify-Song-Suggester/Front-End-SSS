import React, { useState, useEffect } from "react";
// import {Link} from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import axiosWithAuth from "../utils/AxiosWithAuth";
import axios from 'axios';
import * as Yup from "yup";
import { StyledField, LargeButton, CenterText } from  '../styles.js';


// import {UsernameLabel, EmailLabel, PasswordConfirmLabel, PasswordLabel, UsernameField, EmailField, SignupButton,SignUpWords} from "../Styles/FormStyling";

//use Formik form
//first name, last name, email, pass,
//set state for initial inputs
//use effect for data changes
//set what to do on status change. if does-render function. spread array values to add on to new. dependency array is status b/c thats what affect is watching for-status change(data change) 
const RegistrationForm = (
    {
        values, errors, touched, status

    }) => {
    // console.log ("values", values);
    // console.log ("erros", errors);
    // console.log ("touched", touched);


    //state for initial form data
    const [users, setUsers] = useState([]);

    //effect for fom data changes
    useEffect(() => {
        console.log("status change", status);


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

            {/*email form field*/}
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

            {/*pass form field*/}

            {/* <div className = "passConfirm-label">

)} */}



            {/*pass confirm form field*/}
            <CenterText>
                <LargeButton type="submit">
                    Sign Up!
                </LargeButton>
            </CenterText>
            {/*submit button form field*/}


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

    }, //pass props to new users?

    validationSchema: Yup.object().shape({
        username: Yup.string().required("username required!"),
        email: Yup.string().required("valid email required!"),
        password: Yup.string().required("password required!"),
    
    }),

    //validation for inputs



    handleSubmit(
        values, { props, setStatus, resetForm }
    ) {
        console.log("submitted", values); //console log values inputted on submit. 'post' console log shows results came bck
        axiosWithAuth()
            .post("/auth/register", values)
            // axios
            //.post ("https://reqres.in/api/auth/register", values)


            .then(res => {
                console.log("worked", res);
                setStatus(res.data);
                resetForm();
                props.history.push('/login');
            })

            .catch(error =>
                console.log(error.response)
            );
    }
})(RegistrationForm);


//submit to axios placeholder for data inputs
//console log response that comes back WITH data entered(if worked)

export default FormikForm;
