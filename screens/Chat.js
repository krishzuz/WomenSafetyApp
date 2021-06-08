/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';

const Chat = () => {
  const [text, onChangeText] = React.useState('');
  const clickhabdler = () => {
    onChangeText('');
  };
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: '#FF2E63',
      }}>
      <Image
        style={{width: 50, height: 50, alignSelf: 'center', margin: 25}}
        source={require('../Pictures/logo.png')}
      />

      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
          color: '#fff',
        }}>
        Chat
      </Text>
      <TextInput
        style={{
          width: '100%',
          display: 'flex',
          alignSelf: 'center',
          color: '#000',
          position: 'absolute',
          bottom: 10,
          backgroundColor: '#fff',
        }}
        value={text}
        placeholder="Type Message"
        onChangeText={onChangeText}
      />

      <View
        style={{
          width: '100%',
          height: '100%',
        }}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            width: 15,
            height: 15,
            right: 15,
            bottom: 160,
            zIndex: 999,
          }}
          onPress={clickhabdler}>
          <Image source={require('../Pictures/send.png')} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: '#fff',

          borderRadius: 50,
          position: 'absolute',
          right: 15,
          bottom: 200,
        }}>
        <Text style={{color: '#000', padding: 15}}>Help</Text>
      </View>
      <View
        style={{
          backgroundColor: '#fff',

          borderRadius: 50,
          position: 'absolute',
          left: 15,
          bottom: 100,
        }}>
        <Text style={{color: '#000', padding: 15}}>I am on my way</Text>
      </View>
    </View>
  );
};

export default Chat;
