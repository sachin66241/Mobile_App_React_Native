import React from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
  ImageBackground,
  Dimensions,
  ActivityIndicator,
  Alert,StatusBar
} from 'react-native';

import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import FormData from 'FormData';
import IndexScreen from "./src/screens/index";  
import LoginScreen from "./src/screens/login"
import SignupScreen from "./src/screens/signup"
import HomeScreen from "./src/screens/home"
import SettingsScreen from "./src/screens/settings"
import styles from "./src/css/styles";



class MainScreen extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      isLoading:true,
      dataSource:null,
    }
  }

  componentDidMount(){

    return fetch('http://45.33.78.184:3000/db/users')
    .then((response)=> response.json())
    .then((responseJson)=>{

      this.setState({
        isLoading:false,
        dataSource:responseJson
      })
    })
    .catch((error)=>{
        console.log(error)
    });

  }
  
  render(){

    if(this.state.isLoading){

      return(
          <View style={styles.container}>
              <ActivityIndicator/>
          </View>
      )
    }else {

      let movies = this.state.dataSource.map((val,key)=>{
          return <View key={key} style={styles.item}>
                  <Text>{val.email}</Text>
          </View>
      })
            return(
              <View style={styles.container}>
                {movies}
              </View>
              
            )
     }
  }
}






const TabNavigator = createMaterialTopTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
},  {  
  tabBarOptions: {  
      activeTintColor: 'white',  
      showIcon: true,  
      showLabel:true,  
      style: {  
          backgroundColor:'red'  
      }  
  }  
});


const RootStack = createStackNavigator({
  Index:IndexScreen,
  Main:MainScreen,
  Login:LoginScreen,
  Signup:SignupScreen,
  Home: TabNavigator // tab navigator
 
},{initialRouteName:'Index',header: null,
headerMode: 'none'})




const AppContainer = createAppContainer(RootStack)



export default class App extends React.Component {
  render() {
    return (
      
      <AppContainer/>
               
              
       
    );
  }
}

