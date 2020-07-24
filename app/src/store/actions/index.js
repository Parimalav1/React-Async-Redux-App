import axios from 'axios';

// action suite
// ACTION TYPES
// ACTION CREATORS
export const FETCH_NUMBER = "FETCH_NUMBER";
export const fetchNumber = () => {
    return { type: 'FETCH_NUMBER' };
};

export const NUMBER_SUCCESS = "NUMBER_SUCCESS";
export const numberSuccess = () => {
    return { type: 'NUMBER_SUCCESS' };
};

// action type,creator(function), returns an object 
export const NUMBER_FAILURE = 'NUMBER_FAILURE';
export const numberFailure = () => {
    return { type: 'NUMBER_FAILURE' };
};

// export const NUMBER_CLEAR = "NUMBER_CLEAR";
// export const numberClear = () => {
//     return { type: 'NUMBER_CLEAR' };
// };

// export const UPDATE_NUMBER = 'UPDATE_NUMBER';
// export const updateNumber = (newNumber) => {
//     return {type: 'UPDATE_NUMBER'};
// };

export const numberActions = (newNumber) => {
    return dispatch => {
        dispatch({ type: FETCH_NUMBER })
        axios
            .get(`http://numbersapi.com/${newNumber}?json`)
            .then(res => {
                dispatch({ type: NUMBER_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: NUMBER_FAILURE, payload: err.message })
            });
    };
};