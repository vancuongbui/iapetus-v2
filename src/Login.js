//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
// import firebase
// import firebase from '@firebase/app';
// import '@firebase/auth';
// import firebase from 'firebase';
import { emailChanged, passChanged, loginUser, } from './actions';
// import { LoginForm } from './components/common';
import { Card, CardSection, Button, Input, Spinner, Footer, } from './components/common';

// create a component
class Login extends Component {
    onChangeEmail(text) {
        this.props.emailChanged(text);
    }
    // Function to render change of pass
    onChangePass(text) {
        this.props.passChanged(text);
    }
    // Function for button press
    onLoginPress() {
        const { email, pass } = this.props; //short-hand for this.props.email and pass
        this.props.loginUser({ email, pass });
    }
    // warning message showing on login form
    loginError() {
        if (this.props.error) {
            return (
            <Text style={styles.warning}>{this.props.error}</Text>);
        }
    }
    renderButton() {
        if (this.props.loading) {
          return <Spinner size="large" />;
        }
    
        return (
          <Button onPress={this.onLoginPress.bind(this)}>
            Login
          </Button>
        );
      }
    render() {
        return (
            <View style={styles.container}>
                <Card>
                    <CardSection>
                        {this.loginError()}
                    </CardSection>
                    <CardSection>
                        <Input                                  
                            label="Login Email"
                            placeHolder="example@youremail.com"
                            onChangeText={this.onChangeEmail.bind(this)}
                            value={this.props.email}
                        />
                    </CardSection>
                    <CardSection>
                        <Input                                                  
                            label="Password"
                            placeHolder="*********************"
                            onChangeText={this.onChangePass.bind(this)}
                            value={this.props.pass}
                            secureTextEntry
                        />
                    </CardSection>

                    <CardSection>
                        <View style={styles.buttonStyle}>
                            {this.renderButton()}
                            <Button 
                                style={{ backgroundColor: '#c83349' }}
                                // onPress={() => Actions.employeeCreate()}
                                onPress={() => Actions.location()}
                            >
                                Register
                            </Button>
                        </View>
                       
                    </CardSection>
                </Card>
                <Footer />
            </View>
            
        );
    }
}
const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      flex: 1,
      flexDirection: 'column',
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
// define mapstate
const mapStateToProps = ({ auth }) => {
    // the reducer will return email value
    const { email, pass, error, loading } = auth;
    return { email, pass, error, loading };
};

//make this component available to the app
export default connect(mapStateToProps, { emailChanged, passChanged, loginUser })(Login);
