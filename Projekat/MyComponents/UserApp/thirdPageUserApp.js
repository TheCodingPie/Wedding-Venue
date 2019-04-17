import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';


export default class ThirdPageScreenUserApp extends React.Component {
  static navigationOptions={

    header:null
  }
    
    render() {
     
  
      return (
        <View style={styles.form}>
       
       <Button title='Third Page!' onPress={() => this.props.navigation.navigate('UserAppFourthPage')} />
      </View>
      );
    }
  }
  


  const styles = StyleSheet.create({
    form: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      
        backgroundColor: '#ecb3ff',
      },

     textinput:{
      flex:0.6,
      backgroundColor: '#edd7f4',
     
      justifyContent: 'center',
      height:40,
      marginLeft:10,
      },
      text:{
        flex:0.3,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 14,
        height:20,
       },
      container:{
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        backgroundColor: '#ecb3ff',
      },
     
});