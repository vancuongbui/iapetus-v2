//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, } from 'react-native';
import firebase from 'firebase';
// Picker works just like drop-down menu and web app
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Card, CardSection, Label, Input, Button } from '../common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../../actions';
import EmployeeForm from './EmployeeForm';


// create a component
class EmployeeCreate extends Component {
    // short-hand to access states passed from map helper on the bottom of the file
    
    onButtonPress() {
        const { name, phone, language } = this.props;
        this.props.employeeCreate({ name, phone, language });
    }
    render() {
        const { name, phone, language } = this.props;
        return (
            <KeyboardAwareScrollView 
                style={{ backgroundColor: '#FFFFFF' }}
                resetScrollToCoords={{ x: 0, y: 0 }}
                contentContainerStyle={styles.container}
                scrollEnabled={false}
            >
                <EmployeeForm 
                    // pass all the attribute of props: name, phone, language in this case to the form
                    {...this.props}
                />
                <CardSection>
                        <View style={styles.buttonStyle}>
                            <Button
                                onPress={this.onButtonPress.bind(this)}
                            >
                                Create New Account
                            </Button>
                        </View>
                        
                </CardSection>
            </KeyboardAwareScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    buttonStyle: {
        height: 50,
        flexDirection: 'row',
    }
});
// map State to Props
const mapStateToProps = (state) => {
    const { name, phone, language } = state.employeeFormReduer;
    // Keep in mind that these above states come from reducer index/employeeFormReducer
    // besides, the reducer here is somehow was not necessarilly imported from reducer
    return { name, phone, language };   //these will be passed to the form
};

//Make sure the connect helper will take: 1 a mapper function, and 2 an action.
export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
