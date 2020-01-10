import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';
import { mainText, headingFont } from '../../styles';

const StyledSignUpWelcome = styled.div`
    margin-bottom: 6rem;
    
    .sign-in {
        display: flex;
        width: 175px;
        justify-content: space-between;

        a {
            font-family: ${headingFont};
            color: ${mainText};
            font-size: 1.8rem;
        }

        a.active {
            font-size: 2.4rem;
        }
    }
`;

const SignUpWelcome = props => {

    return (
        <StyledSignUpWelcome>
            <h1>Welcome</h1>
            <div className="welcome-msg">
                <Route exact path="/register">
                    <p>Hello, please continue through our sign up process to have your account created.</p>
                </Route>
                <Route exact path="/login">
                    <p>Hello, please log in.</p>
                </Route>
            </div>
            <div className="sign-in">
                <NavLink to='/login'>Sign In</NavLink>
                <NavLink to='/register'>Sign Up</NavLink>
            </div>
        </StyledSignUpWelcome>
    );
};

export default SignUpWelcome;