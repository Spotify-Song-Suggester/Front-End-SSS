import axiosWithAuth from './AxiosWithAuth';

const api = 'https://spotify-song-suggester-backend.herokuapp.com';

export const getRecommendedSongs = (userID, callback) => {

    axiosWithAuth()
        .get(`${api}/api/songs/${userID}/favorites`)
        .then(response => {

            
            const favoriteSongs = response.data;


            axiosWithAuth()
                .get(`${api}/api/songs/${favoriteSongs[0].id}/recommendation`)
                .then(res => {
                    console.log(res);
                    callback(res.data);
                })
                .catch(err => console.warn(err));
            // else {
            //     // grab all data

            //     let recommendedSongs = [];

            //     favoriteSongs.forEach(song => {

            //         axiosWithAuth()
            //             .get(`${api}/api/songs/${song.id}/recommendation`)
            //             .then(res => {
            //                 console.log(res);
            //                 recommendedSongs = [ ...recommendedSongs, ...res.data ];
            //             })
            //             .catch(err => console.warn(err));

            //     });

            //     callback(recommendedSongs);

        })
        .catch(error => {
            console.log("error", error);
        });  
};

