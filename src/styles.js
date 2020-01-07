import styled from 'styled-components';

// *** Colors ***

// Primary
export const coolBlue = '#171330';

// Accent
export const plushPink = '#ee1c9e';
export const popstarPurple = '#780150';
export const warmBlue = '#959AB1';

export const mainText = '#fff';

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
    display: block;
    width: 80%;
    text-transform: uppercase;
    letter-spacing: 3.6px;
    border-radius: 4.5rem;
`;