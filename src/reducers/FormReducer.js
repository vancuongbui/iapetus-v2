import { 
    NAME_CHANGED, 
    PHONE_CHANGED, 
    LANGUAGE_CHANGED, 
    FORM_CREATE, 
    CREATE_FAIL, 
    CREATE_SUCCESS,
    PASS_CHANGED,
} from '../actions/types';

const INIT_STATE = {
    name: '',
    phone: '',
    language: 'English',
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case NAME_CHANGED:
            // the follwing [action.payload.prop] is not an array, just a prop which will be called later
            return { ...state, name: action.payload };
            // the action like: action.payload === { prop: 'name', value: 'Jane' }
        case PHONE_CHANGED:
            return { ...state, phone: action.payload };
        case LANGUAGE_CHANGED:
            return { ...state, language: action.payload };
        case FORM_CREATE:
            return INIT_STATE;
        case CREATE_FAIL:
            return { ...state };
        default:
            return state;
    }
};
