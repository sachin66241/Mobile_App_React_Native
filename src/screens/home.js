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
  Alert,StatusBar
} from 'react-native';

import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import FormData from 'FormData';
import styles from "../css/styles";

export default class HomeScreen extends React.Component {
   
    state= {receiver:"", amount:"",username:"",balance:""}



    constructor(props) {
        
      super(props);
      this.state = {
        balance: null,
        username: null
        
      };
      
    }
    Transfer(){
        var details = {
            "from":"Org2MSP."+this.state.username,
            "to":"Org2MSP."+this.state.receiver,
            "amount":this.state.amount
        };
        
        var formBody = [];
        for (var property in details) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
      
        console.log("formBody",formBody)
        
        fetch('http://45.33.78.184:3000/invoke/transfer-token', {
          method: 'POST',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formBody
        }).then((response) => {
              //console.log("Response:",response);
             
             console.log(this.state.balance);
             console.log(this.state.amount)
             var bal = (this.state.balance - this.state.amount)
             console.log(bal)
             this.setState({
                balance:bal
              })
             
              Alert.alert('Transaction sucessful');
              }).catch((error) => {
                console.log(error)
                Alert.alert('problem with transfer');
              })
              .done();
      
      


    }
  

    componentDidMount(){
     
      console.log(this.props.navigation.state.params.id)
  
      return fetch('http://45.33.78.184:3000/query/get-balance/Org2MSP.'+this.props.navigation.state.params.id)
      .then((response)=> response.json())
      .then((responseJson)=>{
        console.log('hhee',JSON.stringify(responseJson))
  
        this.setState({
          balance:responseJson,
          username:this.props.navigation.state.params.id
        })
      })
      .catch((error)=>{
          console.log(error)
      });
    }
    
    render() {
  
      if(this.state.balance == null){
        return(
          <View style={styles.container}>
              <ActivityIndicator/>
          </View>
      )
          
      }else{
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>

          
      
       
              
           <View style={{flex:1, backgroundColor:"white"}}>
              <Text style={{fontSize:25}}>BALANCE:</Text>
              <Text style={{textAlign: 'right', alignSelf: 'stretch',fontSize:30,alignItems:"flex-start"}}>{this.state.balance}</Text>
             
              
              </View>
              <View style={{flex:3,backgroundColor:"skyblue"}}>
                <Text style={{fontSize:25}}>TRANSFER</Text>
                <TextInput style={{ margin: 15,
                        height: 30,
                        borderColor: '#7a42f4',
                        borderWidth: 3}}
                        placeholder="Enter username"
                        onChangeText={receiver => this.setState({ receiver })}/>
                <TextInput style={{ margin: 15,
                        height: 30,
                        borderColor: '#7a42f4',
                        borderWidth: 3}}
                        placeholder="Amount"
                        onChangeText={amount => this.setState({ amount })}/>
                <Button style={{margin:10}}
                        title="OK"
                        onPress={()=>this.Transfer()}/>
              </View>
          </View>
        );
  
      }
      
    }
  }

  HomeScreen.navigationOptions={  
    tabBarIcon:({tintColor, focused})=>(
          
    <Icon  
        name={focused ? 'ios-home' : 'md-home'}  
        color={tintColor}  
        size={25}  
    /> 
     
)  
}  
  