import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import SongActions from './SongActions';
import SongVisualization from './SongVisualization';
import albumCover from '../Images/album-cover.jpg';
import styled from 'styled-components';
import { mainText, formLabelFont } from '../styles';
import sampleVisualization from '../Images/sample-visualization.png';

const StyledSongDetails = styled.div`

    .go-back {
        display: block;
        margin-top: 1rem;
    }

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

    .song-info {
        border-bottom: 1px solid ${mainText};
        margin-bottom: 1.5rem;
        p {
            font-size: 1.8rem; 
            font-family: ${formLabelFont}
        }
        .underlined {
            text-decoration: underline;
        }
    }

    .song-visualization {
        img {
            max-width: 100%;
            border: 6px solid ${mainText};
            border-radius: 2rem;
        }
    }
`;

const SongDetails = props => {

    const { songs } = props;

    const { id } = useParams();

    const history = useHistory();

    const [song] = useState(songs && songs.find(s => s.id === parseInt(id)) || null);

    const [songActionsOpen, setSongActionsOpen] = useState(false);

    return (
        <StyledSongDetails>
            {song ? (
            <div>
                <a className="go-back" onClick={() => history.goBack()}>← Back</a>
                <div className="album-cover">
                    <img src={albumCover} alt={`${song.album} album cover`} />
                    <div className="song-actions" onClick={() => setSongActionsOpen(!songActionsOpen)}>
                        ...
                    </div>
                </div>
                <div className="song-info">
                    <p className="underlined">
                        Artist: {song.artist}
                    </p>
                    <p className="underlined">
                        Album: {song.album || 'N/A'}
                    </p>
                    <p>
                        Track: {song.track}
                    </p>
                </div>
                <div className="song-visualization">
                    {/* TEST VISUALIZATION */}
                    {/* <img src={sampleVisualization} alt="Song visualization" /> */}
                    <SongVisualization songId={song.id} />
                </div>
                {songActionsOpen && <SongActions song={song} />}
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
