import React, { useState } from 'react';
import { connect } from 'react-redux';
import { filterSongs, fetchSongs } from '../actions';

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
                <p onClick={()=>filterBy('danceability')}>Dancability</p>
                <p onClick={()=>filterBy('energy')}>Energy</p>
                <p onClick={()=>filterBy('key')}>Key</p>
                <p onClick={()=>filterBy('acousticness')}> Acousticness</p>
                <p onClick={()=>filterBy('instrumentalness')}> Instumentalness</p>
                <p onClick={()=>filterBy('liveness')}>Liveness</p>
            </div>
        <button onClick={()=>props.fetchSongs()}>Clear</button>
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
