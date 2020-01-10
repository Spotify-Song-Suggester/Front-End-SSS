import {
    FETCH_SONGS_START,
    FETCH_SONGS_SUCCESS,
    FETCH_SONGS_FAILURE,
    SET_USER_ID,
    FILTER_SONGS
} from '../actions';

const initialState = {
    songs: [
     
    ],
    isFetching: false,
    isFiltering: false,
    error: '',
    userID: '',
    favorites: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SONGS_START:
            return {
                ...state,
                isFetching: true,
                isFiltering: false,
                error: ''
            };
        case FETCH_SONGS_SUCCESS:
            return {
                ...state,
                songs: action.payload,
                isFetching: false,
                error: ''
            };
        case FETCH_SONGS_FAILURE:
            return {
                ...state,
                isFetching:false,
                error: action.payload
            }
        case SET_USER_ID:
            return {
                ...state,
                userID: action.payload
            }
        case FILTER_SONGS:
            return {
                ...state,
                songs: action.payload,
                isFiltering: true
            }
        default:
            return state;
    }
}