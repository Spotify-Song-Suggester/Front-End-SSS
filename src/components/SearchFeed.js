import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchFeedItem from './SearchFeedItem';
import axiosWithAuth from '../utils/AxiosWithAuth';
import SongActions from './SongActions';

const StyledSearchFeed = styled.div`
    
`;
const SearchFeed = props => {
    const { term } = props;

    const api = 'https://spotify-song-suggester-backend.herokuapp.com';

    const [filteredSongs, setFilteredSongs] = useState([]);

    const [songForActions, setSongForActions] = useState(null);

    useEffect(() => {
        axiosWithAuth().get(`${api}/api/songs`)
            .then(res => {

                // filter based on search input
                const termLower = term.toLowerCase();
                const filtered = res.data.filter(song => {
                    if(song.track.toLowerCase().includes(termLower)
                    || song.artist.toLowerCase().includes(termLower)) {
                        return true;
                    }
                });
                setFilteredSongs(filtered);
            })
            .catch(err => console.warn(err));
    }, [term]);

    return (
        <StyledSearchFeed>
            <h2>Search Results</h2>
            {filteredSongs.length && filteredSongs.map(song => (
                <SearchFeedItem key={song.id} song={song} onActionsPress={setSongForActions} />
            ))}
            {songForActions && <SongActions song={songForActions} />}
        </StyledSearchFeed>
    );
};

export default SearchFeed;