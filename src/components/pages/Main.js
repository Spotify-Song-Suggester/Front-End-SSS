//parent component for dashboard components held here. Will render Main.js to App.js
import React from 'react';
import {Route} from 'react-router-dom';
import NavTitle from '../NavTitle';
import UserAvatar from '../UserAvatar';
import Search from '../Search';
import SongShortList from '../SongShortList';
import RecSongList from '../RecSongsList';
import { MainContent, mainText } from '../../styles';
import logo from '../../Images/Symphinity.png';
import styled from 'styled-components';
import FavSongList from '../FavSongList';

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

     h2 {
         font-size: 1.8rem;
         margin: 0;
     }

     margin-bottom: 2rem;
`;

const StyledLogo = styled.div`
    margin-top: 4rem;
    text-align: center;
    img {
        width: 110px;
    }
`;

const StyledInput = styled.input`
    align-self: flex-start;
    height: 4rem;
    background-color: rgba(0,0,0,0);
    border: 3px solid ${mainText};
    border-radius: 2rem;
    padding-left: 2rem;
    width: 100%;
    color: ${mainText}
`;

const Main = () => {
    return (
        
                    
               
        <MainContent>
            <StyledLogo>
                <img src={logo} alt="Symphinity" />
            </StyledLogo>
            <StyledNav>
                <NavTitle title="Dashboard" />
                <UserAvatar />
            </StyledNav>
            <StyledInput type="text" placeholder="Search" />
            <FavSongList/>
        </MainContent>
        
    );
};


export default Main;