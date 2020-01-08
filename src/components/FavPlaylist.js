//full view of song short list list here
//'view less' routes back to dash
//clicking on song cards routes to song details
import React from 'react';
import FavSongList from './FavSongList';
import {Link, Route, useRouteMatch, useParams} from 'react-router-dom';
import styled from 'styled-components';
import {Styledtop, StyledViews} from '../styles';




const FavPlaylist = props => {
    return (
        <Styledtop>
        Featured Playlist
         <Link to={`/`}><StyledViews>View Less</StyledViews>
            </Link>
            

    <FavSongList/>
</Styledtop>
)
    }
    export default FavPlaylist;