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

export default class SignupScreen extends React.Component {
    state = { name: '', email: '', password: '' , username: '' };
  
    addUser(name){
  
      console.log("im at adduser function",name)
  
      var details = {
        "username": name
    };
    
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
  
    console.log("formBody",formBody)
    
    fetch('http://45.33.78.184:3000/admin/register-user', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formBody
    }).then((response) => {
          console.log("Response:",response);
          Alert.alert('Registration of user in block is success');
          }).catch((error) => {
            console.log(error)
            Alert.alert('problem while adding datavvvvvvvvv');
          })
          .done();
  
  
    }
   
  
    updateValue(names,emails,passwords,usernames){
            console.log("my name",this.state.username)
            var url = 'http://45.33.78.184:3000/query/check-user/Org2MSP.'+usernames ;
            console.log(url)
           fetch(url).then((response)=> response.json())
            .then((responseJson)=>{
              console.log("imm",responseJson)
              if(responseJson){//true
                console.log("imm not available")
                Alert.alert('Username is already taken!!');
              }else{ //false
                console.log("imm available..adding to db")
                ////////////////////////
                    var details = {
                      'name': this.state.name,
                      'email': this.state.email,
                      'password': this.state.password,
                      'username' : this.state.username
                  };
                  
                  var formBody = [];
                  for (var property in details) {
                    var encodedKey = encodeURIComponent(property);
                    var encodedValue = encodeURIComponent(details[property]);
                    formBody.push(encodedKey + "=" + encodedValue);
                  }
                  formBody = formBody.join("&");
                  
                  fetch('http://45.33.78.184:3000/db/datas', {
                    method: 'POST',
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                  },
                  body: formBody
                  })  
                  .then((response) => response.json())
                          .then((responseData) => {
                              console.log("Response:",responseData);
                              //Alert.alert('Registration Successful');
                              this.addUser(this.state.username)
  
                          }).catch((error) => {
                                  Alert.alert('problem while adding data');
                              })
                          .done();
                /////////////////////////
  
              }
  
            }).catch((error) => {
              Alert.alert('problem while adding data');
          })
      
     
  
            
    }
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>WELCOME TO SIGNUP PAGE</Text>
          <View style={{margin:-10,width:'70%'}}>
          <TextInput
            style={{ margin: 15,
              height: 30,
              borderColor: '#7a42f4',
              borderWidth: 3}}
            placeholder="Name"
            onChangeText={name => this.setState({ name })}/>
          </View>
          <View style={{margin:-10,width:'70%'}}>
          <TextInput
            style={{ margin: 15,
              height: 30,
              borderColor: '#7a42f4',
              borderWidth: 3}}
              placeholder="Email"
            onChangeText={email => this.setState({ email })}/>
          </View>
          <View style={{margin:-10,width:'70%'}}>
          <TextInput
            style={{ margin: 15,
              height: 30,
              borderColor: '#7a42f4',
              borderWidth: 3}}
            placeholder="Password"
            onChangeText={password => this.setState({ password })}/>
          </View>
          <View style={{margin:-10,width:'70%'}}>
          <TextInput
            style={{ margin: 15,
              height: 30,
              borderColor: '#7a42f4',
              borderWidth: 3}}
            placeholder="Username"
            onChangeText={username => this.setState({ username })}/>
          </View>
          <Button style={{margin:10}}
            title="OK"
            onPress={() =>this.updateValue(this.state.name, this.state.email, this.state.password, this.state.username) }
          />
          
          
          
          
          
        </View>
  
        
        
      );
    }
  }
  