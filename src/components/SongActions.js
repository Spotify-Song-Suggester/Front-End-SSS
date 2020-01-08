import React from 'react';
import styled from 'styled-components';
import { mainText, coolBlue, formLabelFont } from '../styles';

const StyledSongActions = styled.div`
    display: flex;
    justify-content: center;
    font-family: ${formLabelFont};

    .actions {
        background-color: ${coolBlue};
        position: fixed;
        bottom: 0;
        width: 314px;
        border: 3px solid ${mainText}
        border-bottom: 0;
        border-top-left-radius: 2rem;
        border-top-right-radius: 2rem;
    }

    .song-name {
        padding: 2.5rem 0 1rem 2.5rem;
    }

    ul {
        list-style-type: none;
        
        font-size: 1.2rem;
        border-top: 1px solid ${mainText};
        padding: 2rem 0 0;

        li {
            border-bottom: 1px solid #93A8B3;
            padding-bottom: 2rem;
            margin-bottom: 2rem;
        }

        button {
            padding: 0 2.5rem;
            color: ${mainText}
            border: none;
            background-color: inherit;
            cursor: pointer;
            display: inline-block;
        }
    }
`;

const SongActions = props => {

    const { song } = props;
    return (
        <StyledSongActions>
            <div className="actions">
                <div className="song-name">
                    {song.track}
                </div>
                <ul>
                    <li><button>View Song</button></li>
                    <li><button>Like Song</button></li>
                </ul>
            </div>
        </StyledSongActions>
    );

};

export default SongActions;