import React from 'react';
import styled from 'styled-components';
import { mainText, offWhite } from '../styles';
import albumCover from '../Images/album-cover.jpg';
import { useHistory } from 'react-router-dom';

const StyledSearchFeedItem = styled.div`
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
        font-size: 2rem;
        cursor: pointer;
        color: ${mainText};
        align-self: center;
        margin-left: auto;
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

    .song-cover,
    .song-info {
        cursor: pointer;
    }
`;


const SearchFeedItem = props => {
    const { song, onActionsPress } = props;

    const history = useHistory();

    const goToSong = (song) => {
        history.push(`/song/${song.id}`);
    };

    return (
        <StyledSearchFeedItem>
            <div className="song-cover" onClick={() => goToSong(song)}>
                <img src={albumCover} alt="album cover" />
            </div>
            <div className="song-info" onClick={() => goToSong(song)}>
                <ul>
                    <li><strong>{song.track}</strong></li>
                    <li>{song.artist}</li>
                    <li>Length: {song.time_signature}</li>
                </ul>
            </div>
            <div className="song-actions" onClick={() => onActionsPress(song)}>
                ...
            </div>
        </StyledSearchFeedItem> 
    );
}

export default SearchFeedItem;