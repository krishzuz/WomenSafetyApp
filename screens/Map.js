import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  NativeModules,
  PermissionsAndroid,
  AppFooter,
} from 'react-native';

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
navigator.geolocation = require('@react-native-community/geolocation');

class Map extends React.Component {
  constructor() {
    super();

    this.state = {
      ready: false,
      where: {lat: 13.0827, lng: 80.0689274},
      error: null,
      latitude: 13.0827,
      longitude: 80.0689274,
    };
  }

  componentDidMount() {
    let geoOptions = {
      enableHighAccuracy: true,
    };

    this.setState({ready: false, error: null});
    navigator.geolocation.getCurrentPosition(
      this.geoSuccess,
      this.geoFailure,
      geoOptions,
    );
  }

  geoSuccess = (position) => {
    this.setState({
      ready: true,
      where: {lat: position.coords.latitude, lng: position.coords.longitude},
    });
  };
  geoFailure = (err) => {
    this.setState({error: err.message});
  };

  latitude = (value) => {
    this.setState({latitude: value});
  };

  longitude = (value) => {
    this.setState({longitude: value});
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showUserLocation
          followUserLocation
          loadingEnabled
          region={{
            latitude: this.state.where.lat,
            longitude: this.state.where.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: this.state.where.lat,
              longitude: this.state.where.lng,
            }}
          />
        </MapView>
        <View>
          <TouchableOpacity
            style={styles.roundButton1}
            onPress={() => this.props.navigation.navigate('Message')}>
            <Text style={styles.sosText}>SOS</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  btn: {
    position: 'absolute',
    width: 150,
    height: 150,
    top: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#FF2E63',
  },
  text: {
    fontSize: 25,
  },
  roundButton1: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#FF2E63',
    opacity: 0.9,
  },
  sosText: {
    fontSize: 24,
  },
});

export default Map;
// latitude: parseFloat(this.state.latitude),
// longitude: parseFloat(this.state.longitude),
