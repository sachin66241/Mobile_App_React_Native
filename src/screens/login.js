import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ImageBackground,
  Dimensions,
  ActivityIndicator,
  Alert
} from 'react-native';

import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FormData from 'FormData';
import styles from "../css/styles";



export default class LoginScreen extends React.Component {

   
    state = { text: '', pas: '' };
  
    Login(){
        
  
       var details = {
            "username": this.state.text,
            "password":this.state.pas
        };
        
        var formBody = [];
        for (var property in details) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
  
        console.log("formBody",formBody)
        
        fetch('http://45.33.78.184:3000/db/login', {
          method: 'POST',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formBody
        }).then((response)=> response.json())
        .then((responseJson)=>{
              console.log("Response:",responseJson);
              if(responseJson.length>0){
                //Alert.alert('Success');
                
                    this.props.navigation.navigate('Home', {
                      id: this.state.text,
                      pasid: this.state.pas,
                    })
                   
              }
              else{
                Alert.alert('Invalid Login Credentials');
                // this.props.navigation.navigate('Home', {
                //   id: this.state.text,
                //   pasid: this.state.pas,
                // })
              }
             
  
              }).catch((error) => {
                console.log(error)
                Alert.alert('problem while adding datavvvvvvvvv');
              })
              .done();
  
  
  
  
    }
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  
          <Text style={styles.headerText}>WELCOME TO LOGIN PAGE</Text>
          <View style={{margin:-10,width:'70%'}}>
          <TextInput
            style={{ margin: 15,
              height: 30,
              borderColor: '#7a42f4',
              borderWidth: 3}}
            placeholder="Username"
            onChangeText={text => this.setState({ text })}/>
          </View>
          
          <View style={{margin:-10,width:'70%'}}>
          <TextInput
            style={{ margin: 15,
              height: 30,
              borderColor: '#7a42f4',
              borderWidth: 3 }}
            placeholder="Password"
            onChangeText={pas => this.setState({ pas })}/>
          </View>
  
          <Button style={{margin:10}}
            title="OK"
            onPress={()=>this.Login()}
            // onPress={() =>
            //   this.props.navigation.navigate('Main', {
            //     id: this.state.text,
            //     pasid: this.state.pas,
            //   })
            // }
          />
        </View>
      );
    }
  }
  