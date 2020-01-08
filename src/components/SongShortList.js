//list of songs data to display for each song
//import Song items here
import React from 'react'
import { connect } from 'react-redux';
import SongItems from '../components/SongItems';
import {Link, Switch, Route, useRouteMatch, NavLink, useParams} from 'react-router-dom';
import styled from 'styled-components';
import {Styledtop, StyledViews} from '../styles';




const StyledShortList = styled.div`
border:2px solid green;
display:flex;
align-self: flex-start;
flex-wrap:wrap;
left: 70.89%;
right: 0%;
top: 0%;
bottom: 28.13%;
box-sizing:border-box;
width: 165.6px;
height: 176.64px

` //boxes same size for now, enlarge on hover/click?

const SongShortList = props => {
    const { path, url } = useRouteMatch();
    return(

       
    
            <div>
           <h3> SONG SHORT LIST</h3>
           <Styledtop>
            Featured Playlists  </Styledtop>
            <NavLink to={`/allfavorites`}>  <StyledViews> View All   </StyledViews>
            </NavLink>
          
         
<Route exact path = {`/allfavorites`}>

</Route>

            <StyledShortList>
       
            <SongItems/>

            </StyledShortList>
            </div>
            
    )
}
const mapStateToProps = state => {
    return {
        userID: state.userID
    }
}
export default connect(mapStateToProps, {})(SongShortList);