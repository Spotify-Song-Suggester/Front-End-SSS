import React from 'react';
import './App.css';
import FormikForm from './components/RegistrationForm';
function App() {
  return (
    <div className="App">
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
