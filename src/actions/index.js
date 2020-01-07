import axiosWithAuth from '../utils/AxiosWithAuth';

export const FETCH_SONG_START = 'FETCH_SONG_START';
export const FETCH_SONG_SUCCESS = 'FETCH_SONG_SUCCESS';
export const FETCH_SONG_FAILURE = 'FETCH_SONG_FAILURE';

export const fetchSongs = () => dispatch => {

    dispatch({ type: FETCH_SONG_START})
    axiosWithAuth()
        //need endpoint for songs yet
        .get('')
        .then(res => {
            console.log(res)
            dispatch({ type: FETCH_SONG_SUCCESS, payload: res})
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: FETCH_SONG_FAILURE, payload: err})
        })
};