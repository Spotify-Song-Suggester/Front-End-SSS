
import React from 'react';
import {Link, Route} from 'react-router-dom';
import styled from 'styled-components';
import {mainText, headingFont} from '../styles';
const NavTitle = props => {
    const StyledNavTitle= styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin:5px;
    
color: ${mainText};
font-family:${headingFont};
     h2 {
         font-size: 1.8rem;
         margin:3px;
     }

     margin-bottom: 1rem;
`;
    return (
        
            <Link to={`/`}> 
             <StyledNavTitle>
              <h2>{props.title}</h2>  
            </StyledNavTitle> 
            <Route path ={`/`}></Route>
         </Link>
        
    );
};

export default NavTitle;