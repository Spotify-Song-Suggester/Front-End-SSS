import React from 'react';
import LoginForm from '../LoginForm';
import styled from 'styled-components';
import welcomeBg from '../../Images/welcome-bg.png';
import logo from '../../Images/Symphinity.png';
import { MainContent } from '../../styles';


// *** NOTE ***
// This component should eventually have both the sign in and sign up components

const StyledWelcome = styled.div`
    background: url(${welcomeBg});
    background-repeat: no-repeat;
    border: 1px solid #000000;
    height: 100vh;

    .logo {
        margin-top: 7.5rem;
        margin-bottom: 6rem;
        text-align: center;
    }

    .welcome-msg {
        margin-bottom: 6rem;
    }

`;

const Welcome = props => {
    return (
        <StyledWelcome>
            <MainContent>
                <div className="logo">
                    <img src={logo} alt="Symphinity" />
                </div>
                <div className="welcome-msg">
                    <h1>Welcome</h1>
                    <p>Hello, please log in.</p>
                </div>
                <LoginForm />
            </MainContent>
        </StyledWelcome>
    );
};

export default Welcome;