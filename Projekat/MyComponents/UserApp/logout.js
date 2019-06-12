import React from 'react';
import {  View,ActivityIndicator ,AsyncStorage} from 'react-native';
import{ StackActions,NavigationActions} from 'react-navigation';



export default class UserLogout extends React.Component {

  static navigationOptions={

    header:null
  }

storeToken = async () => {
  try {
    await AsyncStorage.setItem('LocalUser', '0');
  } catch (e) {
    // saving error
  }
  this.storeToken2();
}

storeToken2 = async () => {
  try {
    
    await AsyncStorage.setItem('User', JSON.stringify(null));
  } catch (e) {}
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


  