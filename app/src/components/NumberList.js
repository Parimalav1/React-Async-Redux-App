import React from 'react';
import { connect } from "react-redux";

const NumberList = props => {

    return (
        <div>
            
            <h2 id='number'>{props.number}</h2>
            <p className='text'>{props.text}</p>

            {props.isLoading && <h4>Loading data...</h4>}
            {
            props.error && props.error.length > 0 && <p>ERROR: {props.error}</p>
            }
        </div>
    );
}
const mapStateToProps = state => {
    return {
        text: state.res.text,
        number: state.res.number,
        found: state.res.found,
        type: state.res.type,
        error: state.error,
        isLoading: state.isLoading
    };
};

export default connect(
    mapStateToProps,
    {}
)(NumberList);

