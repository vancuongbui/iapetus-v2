//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, KeyboardAvoidingView, } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input, Button, Card, Label, } from './components/common';
import validate from './utility/validations';
import { formSubmitAction, } from './actions';

// create a component
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            controls: {
                email: {
                    value: '',
                    valid: false,
                    validationRules: {
                        isEmail: false,
                    }
                },
                password: {
                    value: '',
                    valid: false,
                    validationRules: {
                        minLength: 8,
                    },
                },
                confirmPassword: {
                    value: '',
                    valid: false,
                    validationRules: {
                        equalTo: 'password',    //has to match the keyword password above
                    },
                },
                name: {
                    value: '',
                    valid: false,
                    validationRules: {
                        namePattern: true,
                    },
                },
                phone: {
                    value: '',
                    valid: false,
                    validationRules: {
                        phonePattern: true,
                    },
                },
                language: {
                    value: 'English',
                    valid: true,
                    validationRules: {
                        namePattern: true,
                    },
                },
            },
        };
    }
    onSubmitBtnHandler() {
        const formInputData = {
            email: this.state.controls.email.value,
            name: this.state.controls.password.value,
            phone: this.state.controls.phone.value,
            language: this.state.controls.language.value,
        };
        // call login action to dispatch this login
        this.props.onFormSubmit(formInputData);
    }

    // handle all input at a time
    updateInputState = (key, value) => {
        //key = name of the input, while value = value of the input
        let connectedValue = {};
        if (this.state.controls[key].validationRules.equalTo) {
            const equalControl = this.state.controls[key].validationRules.equalTo;
            const equalValue = this.state.controls[equalControl].value;
            connectedValue = {
                ...connectedValue,
                equalTo: equalValue,
            };

        }
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    [key]: {
                        ...prevState.controls[key], //load all state of controls
                        value,
                        valid: validate(value, prevState.controls[key].validationRules, connectedValue)
                    },
                },
            };
        });
    }
    render() {
        const { email, password, confirmPassword, name, phone, language } = this.state.controls;
        console.log(language);
        return (
            <KeyboardAvoidingView
                style={styles.container}
                keyboardVerticalOffset={-64}
            >
                <Card>
                    <CardSection>
                        <Input                                                   
                            label="Email"
                            placeHolder="example@your.email"
                            value={email}
                            onChangeText={(text) => this.updateInputState('email', text)}
                            secureTextEntry={false}
                            valid={this.state.controls.email.valid}
                        />
                    </CardSection>
                    <CardSection>
                        <Input                                                   
                            label="Password"
                            placeHolder="........................"
                            value={password}
                            onChangeText={(text) => this.updateInputState('password', text)}
                            secureTextEntry
                            valid={this.state.controls.password.valid}
                        />
                    </CardSection>
                    <CardSection>
                        <Input                                                   
                            label="Confirm Password"
                            placeHolder="........................"
                            value={confirmPassword}
                            onChangeText={(text) => this.updateInputState('confirmPassword', text)}
                            secureTextEntry
                            valid={this.state.controls.confirmPassword.valid}
                        />
                    </CardSection>
                    <CardSection>
                        <Input                                                   
                            label="Name"
                            placeHolder="John Smith"
                            value={name}
                            onChangeText={(text) => this.updateInputState('name', text)}
                            secureTextEntry={false}
                            valid={this.state.controls.name.valid}
                        />
                    </CardSection>
                    <CardSection>
                        <Input                                                   
                            label="Phone"
                            placeHolder="04xxxxxxxx"
                            value={phone}
                            onChangeText={(text) => this.updateInputState('phone', text)}
                            secureTextEntry={false}
                            valid={this.state.controls.phone.valid}
                        />
                    </CardSection>
                    <CardSection>
                        <Label label="Choose your language" />
                        <Picker
                            selectedValue={language}
                            onValueChange={(text) => this.updateInputState('language', text)}
                        >
                            <Picker.Item label="English" value="English" />
                            <Picker.Item label="Italian" value="Italian" />
                            <Picker.Item label="Spanish" value="Spanish" />
                            <Picker.Item label="French" value="French" />
                            <Picker.Item label="Vietnamese" value="Vietnamese" />
                        </Picker>
                    </CardSection>
                    <CardSection>
                        <View style={styles.buttonStyle}>
                            <Button
                                style={styles.btnStyle}
                                onPress={this.onSubmitBtnHandler.bind(this)}
                            >
                                Create New Account
                            </Button>
                        </View>
                        
                    </CardSection>
                </Card>
            </KeyboardAvoidingView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF'
    },
    buttonStyle: {
        height: 50,
        flexDirection: 'row',
    },
    btnStyle: {

    }
});

// map dispatch function to dispatch all action
const mapDispatchToProps = dispatch => {
    return {
        onformSubmit: (formInputData) => dispatch(formSubmitAction(formInputData)),
    };
};

//pass a map function and an action to the connect helper, to retrieve data from the store.
export default connect(null, mapDispatchToProps)(Register);
