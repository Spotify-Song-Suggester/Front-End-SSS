import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchFeedItem from './SearchFeedItem';
import axiosWithAuth from '../utils/AxiosWithAuth';

const StyledSearchFeed = styled.div`
    
`;
const SearchFeed = props => {
    const { term } = props;

    const api = 'https://spotify-song-suggester-backend.herokuapp.com';

    const [filteredSongs, setFilteredSongs] = useState([]);

    useEffect(() => {
        axiosWithAuth().get(`${api}/api/songs`)
            .then(res => {
                setFilteredSongs(res);
            })
            .catch(err => console.warn(err));
    }, [term]);

    return (
        <StyledSearchFeed>
            {filteredSongs && filteredSongs.map(song => (
                <SearchFeedItem key={song.id} song={song} />
            ))}
        </StyledSearchFeed>
    );
};

export default SearchFeed;