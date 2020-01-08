//list of songs data to display for each song
//import Song items here
import React from 'react'
import { connect } from 'react-redux';
import SongItems from '../components/SongItems';
import {Link, Switch, Route} from 'react-router-dom';
import styled from 'styled-components';
import {Styledtop, StyledViews} from '../styles';

const SongShortList = props => {
  
    return(

        <div>
            <div>
           <h3> SONG SHORT LIST</h3>
            <span>Featured Playlists</span> 
             <Link to={`/favPlaylist`}> <StyledViews>View All</StyledViews>
            </Link>
            <SongItems/>
            </div>
            
        </div>
    )
}
const mapStateToProps = state => {
    return {
        userID: state.userID
    }
}
export default connect(mapStateToProps, {})(SongShortList);