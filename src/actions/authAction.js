// this action is to created when email changed
// action always has type and payload
// import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import firebase from '@firebase/app';
import '@firebase/auth';

import { 
    PASS_CHANGED, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAIL, 
    LOGIN_USER, 
    EMAIL_CHANGED 
} from './types';

// Create this action to get changes of the email field
export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

// Create this action to get changes of the password field
export const passChanged = (text) => {
    return {
        type: PASS_CHANGED,
        payload: text
    };
};

// login action to get changes of the login request to firebase
export const loginUser = ({ email, pass }) => {    
    // the following dispatch function is to manipulate aciotn of redux
    return (dispatch) => {
        // first of all, try to login the user
        dispatch({ type: LOGIN_USER }); //dispatch the action

        firebase.auth().signInWithEmailAndPassword(email, pass)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, pass)
                .then(user => loginUserSuccess(dispatch, user))
                .catch(() => loginUserFail(dispatch));
        });
    };        
};
//Create a function to dispatch when user login success or create account seccess
const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS, payload: user
    });
    // call the action to route to display the main page
    Actions.main(); //home: the key which was set on the Router.js
};
//create a function to display warning message when user login failure
const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};