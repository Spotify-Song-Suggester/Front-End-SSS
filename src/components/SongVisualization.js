import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/AxiosWithAuth';
import axios from 'axios';

const SongVisualization = props => {

    const { songId } = props;

    const [base64Img, setBase64Img] = useState(null);

    useEffect(() => {
        axios.get(`https://spotify-song-suggestor.herokuapp.com/visual/${songId}`, {
            crossdomain: true
        })
            .then(res => {
                console.log(res);
                setBase64Img(res.data);
                
            })
            .catch(err => console.warn(err));
    }, []);

    return (
        <>
            {base64Img ?
            (<img src={`data:image/png;base64,${base64Img}`} alt="song visualization" />)
            :
            (<p>Visualization loading...</p>)}
        </>
    );

};

export default SongVisualization;
