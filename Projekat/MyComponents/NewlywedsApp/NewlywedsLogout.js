import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,Alert,ActivityIndicator } from 'react-native';
import styles from '../../styles';
import firebase from'react-native-firebase';
import { AsyncStorage } from 'react-native';
import{ StackActions,NavigationActions} from 'react-navigation';



export default class NewlywedsLogout extends React.Component {

  static navigationOptions={

    header:null
  }

storeToken = async () => {
  try {
   // await AsyncStorage.setItem('LocalUser', '0');
   // await AsyncStorage.setItem('newlyweds','');
        //const proba = JSON.stringify(null);
        await AsyncStorage.setItem('newlyweds',JSON.stringify(null));
     
  } catch (e) {
    // saving error
  }
  this.storeToken2();
}


storeToken2=async()=>
{
  try{
   await AsyncStorage.setItem('LocalUser','0');
  }
  catch(e)
  {

  }
}


componentDidMount=()=>this.signOut();

signOut=()=>{
this.storeToken();
this.resetNav();
}



resetNav=()=>
{
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'AppFirstPage' })],
  });
  this.props.navigation.dispatch(resetAction);
}





  render() {
      
      
  return (
    <View>
       
       
    <ActivityIndicator size="large" color="00ff00"/>

    </View>
      ); 
    }
  }


  