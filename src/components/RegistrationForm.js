import React, {useState, useEffect} from "react";
// import {Link} from "react-router-dom";
import {withFormik, Form, Field} from "formik";
import axios from "axios";
import * as Yup from "yup";
import {UsernameLabel, EmailLabel, PasswordConfirmLabel, PasswordLabel, UsernameField, EmailField, SignupButton,SignUpWords} from "../Styles/FormStyling";

//use Formik form
//first name, last name, email, pass,
//set state for initial inputs
//use effect for data changes
//set what to do on status change. if does-render function. spread array values to add on to new. dependency array is status b/c thats what affect is watching for-status change(data change) 
const RegistrationForm = ({
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

<UsernameLabel>
<label>
Username*
</label> 
</UsernameLabel>
<UsernameField>
<Field
type="text"
name="username"
/>

{touched.username && errors.username && (
    <p className = "errors">
            {errors.username}
            </p>
)}
</UsernameField>
{/*add errors touch/error*/}

{/*username form field*/}

{/* <label>
First Name
<Field
type="text"
name="firstname"
placeholder = "first name"
/>

{touched.firstname && errors.firstname && (
    <p className = "errors">
            {errors.firstname}
            </p>
)} */}

{/*add errors touch/error*/}

{/* </label>  */}
{/*first name form field*/}

{/* <label>
Last Name
<Field
type="text"
name="lastname"
placeholder = "last name"
/>

{touched.lastname && errors.lastname && (
    <p className = "errors">
            {errors.lastname}
            </p>
)} */}

{/*add errors touch/error*/}

{/* </label> 
last name form field */}
<EmailLabel>

<label>
Email*

<EmailField>
<Field
type = "email"
name = "email"
/>


{touched.email && errors.email && (
   <p>
    {errors.email}
            </p>
)}
</EmailField>


</label> 
</EmailLabel>

 {/*email form field*/}
<PasswordLabel>
<label>
Password*


<div className = "field">
<Field
type = "text"
name = "password"

/>
</div>

{touched.password && errors.password && (
    <p className = "errors">
            {errors.password}
            </p>
)}

</label> 
</PasswordLabel>

 {/*pass form field*/}

<PasswordConfirmLabel>
<label>
Password Confirm*


<div className = "field">
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


</label>
</PasswordConfirmLabel>
  {/*pass confirm form field*/}



<button type ="submit">
<SignupButton>
    <SignUpWords>
Sign Up!
</SignUpWords>
</SignupButton>
</button>
{/*submit button form field*/}


</Form>

/* {users.map(user => {
return (
<ul key= {user.id}>
   <li> First Name: {user.firstname}</li>
   <li> Last Name: {user.lastname}</li>
   <li> Email: {user.email}</li>
   <li> Password: {user.password}</li>
<li>Terms: {String(user.terms)}</li>

</ul>
);
})}  */
);
};
//map for user data to display on screen after entered.

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
username:Yup.string().required("Username required!"),
email:Yup.string().required("email required!"),
password:Yup.string().required("password required!"),
passwordconfirm:Yup.string().required("password confirmation required!")
}),

//validation for inputs



handleSubmit(
values, {setStatus, resetForm}
) {
console.log("submitted" ,values); //console log values inputted on submit. 'post' console log shows results came bck
axios
.post ("https://reqres.in/api/users/", values)

.then (res => {
console.log("worked", res);
setStatus(res.data);

resetForm();
})

.catch(error =>
console.log("nope", error.response)
);
}}) (RegistrationForm);


//submit to axios placeholder for data inputs
//console log response that comes back WITH data entered(if worked)

export default FormikForm;
