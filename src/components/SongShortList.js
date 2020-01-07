//list of songs data to display for each song
//import Song items here

import React, {useState, useEffect} from 'react'
import SongItems from '../components/SongItems';


//use effect here w dependency array {targeting speceific song tags in axios api call}
const SongShortList = props =>{

    return(
        <div>
            <div>
            <span>Featured Playlists</span> <span>View All
            </span>
            </div>
            <div>
            <SongItems/>
            </div>
            {/* some songs to display here with props for each song */}
        </div>
    )
}

export default SongShortList;