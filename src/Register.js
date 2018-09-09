//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import connect from redux for action creator
import { connect } from 'react-redux';
// import all Actions from actions for the input of reducer, 
// then, pass them to the reducers on the bottom of the file
import { 
    nameChanged, 
    phoneChanged,
    languageChanged,
    formCreate,
} from './actions';
// import data from reducer
import { CardSection, Input, Button, Card, Label, } from './components/common';

// create a component
class Register extends Component {
    onButtonPress() {
        // short-hand for this.props
        const { name, phone, language, } = this.props;
        this.props.formCreate({ name, phone, language });
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
                <Card>
                    <CardSection>
                        <Input                                                   
                            label="Name"
                            placeHolder="John Smith"
                            value={name}
                            onChangeText={(text) => this.props.nameChanged(text)}
                        />
                    </CardSection>
                    <CardSection>
                        <Input                                                   
                            label="Phone"
                            placeHolder="04xxxxxxxx"
                            value={phone}
                            onChangeText={(text) => this.props.phoneChanged(text)}
                        />
                    </CardSection>
                    <CardSection>
                        <Label label="Choose your language">
                        </Label>
                        <Picker
                            selectedValue={language}
                            onValueChange={(text) => this.props.languageChanged(text)}
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
                                onPress={this.onButtonPress.bind(this)}
                            >
                                Create New Account
                            </Button>
                        </View>
                        
                    </CardSection>
                </Card>
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
// map state function
const mapStateToProps = (state) => {
    // get data from reducer - formReducer
    const { name, phone, language } = state.formDataFromReducer;
    // then, return these data and assing to the inputs of the above register form
    return { name, phone, language };
};

//pass a map function and an action to the connect helper, to retrieve data from the store.
export default connect(mapStateToProps, { 
    nameChanged, 
    phoneChanged, 
    languageChanged,
    formCreate, 
})(Register);
