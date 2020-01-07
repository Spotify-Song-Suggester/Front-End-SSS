//song items to display here
//import to song short list
import React from 'react';
import styled from 'styled-components';

function SongItems(props){

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
   console.log("props returned", props);
   return (
    <div>
        Fav Song List
     {DummyData.map((songs, index) => {
         return (
             <div>
             key={index}
             name={songs.artist}
             track={songs.track}
             valence ={songs.valence}
            danceability={songs.danceability},
            acousticness ={songs.acounsticness}
            speechiness={songs.speechiness}
            tempo={songs.tempo}
            energy ={songs.energy}
            duration={songs.duration_ms}
            loudness={songs.loudness}
            instrumentalness={songs.instrumentalness}
            liveness={songs.liveness}
            key ={songs.key}
            mode={songs.mode}
            time_signature={songs.time_signature}
             </div>
         );
     })} 
    </div>
);
}

export default SongItems;