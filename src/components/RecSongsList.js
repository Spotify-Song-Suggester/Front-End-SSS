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
margin-top:20px;
margin-bottom: 20px;
box-sizing:border-box;
width:100%;
background: none;
display:flex;
flex-wrap:wrap;
`
const StyledShortBoxes = styled.div`
background: url(${albumCover});
    background-repeat: no-repeat;
    border-radius:8px;
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
    background: none;
    display:flex;
    flex-wrap:wrap;
`


const RecSongsList = (props) => {
    console.log("rec props", props);

    const {id} = props;
    console.log("ID", id);
    const [recSongs, setRecSongs]= useState([]);
    const api = 'https://spotify-song-suggester-backend.herokuapp.com';
    useEffect(() => {     
        axiosWithAuth()
        .get(`${api}/api/songs/`)
            .then(response => {

                console.log("fav response", response.data);

                let recShortFilter = [];
                for(let i = 0; i < 3; i++) {
                    if(response.data[i]) {
                        recShortFilter.push(response.data[i]);
                    }
                }

                setRecSongs(recShortFilter);
            })
            .catch(error => {
                console.log("error", error);
        });
    }, [id]);
    

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

                      
                    </StyledShortBoxes>
                      </Link>
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
   export default connect(mapStateToProps, {})(RecSongsList);