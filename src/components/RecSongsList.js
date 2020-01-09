//short list of Rec songs
//import RecSongItems here
//will display rec song items component
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';
import {Link, Switch, Route, NavLink, useParams} from 'react-router-dom';
import styled from 'styled-components';
import {Styledtop, StyledViews, StyledTopHolder} from '../styles';
import axiosWithAuth from '../utils/AxiosWithAuth';
import albumCover from '../Images/album-cover.jpg';
import SongItems from './SongItems';


const StyledShortList = styled.div`
margin-top:5px;
box-sizing:border-box;
width:100%;
background: #0E0B20;
display:flex;
flex-wrap:wrap;

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
        transform:scale(1.1);
    
}
    `
    const StyledShortContainer = styled.div `

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

const RecSongsList = props => {
    const [recSongs, setRecSongs]= useState([]);
  
    //    useEffect (() => {
    //    const recShortList = ()=>{
    //     const api = 'https://spotify-song-suggester-backend.herokuapp.com';
    //        axiosWithAuth()
    //    .get(`${api}/api/songs/:id/favorites`)
    //        .then (response =>{
             
    //            console.log("fav response", response);
    //            setRecSongs(response.data);
    //        })
    //        .catch (error =>{
    //            console.log("error", error);
    //        });
    //        }
    //       recShortList();
    //    },[id]);
      
    return(
 
    <div className = "short-list-details">
               
       <StyledShortList>
           
               <StyledTopHolder>
              <Styledtop>
              Recommended Playlists</Styledtop>
              <Switch>
              <Link to={`/allrecfavorites`}> <StyledViews>View More</StyledViews> </Link>
              <Route path ={`/allrecfavorites`}>
            </Route>
   
   </Switch>
   </StyledTopHolder>
   <StyledShortContainer>
    
   <Link to={`/songdetails`}>  <Route path ={`/songdetails`}></Route>
               <StyledShortBoxes>
                  {/* {favSongs.map((favs, index)=>{
                      return( 
                     
              artist=
                  { favs.artist }
              track={ favs.track }
              
                      );
                      })} */}
                      
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
   export default connect(mapStateToProps, {})(RecSongsList);