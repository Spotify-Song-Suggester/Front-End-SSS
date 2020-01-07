import React from 'react';
import styled from 'styled-components';


const SuccessPage = () => {
    return(
        <div className = "page-container">
        <h1>Thank You</h1>
        <div className = "success-container">
        <h1>Success</h1>
        <p>
            Your account has been successfully created. 
        </p>
        <p>
            Would you like to connect your streaming services?
        </p>
        <p>
            Doing this will give you the abilty to stream and discover a wider catalogue of music as well as import and export songs and playlists you may find on Symphinity.
        </p>
        <p>
            If you are currently not subscribed to a streaming service you may use Youtube to listen to songs that are commercially licensed.
        </p>
        </div>
        <div className = "buttons">
<button> 
    Skip
</button>
<button>
    Continue
</button>

        </div>
    </div>
    )

    };

export default SuccessPage;