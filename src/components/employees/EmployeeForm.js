//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../../actions';
import { Card, CardSection, Input, Label, Button } from '../common';

// create a component
class EmployeeForm extends Component {
    render() {
        const { name, phone, language } = this.props;
        return (
            <View style={styles.container}>
                <Card>
                    <CardSection>
                        <Input                                                   
                            label="Name"
                            placeHolder="John Smith"
                            value={name}    //name value here come from mapStateToProps
                            onChangeText={(text) => this.props.employeeUpdate({ prop: 'name', value: text })}
                            // the employeeUpdate is an action, taking place to get text of the form.
                        />
                    </CardSection>
                    <CardSection>
                        <Input                                                   
                            label="Phone"
                            placeHolder="04xxxxxxxx"
                            value={phone}
                            onChangeText={(text) => this.props.employeeUpdate({ prop: 'phone', value: text })}
                        />
                    </CardSection>
                    <CardSection>
                        <Label label="Choose your language">
                        </Label>
                        <Picker
                            selectedValue={language}
                            onValueChange={(text) => this.props.employeeUpdate({ prop: 'language', value: text })}
                        >
                            <Picker.Item label="English" value="English" />
                            <Picker.Item label="Italian" value="Italian" />
                            <Picker.Item label="Spanish" value="Spanish" />
                            <Picker.Item label="French" value="French" />
                            <Picker.Item label="Vietnamese" value="Vietnamese" />
                        </Picker>
                    </CardSection>
                    
                </Card>
            </View>
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
// map function
const mapStateToProps = (state) => {
    const { name, phone, language } = state.employeeFormReduer;
    return { name, phone, language };
};

//make this component available to the app
export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
