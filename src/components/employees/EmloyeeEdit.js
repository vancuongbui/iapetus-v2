//import liraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';     //to map an array
import { View, Text, StyleSheet } from 'react-native';
import { Card, CardSection, Button } from '../common';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate } from '../../actions';     //to catch the text of the form

// create a component
class EmployeeEdit extends Component {
    // componentWillMount() {
    //     // pass all the this.props.employee value and name to action employUpdate
    //     _.each(this.props.employee, (value, prop) => {
    //         this.props.employeeUpdate({ prop, value });
    //     });
    // }
    onSaveBtnPress() {
        // const { name, phone, language } = this.props;
        // console.log(name, phone, language);
    }
    render() {
        return (
            <View style={styles.container}>
                <EmployeeForm 

                />
                <CardSection>
                    <Button
                        onPress={this.onSaveBtnPress.bind(this)}
                    >Save</Button>
                    <Button
                    
                    >Delete</Button>
                </CardSection>
            </View>            
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
});
// const mapStateToProps = (state) => {
//     const { name, phone, language } = state.employeeFormReducer;
//     return { name, phone, language };
// };

// //make this component available to the app
// export default connect(mapStateToProps, { employeeUpdate })(EmployeeEdit);
export default EmployeeEdit;

