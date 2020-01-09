// //view of recomennded song short list list here
// //'view less' routes back to dash
// import React, {useState, useEffect} from 'react';
// import RecSongItems from './RecSongItems';
// import styled from 'styled-components';
// import { maxContentWidth, mainText } from '../styles';
// import axiosWithAuth from '../utils/AxiosWithAuth';
// const StyledPlaylistPage = styled.div`
// //position: relative;
// display:flex;
// flex-wrap:wrap;
// flex-direction:row;
// width:100%;
// border:2px solid orange;
// background: #0E0B20;
// `

// const RecPlaylist = props => {
//     const [recSongs, setRecSongs] = useState([]);

//     const api = 'https://spotify-song-suggester-backend.herokuapp.com';
    
// // useEffect(()=>{

// //     axiosWithAuth()
// //     .get(`${api}/api/songs/:id/favorites`) <---replace with rec endpoint
// //     .then(response => {
// //         console.log(response);
// //         setRecSongs(response);
// //     })
// //     .catch(err => console.log(err));
// // });
// // }, []);




// return (

//     <StyledPlaylistPage>
// <div className = "fav-holder">
// {recSongs.map((fav, index) => {
// return(
//     <RecSongItems
//     key={index}
//     artist = {fav.artst}
//     track={fav.track}
// />
// );
// })}


// </div>

// </StyledPlaylistPage>
// );
// }
//     export default RecPlaylist;