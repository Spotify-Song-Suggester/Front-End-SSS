import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import albumCover from '../Images/album-cover.jpg';
import styled from 'styled-components';
import { mainText } from '../styles';

const StyledSongDetails = styled.div`
    .album-cover {
        position: relative;
        margin-top: 1.5rem;
        border-top: 1px solid ${mainText};
        border-bottom: 1px solid ${mainText};
        background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('${albumCover}');
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 35vh;

        display: grid;
        place-items: center;
        
        img {
            border: 3px solid ${mainText};
            box-shadow: 
                10px 15px 4px rgba(0, 0, 0, 0.25),
                0px 4px 4px rgba(0, 0, 0, 0.25),
                inset 10px 10px 4px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
        }

        .song-actions {
            font-size: 3rem;
            position: absolute;
            right: 2rem;
            top: 1rem;
            cursor: pointer;
        }
    }
`;

const SongDetails = props => {

    const { songs } = props;

    const { id } = useParams();

    const [song] = useState(songs.find(s => s.id === parseInt(id)) || null);

    return (
        <StyledSongDetails>
            {song ? (
            <div>
                <div className="album-cover">
                    <img src={albumCover} alt={`${song.album} album cover`} />
                    <div className="song-actions">
                        ...
                    </div>
                </div>
            </div>)
            : <p>Song not found.</p>}
            
        </StyledSongDetails>
    );
};

const mapStateToProps = state => {
    return {
        songs: state.songs
    };
};

export default connect(mapStateToProps)(SongDetails);
