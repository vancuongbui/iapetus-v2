import { EMPLOYEE_FETCH_SUCCESS } from '../actions/types';

const INIT_STATE = {};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_FETCH_SUCCESS:
            // console.log(action.payload);
            return action.payload;
            // above means: the object with id and it's value = payload
        default:
            return state;
    }
};
