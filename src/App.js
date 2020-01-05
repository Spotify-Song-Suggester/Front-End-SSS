import React from 'react';
import './App.css';
import FormikForm from './components/RegistrationForm';
// import styled from 'styled-components';
import {Logo,Global, Welcome, Intro, Signup, Signin} from './Styles/AppStyling';
function App() {
  return (
    <Global>
      <Logo>
        Symphinity
      </Logo>
      <div className = "welcome">
       <Welcome>Welcome</Welcome>
       <Intro>Hello, please continue through our sign up process to have your account ceated.</Intro>
       </div>
       <div className = "sign-up">
        <Signin>Sign In</Signin> <Signup>Sign Up</Signup>
       </div>
      
      <FormikForm /> 
    
    </Global>
  );
}

export default App;
