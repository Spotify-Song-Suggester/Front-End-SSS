//import RecSongItems here
//will display rec song items component
//pass props
import React from 'react';
import RecSongItems from '../components/SongItems';
const RecSongsList = props =>{
    return(

        <div>
            <div>
            <span>Recommened Playlists</span><span>
                View All
            </span>
            </div>
            
            <div>
            <RecSongItems/>
            </div>
        </div>
    )
}


export default RecSongsList;