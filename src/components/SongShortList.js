//list of songs data to display for each song
//import Song items here
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import SongItems from '../components/SongItems';
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

const SongShortList = (userID, song) => {


    const api = 'https://spotify-song-suggester-backend.herokuapp.com';
    const [favSongs, setFavSongs] = useState([]);
    useEffect(() => {
        axiosWithAuth()
            .get(`${api}/api/songs/${userID}/favorites`)
            .then(response => {

                console.log("fav response", response);
                //         const shortFilter = response.data.filter(songs => {
                //            if(songs.song.includes((id) <= '3')){
                //            return true;
                //            }
                //            else{
                //                return (
                //                    <p>add songs to favorites</p>
                //                )
                //            }

                //     })
                //     setFavSongs(shortFilter);
                setFavSongs(response.data);
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


                    <Link to={`/song/${song.id}`}>  <Route path={`/song/${song.id}`}></Route>
                        <StyledShortBoxes>
                            {favSongs.map(songs => (
                                <SongItems key={songs.id}
                                    artist={songs.artist}
                                    track={songs.track}
                                />
                            ))}


                        </StyledShortBoxes>

                    </Link>
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