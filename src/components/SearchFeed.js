import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SearchFeedItem from './SearchFeedItem';
import axiosWithAuth from '../utils/AxiosWithAuth';
import SongActions from './SongActions';

const StyledSearchFeed = styled.div`
    
`;
const SearchFeed = props => {
    const { term, songs } = props;

    const [filteredSongs, setFilteredSongs] = useState([]);

    const [songForActions, setSongForActions] = useState(null);

    useEffect(() => {

        const termLower = term.toLowerCase();
        setFilteredSongs(songs.filter(song => {
            if(song.track.toLowerCase().includes(termLower)
            || song.artist.toLowerCase().includes(termLower)) {
                return true;
            }
        }));
    }, [term]);

    return (
        <StyledSearchFeed>
            {filteredSongs.length && filteredSongs.map(song => (
                <SearchFeedItem key={song.id} song={song} onActionsPress={setSongForActions} />
            ))}
            {songForActions && <SongActions song={songForActions} hasViewOption />}
        </StyledSearchFeed>
    );
};

const mapStateToProps = state => {
    return {
        songs: state.songs
    };
};

export default connect(mapStateToProps)(SearchFeed);
