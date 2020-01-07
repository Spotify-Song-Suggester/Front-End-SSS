import React from 'react';
import styled from 'styled-components';

const StyledSearchFeedItem = styled.div`
    display: flex;
    
    .song-actions:after {
        content: "..."
        cursor: pointer;
    }
`;

const SearchFeedItem = props => {
    const { song } = props;
    return (
        <StyledSearchFeedItem>
            <div className="song-cover">

            </div>
            <div className="song-info">
                <ul>
                    <li><strong>{song.title}</strong></li>
                    <li>{song.artist}</li>
                    <li>{song.album}</li>
                </ul>
            </div>
            <div className="song-actions">

            </div>
        </StyledSearchFeedItem> 
    );
}

export default SearchFeedItem;