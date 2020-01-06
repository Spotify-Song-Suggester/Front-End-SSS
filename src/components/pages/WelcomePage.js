import React from 'react';
import FormikForm from '../../components/RegistrationForm';

const WelcomePage = props => {
    return (
    <div className = "welcome">
        <h1>Welcome</h1>
     <div className = "intro">
     <p>Hello, please continue through our sign up process to have your account ceated.</p>
     </div>
     
     <div className = "sign-in">
      <span>Sign In</span> <span>Sign Up</span>
     </div>
    
    <FormikForm /> 
    </div>
    )
};

export default WelcomePage;