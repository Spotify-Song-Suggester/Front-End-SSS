import React from 'react';
import RegistrationForm from '../RegistrationForm';

const SignUpWelcome = props => {
    return (
    <div className = "welcome">
        <h1>Welcome</h1>
     <div className = "intro">
     <p>Hello, please continue through our sign up process to have your account ceated.</p>
     </div>
     
     <div className = "sign-in">
      <p>Sign In</p>{/*link to sign in component form*/} <p>Sign Up</p>{/*link to sign up component form*/}

     </div>
   <RegistrationForm/>
    </div>
    );
    };
export default SignUpWelcome;