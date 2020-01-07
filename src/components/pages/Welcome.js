import React from 'react';
import LoginForm from '../LoginForm';
import styled from 'styled-components';
import welcomeBg from '../../Images/welcome-bg.png';
import logo from '../../Images/Symphinity.png';


// *** NOTE ***
// This component should eventually have both the sign in and sign up components

const StyledWelcome = styled.div`
    background: url(${welcomeBg});
    background-repeat: no-repeat;
    border: 1px solid #000000;
    height: 100vh;

    .logo {
        text-align: center;
    }
`;

const Welcome = props => {
    return (
        <StyledWelcome>
            <div className="logo">
                <img src={logo} alt="Symphinity" />
            </div>
            <h1>Welcome</h1>
            <p>Hello, please log in.</p>
            <LoginForm />
        </StyledWelcome>
    );
};

export default Welcome;