import axiosWithAuth from '../utils/AxiosWithAuth';

export const FETCH_SONGS_START = 'FETCH_SONGS_START';
export const FETCH_SONGS_SUCCESS = 'FETCH_SONGS_SUCCESS';
export const FETCH_SONGS_FAILURE = 'FETCH_SONGS_FAILURE';

export const fetchSongs = () => dispatch => {

    dispatch({ type: FETCH_SONGS_START})
    axiosWithAuth()
        //need endpoint for songs yet
        .get('')
        .then(res => {
            console.log(res)
            dispatch({ type: FETCH_SONGS_SUCCESS, payload: res})
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: FETCH_SONGS_FAILURE, payload: err})
        })
};