//avatar displayed here with onclick to display dropdown with logout here
//will route back to Welcome page

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../Images/avatar.jpg';
import { connect } from 'react-redux';


const UserAvatar = props => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <div>
        <div style={{width:'50px', height:'50px', borderRadius:'100%',background: `url(${avatar})`,objectFit:'fill',cursor:'pointer'}} onClick={() => setShowMenu(!showMenu)}>
            {props.userID}
        </div>
        {showMenu && <Link to='/login'><span onClick={()=>localStorage.removeItem('token')}>logout</span></Link>}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        userID: state.userID
    }
}

export default connect(mapStateToProps, {})(UserAvatar);