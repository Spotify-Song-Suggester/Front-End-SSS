//avatar displayed here with onclick to display dropdown with logout here
//will route back to Welcome page

import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const UserAvatar = props => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <div>
        <div onClick={() => setShowMenu(!showMenu)}>
            avatar
        </div>
        {showMenu && <Link to='/login'><span onClick={()=>localStorage.removeItem('token')}>logout</span></Link>}
        </div>
    );
};

export default UserAvatar;