import React from 'react';
import { Link, Route } from 'react-router-dom';

const SignUpWelcome = props => {

    return (
        <div className = "welcome">
            <h1>Welcome</h1>
            <div className="welcome-msg">
                <Route exact path="/register">
                    <p>Hello, please continue through our sign up process to have your account created.</p>
                </Route>
                <Route exact path="/login">
                    <p>Hello, please log in.</p>
                </Route>
            </div>
            <div className = "sign-in">
                <Link to='/login'>Sign In</Link>{/*link to sign in component form*/} 
                <Link to='/register'>Sign Up</Link>{/*link to sign up component form*/}
            </div>
        </div>
    );
};

export default SignUpWelcome;