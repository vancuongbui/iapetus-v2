//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView } from 'react-native';
// import { connect } from 'react-redux';
import { Footer, RowView, } from '../common';
// import { selectLibrary } from '../../actions';

// create a component
class LibraryDetail extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        const article = [
            'This is the sentence 1 of the Dante Poem I',
            'This is the sentence 2 of the Dante Poem I',
            'This is the sentence 3 of the Dante Poem I',
            'This is the sentence 4 of the Dante Poem I',
            'This is the sentence 5 of the Dante Poem I',
            'This is the sentence 1 of the Dante Poem I',
            'This is the sentence 2 of the Dante Poem I',
            'This is the sentence 3 of the Dante Poem I',
            'This is the sentence 4 of the Dante Poem I',
            'This is the sentence 5 of the Dante Poem I',
            'This is the sentence 1 of the Dante Poem I',
            'This is the sentence 2 of the Dante Poem I',
            'This is the sentence 3 of the Dante Poem I',
            'This is the sentence 4 of the Dante Poem I',
            'This is the sentence 5 of the Dante Poem I',
        ];
        this.state = {
          dataSource: ds.cloneWithRows(article),
        };
    }
    // renderRow function
    renderRow(rowItem) {
        return <RowView rowItem={rowItem} />;
    }  
    render() {        
        return (
            <ListView
                enableEmptySections
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                renderFooter={() => <Footer />}
            >
            </ListView>
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
// const mapStateToProps = (state) => {
//     const library = state.selectedLibrary;
//     return { library };
// };

// //make this component available to the app
// export default connect(mapStateToProps, { selectLibrary })(LibraryDetail);
export default LibraryDetail;
