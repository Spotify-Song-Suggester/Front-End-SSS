import React, {useState, useEffect} from "react";
// import {Link} from "react-router-dom";
import {withFormik, Form, Field} from "formik";
import axios from "axios";
import * as Yup from "yup";

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
<div className = "user-form">

<Form>

<label>
Username*
<Field
type="text"
name="username"
placeholder = "user name"
/>

{touched.username && errors.username && (
    <p className = "errors">
            {errors.username}
            </p>
)}

{/*add errors touch/error*/}

</label> 
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

<label>
Email*
<Field
type = "email"
name = "email"
placeholder = "email"
/>

{touched.email && errors.email && (
   <p>
    {errors.email}
            </p>
)}

</label>  {/*email form field*/}

<label>
Password*
<Field
type = "text"
name = "password"
placeholder = "password"
/>

{touched.password && errors.password && (
    <p className = "errors">
            {errors.password}
            </p>
)}



</label>  {/*pass form field*/}


<label>
Password Confirm*
<Field
type = "text"
name = "passwordconfirm"
placeholder = "password confirm"
/>

{touched.passwordconfirm && errors.passwordconfirm && (
    <p className = "errors">
            {errors.passwordconfirm}
            </p>
)}



</label>  {/*pass confirm form field*/}



<button type ="sbumit"> 
Sign Up!
</button>
{/*submit button form field*/}


</Form>

{/* {users.map(user => {
return (
<ul key= {user.id}>
   <li> First Name: {user.firstname}</li>
   <li> Last Name: {user.lastname}</li>
   <li> Email: {user.email}</li>
   <li> Password: {user.password}</li>
<li>Terms: {String(user.terms)}</li>

</ul>
);
})}  */}
</div>
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