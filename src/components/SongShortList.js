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



const StyledShortList = styled.div`
border: 2px solid red;
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
margin:2%;
    box-sizing:border-box;
    width: 165.6px;
    height: 176.64px;
    `

    const StyledShortContainer = styled.div `
border: 2px solid blue;
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

const SongShortList = props => {
 const [favSongs, setFavSongs]= useState([]);

 
    
const {id} = useParams();
console.log("this is is", id);
    useEffect (() => {
    const shortList = ()=>{
     const api = 'https://spotify-song-suggester-backend.herokuapp.com';
        axiosWithAuth()
        .get(`${api}/api/songs/:id/favorites`)
        .then (response =>{
          
            console.log("fav response", response);
            setFavSongs(response.data);
        })
        .catch (error =>{
            console.log("error", error);
        });
        }
       shortList();
    },[id]);
   
 return(




 <div className = "short-list-details">
            
    <StyledShortList>
        
            <StyledTopHolder>
           <Styledtop>
           Featured Playlists</Styledtop>
           <Switch>
           <Link to={`/allfavorites`}> <StyledViews>View More</StyledViews> </Link>
           <Route path ={`/allfavorites`}>
         </Route>

            


</Switch>
</StyledTopHolder>
<StyledShortContainer>
    
    

        
                
            <StyledShortBoxes>
            
                 
                 
               {/* {favSongs.map((favs, index)=>{
                   return( 
                  
           artist=
               { favs.artist }
           track={ favs.track }
           
                   );
                   })} */}
                   
               
                 </StyledShortBoxes>
                   
            

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
export default connect(mapStateToProps, {})(SongShortList);