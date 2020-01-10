//full list of songs here
//import song items
//shown on click of "viewl all" from Song Short List

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';
import { Styledtop, StyledViews, StyledTopHolder, popstarPurple } from '../styles';
import albumCover from '../Images/album-cover.jpg';
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
box-sizing:border-box;
width:100%;
background: #0E0B20;
display:flex;
flex-wrap:wrap;
`

const StyledBoxes = styled.div`
border-radius:4px;
justify-content:space-between;
margin:2%;
box-sizing:border-box;
width: 160px;
height: 160px;
background: url(${albumCover});
    background-repeat: no-repeat; #311E1C
`
const StyledBoxContent = styled.div`
box-sizing:border-box;
`

const ArtistText = styled.h4`
color:black;
`
const TrackText = styled.h5`
color:${popstarPurple};
`

//pass props for all songs
const RecSongItems = props => {
    console.log("props", props);

    const { songId } = props;

    console.log('userID', songId);
    const api = 'https://spotify-song-suggester-backend.herokuapp.com';
    const [recSongs, setRecSongs] = useState([]);
    useEffect(() => {
        axiosWithAuth()
            .get(`${api}/api/songs/${songId}/recommendation`)
            .then(response => {
                console.log("full rec", response)
                setRecSongs(response.data);
            })
            .catch(error => {
                console.log("error", error);
            });

    }, [songId]);


    return (
        <StyledFavContainer>
            <StyledTopHolder>
                <Styledtop>
                    Recommended Songs</Styledtop>
                <Link to={`/`}><StyledViews>View Less</StyledViews>
                </Link>

                
            </StyledTopHolder>

            <StyledBoxContainer>

                {recSongs.length ? recSongs.map(song => (
                    
                    <Link to={`/song/${song.id}`} key={song.id}>  <Route path={`/song/${song.id}`}></Route>
                        <StyledBoxes>
                            <Link to={`/song/${song.id}`} key={song.id}>
                                <StyledBoxContent>
                                    {/* key = {index } */}

                                    <ArtistText>Artist: {song.artist}</ArtistText>
                                    <TrackText>Track: {song.track}</TrackText>
                                    
                                </StyledBoxContent>
                                
                            </Link>
                        </StyledBoxes>
                        </Link>
                    
                ))
                :
                <p>Looking for recommendations..</p>
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

export default connect(mapStateToProps)(RecSongItems);

//i dont know what 's goin on but i try. i need to {study.more}
//{but do, not get over}, wel. .
