import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://spotify-song-suggester-backend.herokuapp.com/api',
        headers: {
            Authorization: token
        }
    });
};

export default axiosWithAuth;