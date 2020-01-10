//full list of songs here
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link} from 'react-router-dom';
import { Styledtop, StyledViews, StyledTopHolder} from '../styles';
import axiosWithAuth from '../utils/AxiosWithAuth';
import { getRecommendedSongs } from '../utils/RecSongs';
import DashboardSongItem from './DashboardSongItem';

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
//pass props for all songs
const RecSongItems = props => {

    const { userID } = props;
    const api = 'https://spotify-song-suggester-backend.herokuapp.com';
    const [recSongs, setRecSongs] = useState([]);
    useEffect(() => {
        axiosWithAuth()
            .get(`${api}/api/songs/${userID}/recommendation`)
            .then(response => {
                getRecommendedSongs(userID, (recommendedSongs) => {
                    console.log('full recommended songs', recommendedSongs);
                 });
                 
                 let recFilter = [];
                 for(let i = 0; i < 9; i++) {
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
        <StyledFavContainer>
            <StyledTopHolder>
                <Styledtop>
                    Recommended Songs</Styledtop>
                <Link to={`/`}><StyledViews>View Less</StyledViews>
                </Link>

            </StyledTopHolder>
            <StyledBoxContainer>

                {recSongs.length ? recSongs.map(song => (
                        <DashboardSongItem song={song}
                                    />
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
