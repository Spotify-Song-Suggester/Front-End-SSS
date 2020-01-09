//full list of songs here
//import song items
//shown on click of "viewl all" from Song Short List

import React from 'react';
import SongItems from './SongItems';
import styled from 'styled-components';
import {Link, Route} from 'react-router-dom';
import {Styledtop, StyledViews, StyledTopHolder, offWhite, popstarPurple} from '../styles';
import albumCover from '../Images/album-cover.jpg';



const StyledFavContainer = styled.div `
border: 2px solid red;
box-sizing:border-box;
width:100%;
background: #0E0B20;
display:flex;
flex-wrap:wrap;
flex-direction:space-between
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
//pass props for all songs
const FavSongList = props =>{
    console.log("props", props);
  
    
    return (
        <StyledFavContainer>
            <StyledTopHolder>
           <Styledtop>
          All Featured Playlist</Styledtop>
         <Link to={`/`}><StyledViews>View Less</StyledViews>
            </Link>

            <Route path = {`/`}>

</Route>
</StyledTopHolder>
         
                 <div className = "box-holder">
                <StyledBoxes>
            <StyledBoxContent>
                 {/* key = {index } */}
                 
                 
                 
                artist=
                    { props.artist }
                track= { props.track }
                              
                         </StyledBoxContent>   
                   </StyledBoxes>
                   
                   </div>
        </StyledFavContainer>
    );
    }

    export default FavSongList;