import axiosWithAuth from '../utils/AxiosWithAuth';

export const FETCH_SONGS_START = 'FETCH_SONGS_START';
export const FETCH_SONGS_SUCCESS = 'FETCH_SONGS_SUCCESS';
export const FETCH_SONGS_FAILURE = 'FETCH_SONGS_FAILURE';
export const SET_USER_ID = 'SET_USER_ID';

export const fetchSongs = () => dispatch => {

    dispatch({ type: FETCH_SONGS_START})
    axiosWithAuth()
        .get('/songs')
        .then(res => {
            console.log(res)
            dispatch({ type: FETCH_SONGS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: FETCH_SONGS_FAILURE, payload: err})
        })
};

export const setUserID = id => {
    return { type: SET_USER_ID, payload: id}
};