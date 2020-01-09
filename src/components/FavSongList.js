//full list of songs here
//import song items
//shown on click of "viewl all" from Song Short List

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SongItems from './SongItems';
// import axiosWithAuth from '../utils/AxiosWithAuth';
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

export default function FavSongsList(props){
    const DummyData = ([
        {
            artist           : 'Adele',
            track            : 'Chasing Pavements',
            valence          : '0.87',
            danceability     : '0.78',
            acousticness     : '0.87',
            speechiness      : '0.87',
            tempo            : '0.87',
            energy           : '0.87',
            duration_ms      : '0.87',
            loudness         : '0.87',
            instrumentalness : '0.87',
            liveness         : '0.87',
            key              : '9',
            mode             : '1',
            time_signature   : '4',
        },
        {
            artist           : 'CHIKA',
            track            : 'High Rises',
            valence          : '0.87',
            danceability     : '0.78',
            acousticness     : '0.87',
            speechiness      : '0.87',
            tempo            : '0.87',
            energy           : '0.87',
            duration_ms      : '0.87',
            loudness         : '0.87',
            instrumentalness : '0.87',
            liveness         : '0.87',
            key              : '9',
            mode             : '1',
            time_signature   : '4',
        },
        {
            artist           : 'Chance the Rapper',
            track            : 'Pusha Man',
            valence          : '0.87',
            danceability     : '0.78',
            acousticness     : '0.87',
            speechiness      : '0.87',
            tempo            : '0.87',
            energy           : '0.87',
            duration_ms      : '0.87',
            loudness         : '0.87',
            instrumentalness : '0.87',
            liveness         : '0.87',
            key              : '9',
            mode             : '1',
            time_signature   : '4',
        },
    ])
    const [favSongs, setFavSongs] = useState([]);
    //const api = 'https://spotify-song-suggester-backend.herokuapp.com';
    // useEffect (() => {
    //     axiosWithAuth()
    //     .get(`${/api/songs/:id/favorites}`)
    //     .then (response =>{
    //       
    //         console.log(response);
    //         setFavSongs(response.data);
    //     })
    //     .catch (error =>{
    //         console.log("error", error);
    //     });
    // },[id]);
    

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
         {DummyData.map((songs, index) => {
             return (
                 <div className = "box-holder">
                <StyledBoxes>
            <StyledBoxContent>
                 {/* key = {index } */}
                <ArtistText>{ songs.artist }</ArtistText>
                <TrackText>{ songs.track }</TrackText>
                         <TrackTempo>Tempo: {songs.tempo }</TrackTempo>         
                         
                         </StyledBoxContent>   
                   </StyledBoxes>
                   </div>
             );
         })} 
        </StyledFavContainer>
    );
        }