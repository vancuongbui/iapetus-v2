//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LibraryList from './components/apps/LibraryList';
// create a component
class Home extends Component {
    render() {
        return (
            <View>
                 <LibraryList />
            </View>
       );

    }
}

// define your styles

//make this component available to the app
export default Home;
