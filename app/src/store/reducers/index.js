import { FETCH_NUMBER, NUMBER_SUCCESS, NUMBER_FAILURE } from '../actions';

const initialNumber = {
    res: {
        text: '',
        number: '',
        found: false,
        type: "trivia"
    },
    isLoading: false,
    error: ''
};

export const reducer = (state = initialNumber, action) => {
    switch (action.type) {
        case FETCH_NUMBER:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case NUMBER_SUCCESS:
            return {
                ...state,
                res: action.payload,
                isLoading: false,
            };
        case NUMBER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};