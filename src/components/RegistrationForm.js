import React, {useState, useEffect} from "react";
// import {Link} from "react-router-dom";
import {withFormik, Form, Field} from "formik";
import axios from "axios";
import * as Yup from "yup";


// import {UsernameLabel, EmailLabel, PasswordConfirmLabel, PasswordLabel, UsernameField, EmailField, SignupButton,SignUpWords} from "../Styles/FormStyling";

//use Formik form
//first name, last name, email, pass,
//set state for initial inputs
//use effect for data changes
//set what to do on status change. if does-render function. spread array values to add on to new. dependency array is status b/c thats what affect is watching for-status change(data change) 
const RegistrationForm = (
    {
    values, errors, touched, status
    
    }) =>{
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
},[status]);

return (

<Form>

<div className = "username-label">
<label>
Username*
</label> 
</div>
<div className = "username-field">
<Field
type="text"
name="username"
/>

{touched.username && errors.username && (
    <p className = "errors">
            {errors.username}
            </p>
)}
</div>


<div className = "email-label">

<label>
Email*
</label> 
</div>
<div className = "email-field">
<Field
type = "email"
name = "email"
/>

{touched.email && errors.email && (
   <p>
    {errors.email}
            </p>
)}
</div>


 {/*email form field*/}
<div className = "password-label">
<label>
Password*
</label> 
</div>

<div className = "field">
<Field
type = "text"
name = "password"

/>


{touched.password && errors.password && (
    <p className = "errors">
            {errors.password}
            </p>
)}
</div>


 {/*pass form field*/}

<div className = "passConfirm-label">
<label>
Password Confirm*
</label>
</div>

<div className = "passConfirm-field">
<Field
type = "text"
name = "passwordconfirm"
/>
</div>

{touched.passwordconfirm && errors.passwordconfirm && (
    <p className = "errors">
            {errors.passwordconfirm}
            </p>
)}



  {/*pass confirm form field*/}



<button type ="submit">

 <span className = "button-text">
Sign Up!
</span>

</button>
{/*submit button form field*/}


</Form>


);
};

const FormikForm = withFormik ({
mapPropsToValues(props){  
return { 
    username: props.username || "",
    email: props.email || "",
    password: props.password || "",
    passwordconfirm: props.passwordconfirm || ""
};

}, //pass props to new users?

validationSchema: Yup.object().shape({
username:Yup.string().required("username required!"),
email:Yup.string().required("valid email required!"),
password:Yup.string().required("password required!"),
passwordconfirm:Yup.string().required("please confirm passowrd")
}),

//validation for inputs



handleSubmit(
values, {setStatus, resetForm}
) {
console.log("submitted" ,values); //console log values inputted on submit. 'post' console log shows results came bck
axios
.post ("https://reqres.in/api/auth/register", values)

.then (res => {
console.log("worked", res);
setStatus(res.data);

resetForm();
})

.catch(error =>
console.log(error.response)
);
}}) (RegistrationForm);


//submit to axios placeholder for data inputs
//console log response that comes back WITH data entered(if worked)

export default FormikForm;
