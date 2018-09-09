//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, } from "react-native";
import { Scene, Router, Stack, Actions } from "react-native-router-flux";
import { Icon } from 'react-native-elements';
import Login from "./Login";
import Home from "./Home";
import Register from './Register';
import EmployeeList from './components/employees/EmployeeList';
import EmployeeCreate from './components/employees/EmployeeCreate';
import LibraryDetail from "./components/apps/LibraryDetail";
import { TestView } from './components/common';
import EmployeeEdit from './components/employees/EmloyeeEdit';

// create a component
const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key="auth" navigationBarStyle={styles.header} titleStyle={styles.navTitle}>
          <Scene
            key="login"
            component={Login}
            title="IAPETUS LOGIN"  
            initial                      
          />
          <Scene           
            key="register"
            component={Register}
            title="IAPETUS REGISTERING"          
          />
        <Scene key="employee" navigationBarStyle={styles.header} titleStyle={styles.navTitle}>
          <Scene              
              key="employeeList"
              component={EmployeeList}
              title="IAPETUS EMPLOYEE LIST"  
              renderLeftButton={LeftMenuIcon}
              renderRightButton={RightMenuIcon}
               
          />
          <Scene              
              key="employeeCreate"
              component={EmployeeCreate}
              title="IAPETUS CREATE EMPLOYEE"           
          />
          <Scene              
              key="employeeEdit"
              component={EmployeeEdit}
              title="IAPETUS UPDATE EMPLOYEE"           
          />
        </Scene> 
        </Scene>
        <Scene key="main" navigationBarStyle={styles.header} titleStyle={styles.navTitle}>
          <Scene             
            key="home" 
            component={Home} 
            title="ITalian Poems" 
            rightTitle="Add"
            renderLeftButton={LeftMenuIcon}
            renderRightButton={RightMenuIcon}
          />
          <Scene           
            key="libraryDetail"
            component={LibraryDetail}
            title="Article Detail"          
          />
          <Scene           
            key="testView"
            component={TestView}
            title="Article Detail"          
          />
        </Scene>
      </Stack>
    </Router>
  );
};

// define leftIcon
const LeftMenuIcon = () => {
  return (
      <TouchableOpacity style={styles.leftIcon}>
        <Icon
          name='menu'
          color='#FFFFFF'  
          size={30}           
        />
      </TouchableOpacity>
      
    );
};
const RightMenuIcon = () => {
  return (
      <TouchableOpacity style={styles.rightIcon} onPress={() => Actions.employeeCreate()}>
        <Icon
          name='search'
          color='#FFFFFF'  
          size={30}           
        />
      </TouchableOpacity>
      
    );
};
// define your styles
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#c83349',
  },
  navTitle: {
    color: "#FFFFFF",
    textAlign: 'center',
  },
  leftIcon: {
    marginLeft: 15,
  },
  rightIcon: {
    marginRight: 10,
  },
  arrorButton: {
    color: '#FFFFFF',
  }
});

//make this component available to the app
export default RouterComponent;
