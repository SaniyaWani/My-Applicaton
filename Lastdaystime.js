import React, { Component } from 'react';

import {
    View,
    FlatList,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Image,
    ScrollView,
    PermissionsAndroid
} from 'react-native';
import { Icon } from 'react-native-elements';
import MyHeader from '../Components/MyHeader';




export default class Lastdaystime extends Component {

    constructor() {
        super()
        this.state = {
            fetchedInformation: [],
            fetchedInfo:[],
            hasCameraPermissions:null
        }
    }

    componentDidMount() {
    //  this.getlocation()
      
         this.getTime()
    
    }
  

    getTime = async () => {
        var today = new Date();
        var date = today.getDate();
       
        var month = today.getMonth() + 1;
       
        var year = today.getFullYear();
     

        await fetch('http://api.aladhan.com/v1/calendar?latitude=20.5937&longitude=78.9629&method=2&month=' + month + '&year=' + year + '')
            .then(response => response.json())
            .then(data => {
                
                this.setState({ 
                    fechtedInfo:data.data[date - 2].hijri,
                    fetchedInformation: data.data[date - 2].timings 
                })
            })
            .catch(err => {
               
                this.setState({ 
                    fetchedInformation: 'API Failed',
                    fechtedInfo:'API Failed'
                 })
            })
           

    }
    
    componentWillUnmount() {
        this.setState({ fetchedInformation: null })
    }


    render() {
     
        return (
            <View style={{flex:1}}>
                 {/* <MyHeader title="Islamic Prayer Time"  navigation = {this.props.navigation}/>   */}
                <View>
                    <Text>Islamic Date</Text>
                    
                    <Text>{this.state.fetchedInfo["date"]}</Text>
                    </View>
            <View style={styles.whole}>
                <View style={styles.textstyle,{alignItems:'center',flexDirection: 'row'}}>
                    <Text style={{ fontSize: 40 }}>Yesterday's Time</Text>
                    <Icon name="arrow-right" size={20} color="black" type="entypo" size={35}
                onPress={() =>this.props.navigation.navigate('HomeScreen')}/>
                </View>
               
                <View style={styles.textstyle}>
                    <Text style={{ fontSize: 22 }}>Fajr         :{this.state.fetchedInformation["Fajr"]}</Text>
                </View>

                <View style={styles.textstyle}>
                    <Text style={{ fontSize: 22 }}>Sunrise  :{this.state.fetchedInformation["Sunrise"]}</Text>
                    
                </View>

                <View style={styles.textstyle}>
                    <Text style={{ fontSize: 22 }}>Dhuhr     :{this.state.fetchedInformation["Dhuhr"]}</Text>
                </View>

                <View style={styles.textstyle}>
                    <Text style={{ fontSize: 22 }}>Asr          :{this.state.fetchedInformation["Asr"]}</Text>
                </View>

                <View style={styles.textstyle}>
                    <Text style={{ fontSize: 22 }}>Maghrib :{this.state.fetchedInformation["Maghrib"]}</Text>
                </View>

                <View style={styles.textstyle}>
                    <Text style={{ fontSize: 22 }}>Isha        :{this.state.fetchedInformation["Isha"]}</Text>
                </View>
            </View>
        </View>    
        );
    }
}

const styles = StyleSheet.create({
    whole:{
        width: 280,
        height:400,
        // alignSelf:'center',
        paddingTop:100,
    },

    textstyle:{
        height:50,
        borderWidth:3 ,
        width: 280,
        borderColor:'rgb(0,107,0)',
        flexDirection: 'row', 
    }

   
       
})