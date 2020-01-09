import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import axiosWithAuth from '../utils/AxiosWithAuth';
import styled from 'styled-components';
import {Link, Route} from 'react-router-dom';
import {Styledtop, StyledViews, StyledTopHolder, offWhite, popstarPurple} from '../styles';
import albumCover from '../Images/album-cover.jpg';
import SongItems from './SongItems';

const StyledFavContainer = styled.div `
margin:20px;
box-sizing:border-box;
width:90%;
background: #0E0B20;
display:flex;
flex-wrap:wrap;
`
const StyledBoxes = styled.div`

border-radius:4px;
justify-content:space-evenly;
margin:15px;
left: 6.76%;
right: 53.24%;
top: 16.77%;
bottom: 69.64%;
box-sizing:border-box;
width: 165.6px;
height: 176.64px;
background: url(${albumCover});
    background-repeat: no-repeat; #311E1C

`
const StyledBoxContent = styled.div`

box-sizing:border-box;

`

const ArtistText = styled.h2`
color:black;
`
const TrackText = styled.h3`
color:${popstarPurple};
`

const TrackTempo = styled.p`

color: ${offWhite}`

const RecSongItems = props =>{
    console.log("props", props);
  
    
    return (
        <StyledFavContainer>
            <StyledTopHolder>
           <Styledtop>
          All Recommended Playlist</Styledtop>
         <Link to={`/`}><StyledViews>View Less</StyledViews>
            </Link>

            <Route path = {`/`}>

</Route>
</StyledTopHolder>
         
                 <div className = "box-holder">
                <StyledBoxes>
            <StyledBoxContent>
                 {/* key = {index } */}
            
                 {/* <SongItems/> */}  {/*commented out for styling*/}
                <h3>artist:
                    { props.artist }</h3>
                <h4>track:{ props.track }</h4>
                              
                         </StyledBoxContent>   
                   </StyledBoxes>
                   
                   </div>
        </StyledFavContainer>
    );
    }

    export default RecSongItems;