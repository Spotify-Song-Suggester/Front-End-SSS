//list of songs data to display for each song
//import Song items here
import React from 'react'
import { connect } from 'react-redux';
import SongItems from '../components/SongItems';
import {Link} from 'react-router-dom';
const SongShortList = props =>{

 
    return(
        
        <div>
            <div>
            <span>Featured Playlists</span> <Link to={`/favPlaylist/`}>View All
            </Link>
         
            <SongItems/>
            </div>
            {/* some songs to display here with props for each song */}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userID: state.userID
    }
}

export default connect(mapStateToProps, {})(SongShortList);