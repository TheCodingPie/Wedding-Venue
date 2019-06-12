import React from 'react';
import {  View,ActivityIndicator,AsyncStorage } from 'react-native';
import firebase from'react-native-firebase';
import{ StackActions,NavigationActions} from 'react-navigation';



export default class WaiterLogout extends React.Component {

  static navigationOptions={

    header:null
  }

storeToken = async () => {
  try {
    await AsyncStorage.setItem('LocalUser', '0');
    await AsyncStorage.setItem('Waiter_id', '');

  } catch (e) {
    // saving error
  }
}

componentDidMount=()=>this.signOut();

signOut=()=>{

this.saveDeviceToken();
this.storeToken();
this.resetData();
this.resetNav();
}

resetData= async()=>
{
  var niz=[];
  try {
    var proba = JSON.stringify(niz);
    await AsyncStorage.setItem('arrayNotification',proba);
  } catch (e) {
    // saving error
  }

}


saveDeviceToken= async()=>
    {
      const Waiter_id= await AsyncStorage.getItem('Waiter_id'); 
       firebase.database().ref("Waiters").child(Waiter_id).child("devToken").set();      
 
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


  