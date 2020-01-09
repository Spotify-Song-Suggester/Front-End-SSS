//parent component for dashboard components held here. Will render Main.js to App.js
import React, { useState } from 'react';
import NavTitle from '../NavTitle';
import UserAvatar from '../UserAvatar';
import SongShortList from '../SongShortList';
import RecSongsList from '../RecSongsList';
import { MainContent, mainText } from '../../styles';
import logo from '../../Images/Symphinity.png';
import styled from 'styled-components';
import { Route, Switch, useHistory } from 'react-router-dom';
import SearchFeed from '../SearchFeed';
import FilterMenu from '../FilterMenu';
import SongDetails from '../SongDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import UpdateForm from '../UpdateForm';



const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
margin:5px;

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
    border-right: none;
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
    padding-left: 2rem;
    width: 100%;
    color: ${mainText}
`;

const StyledSearch = styled.div`
    display: flex
`
const FilterButton = styled.div`
    display: flex
    justify-content: flex-end;
    align-items: center;
    height: 4rem;
    background-color: rgba(0,0,0,0);
    border: 3px solid ${mainText};
    border-left: none;
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
    padding-right: 2rem;
    width: 10%;
    cursor: pointer;
    color: ${mainText}
`

const Main = (props) => {
    console.log('main props', props);
    const [searchTerm, setSearchTerm] = useState('');
    const [ showFilter, setShowFilter ] = useState(false);


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
            <Switch>
                <Route exact path='/edit'>
                    <UpdateForm history={history}/>
                </Route>
            </Switch>
                <StyledSearch>
                    <StyledInput
                        type="text"
                        placeholder="Search"
                        defaultValue={searchTerm}
                        onKeyUp={performSearchOnEnter}
                    />
                    <FilterButton onClick={()=>setShowFilter(!showFilter)}><FontAwesomeIcon icon={faFilter}/></FilterButton>
                </StyledSearch>
            <Switch>
                <Route path="/search">
                     {showFilter && <FilterMenu/> }  
                    <SearchFeed term={searchTerm} />
                </Route>
                <Route path="/song/:id">
                    <SongDetails />
                </Route>
            </Switch>
            <Switch>
                <Route exact path="/">
                    {/* <SongItems/> */}
                    <SongShortList/>
                    <RecSongsList/>
                </Route>
            </Switch>
        </MainContent>
      
    );
};


export default Main;