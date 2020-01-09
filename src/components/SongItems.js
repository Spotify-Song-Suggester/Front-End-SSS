//song items to display here
//import to song short list
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSongs } from '../actions'
import SongCard from './SongCard';

const SongItems = ({ fetchSongs, ...props}) => {
    const [ showMore, setShowMore ] = useState(false)
       //song items props data to display
    useEffect(() => {
        fetchSongs()
    }, [fetchSongs])

    if (props.isFetching) {
        return (<p>fetching songs</p>)
    };

    const songCount = showMore ? props.songs.length : 50

    return(
        <div>
            {/* {props.error && <p>{props.error}</p>} this was erroring */}
            {props.songs.slice(0, songCount).map(song => <SongCard song={song} key={song.id}/>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        songs: state.songs,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchSongs }) (SongItems);