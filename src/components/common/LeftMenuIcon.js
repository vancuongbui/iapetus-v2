//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

// create a component
const LeftMenuIcon = () => {
    return (
        <View style={styles.leftIcon}>
          <Icon
            name='menu'
            color='#FFFFFF'  
            size={30}           
          />
        </View>
        
      );
};

// define your styles
const styles = StyleSheet.create({
    leftIcon: {
        marginLeft: 10,
    },
});

//make this component available to the app
export { LeftMenuIcon };
