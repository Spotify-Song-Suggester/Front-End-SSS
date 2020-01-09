import React from 'react';

const SongCard = (props) => {
    return (
        <div className='song-card'>
            <h3>{props.song.track}</h3>
            <h4>{props.song.artist}</h4>
        </div>
    )
};

export default SongCard;