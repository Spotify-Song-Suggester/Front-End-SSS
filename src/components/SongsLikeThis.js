import React, { useEffect, useState } from 'react';
import DashboardSongItem from './DashboardSongItem';
import axiosWithAuth from '../utils/AxiosWithAuth';
import styled from 'styled-components';

const api = 'https://spotify-song-suggester-backend.herokuapp.com';

const StyledSongsLikeThis = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const SongsLikeThis = props => {
    
    const { songId } = props;

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get(`${api}/api/songs/${songId}/recommendation`)
            .then(res => {
                setSongs(getUniqueSongs(res.data));
            })
            .catch(err => console.warn(err));
    }, [songId]);

    return songs.length ? 
        (<StyledSongsLikeThis>
            {songs.map(song => (
                <DashboardSongItem key={song.key} song={song} />
            ))}
        </StyledSongsLikeThis>)
        : <p>Loading...</p>;
}

// Some recommended songs are not unique, so they need to be filtered out
function getUniqueSongs(songs) {
    let unique = [];
    songs.forEach(song => {
        let exists = false;
        unique.forEach(u => {
            if(u.id === song.id) {
                exists = true;
            }
        });
        if(!exists) {
            unique.push(song);
        }
    });

    return unique;
}

export default SongsLikeThis;