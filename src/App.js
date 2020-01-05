import React from 'react';
import './App.css';
import FormikForm from './components/RegistrationForm';
// import styled from 'styled-components';
// import {Logo,Global, Welcome, Intro, Signup, Signin} from './Styles/AppStyling';
function App() {
  return (
    <div className = "App-container">
      <div className = "logo">
        Symphinity
      </div>
      <div className = "welcome">
       <h1>Welcome</h1>
       <p>Hello, please continue through our sign up process to have your account ceated.</p>
       </div>
       <div className = "sign-up">
        <span>Sign In</span> <span>Sign Up</span>
       </div>
      
      <FormikForm /> 
    
    </div>
  );
}

export default App;
