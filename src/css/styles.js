import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF"
    },
    item:{
      flex:1,
      alignSelf:'stretch',
      margin:10,
      justifyContent: "center",
      alignItems: "center",
      borderBottomWidth:1,
      borderBottomColor:'#eee'
      
  
    },
    headerText: {
      fontSize: 20,
      textAlign: "center",
      margin: 10,
      fontWeight: "bold"
    },
    wrapper: {  
        flex: 1,  
    },  
    header:{  
        flexDirection: 'row',  
        alignItems: 'center',  
        justifyContent: 'space-between',  
        backgroundColor: 'red',  
        paddingHorizontal: 18,  
        paddingTop: 5,  
    }  
    
    
   
  });

  module.exports = styles;