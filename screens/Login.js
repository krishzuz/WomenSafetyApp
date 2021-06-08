import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';
import firebase from '../firebase';

// import firebase from '@react-native-firebase/firestore';
// import firebase from '../firebase';

export class Login extends Component {
  constructor() {
    super();

    this.state = {
      Email: null,
      password: null,
      loading: false,
      Token: 'dwdwdw',
      pass: null,
    };
  }

  //setting up values
  Email = (text) => {
    // console.warn(text);
    this.setState({Email: text});
  };
  password = (text) => {
    // console.warn(text);
    this.setState({password: text});
  };
  login = async () => {
    this.setState({loading: true});
    messaging()
      .getToken()
      .then((token) => {
        this.setState({pass: token});
        console.log(this.state.pass);
      });

    //database
    const db = firebase.database().ref();
    db.push({
      Email: this.state.Email,
      password: this.state.password,
      pass: this.state.pass,
    });

    try {
      const doLogin = await auth().signInWithEmailAndPassword(
        this.state.Email,
        this.state.password,
        // console.log(JSON.stringify(doLogin)),
      );
      this.setState({loading: false});
      if (doLogin.user) {
        this.props.navigation.navigate('Main');
      }
    } catch (e) {
      this.setState({loading: false});
      console.log(e.message);
    }
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

  //  setting up token
  tok = () => {
    messaging()
      .getToken()
      .then((token) => {
        this.setState({pass: token});
        console.log('here is the token', this.state.pass);
      });
  };
  // gettingToken
  token = () => {
    console.log(this.state.token);
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={style.mainContainer}>
        <View style={style.imageContainer}>
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
        </View>
        <View>
          <Text style={style.title}> Welcome </Text>
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
        <View>
          <TouchableOpacity style={style.signin} onPress={this.login}>
            <Text style={style.signintxt}> Sign in </Text>
          </TouchableOpacity>
        </View>
        <View style={style.container}>
          <Text style={style.containertext}> Don't have an account?</Text>
          <TouchableOpacity>
            <Text
              style={style.signuptxt}
              onPress={() => this.props.navigation.navigate('Signup')}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default Login;

const style = StyleSheet.create({
  imageContainer: {
    display: 'flex',
  },
  mainContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
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
    top: -80,
    right: 0,
    left: 0,
    fontSize: 25,
    textAlign: 'center',
  },
  input: {
    alignSelf: 'center',
    padding: 15,
    // position: 'absolute',
    // left: 50,
    backgroundColor: '#EAEAEA',
    margin: 10,
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
  signin: {
    display: 'flex',
    alignSelf: 'center',
    fontSize: 25,
  },
  signintxt: {
    opacity: 10,
    fontSize: 25,
  },
  container: {
    // position: 'absolute',
    // bottom: 0,
    padding: 10,
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  containertext: {
    fontSize: 15,
  },
  signuptxt: {
    marginLeft: 10,
    color: '#FC5185',
  },
});
