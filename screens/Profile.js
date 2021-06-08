import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';

export default class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.edit}>
          <Image source={require('../Pictures/Group4.png')} />
        </View>
        <View>
          <Image source={require('../Pictures/Vector.png')} />
        </View>
        <View>
          <Text style={styles.text}>User Data</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF2E63',
  },
  edit: {
    position: 'absolute',
    top: '5%',
    right: '10%',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});
