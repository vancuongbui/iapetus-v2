//import liraries
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { CardSection, Label } from '../common';

// create a component
class EmployeeItem extends Component {
    onRowPress() {
        //pass object into Actions        
        Actions.employeeEdit({ employee: this.props.employee });
    }
    render() {
        const { name, phone, language } = this.props.employee;
        const rowItem = `${name} ${phone} ${language}`;
        return (
            <TouchableOpacity
                onPress={this.onRowPress.bind(this)}
            >
                 <CardSection>
                    <Label>{rowItem}</Label>
                </CardSection>
            </TouchableOpacity>
           
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default EmployeeItem;
