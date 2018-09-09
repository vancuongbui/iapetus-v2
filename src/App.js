//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';   //a middleware, therefoere need to use with applyMiddleware
// import firebase
import firebase from '@firebase/app';
import '@firebase/auth';
import reducers from './reducers';
import { YellowBox } from 'react-native';
// import reducers from folder reducers
// import reducers from './reducers';
// import common components
import { Header, Spinner, LoginForm, LogoutForm, } from './components/common';
import Login from './Login';
import Router from './Router';

// import LibraryList from './components/LibraryList';

// create a component
class App extends Component {     
    constructor(props) {
        super(props);        
        YellowBox.ignoreWarnings(['Warning: isMounted', 'Warning: Failed', 'warning: Setting']);
        this.state = { loggedIn: null, };    //null mean the state is unknown
        const config = ({
            apiKey: 'AIzaSyA8ryJnTd9JUbW12F4d91ZyAQAiWfQRD40',
            authDomain: 'iapetus-auth.firebaseapp.com',
            databaseURL: 'https://iapetus-auth.firebaseio.com',
            projectId: 'iapetus-auth',
            storageBucket: 'iapetus-auth.appspot.com',
            messagingSenderId: '80149794474'
        });
        firebase.initializeApp(config);
    }
    
    
    // loading the database
    // componentDidMount() {
        
    //     // Handle the status of login on/off of a given user using onAuthStateChanged()
    // }    
    // create a function to display the page with loggedIn condition 
    render() {
        // to disable some of the yellow warning
        console.ignoredYellowBox = ['Warning: isMounted', 'Warning: Failed', 'warning: Setting'];
        
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (            
            <Provider store={store}>
                <View style={styles.container}>                      
                    <Router />       
                </View>  
            </Provider>                    
        );
    }     
        
};


// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        // backgroundColor: '#111111',
    },
    test: {
        color: '#FFFFFF',
    }
});

//make this component available to the app
export default App;
