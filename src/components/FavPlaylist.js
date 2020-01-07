//full view of song short list list here
//'view less' routes back to dash
//clicking on song cards routes to song details
import React from 'react';
import FavSongList from './FavSongList';


const FavPlaylist = props => {
    return (
        <div>
        <span>Featured Playlist</span> <span>View Less</span>
  
    <FavSongList/>
</div>
)
    }

    export default FavPlaylist;