import React from 'react';
import FormikLoginForm from '../LoginForm';
import RegistrationForm from '../RegistrationForm';
import SignUpWelcome from './SignUpWelcome';
import styled from 'styled-components';
import welcomeBg from '../../Images/welcome-bg.png';
import logo from '../../Images/Symphinity.png';
import { MainContent } from '../../styles';
import { Route } from 'react-router-dom';
import Main from '../pages/Main';
import FavPlaylist from '../FavPlaylist';


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

`;

const Welcome = props => {
    return (
        <StyledWelcome>
            <MainContent>
                <div className="logo">
                    <img src={logo} alt="Symphinity" />
                </div>

                <SignUpWelcome />

                <Route exact path="/login">
<<<<<<< HEAD
                    {/* <LoginForm /> */}
                    <FavPlaylist/>
=======
                    <FormikLoginForm {...props} />
>>>>>>> f3f8951fb9fd2eea582e0e25d55dbe76a5966b4a
                </Route>
                <Route exact path="/register">
                    <RegistrationForm {...props} />
                </Route>
            </MainContent>
        </StyledWelcome>
    );
};

export default Welcome;