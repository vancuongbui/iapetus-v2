//import liraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { MediaCard, CardSection, Label } from '../common';
import { Actions } from 'react-native-router-flux';
import { selectLibrary } from '../../actions';

// create a component
class LibraryItem extends Component {
    onPressButton() {
        // this.props.selectLibrary(this.props.selectedLibrary);
        return Actions.libraryDetail();
    }
    render() {
        const { title, description, content } = this.props.library;
        return (
            <TouchableOpacity
                onPress={this.onPressButton.bind(this)}
            >   
                <MediaCard
                    title={title}
                    description={description}
                >
                </MediaCard>
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
// const mapToStateProps = (state) => {
//     const selectedLibrary = state.selectedLibrary;
//     return selectedLibrary;
// };
//make this component available to the app
// export default connect(mapToStateProps, { selectLibrary })(LibraryItem);
export default LibraryItem;
