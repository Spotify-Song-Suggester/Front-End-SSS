//full view of song short list list here
//'view less' routes back to dash
//clicking on song cards routes to song details
import React from 'react';
import FavSongList from './FavSongList';
import {Link, Route, useRouteMatch, useParams} from 'react-router-dom';
import styled from 'styled-components';
import { maxContentWidth, mainText } from '../styles';

const StyledPlaylistPage = styled.div`
//position: relative;
display:flex;
flex-wrap:wrap;
flex-direction:row;
width:100%;
border:2px solid orange;
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