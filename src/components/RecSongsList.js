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

const RecSongsList = props => {


 const DummyData = ([
    {
        artist           : 'Adele',
        track            : 'Chasing Pavements',
        valence          : '0.87',
        danceability     : '0.78',
        acousticness     : '0.87',
        speechiness      : '0.87',
        tempo            : '0.87',
        energy           : '0.87',
        duration_ms      : '0.87',
        loudness         : '0.87',
        instrumentalness : '0.87',
        liveness         : '0.87',
        key              : '9',
        mode             : '1',
        time_signature   : '4',
    },
    {
        artist           : 'CHIKA',
        track            : 'High Rises',
        valence          : '0.87',
        danceability     : '0.78',
        acousticness     : '0.87',
        speechiness      : '0.87',
        tempo            : '0.87',
        energy           : '0.87',
        duration_ms      : '0.87',
        loudness         : '0.87',
        instrumentalness : '0.87',
        liveness         : '0.87',
        key              : '9',
        mode             : '1',
        time_signature   : '4',
    },
    {
        artist           : 'Chance the Rapper',
        track            : 'Pusha Man',
        valence          : '0.87',
        danceability     : '0.78',
        acousticness     : '0.87',
        speechiness      : '0.87',
        tempo            : '0.87',
        energy           : '0.87',
        duration_ms      : '0.87',
        loudness         : '0.87',
        instrumentalness : '0.87',
        liveness         : '0.87',
        key              : '9',
        mode             : '1',
        time_signature   : '4',
    },
])
    

   
 return(




 <div className = "short-list-details">
            
    <StyledShortList>
        
            <StyledTopHolder>
           <Styledtop>
           Recommended Playlists</Styledtop>
         <Link to={`/allrecfavorites`}><StyledViews>View More</StyledViews>
            </Link>

            <Route path = {`/allrecfavorites`}>

</Route>
</StyledTopHolder>
<StyledShortContainer>
    
    {DummyData.map((songs, index) => {
             return (
                 
                
            <StyledShortBoxes>
            
                 {/* key = {index } */}
                <ArtistText>{ songs.artist }</ArtistText>
                <TrackText> - { songs.track }</TrackText>
                 
                  
                 </StyledShortBoxes>
                   
             );
         })} </StyledShortContainer>

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