import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import albumCover from '../Images/album-cover.jpg';
import { coolBlue } from '../styles';

const StyledDashboardSongItem = styled.div`
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

    span {
        font-weight: bold;
        background-color: ${coolBlue};
        width: 100%;
        padding: 0.8rem;
        opacity: 0.85;
    }
`;

const DashboardSongItem = props => {

    const { song } = props;

    return (
        <Link to={`/song/${song.id}`} key={song.id}>
            <StyledDashboardSongItem>
                <span>{song.track}</span>
            </StyledDashboardSongItem>
        </Link>
    );
}

export default DashboardSongItem;
