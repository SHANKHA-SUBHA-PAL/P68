import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import Fb from './Screens.js/FB'
import Insta from './Screens.js/INSTA'

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default function App() {
  return (
    <SafeAreaProvider>
   <AppContainer/>
   </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const TabNavigator = createBottomTabNavigator({
Facebook:{
  screen:Fb,
  navigationOptions:{
    tabBarIcon:<Image source={require('./assets/fb1.jpg')} style={{height:30,width:30}}/>,
  }
},
Instagram:{
  screen:Insta,
  navigationOptions:{
    tabBarIcon:<Image source={require('./assets/insta.png')} style={{height:30,width:30}}/>,
  }
}
})

const AppContainer = createAppContainer(TabNavigator);