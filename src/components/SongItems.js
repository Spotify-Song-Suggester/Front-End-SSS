//song items to display here
//import to song short list
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSongs } from '../actions'
import SongCard from './SongCard';

const SongItems = ({ fetchSongs, ...props}) => {
       //song items props data to display
    useEffect(() => {
        fetchSongs()
    }, [fetchSongs])

    if (props.isFetching) {
        return (<p>fetching songs</p>)
    };

    return(
        <div>
            {props.error && props.error}
            {props.songs.map(song => <SongCard song={song} key={song.id}/>)}
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