import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import { SideDrawer } from './Components/SideDrawer';
import info from './Screens/info';
import HomeScreen from './Screens/HomeScreen';
import Lastdaystime from './Screens/Lastdaystime';
import Nextdaystime from './Screens/Nextdaystime';
export default function App() {
  return (
    <AppContainer/>
      
  );
}

const switchNavigator = createSwitchNavigator({
  Drawer : {screen: SideDrawer},
 HomeScreen:{screen: HomeScreen},

  Lastdaystime : {screen:Lastdaystime},
  Nextdaystime : {screen:Nextdaystime}
})

const AppContainer = createAppContainer(switchNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
