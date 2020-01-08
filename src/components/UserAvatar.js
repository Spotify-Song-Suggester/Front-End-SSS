//avatar displayed here with onclick to display dropdown with logout here
//will route back to Welcome page

import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {popstarPurple, warmBlue} from '../styles';


const StyledAvatar = styled.button`
background-color: ${popstarPurple};
height:32px;
width:34px;
border-radius:17px;
// border: none

`
const StyledAvText = styled.p`
color: ${warmBlue};
`

const UserAvatar = props => {
const [showMenu, setShowMenu] = useState(false)
      
          return (
            <StyledAvatar>
            <div style={{cursor:'pointer'}} onClick={() => setShowMenu(!showMenu)}>
                Avi
            </div>
            {showMenu && <Link to='/login'><span onClick={()=>localStorage.removeItem('token')}> <StyledAvText>logout</StyledAvText></span></Link>}
             </StyledAvatar>
        );
    };
    

          
          


export default UserAvatar;