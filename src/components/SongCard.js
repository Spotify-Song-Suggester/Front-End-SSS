import React from 'react';
import styled from 'styled-components';
import { mainText, offWhite } from '../styles';
import albumCover from '../Images/album-cover.jpg';

const StyledSongCard = styled.div`
    display: flex;
    padding: 1rem 0;
    border-bottom: 1px solid #93A8B3;

    .song-cover {
        width: 100px;
        img {
            max-width: 100%;
            border-radius: 1.2rem;
        }
    }
    
    .song-actions {
        cursor: pointer;
        color: ${mainText};
        align-self: center;
        justify-self: flex-end;
    }

    ul {
        padding-left: 2rem;
        display: flex;
        flex-direction: column;
        list-style-type: none;
        color: ${offWhite};
        
        li strong {
            color: ${mainText};
            padding-bottom: 3rem;
        }
    }
`;

const SongCard = (props) => {
    return (
        <StyledSongCard className='song-card'>
                      <div className="song-cover">
                <img src={albumCover} alt="album cover" />
            </div>
            <div className="song-info">
                <ul>
                    <li><strong>{props.song.track}</strong></li>
                    <li>{props.song.artist}</li>
                    <li>Length: {props.song.time_signature}</li>
                </ul>
            </div>
            <div className="song-actions">
                ...
            </div>
            {/* <h3>{props.song.track}</h3>
            <h4>{props.song.artist}</h4>
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
            <p>duration ms:{props.song.duration_ms}</p> */}
        </StyledSongCard>
    )
};

export default SongCard;