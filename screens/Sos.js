import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

import auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';
import firestore from '@react-native-firebase/firestore';
const Sos = () => {
  const display = async () => {
    const users = await firestore().collection('Users').get();
    const user = await firestore().collection('Users').doc('').get();
  };
  return (
    <View>
      <Text> send message</Text>
      <View>
        <TextInput secureTextEntry={true} placeholder="help message" />
        <Button title="Send users" />
      </View>
    </View>
  );
};

export default Sos;
