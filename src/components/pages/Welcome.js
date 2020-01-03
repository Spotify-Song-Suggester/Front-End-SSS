import React from 'react';
import LoginForm from './LoginForm';

// *** NOTE ***
// This component should eventually have both the sign in and sign up components

const Welcome = props => {
    <div>
        <h2>Welcome</h2>
        <p>Hello, please log in.</p>
        <LoginForm />
    </div>
};

export default Welcome;