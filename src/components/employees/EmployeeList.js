//import liraries
import React, { Component } from 'react';
// import lodash
import _ from 'lodash';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, ListView } from 'react-native';
import { Card, CardSection, Label, Footer, MediaBar, } from '../common';
import { employeeFetch, employeeCreate } from '../../actions';
import EmployeeItem from './EmployeeItem';

// create a component
class EmployeeList extends Component {
    constructor(props) {
        super(props);    
        this.state = { employees: this.props.employeeFetch() };
        // probly this employees is empty
        this.createDataSource(this.props);
    }
    // then, we need to update the data
    componentDidUpdate(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(employees);
    }
    // create a function to render row
    renderRow(employee) {
        return <EmployeeItem employee={employee} />;
    }
    
    render() {
        // console.log(this.props);
        return (
            <View style={styles.container}>
                <ListView
                    style={styles.listView}
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                    renderFooter={() => <Footer />}
                >
                </ListView>
                <MediaBar />
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
    listView: {
        flex: 1,
    }
});
// create map function
const mapStateToProps = state => {
    // using lodash to map object and convert it into array
    // assume that we have an object of data with unique id(uid) and value(val).
    const employees = _.map(state.employees, (val, uid) =>{
        return { ...val, uid };
        // expect result: { name: 'user 1, phone: '0411', language: 'English', id: 'ididdidi' }
    });
    return { employees };
};

//make this component available to the app
export default connect(mapStateToProps, { employeeFetch })(EmployeeList);
