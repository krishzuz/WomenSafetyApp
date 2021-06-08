import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function Splash({}) {
  return (
    <View style={style.container}>
      <View>
        <View>
          <Image source={require('../Pictures/logo.png')} />
        </View>
      </View>
      <View style={style.container2}>
        <Text style={style.logoText}> Women Safety </Text>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    backgroundColor: '#FF2E63',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  container2: {},
  logoText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
});
