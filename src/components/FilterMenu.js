import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { filterSongs, fetchSongs } from '../actions';
import { MediumButton, Filter } from '../styles';
import { setState } from 'expect/build/jestMatchersObject';

const FilterMenu = (props) => {

    const filterBy = (prop) => {
        const array = [...props.songs];
       
        array.sort((a,b)=>{
            return b[prop] - a[prop];
        });
        const filteredArray = array.filter(song => {
            return song[prop] >= 0.50
        }).map(song => {return song })
        props.filterSongs(filteredArray);
        setState({
            songs:filteredArray
        })
        console.log(filteredArray)
        console.log(props.songs)
    };

    return (
        <div className='filter-menu'>
         <h2> Filter </h2>
            <div className='filters'>
                <Filter onClick={()=>filterBy('danceability')}>Dancability</Filter>
                <Filter onClick={()=>filterBy('energy')}>Energy</Filter>
                {/* <p onClick={()=>filterBy('key')}>Key</p> */}
                <Filter onClick={()=>filterBy('acousticness')}> Acousticness</Filter>
                <Filter onClick={()=>filterBy('instrumentalness')}> Instumentalness</Filter>
                <Filter onClick={()=>filterBy('liveness')}>Liveness</Filter>
            </div>
        <MediumButton onClick={()=>props.fetchSongs()}>Clear</MediumButton>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        songs: state.songs,
        isFetching: state.isFetching,
        error: state.error
    }
};

export default connect(mapStateToProps, { filterSongs, fetchSongs }) (FilterMenu);
