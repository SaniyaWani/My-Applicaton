import React,{Component}from 'react';
import { View,Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';
    
import {createDrawerNavigator} from 'react-navigation-drawer';
import customSidebarMenu from './customSidebarMenu';

import {Icon} from 'react-native-elements';
import HomeScreen from '../Screens/HomeScreen';
import info from '../Screens/info';


export const SideDrawer = createDrawerNavigator({
    Home:{
        screen : HomeScreen,
        navigationOptions:{
            drawerIcon : <Icon name="home" type ="fontawesome5" />
          }
        },

        infor:{
            screen:info
        }
       
        
        
        
    },
        {
            contentComponent: customSidebarMenu
        },
        {
          initialRouteName : 'Home'
        }
      );