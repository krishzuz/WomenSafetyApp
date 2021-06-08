import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  Content,
} from 'react-native';
import auth from '@react-native-firebase/auth';

export class Signup extends Component {
  constructor() {
    super();

    this.state = {
      Email: null,
      password: null,
    };
  }
  Email = (text) => {
    // console.warn(text);
    this.setState({Email: text});
  };
  password = (text) => {
    // console.warn(text);
    this.setState({password: text});
  };
  register = async () => {
    try {
      const doRegister = await auth().createUserWithEmailAndPassword(
        this.state.Email,
        this.state.password,
        console.log(doRegister),
      );

      if (doRegister.user) {
        this.props.navigation.navigate('Main');
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  render() {
    return (
      <View>
        <View>
          <Image
            style={style.image1}
            source={require('../Pictures/header1.png')}
          />
        </View>
        <View>
          <Image
            style={style.image}
            source={require('../Pictures/header2.png')}
          />
        </View>
        <View>
          <Image
            style={style.image2}
            source={require('../Pictures/header3.png')}
          />
        </View>
        <View>
          <Text style={style.title}>Create Account</Text>
        </View>
        <View>
          <TextInput
            style={style.input}
            value={this.state.text}
            onChangeText={this.Email}
            placeholder="Email or Phonenumber"
          />
        </View>
        <View>
          <TextInput
            style={style.input1}
            secureTextEntry={true}
            placeholder="Password"
            value={this.state.password}
            onChangeText={this.password}
          />
        </View>

        <View style={style.container}>
          <TouchableOpacity>
            <Text style={style.containertext} onPress={this.register}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Signup;
const style = StyleSheet.create({
  image1: {
    position: 'absolute',
    zIndex: 999,
  },
  image2: {
    position: 'absolute',
    top: -250,
    zIndex: 998,
  },
  title: {
    position: 'absolute',
    left: 130,
    top: -80,
    fontSize: 25,
  },
  input: {
    alignSelf: 'center',
    backgroundColor: '#EAEAEA',
    margin: 10,
    padding: 15,
    color: 'black',
    borderRadius: 20,
    width: 312,
    height: 44,
  },
  input1: {
    alignSelf: 'center',
    backgroundColor: '#EAEAEA',
    margin: 10,
    padding: 15,
    color: 'black',
    borderRadius: 20,
    width: 312,
    height: 44,
  },
  input2: {
    alignSelf: 'center',
    backgroundColor: '#EAEAEA',
    margin: 10,
    padding: 15,
    color: 'black',
    borderRadius: 20,
    width: 312,
    height: 44,
  },

  container: {
    alignSelf: 'center',

    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containertext: {
    display: 'flex',
    padding: 15,
    fontSize: 25,
    textAlign: 'center',
    color: '#000',
  },
});

// const styles = StyleSheet.create({});
