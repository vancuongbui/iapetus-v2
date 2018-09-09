import React, { Component } from 'react';
import { View, Text, StyleSheet, } from 'react-native';

import { Card, CardSection, Button, Input, Spinner, } from '.';
// create a component
class LoginForm extends Component {
    
    //create function to monitor onchange text of email
   
       
    render() {
        return (
            <View style={styles.container}>
                <Card>
                    <CardSection>
                        <Text style={styles.warning}>{this.props.warning}</Text>
                    </CardSection>
                    <CardSection>
                        <Input                                                   
                            label="Login Email"
                            placeHolder="example@youremail.com"
                            onChangeText={this.props.onChangeEmail}
                            value={this.props.emailValue}
                        />
                    </CardSection>
                    <CardSection>
                        <Input                                                  
                            label="Password"
                            placeHolder="*********************"
                            onChangeText={this.props.onChangePass}
                            value={this.props.passValue}
                            secureTextEntry
                        />
                    </CardSection>

                    <CardSection>
                        <View style={styles.buttonStyle}>
                            <Button 
                                onPress={this.props.onLoginPress}
                            >
                            Login</Button>
                        </View>
                       
                    </CardSection>
                </Card>
            </View>
            
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      flex: 1,
    },
    loginButton: {
        backgroundColor: '#1a1a1a',
    },
    registerButton: {
        backgroundColor: '#c83349',
        color: '#565656',
    },
    error: {
        color: 'red',
        fontSize: 20,
        textAlign: 'center',
    },
    buttonStyle: {
        height: 50,
        flexDirection: 'row',
    },
    warning: {
        fontSize: 20,
        color: 'red',
    }
});

//make this component available to the app
export { LoginForm };
