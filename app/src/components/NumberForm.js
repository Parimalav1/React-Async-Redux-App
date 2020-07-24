
import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { numberActions } from "../store/actions";

const NumberForm = (props) => {
    const [newNumber, setnewNumber] = useState('');

    useEffect(() => {
        // call the action creator
        numberActions();
    }, []);


    const handleChanges = (evt) => {
        evt.preventDefault();
        setnewNumber(evt.target.value);
    };

    return (
        <div>
            <div>
                <h3 id='enter'>Enter a Number</h3>
                <input
                    className='input'
                    type="text"
                    name="newNumber"
                    value={newNumber}
                    onChange={handleChanges}
                />
                
                <button className='fetchBtn' onClick={() => props.numberActions(newNumber)}>
                    FETCH A FACT
          </button>
            </div>
        </div>

    );
};

export default connect(
    null,
    { numberActions }
)(NumberForm);

