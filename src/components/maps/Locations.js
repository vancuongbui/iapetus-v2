import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
// import mapview
import MapView from 'react-native-maps';
import { Card, CardSection, Label, Button, } from '../common';

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
        focusedLocation: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            // latitude: -37.814,  //melbourne CBD, Australia
            // longitude: 144.96332,
            // latitudeDelta: 0.0122,
            // // longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height * 0.0122,
            // just about how much you want to move on the map at a time
        },
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Card>
            <CardSection>
                <MapView 
                    initialRegion={this.state.focusedLocation}
                    style={styles.mapStyle}
                />
            </CardSection>
            <CardSection>
                <Button 
                    onPress={() => alert('location')}
                    style={styles.btnStyle}
                >
                    Locate me
                </Button>
            </CardSection>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {

    },
    btnStyle: {
        
    },
    mapStyle: {
        flex: 1,
        width: '100%',
    }
});

