import {
    EMPLOYEE_UPDATE,
    SUBMIT_SUCCESS,
    INVALID_DATA,
} from '../actions/types';

const INIT_STATE = {
    name: '',
    phone: '',
    language: 'English',
};

export default (state = INIT_STATE, action) => {
    // This reducer will maintain three states of the form: name, phone and language
    switch (action.type) {
        case EMPLOYEE_UPDATE:
        // expected return action.payload === { prop: 'name', value: 'Jane' }
            return { ...state, [action.payload.prop]: action.payload.value };
        case SUBMIT_SUCCESS:
            return INIT_STATE;
        case INVALID_DATA: 
            return INIT_STATE;
        default:
            return state;
    }
};