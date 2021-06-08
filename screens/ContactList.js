import React, {Component} from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Button,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Modal from 'react-native-modal';

export default class ContactList extends Component {
  state = {
    modalVisible: false,
  };
  constructor() {
    super();
    this.state = {
      data: [],
      userName: '',
      userMail: '',
      userMobile: '',
    };
  }

  fetchData = async () => {
    let resp = await fetch('http://192.168.43.25:3001/add');
    let datas = await resp.json();
    this.setState({data: datas});
    console.log(this.state.data);
  };

  componentDidMount() {
    this.fetchData();
  }

  userName = (text) => {
    this.setState({userName: text});
  };
  userMail = (text) => {
    this.setState({userMail: text});
    // console.warn(this.state.userMail);
  };
  userMobile = (text) => {
    this.setState({userMobile: text});
  };

  add = () => {
    let collections = {
      userName: this.state.userName,
      userMail: this.state.userMail,
      userMobile: this.state.userMobile,
    };
    console.log(collections);

    fetch('http://192.168.43.25:3001/add', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: this.state.userName,
        userMail: this.state.userMail,
        userMobile: this.state.userMobile,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };
  render() {
    const {modalVisible} = this.state;
    return (
      <View style={styles.container1}>
        <View style={styles.header}>
          <Image
            style={{width: 50, height: 50, alignSelf: 'center', margin: 25}}
            source={require('../Pictures/logo.png')}
          />
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 24,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            Contacts
          </Text>
        </View>
        <FlatList
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={styles.list}>
              <Text style={{fontSize: 16, margin: 5}}> ID: {item.userid} </Text>
              <Text style={{fontSize: 16, margin: 5}}>
                Name: {item.userName}
              </Text>
              <Text style={{fontSize: 16, margin: 5}}>
                Number: {item.userMobile}
              </Text>
              <Text style={{fontSize: 16, margin: 5}}>
                Mail - Id: {item.userMail}
              </Text>
            </View>
          )}
        />
        <View>
          <TouchableOpacity
            style={{alignSelf: 'center'}}
            onPress={() => this.setModalVisible(true)}>
            <Image source={require('../Pictures/Ellipse.png')} />
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}>
          <View style={styles.Modal}>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: '#FF2E63'}}>
              New Contact
            </Text>
            <View style={styles.modalView}>
              <TextInput
                style={styles.input}
                placeholder="Enter User Name"
                onChangeText={this.userName}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter User Mobile"
                onChangeText={this.userMobile}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter User Mail"
                onChangeText={this.userMail}
              />
              <View style={styles.Button}>
                <Pressable
                  style={styles.closeBtn}
                  onPress={() => this.setModalVisible(!modalVisible)}>
                  <Text style={{color: '#fff', fontSize: 15}}> close </Text>
                </Pressable>
                <TouchableOpacity
                  style={styles.submitButton}
                  onPress={() =>
                    this.add(
                      this.state.userName,
                      this.state.userMobile,
                      this.state.userMail,
                    )
                  }>
                  <Text style={{color: '#fff', fontSize: 15}}> update </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container1: {
    height: '100%',
    width: '100%',
    backgroundColor: '#FF2E63',
  },
  Modal: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
  },
  Button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  input: {
    margin: 10,
    borderBottomWidth: 1,
    opacity: 0.5,
    padding: 0,
  },
  submitButton: {
    backgroundColor: '#FF2E63',
    padding: 10,
    color: '#fff',
    borderRadius: 10,
  },
  closeBtn: {
    backgroundColor: '#FF2E63',
    padding: 10,
    borderRadius: 10,
  },
  list: {
    alignSelf: 'center',
    width: '60%',
    padding: 15,
    backgroundColor: '#fff',
    marginTop: 15,
    borderRadius: 15,
  },
  header: {
    display: 'flex',
    alignSelf: 'center',
  },
});
