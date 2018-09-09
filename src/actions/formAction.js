// This action is to monitor the changes of the form and take action.
// import firebase to handle database 
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import '@firebase/auth';
import { 
    NAME_CHANGED, 
    PHONE_CHANGED, 
    LANGUAGE_CHANGED, 
    FORM_CREATE, 
    CREATE_SUCCESS, 
} from './types';
// Create one action of form for all value as below
export const nameChanged = ({ text }) => {
    return {
        type: NAME_CHANGED,
        payload: text
    };
};
export const phoneChanged = ({ text }) => {
    return {
        type: PHONE_CHANGED,
        payload: text
    };
};
export const languageChanged = ({ text }) => {
    return {
        type: LANGUAGE_CHANGED,
        payload: text
    };
};

export const formCreate = ({ name, phone, language }) => {
    const { currentUser } = firebase.auth();
    return () => {       
        firebase.database().ref(`/users/${currentUser.uid}/userData`)
            .push({ name, phone, language })
                .then(() => Actions.main());
    };    
};
// const formCreateSuccess = (dispatch, { name, phone, language }) => {
//     dispatch({
//         type: CREATE_SUCCESS, payload: { name, phone, language }
//     });
//     // call the action to route to display the main page
//     Actions.main(); //home: the key which was set on the Router.js
// };
// //create a function to display warning message when user login failure
