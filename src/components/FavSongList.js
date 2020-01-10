//full list of songs here

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import DashboardSongItem from './DashboardSongItem';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Styledtop, StyledViews, StyledTopHolder, popstarPurple } from '../styles';
import axiosWithAuth from '../utils/AxiosWithAuth';



const StyledFavContainer = styled.div`
    margin:20px;
    box-sizing:border-box;
    width:90%;
    background: #0E0B20;
    display:flex;
    flex-wrap:wrap;
`

const StyledBoxContainer = styled.div`
    width:100%;
    background: #0E0B20;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
    margin-top: 3rem;

`


//pass props for all songs
const FavSongList = props => {
    console.log("props", props);

    const { userID } = props;

    console.log('userID', userID);
    const api = 'https://spotify-song-suggester-backend.herokuapp.com';
    const [favSongs, setFavSongs] = useState([]);
    useEffect(() => {
        axiosWithAuth()
            .get(`${api}/api/songs/${userID}/favorites`)
            .then(response => {

                setFavSongs(response.data);
            })
            .catch(error => {
                console.log("error", error);
            });

    }, [userID]);

    const removeSong = id => {
        axiosWithAuth().delete(`${api}/api/songs/${userID}/favorites/${id}`)
            .then(res => {
                setFavSongs(favSongs.filter(song => song.id !== id));
            })
            .catch(err => { 
                console.warn(err);
                alert('Could not remove song--please try again.');
            });
    };


    return (
        <StyledFavContainer>
            <StyledTopHolder>
                <Styledtop>
                    Liked Songs</Styledtop>
                <Link to={`/`}><StyledViews>View Less</StyledViews>
                </Link>

                
            </StyledTopHolder>

            <StyledBoxContainer>

                {favSongs.length ? favSongs.map(song => (
                    <DashboardSongItem song={song} deleteButton onDelete={removeSong} />
                ))
                :
                <p>Go like some songs!</p>
                }
                

            </StyledBoxContainer>
        </StyledFavContainer>
    );
}

const mapStateToProps = state => {
    return {
        userID: state.userID
    };
};

export default connect(mapStateToProps)(FavSongList);