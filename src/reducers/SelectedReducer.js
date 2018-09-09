// This reducer will return the selected state from store
import { SELECT_LIBRARY } from '../actions/types';

export default (state = null, action) => {
    // also, it should be return something not undefined, null as default
    switch (action.type) {
        case SELECT_LIBRARY:
            return action.payload;
        default:
            return state;
    }
};
