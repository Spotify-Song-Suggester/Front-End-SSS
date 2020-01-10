import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SearchFeedItem from './SearchFeedItem';
import SongActions from './SongActions';
import { fetchSongs } from '../actions';

const StyledSearchFeed = styled.div`
    
`;
const SearchFeed = ({ fetchSongs, ...props}) => {
    const { term, songs, isFiltering } = props;

    const [filteredSongs, setFilteredSongs] = useState([]);

    const [songForActions, setSongForActions] = useState(null);

    useEffect(() => {
        fetchSongs();
        const termLower = term.toLowerCase();
        setFilteredSongs(songs.filter(song => {
            if(song.track.toLowerCase().includes(termLower)
            || song.artist.toLowerCase().includes(termLower)) {
                return true;
            }
        }));
    }, [term, fetchSongs, isFiltering]);


    if (props.isFetching) {
        return (<p>fetching songs</p>)
    };


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
        isFiltering: state.isFiltering,
        error: state.error
    };
};

export default connect(mapStateToProps, {fetchSongs})(SearchFeed);