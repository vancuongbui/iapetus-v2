// This will hold all the action of the employee
// This action will handle all text changes from input fields of form
import firebase from 'firebase';
import thunk from 'redux-thunk';
import { 
    EMPLOYEE_UPDATE, 
    SUBMIT_SUCCESS,
    EMPLOYEE_FETCH_SUCCESS,
    INVALID_DATA,
 } from './types';
import { Actions } from 'react-native-router-flux';

// The following action is to get states from the form: name, phone, language
export const employeeUpdate = ({ prop, value }) => {
    // prop: the name of the field, for instance, phone field
    // value: the value of the field. these are making a pair: name and value
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }    //es6: object contain key and value
    };
};

// create action creator to recieve state: name, phone, language, then store to firebase
export const employeeCreate = ({ name, phone, language }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        if (name === '' && phone === '') {
            dispatch({ 
                type: INVALID_DATA,
                payload: INVALID_DATA
            });
            // Actions.employeeCreate();
        } else {
            firebase.database().ref(`/users/${currentUser.uid}/userData`)
                .push({ name, phone, language })
                    .then(() => {
                        dispatch({ 
                            type: SUBMIT_SUCCESS,
                            payload: SUBMIT_SUCCESS
                        });     
                        //dispatch the action above, then ask reducer to create new state of name, phone, language 
                        Actions.employeeList();
                    });
        }
    };
};

// const formSubmit = ({ name, phone, language }) => {    
//     return {
//         type: SUBMIT_SUCCESS,
//         payload: { name, phone, language }
//     };
// };

export const employeeFetch = () => {
    // get current user from firebase aut
    const { currentUser } = firebase.auth();
    // keep in mind that it is asynchronous action, so dispath need to be used
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/userData`)
            .on('value', snapshot => {
                dispatch({ type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};
