//full view of song short list list here
//'view less' routes back to dash
//clicking on song cards routes to song details
import React from 'react';
import FavSongList from './FavSongList';
import {Link, Route, useRouteMatch, useParams} from 'react-router-dom';
import styled from 'styled-components';


const StyledPlaylistPage = styled.div`
position: relative;
width: 414px;
height: 1300px;

background: #0E0B20;
`



const FavPlaylist = props => {
    return (

        <StyledPlaylistPage>

    <FavSongList/>
    </StyledPlaylistPage>
)
    }
    export default FavPlaylist;