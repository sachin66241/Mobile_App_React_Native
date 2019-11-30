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



export default class IndexScreen extends React.Component{
    static navigationOptions = {
      header: null
  }
    render(){
      return(
     
      <View style={styles.container}>
      <Text style={styles.headerText}>WELCOME TO CYBROSYS</Text>
  
  
      <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
        <Button
          onPress={()=>this.props.navigation.navigate('Login')}
          title="LOGIN"
          color="#00FF00"
        />
      </View>
  
      <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
        <Button
          onPress={()=>this.props.navigation.navigate('Signup')}
          title="SIGNUP"
          color="#FF3D00"
        />
      </View>
   
    </View>
  
      )
    }
  
   
  }

  