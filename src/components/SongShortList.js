//list of songs data to display for each song
//import Song items here
//filtered list of songs here to limit amount shown

import React, {useState, useEffect} from 'react'
import SongItems from '../components/SongItems';


//use effect here w dependency array {targeting speceific song tags in axios api call}

//dummy data for intial functionality testing from favorite.js(backend)

//axios endpoint /api/songs/:id/favorites
const SongShortList = props =>{

    const [items, setItems] = useState([]);
    return(
        
        <div>
            <div>
            <span>Featured Playlists</span> <span>View All
            </span>
         
            <SongItems/>
            </div>
            {/* some songs to display here with props for each song */}
        </div>
    )
}

export default SongShortList;