//full view of song short list list here
//'view less' routes back to dash
//clicking on song cards routes to song details
import React from 'react';
import FavSongList from './FavSongList';

import {Link} from 'react-router-dom';

const FavPlaylist = props => {
    return (
        <div>
        <span>Featured Playlist</span> <Link to={`/`}><span>View Less</span>
            </Link>

    <FavSongList/>
</div>
)
    }
    export default FavPlaylist;