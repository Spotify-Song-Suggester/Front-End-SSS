import React from 'react';

const SongCard = (props) => {
    return (
        <div className='song-card'>
            <h3>{props.song.track}</h3>
            <h4>{props.song.artist}</h4>
            <p>duration ms:{props.song.duration_ms}</p>
            <p>dancability:{props.song.danceability}</p>
            <p>energy:{props.song.energy}</p>
            <p>key:{props.song.key}</p>
            <p>loudness:{props.song.loudness}</p>
            <p>mode:{props.song.mode}</p>
            <p>speechiness:{props.song.speechiness}</p>
            <p>acousticness:{props.song.acousticness}</p>
            <p>instrumentalness:{props.song.instrumentalness}</p>
            <p>liveness:{props.song.liveness}</p>
            <p>valence:{props.song.valence}</p>
            <p>tempo:{props.song.tempo}</p>
            <p>time signature:{props.song.time_signature}</p>
        </div>
    )
};

export default SongCard;