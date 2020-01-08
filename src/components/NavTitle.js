//Navigation dopdown here
//Will display Dashboard..click will dropdown to route to other pages(signin/featured playlists/..)
import React from 'react';

const NavTitle = props => {

    return (
        <div>
            <h2>
                {props.title}
            </h2>
        </div>
    );
};

export default NavTitle;