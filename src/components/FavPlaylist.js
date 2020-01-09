//NOT BEING USED. DELETE?

// //full view of song short list list here
// //'view less' routes back to dash
// //clicking on song cards routes to song details
// import React, {useState, useEffect} from 'react';
// import FavSongList from './FavSongList';
// import styled from 'styled-components';
// import { maxContentWidth, mainText } from '../styles';
// import axiosWithAuth from '../utils/AxiosWithAuth';

// const StyledPlaylistPage = styled.div`
// display:flex;
// flex-wrap:wrap;
// flex-direction:row;
// width:100%;
// background: #0E0B20;
// `

// export default function FavPlaylist (){
//     // const [favorites, setFavorites] = useState([]);

//     //     const api = 'https://spotify-song-suggester-backend.herokuapp.com';
        
//     // useEffect(()=>{

//     //     axiosWithAuth()
//     //     .get(`${api}/api/songs/:id/favorites`)
//     //     .then(response => {
//     //         console.log(response);
//     //         setFavorites(response.data);
//     //     })
//     //     .catch(err => console.log(err));
//     // });

//     return (

//         <StyledPlaylistPage>
// <div className = "fav-holder">
// {/* {{favorites.map((fav, index) => {
//     return(
//         <FavSongList 
//         key={index}
//         artist = {fav.artst}
//         track={fav.track}
// />
//     );
// })} 
// } */}

// <FavSongList/>

// </div>
// ALL
//     </StyledPlaylistPage>
// );
// }