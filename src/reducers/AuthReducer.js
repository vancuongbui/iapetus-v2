// For handle email and pass for the authentication with firebase
// import the action from action type
import { 
    EMAIL_CHANGED, 
    PASS_CHANGED, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAIL, 
    LOGIN_USER, 
} from '../actions/types';

// initicate email and pass to prevent from returning undefined object
const INIT_STATE = { 
    email: '', 
    pass: '', 
    user: null, 
    error: '', 
    loading: false 
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return {  ...state, email: action.payload};            
            // above line: create new object with all properties, also put the email on the top
        case PASS_CHANGED:
            return { ...state, pass: action.payload };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INIT_STATE, user: action.payload, };
            // ...INIT_STATE to reset all the state
        case LOGIN_USER_FAIL:
            return { ...state, 
                error: 'Authentication fail, create new account?',
                loading: false,
                pass: '',
            };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        default:
            return state;
    }
};
