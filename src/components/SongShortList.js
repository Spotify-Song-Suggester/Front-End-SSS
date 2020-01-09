//list of songs data to display for each song
//import Song items here
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import SongItems from '../components/SongItems';
import SongCard from '../components/SongCard';
import { Link, Switch, Route, useRouteMatch, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Styledtop, StyledViews, StyledTopHolder } from '../styles';
import axiosWithAuth from '../utils/AxiosWithAuth';
import albumCover from '../Images/album-cover.jpg';



const StyledShortList = styled.div`

box-sizing:border-box;
width:100%;
background: #0E0B20;
display:flex;
flex-wrap:wrap;
margin-top:20px;

`
const StyledShortBoxes = styled.div`
border:2px solid orange;
background: url(${albumCover});
    background-repeat: no-repeat;
    border-raidus:8px;
    justify-content:space-between;
margin:5%;
    box-sizing:border-box;
    width: 110px;
    height: 110px;
    &:hover{
        transform:scale(1.15);
    
}
    `
const StyledShortContainer = styled.div`

box-sizing:border-box;
width:100%;
background: #0E0B20;
display:flex;
flex-wrap:wrap;

`

const ArtistText = styled.h2`
color:black;
`
const TrackText = styled.h3`
color:red;
`
//boxes same size for now, enlarge on hover/click?

const SongShortList = (props) => {

    const { userID } = props;

    console.log('userID', userID);
    const api = 'https://spotify-song-suggester-backend.herokuapp.com';
    const [favSongs, setFavSongs] = useState([]);
    useEffect(() => {
        axiosWithAuth()
            .get(`${api}/api/songs/${userID}/favorites`)
            .then(response => {

                console.log("fav response", response);

                // only want to show first 3 songs
                let shortFilter = [];
                for(let i = 0; i < 3; i++) {
                    if(response.data[i]) {
                        shortFilter.push(response.data[i]);
                    }
                }

                setFavSongs(shortFilter);
            })
            .catch(error => {
                console.log("error", error);
            });

    }, [userID]);

    return (
        <div className="short-list-details">

            <StyledShortList>

                <StyledTopHolder>
                    <Styledtop>
                        Liked Songs</Styledtop>
                    <Switch>
                        <Link to={`/allfavorites`}> <StyledViews>View More</StyledViews> </Link>
                        <Route path={`/allfavorites`}>
                        </Route>
                    </Switch>
                </StyledTopHolder>
                <StyledShortContainer>

                    {favSongs.length ? favSongs.map(song => (
                        <Link to={`/song/${song.id}`} key={song.id}>  <Route path={`/song/${song.id}`}></Route>
                            <StyledShortBoxes>
                                <SongCard song={song} key={song.id} artist = {song.artist}/>
                            </StyledShortBoxes>
                        </Link>
                    ))
                    :
                    <p>Go like some songs!</p>
                    }
                    
                </StyledShortContainer>

                {/* <SongItems/> */} {/*commented out for styling*/}

            </StyledShortList>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        userID: state.userID,

    }
}
export default connect(mapStateToProps)(SongShortList);