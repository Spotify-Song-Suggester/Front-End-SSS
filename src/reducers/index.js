import {
    FETCH_SONGS_START,
    FETCH_SONGS_SUCCESS,
    FETCH_SONGS_FAILURE,
    SET_USER_ID,
    FILTER_SONGS
} from '../actions';

const initialState = {
    songs: [
        {
            id: 1,
            artist: "Adele",
            track: "Chasing Pavements",
            danceability: "0.58",
            energy: "0.87",
            key: "9",
            loudness: "0.87",
            mode: "1",
            speechiness: "0.87",
            acousticness: "0.44",
            instrumentalness: "0.87",
            liveness: "0.87",
            valence: "0.87",
            tempo: "0.87",
            duration_ms: "0.87",
            time_signature: "4"
            },
            {
                id: 2,
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
                id: 3,
                artist: "Chance the Rapper",
                track: "Pusha Man",
                danceability: "0.78",
                energy: "0.87",
                key: "9",
                loudness: "0.87",
                mode: "1",
                speechiness: "0.87",
                acousticness: "0.87",
                instrumentalness: "0.87",
                liveness: "0.87",
                valence: "0.87",
                tempo: "0.87",
                duration_ms: "0.87",
                time_signature: "4"
            }    
    ],
    isFetching: false,
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
                songs: action.payload
            }
        default:
            return state;
    }
}