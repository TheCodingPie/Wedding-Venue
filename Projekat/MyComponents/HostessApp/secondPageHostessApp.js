import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';

export default class FirstPageScreenHostessApp extends React.Component {
  static navigationOptions={

    header:null
  }
    constructor(){
       super()
       this.state={
         code:"",
         

         }

    }

    handleChangeTexCode=(newText)=>this.setState({code:newText});
   // handleChangeTextSurname=(newText)=>this.setState({surname:newText});
    
    btnUnesiPress=()=>
    {
        this.props.navigation.navigate('HostessAppThirdPage')
    };
     

render() {
    return (
       <View style={styles.form} >
           <View style={styles.container}> 
                <Text style={styles.text}>sifra porodice:</Text>
                <TextInput style={styles.textinput} onChangeText={this.handleChangeTextcode} /> 
            </View>
           
           <Button title='Unesi' color="#260033" onPress={this.btnUnesiPress}>  </Button>
           
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