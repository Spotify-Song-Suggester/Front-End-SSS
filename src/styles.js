import styled from 'styled-components';


// *** Colors ***

// Primary
export const coolBlue = '#171330';

// Accent
export const plushPink = '#ee1c9e';
export const popstarPurple = '#780150';
export const warmBlue = '#959AB1';

export const mainText = '#fff';
export const offWhite = '#FDFEFF';

export const maxContentWidth = '90%';

export const mainFont = "'Muli', sans-serif";
export const headingFont = "'Abril Fatface', cursive";
export const formLabelFont = "'Montserrat', sans-serif";

export const MainContent = styled.div`
    margin: 0 auto;
    width: ${maxContentWidth};
    box-sizing:border-box;
`;

export const StyledField = styled.div`

    margin-bottom: 2rem;

    label {
        font-size: 2rem;
    }

    input {
        background-color: rgba(0,0,0,0);
        color:  ${mainText};
        border: 0;
        border-bottom: 1px solid ${mainText};
        opacity: 0.5;
        display: block;
        width: 100%;
        height: 4rem;
        font-size: 1.8rem;
    }
`;

const button = `
    display: inline-block;
    font-size: 1.8rem;
    padding: 3rem 4rem;
    border: 0;
    color: ${mainText};
    cursor: pointer;
    background: 
        radial-gradient(140.21% 237.58% at 78.43% 139.84%,
        rgba(239, 1, 159, 0.75) 0%,
        rgba(239, 1, 159, 0) 100%);
    box-shadow:
        0px 4px 4px rgba(0, 0, 0, 0.25),
        0px 4px 4px rgba(0, 0, 0, 0.25),          
        0px 4px 4px rgba(0, 0, 0, 0.25),
        inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    &:hover {
        background: 
            rgba(239, 1, 159, 1) 0%
    }
`;

export const LargeButton = styled.button`
    ${button}
    width: 80%;
    text-transform: uppercase;
    letter-spacing: 3.6px;
    font-weight: bold;
    border-radius: 4.5rem;
`;

export const MediumButton = styled.button`
${button}
padding: 0.8rem 1.8rem;
`
export const Filter = styled.p`
cursor: pointer;
`

export const CenterText = styled.div`
    text-align: center;
`;

//**styles for top of pages section titles/links"

export const StyledTopHolder = styled.div`
display:flex;
width:100%;
justify-content:space-between
box-sizing:border-box;

`
export const Styledtop = styled.span`
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 14px;
color: #FFFFFF;
`
export const StyledViews = styled.span`
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 10px;
color: #FFFFFF;
&:hover{
    color:#959AB1;
    text-decoration:underline;
}

`







