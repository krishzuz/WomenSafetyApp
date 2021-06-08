import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Profile from './Profile';
import Map from './Map';
import Emergency from './Emergency';
import ContactList from './ContactList';
import Chat from './Chat';
const Tab = createMaterialBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      activeColor="#fff"
      barStyle={{
        backgroundColor: '#FF2E63',

        height: 60,
        display: 'flex',
        justifyContent: 'center',
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: <Text style={{fontSize: 15}}> Home </Text>,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="home"
              color={(color = 'white')}
              size={26}
            />
          ),
        }}
        name="home"
        component={Map}
      />
      <Tab.Screen
        name="Notifications"
        activeColor="#fff"
        component={Profile}
        options={{
          tabBarLabel: <Text style={{fontSize: 15}}> Profile </Text>,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="account"
              color={(color = 'white')}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contacts"
        activeColor="#fff"
        component={ContactList}
        options={{
          tabBarLabel: <Text style={{fontSize: 15}}> Contacts </Text>,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="contacts"
              color={(color = 'white')}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Emergency"
        activeColor="#fff"
        component={Emergency}
        options={{
          tabBarLabel: <Text style={{fontSize: 15}}> Emergency </Text>,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="police-badge"
              color={(color = 'white')}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="chat"
        activeColor="#fff"
        component={Chat}
        options={{
          tabBarLabel: <Text style={{fontSize: 15}}> Chat </Text>,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="chat"
              color={(color = 'white')}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
