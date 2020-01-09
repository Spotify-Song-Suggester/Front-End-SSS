import React, { useState } from 'react';
import { connect } from 'react-redux';
import { filterSongs, fetchSongs } from '../actions';
import { MediumButton, Filter } from '../styles';

const FilterMenu = (props) => {

    const filterBy = (prop) => {
        const array = [...props.songs];
       
        array.sort((a,b)=>{
            return b[prop] - a[prop];
        });
        const filteredArray = array.filter(song => {
            return song[prop] >= 0.80
        }).map(song => {return song })
        props.filterSongs(filteredArray);
        console.log(filteredArray)
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
