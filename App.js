import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Map from './screens/Map';
import Emergency from './screens/Emergency';
import ContactList from './screens/ContactList';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Splash from './screens/Splash';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Message from './screens/Message';
import Sos from './screens/Sos';
import Main from './screens/Main';

// const Tabs = createBottomTabNavigator();

const Tab = createMaterialBottomTabNavigator();
export default function ButtonNavigator() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToke, setUserToken] = React.useState('asd');
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  if (isLoading) {
    return <Splash />;
  }

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Message" component={Message} />
        <Stack.Screen name="sos" component={Sos} />
      </Stack.Navigator>
      {/* <Tab.Navigator
        initialRouteName="Map"
        activeColor="#fff"
        barStyle={{
          backgroundColor: '#FF2E63',
          height: 70,
          display: 'flex',
          justifyContent: 'center',
        }}>
        <Tab.screen
          name="Home"
          component={Map}
          options={{
            tabBarLabel: <Text style={{fontSize: 17}}> Home </Text>,

            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="home"
                color={(color = 'white')}
                size={28}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          activeColor="#fff"
          component={Profile}
          options={{
            tabBarLabel: <Text style={{fontSize: 17}}> Profile </Text>,
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="account"
                color={(color = 'white')}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Contacts"
          activeColor="#fff"
          component={ContactList}
          options={{
            tabBarLabel: <Text style={{fontSize: 17}}> Contacts </Text>,
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="contacts"
                color={(color = 'white')}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Emergency"
          activeColor="#fff"
          component={Emergency}
          options={{
            tabBarLabel: <Text style={{fontSize: 17}}> Emergency </Text>,
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="police-badge"
                color={(color = 'white')}
                size={25}
              />
            ),
          }}
        />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
}
