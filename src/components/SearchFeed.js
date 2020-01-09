import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SearchFeedItem from './SearchFeedItem';
import axiosWithAuth from '../utils/AxiosWithAuth';
import SongActions from './SongActions';
import { fetchSongs } from '../actions';


const StyledSearchFeed = styled.div`
    
`;
const SearchFeed = ({ fetchSongs, ...props}) => {
    const { term, songs } = props;

    const [filteredSongs, setFilteredSongs] = useState([]);

    const [songForActions, setSongForActions] = useState(null);

    const [ showMore, setShowMore ] = useState(false)

    useEffect(() => {
        fetchSongs();
        const termLower = term.toLowerCase();
        setFilteredSongs(songs.filter(song => {
            if(song.track.toLowerCase().includes(termLower)
            || song.artist.toLowerCase().includes(termLower)) {
                return true;
            }
        }));
    }, [term, fetchSongs]);


    if (props.isFetching) {
        return (<p>fetching songs</p>)
    };

    const songCount = showMore ? props.songs.length : 50


    return (
        <StyledSearchFeed>
            {filteredSongs.length ? (filteredSongs.map(song => (
                <SearchFeedItem key={song.id} song={song} onActionsPress={setSongForActions} />
            )))
            :
            <p>No results.</p>
        }
            {songForActions && <SongActions song={songForActions} hasViewOption />}
        </StyledSearchFeed>
    );
};

const mapStateToProps = state => {
    return {
        songs: state.songs,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, {fetchSongs})(SearchFeed);