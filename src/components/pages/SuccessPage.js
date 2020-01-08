import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const SuccessPage = () => {
    return(
        <div className = "page-container">
        <h1>Thank You</h1>
        <div>
        <h1>Success</h1>
        <p>
            Your account has been successfully created. 
        </p>
        <p>
            Add songs to your favorites for the best user experience!
        </p>
        </div>
        <div>

<Link to='/login'>
    Continue
</Link>

        </div>
    </div>
    )

    };

export default SuccessPage;