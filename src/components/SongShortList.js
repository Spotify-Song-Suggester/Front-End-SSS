//list of songs data to display for each song
//import Song items here
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';
import SongItems from '../components/SongItems';
import {Link, Switch, Route, useRouteMatch, useParams} from 'react-router-dom';
import styled from 'styled-components';
import {Styledtop, StyledViews, StyledTopHolder} from '../styles';
import axiosWithAuth from '../utils/AxiosWithAuth';
import albumCover from '../Images/album-cover.jpg';
import SongCard from '../components/SongCard';


const StyledShortList = styled.div`
box-sizing:border-box;
width:100%;
background: none;
display:flex;
flex-wrap:wrap;
margin-top:20px;
margin-bottom: 20px;
`
const StyledShortBoxes = styled.div`
border:2px solid orange;
background: url(${albumCover});
    background-repeat: no-repeat;
    border-radius:8px;
    justify-content:space-between;
margin:5%;
    box-sizing:border-box;
    width: 110px;
    height: 110px;
    &:hover{
        transform:scale(1.12);
    
}
    `
    const StyledShortContainer = styled.div `
box-sizing:border-box;
width:100%;
background: none;
display:flex;
flex-wrap:wrap;
`
const SongShortList = (props) => {
const {userID} = props;

console.log("fav props", props);
const api = 'https://spotify-song-suggester-backend.herokuapp.com';

const [favSongs, setFavSongs] = useState([]);
    useEffect(() => {
        axiosWithAuth()
            .get(`${api}/api/songs/${userID}/favorites`)
            .then(response => {

                console.log("fav response", response);

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

   
 return(
 <div className = "short-list-details">
            
    <StyledShortList>
        
            <StyledTopHolder>
           <Styledtop>
           Favorite Playlists</Styledtop>
           <Switch>
           <Link to={`/allfavorites`}> <StyledViews>View More</StyledViews> </Link>
           <Route path ={`/allfavorites`}>
         </Route>
</Switch>
</StyledTopHolder>
<StyledShortContainer>
    
          </StyledShortContainer>
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
           
         </StyledShortList>
</div>
    );
}
const mapStateToProps = state => {
    return {
        userID: state.userID,
        
    }
}
export default connect(mapStateToProps, {})(SongShortList);