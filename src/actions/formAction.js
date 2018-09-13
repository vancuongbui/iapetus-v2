// This action is to monitor the changes of the form and take action.
// import firebase to handle database 
import { Actions } from 'react-native-router-flux';
import firebase from '@firebase/app';
import '@firebase/auth';
import { 
    AUTH_FORM_SUBMIT, 
} from './types';
// Create one action of form for all value as below
export const formSubmitAction = ({ name, phone, email, language }) => {
    return dispatch => {
        const formInputData = {
            name,   //use shorthand as name: name
            phone,
            email,
            language,       
        };
        //fetch data https://iapetus-auth.firebaseio.com/
        fetch('https://iapetus-auth.firebaseio.com/', {
            method: 'POST',
            body: JSON.stringify(formInputData),
        })
        .catch(err => console.log(err))
        .then(res => res.json())
        .then(parseRes => {
            console.log(parseRes);
        });
    };
};
