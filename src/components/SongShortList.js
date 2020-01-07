//list of songs data to display for each song
//import Song items here

import React from 'react'
import SongItems from '../components/SongItems';
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