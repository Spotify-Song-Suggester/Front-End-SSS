//full list of songs here
//import song items
//shown on click of "viewl all" from Song Short List

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SongItems from './SongItems';
import styled from 'styled-components';

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
    // useEffect (() => {
    //     axios
    //     .get(`https://spotify-song-suggester-backend.herokuapp.com/api/songs/:id/1`)
    //     .then (response =>{
    //         console.log(response.output);
    //         setFavSongs(response.Output);
    //     })
    //     .catch (error =>{
    //         console.log("error", error);
    //     });
    // },[]);

    return (
        <div>
            Fav Song List
         {DummyData.map((songs, index) => {
             return (
                 <div>
                 key = {index }
                name: { songs.artist },
                 track: { songs.track }
                 </div>
             );
         })} 
        </div>
    );
        }
