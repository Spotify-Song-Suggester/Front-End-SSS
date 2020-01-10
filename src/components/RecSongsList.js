//SHORT list of Rec songs
//import RecSongItems here
//will display rec song items component
//list of songs data to display for each song
//import Song items here
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import DashboardSongItem from './DashboardSongItem';
import { Link, Switch, Route} from 'react-router-dom';
import styled from 'styled-components';
import { Styledtop, StyledViews, StyledTopHolder } from '../styles';
import axiosWithAuth from '../utils/AxiosWithAuth';
import { getRecommendedSongs } from '../utils/RecSongs';


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

const RecSongsList = (props) => {

    const { userID } = props;
    const api = 'https://spotify-song-suggester-backend.herokuapp.com';
    const [recSongs, setRecSongs] = useState([]);
    useEffect(() => {
        axiosWithAuth()
            .get(`${api}/api/songs/${userID}/recommendation`)
            .then(response => {

                console.log("REC response", response);
                getRecommendedSongs(userID, (recommendedSongs) => {
                    console.log('our recommended songs', recommendedSongs);
                 });

                
                let recFilter = [];
                for(let i = 0; i < 3; i++) {
                    if(response.data[i]) {
                        recFilter.push(response.data[i]);
                    }
                }

                setRecSongs(recFilter);
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
                        Recommended Songs</Styledtop>
                    <Switch>
                        <Link to={`/allrecfavorites`}> <StyledViews>View More</StyledViews> </Link>
                        <Route path={`/allrecfavorites`}>
                        </Route>
                    </Switch>
                </StyledTopHolder>
                <StyledShortContainer>

                    {recSongs.length ? recSongs.map(song => (
                        <DashboardSongItem 
                        song={song}
                        />
                    ))
                    :
                    <p>Here's what we recommend:</p>
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
export default connect(mapStateToProps)(RecSongsList);

