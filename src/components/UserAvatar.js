//avatar displayed here with onclick to display dropdown with logout here
//will route back to Welcome page

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../Images/avatar.jpg';
import { connect } from 'react-redux';
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
cursor:pointer;



`
const StyledAvText = styled.p`
color: ${warmBlue};
`
const UserAvatar = props => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <div>
        <StyledAvatar onClick={() => setShowMenu(!showMenu)}>
            {props.userID}
        </StyledAvatar>
     
        {showMenu && 
        <div className='user-menu'>
        <Link to='/login'><span onClick={()=>localStorage.removeItem('token')}> <StyledAvText>logout</StyledAvText></span></Link>
        <Link to='/edit'><span> <StyledAvText>edit profile</StyledAvText></span></Link>
        </div>
        }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        userID: state.userID
    }
}

export default connect(mapStateToProps, {})(UserAvatar);
