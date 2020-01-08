//avatar displayed here with onclick to display dropdown with logout here
//will route back to Welcome page

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {popstarPurple} from '../styles';


const StyledAvatar = styled.button`
background-color: ${popstarPurple};
height:32px;
width:34px;
border-radius:17px;
// border: none
`
const StyledLogOut = styled.p`
display: none;
`

const UserAvatar = props => {
   
      
          return (
            <div>
                <StyledAvatar >
              {/* onClick=display log-out optoin*/}
              </StyledAvatar>
               <StyledLogOut>Log out</StyledLogOut>
            
           
            </div>
          );
        }
      


    // return (
    //     <StyledAvatar>
    //         Avi
    //     </StyledAvatar>
    // );


export default UserAvatar;