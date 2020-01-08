import React from 'react';
import { connect } from 'react-redux';
import { statement } from '@babel/template';


const FilterMenu = (props) => {

    const sortBy = (prop) => () => {
        const items = props.songs;

       items.slice(0).sort((a,b)=>{
           return a.dancability -b.dancability;
       });
        props.setState({
            songs: items
        })
    };

    return (
        <div className='filter-menu'>
            <h2>Filter</h2>
            <div className='filters'>
                <p onClick={sortBy()}>Dancability</p>
                {/* <p onClick={sortBy(energy)}>Energy</p>
                <p onClick={sortBy(key)}>Key</p>
                <p onClick={sortBy(acousticness)}> Acousticness</p> */}
            </div>
            <div className='filter-buttons'>
                <button>Cancel</button>
                <button>Set</button>
            </div>
        </div>

    )
};

const mapStateToProps = state => {
    return {
        songs: state.songs,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { }) (FilterMenu);
