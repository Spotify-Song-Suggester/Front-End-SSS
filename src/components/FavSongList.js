//full list of songs here
//import song items
//shown on click of "viewl all" from Song Short List

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SongItems from './SongItems';
// import axiosWithAuth from '../utils/AxiosWithAuth';
import styled from 'styled-components';
import {Link, Route} from 'react-router-dom';
import {Styledtop, StyledViews, StyledTopHolder,} from '../styles';

const StyledFavContainer = styled.div `
border: 2px solid red;
box-sizing:border-box;
width:100%;
background: #0E0B20;
display:flex;
flex-wrap:wrap;
`


const StyledBoxes = styled.div`
border: 3px solid green;
border-radius:4px;

left: 6.76%;
right: 53.24%;
top: 16.77%;
bottom: 69.64%;
box-sizing:border-box;

width: 165.6px;
height: 176.64px;

background: url(.jpg), #311E1C;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);`




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
    // const [favSongs, setFavSongs] = useState([]);
    // useEffect (() => {
    //     axiosWithAuth()
    //     .get(`/api/songs/:id/favorites`)
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
           Featured Playlist</Styledtop>
         <Link to={`/`}><StyledViews>View Less</StyledViews>
            </Link>

            <Route path = {`/`}>

</Route>
</StyledTopHolder>
         {DummyData.map((songs, index) => {
             return (
                 <div className = "box-holder">
                <StyledBoxes>
            
                 {/* key = {index } */}
                name: { songs.artist }
                 track: { songs.track }
                  
                   </StyledBoxes>
                   </div>
             );
         })} 
        </StyledFavContainer>
    );
        }