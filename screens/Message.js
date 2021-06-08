import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
    };
  }
  message = (text) => {
    this.setState({message: text});
  };
  send = () => {
    fetch('http://192.168.43.25:3001/firebase/notification', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: this.state.message,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.image}
            source={require('../Pictures/logo.png')}
          />
        </View>
        <View>
          <Text style={styles.sosText}> SOS Message </Text>
        </View>
        <View style={styles.container2}>
          <TextInput
            style={styles.input}
            placeholder="Enter SOS Message"
            onChangeText={this.message}
          />
          <TouchableOpacity onPress={this.send}>
            <Image
              style={styles.send}
              source={require('../Pictures/send.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.sosMessage}>
          <TouchableOpacity style={styles.roundButton1}>
            <Text> content 1 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton1}>
            <Text> content 2 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton1}>
            <Text> content 3 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton1}>
            <Text> content 4 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton1}>
            <Text> content 5 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton1}>
            <Text> content 6 </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity>
            <Text
              style={styles.submit}
              onPress={() => this.props.navigation.navigate('Main')}>
              SEND
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FF2E63',
  },
  image: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginTop: 50,
  },
  sosText: {
    textAlign: 'center',
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    margin: 15,
  },
  input: {
    backgroundColor: '#fff',
    width: 252,
    height: 40,
    alignSelf: 'center',
    borderRadius: 10,
  },
  container2: {
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderColor: '#000',
    width: 252,
    height: 40,
    borderRadius: 5,
  },
  send: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  roundButton1: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    padding: 10,
    alignItems: 'center',
    margin: 10,
    borderRadius: 100,
    backgroundColor: '#fff',
    opacity: 0.9,
  },
  sosMessage: {
    width: '90%',
    marginTop: '15%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    flexWrap: 'wrap',
  },
  btn: {
    alignSelf: 'center',
    marginTop: '15%',
  },
  submit: {
    fontSize: 15,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#000',
    backgroundColor: '#fff',
    width: 200,
    borderRadius: 10,
    padding: 10,
  },
});

export default Message;
