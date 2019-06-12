import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,Alert,ActivityIndicator } from 'react-native';
import styles from '../../styles';
import firebase from'react-native-firebase';
import { AsyncStorage } from 'react-native';
import{ StackActions,NavigationActions} from 'react-navigation';



export default class WaiterLogout extends React.Component {

  static navigationOptions={

    header:null
  }

storeToken = async () => {
  try {
    await AsyncStorage.setItem('LocalUser', '0');

  } catch (e) {
    // saving error
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


  