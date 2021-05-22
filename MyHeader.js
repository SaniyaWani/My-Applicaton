import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyleSheet ,Alert} from 'react-native';


export default class MyHeader extends Component{
constructor(props) {
  super(props)
  this.state={
    value:""
  }
}





render(){
  return (
    <Header
          leftComponent={<Icon name='bars' type='font-awesome' color='#696969'  onPress={() => this.props.navigation.toggleDrawer()}/>}
          centerComponent={{ text: this.props.title, style: { color: 'white', fontSize:20,fontWeight:"bold", } }}
          // rightComponent={<Icon name='rightArrow' type='font-awesome' color='#696969'/>}
          backgroundColor = "rgb(1,63,27)"
        />
  )

  }
}


