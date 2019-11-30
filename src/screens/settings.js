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
import Icon from 'react-native-vector-icons/Ionicons';
import FormData from 'FormData';
import styles from "../css/styles";

export default class SettingsScreen extends React.Component {
    

    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Settings!</Text>
        </View>
      );
    }
  }

  SettingsScreen.navigationOptions={  
    tabBarIcon:({tintColor, focused})=>(  
        <Icon  
            name={focused ? 'ios-settings' : 'md-settings'}  
            color={tintColor}  
            size={25}  
        />  
    )  
}  
  