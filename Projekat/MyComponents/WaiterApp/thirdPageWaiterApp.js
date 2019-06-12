import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,Alert } from 'react-native';
import styles from '../../styles';
import firebase from'react-native-firebase';
import { AsyncStorage } from 'react-native';
import{ StackActions,NavigationActions} from 'react-navigation';



export default class ThirdPageScreenWaiterApp extends React.Component {

  static navigationOptions={

    header:null
  }

storeToken = async () => {
  try {
    await AsyncStorage.setItem('LocalUser', '0');
    await AsyncStorage.setItem('Waiter_id', 'k');

  } catch (e) {
    // saving error
  }
}


signOut=()=>{
this.storeToken();
this.saveDeviceToken();
this.resetNav();
}

saveDeviceToken=()=>
    {
    
       firebase.database().ref("Waiters").child(1).child("devToken").set();      
 
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
        <View style={styles.form}>
        
       <Button title='Poruke' onPress={() => this.props.navigation.navigate( 'MessagessPage')} />
       
     
     

      <Button
        primary
        title="Logout"
        //style={styles.rightButton}
        onPress={this.signOut}>
        Log out
      </Button>

      </View>
      ); 
    }
  }


  