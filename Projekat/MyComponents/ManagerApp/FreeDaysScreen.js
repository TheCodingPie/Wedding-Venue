import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import {Header,Left,Icon} from 'native-base';
import { Wedding } from '../../Classes/classWedding';
export default class FreeDaysScreen extends React.Component {
constructor(){
  super();
  let date=new Date().toISOString().split('T')[0];
  let weddingDates=Wedding.returnWeddingDates(date);
 // alert(weddingDates);
}
    
   render() {
    return (
      <View style={styles.form} >
      <Header>
    <Left>
    <Icon name='menu' onPress={()=>this.props.navigation.openDrawer()} />

  </Left>
</Header>


<View style={styles.container}>
       <Text>forma za slobodne dane</Text>
</View>
</View>   
    );
  }
}
//za drawer navigator se razlikuju stilovi 
const styles = StyleSheet.create({
    form: {
        flex: 1,
        
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
       
        backgroundColor: '#ecb3ff',
      },
     
});