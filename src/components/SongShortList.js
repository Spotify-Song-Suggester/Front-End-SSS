//list of songs data to display for each song
//import Song items here
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import DashboardSongItem from './DashboardSongItem';
import { Link, Switch, Route} from 'react-router-dom';
import styled from 'styled-components';
import { Styledtop, StyledViews, StyledTopHolder } from '../styles';
import axiosWithAuth from '../utils/AxiosWithAuth';




const StyledShortList = styled.div`
    box-sizing: border-box;
    width: 100%;
    background: #0E0B20;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;

`
const StyledShortContainer = styled.div`
box-sizing:border-box;
width:100%;
background: #0E0B20;
display:flex;
justify-content: space-between;
flex-wrap:wrap;
`


const SongShortList = (props) => {

    const { userID } = props;
    const api = 'https://spotify-song-suggester-backend.herokuapp.com';
    const [favSongs, setFavSongs] = useState([]);
    useEffect(() => {
        axiosWithAuth()
            .get(`${api}/api/songs/${userID}/favorites`)
            .then(response => {

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
                alert("error", error);
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
                        <DashboardSongItem song={song} />
                    ))
                    :
                    <p>Go like some songs!</p>
                    }
                    
                </StyledShortContainer>


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