import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import albumCover from '../Images/album-cover.jpg';
import { coolBlue, mainText } from '../styles';

const StyledDashboardSongItem = styled.div`
    position: relative;
    z-index: 1;
    border-radius: 1.2rem;
    width: 110px;
    height: 110px;
    background: url(${albumCover});
    background-repeat: no-repeat; #311E1C;
    margin-bottom: 2rem;
    
    display: grid;
    place-items: center;
    text-align: center;

    &:hover{
        transform:scale(1.15);
    }

    .track {
        font-weight: bold;
        background-color: ${coolBlue};
        width: 100%;
        padding: 0.8rem;
        opacity: 0.85;
    }
`;

const DeleteButton = styled.span`
    position: absolute;
    background-color: ${mainText};
    border-radius: 100%;
    text-align: center;
    color: ${coolBlue};
    width: 20px;
    height: 20px;
    top: -10px;
    right: -10px;
    opacity: 1;
    z-index: 2;
`;

const DashboardSongItem = props => {

    const { song, deleteButton, onDelete } = props;

    const deleteSong = e => {
        e.preventDefault();
        e.stopPropagation();
        onDelete(song.id);
    };

    return (
        <Link to={`/song/${song.id}`} key={song.id} style={{position: 'relative'}}>
            {deleteButton && <DeleteButton className="delete" onClick={deleteSong}>X</DeleteButton>}
            <StyledDashboardSongItem>
                <span className="track">{song.track}</span>
            </StyledDashboardSongItem>
        </Link>
    );
}

export default DashboardSongItem;
