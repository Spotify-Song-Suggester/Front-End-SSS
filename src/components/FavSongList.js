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
margin:20px;
box-sizing:border-box;
width:90%;
background: #0E0B20;
display:flex;
flex-wrap:wrap;
`

const StyledBoxContainer = styled.div `

box-sizing:border-box;
width:100%;
background: #0E0B20;
display:flex;
flex-wrap:wrap;

`

const StyledBoxes = styled.div`

border-radius:4px;
justify-content:space-between;
margin:2%;
box-sizing:border-box;
width: 160px;
height: 160px;
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
          All Featured Playlists</Styledtop>
         <Link to={`/`}><StyledViews>View Less</StyledViews>
            </Link>

            <Route path = {`/`}>

</Route>
</StyledTopHolder>
         
                 <StyledBoxContainer>
                <StyledBoxes>
            <StyledBoxContent>
                 {/* key = {index } */}
                
                <ArtistText>
                   Artist: { props.artist }</ArtistText>
               <TrackText>Track: { props.track }</TrackText>
                              
                         </StyledBoxContent>   
                   </StyledBoxes>
                   
                   </StyledBoxContainer>
        </StyledFavContainer>
    );
    }

    export default FavSongList;