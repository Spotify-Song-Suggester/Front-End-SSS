//avatar displayed here with onclick to display dropdown with logout here
//will route back to Welcome page

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {popstarPurple, warmBlue} from '../styles';


const StyledAvatar = styled.button`
background-color: ${popstarPurple};
height:32px;
width:34px;
 border-radius:17px;
 // border: none
display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin:5px;
    margin-bottom:10px;


`
const StyledAvText = styled.p`
color: ${warmBlue};
`
const UserAvatar = props => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <div>
            <StyledAvatar>
        <div style={{cursor:'pointer'}} onClick={() => setShowMenu(!showMenu)}>
            
        </div>
     
        {showMenu && <Link to='/login'><span onClick={()=>localStorage.removeItem('token')}> <StyledAvText>logout</StyledAvText></span></Link>}
        </StyledAvatar>
        </div>
    );
};

export default UserAvatar;



