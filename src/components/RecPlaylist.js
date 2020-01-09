//view of recomennded song short list list here
//'view less' routes back to dash
import React from 'react';
import RecSongItems from './RecSongItems';
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



const RecPlaylist = props => {
    return (

        <StyledPlaylistPage>

    <RecSongItems/>
    </StyledPlaylistPage>
)
    }
    export default RecPlaylist;