//parent component for dashboard components held here. Will render Main.js to App.js
import React, { useState } from 'react';
import NavTitle from '../NavTitle';
import UserAvatar from '../UserAvatar';
import Search from '../Search';
import SongShortList from '../SongShortList';
import RecSongList from '../RecSongsList';
import { MainContent, mainText } from '../../styles';
import logo from '../../Images/Symphinity.png';
import styled from 'styled-components';
import { Route, Switch, useHistory } from 'react-router-dom';
import SearchFeed from '../SearchFeed';
import SongItems from '../SongItems';

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
    
    const [searchTerm, setSearchTerm] = useState('');
    const history = useHistory();

    const performSearchOnEnter = e => {
        if(e.key === 'Enter') {
            setSearchTerm(e.target.value);
            // enter key pressed
            history.push('/search');
        }

    }

    return (
        <MainContent>
            <StyledLogo>
                <img src={logo} alt="Symphinity" />
            </StyledLogo>
            <StyledNav>
                <NavTitle title="Dashboard"/>
                <UserAvatar/>
            </StyledNav>

            <StyledInput
                type="text"
                placeholder="Search"
                defaultValue={searchTerm}
                onKeyUp={performSearchOnEnter}
            />

            <Switch>
                <Route path="/search">
                    <SearchFeed term={searchTerm} />
                </Route>
                <Route path="/">
                    <SongItems/>
                </Route>
            </Switch>
            
        </MainContent>
    );
};


export default Main;