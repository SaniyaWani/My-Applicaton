import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView} from 'react-native';

import {DrawerItems} from 'react-navigation-drawer'






export default class customSidebarMenu extends Component{
    render(){
        return(
            <View style ={{flex:1}}>
                <View style ={styles.drawerItemsContainer}>
                  <Image source={require('../assets/Islamic flag.jpg')} style={styles.image}/>
<DrawerItems {...this.props}/>
                </View>
               

                </View>
        );
    }
}


var styles = StyleSheet.create({
    container : {
      flex:1
    },
    drawerItemsContainer:{
      flex:0.8
    },
    image:{
      width:'100%',
      height:'35%'
    },
    logOutContainer : {
      flex:0.2,
      justifyContent:'flex-end',
      paddingBottom:30
    },
    logOutButton : {
      height:30,
      width:'100%',
      justifyContent:'center',
      padding:10
    },
    logOutText:{
      fontSize: 30,
      fontWeight:'bold'
    }
  })