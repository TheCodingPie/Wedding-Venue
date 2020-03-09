import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,AsyncStorage ,TouchableOpacity,ImageBackground} from 'react-native';
import styles from '../../styles';

import FetchConstants from '../../Classes/fetchConstants';
import firebase from 'react-native-firebase';
import{ StackActions,NavigationActions} from 'react-navigation';
import {Header,Left,Icon} from 'native-base';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { Tile } from 'react-native-elements';

var Token; 



export default class prvaZaStackScreen extends React.Component {
  static navigationOptions={

    header:null
  }
    constructor(props){
       super(props) ;
       this.state={
         //waiterId:this.props.navigation.state.params.id
         waiterId:null,
         
       }
       this.loadData();
    }


    loadData = async() =>{
      try {
      AsyncStorage.getItem('Waiter_id').then( (storeString)=>{
     
         this.setState({waiterId:JSON.parse(storeString)});
         //alert(new Date())
         
        })
    }catch (error) { }
    
    }


    
  AddNotification =async(body) =>{   

    //this.setState({notificatioArray:this.state.notificationArray.push({body:body})});
    let storeArray=[];
  try {
  var storeString = await AsyncStorage.getItem('arrayNotification');
  if (storeString !== null){
     storeArray = JSON.parse(storeString);
  }
   } catch (error) {
 
}
    
   storeArray.push({body:body})

    this.storeNot(storeArray)
  }


  storeNot = async (newArray) => {
  try {
    var proba = JSON.stringify(newArray);
    await AsyncStorage.setItem('arrayNotification',proba);
  } catch (e) {
    // saving error
  }

}


    
    async componentDidMount() {
      this.createNotificationListeners(); 
    }
    
  
  

  componentWillUnmount() {
    this.notificationListener();
    
  }

  async createNotificationListeners() {
    
 
   const channel = new firebase.notifications.Android.Channel('wv', 'wv', firebase.notifications.Android.Importance.Max)
   .setDescription('My apps test channel');
 
 // Create the channel
 firebase.notifications().android.createChannel(channel);
 this.notificationListener = firebase.notifications().onNotification((notification) => {


  const { title, body } = notification;
  this.AddNotification(body);

  const notification2 = new firebase.notifications.Notification()
  .setNotificationId('notificationId')
  .setTitle(title)
  .setBody(body)
  .setData({
    key1: 'value1',
    key2: 'value2',
  });

  
  notification2
  .android.setChannelId('wv')
  .android.setSmallIcon('logo2019');
  
  
  
  firebase.notifications().displayNotification(notification2);
});
  

        //this.showAlert(title, body);  // ovo se okida kad je ukljuceno
   
  }
  
 
     

render() {
    return (
       <View style={{flex:1}} >
            <Header style={{flexDirection:'column',backgroundColor:'#fbb0a9'}} >
     
       
     <Icon name='menu' onPress={()=>this.props.navigation.openDrawer()} size={10} style={{ left: 10,position: 'absolute',flex:1}}/>
   
    
     </Header>
     <View style={{flex:1,  alignItems: 'center', justifyContent: 'center',backgroundColor:'#F1F1F1'}}>

            <View style={{ flex:1,flexDirection:'row'}}>
                     <View style={{flex:1}}>
                                <View style={{flex:0.3}}></View>
                               <View style={{flex:1,flexDirection:'row'}}>

                                          <View style={{flex:0.2}}></View>
                                          <View style={{flex:1,borderRadius:25,backgroundColor:'white',borderColor:'white',shadowOffset:{width:2,height:4},shadowOpacity:0.8,shadowRadius:2,elevation:5,shadowColor:'#000'}}>
                                          <View style={{ flex:1,borderRadius:25,alignItems:'center',justifyContent:'center'}}>
                                         <View>
                                          <Icon name="bell" type='MaterialCommunityIcons'   style={{fontSize:100 ,color:'#fbb0a9'}} onPress={() => this.props.navigation.navigate( 'MessagessPage',{waiterId:this.state.waiterId})} />
                                          </View>
                                          <Text style={{color:'#49beb7',fontFamily:'news701i'}}>Pozivi</Text>
                                            </View>  
                                            </View>
                                          
                                            <View style={{flex:0.1}}></View>
                                </View>
                                 <View style={{flex:0.1}}></View>
                     </View> 

                     <View style={{flex:1}}>

                                <View style={{flex:0.3}}></View>
                                <View style={{flex:1,flexDirection:'row'}}>
                                          <View style={{flex:0.1}}></View>
                                          <View style={{flex:1,borderRadius:25,backgroundColor:'white',borderColor:'white',shadowOffset:{width:2,height:4},shadowOpacity:0.8,shadowRadius:2,elevation:5,shadowColor:'#000'}}>
                                          <View style={{ flex:1,borderRadius:25,alignItems:'center',justifyContent:'center'}}>
                                          <Icon name="bowl" type='MaterialCommunityIcons'  style={{fontSize:100,color:'#fbb0a9'}} onPress={() => this.props.navigation.navigate( 'WaiterAppSecondPage',{waiterId:this.state.waiterId})} />
                                          <Text style={{color:'#49beb7',fontFamily:'news701i'}}>Predjelo</Text>
                                          </View>  
                                          </View>
                                            <View style={{flex:0.2}}></View>

                                  </View>
                                 <View style={{flex:0.1}}></View>
                       
                    </View> 
            
            </View>

            <View style={{ flex:1,flexDirection:'row'}}>

                    <View style={{flex:1}}>
                              <View style={{flex:0.2}}></View>
                              <View style={{flex:1,flexDirection:'row'}}>
                                           <View style={{flex:0.2}}></View>
                                           <View style={{flex:1,borderRadius:25,backgroundColor:'white',borderColor:'white',shadowOffset:{width:2,height:4},shadowOpacity:0.8,shadowRadius:2,elevation:5,shadowColor:'#000'}}>
                                          <View style={{ flex:1,borderRadius:25,alignItems:'center',justifyContent:'center'}}>
                                          <Icon name="room-service" type='MaterialCommunityIcons'  style={{fontSize:100,color:'#fbb0a9'}} onPress={() => this.props.navigation.navigate( 'WaiterAppFourthPage',{waiterId:this.state.waiterId})} />
                                          <Text style={{color:'#49beb7',fontFamily:'news701i'}}>Glavno jelo</Text>
                                            </View>  
                                            </View>
                                            <View style={{flex:0.1}}></View>

                              </View>
                              <View style={{flex:0.2}}></View>
                    </View >

                    <View style={{flex:1}}>
                             <View style={{flex:0.2}}></View>
                             <View style={{flex:1,flexDirection:'row'}}>
                                           <View style={{flex:0.1}}></View>
                                           <View style={{flex:1,borderRadius:25,backgroundColor:'white',borderColor:'white',shadowOffset:{width:2,height:4},shadowOpacity:0.8,shadowRadius:2,elevation:5,shadowColor:'#000'}}>
                                          <View style={{ flex:1,borderRadius:25,alignItems:'center',justifyContent:'center'}}>
                                          <Icon name="cupcake" type='MaterialCommunityIcons'  style={{fontSize:100,color:'#fbb0a9'}} onPress={() => this.props.navigation.navigate( 'WaiterAppFifthPage',{waiterId:this.state.waiterId})} />
                                          
                                          <Text style={{color:'#49beb7',fontFamily:'news701i'}}>Dezert</Text>
                                            </View>  
                                            </View>
                                            <View style={{flex:0.2}}></View>

                            </View>
                            <View style={{flex:0.2}}></View>
                    </View>
            </View>

          
    </View>

 </View>   
  

    );
  }
}

//<TouchableOpacity style={{flex:1,alignItems:'center',justifyContent:'center'}} onPress={() => this.props.navigation.navigate( 'WaiterAppFifthPage')}><Text>Dezert</Text></TouchableOpacity>
//<TouchableOpacity style={{flex:1}} onPress={() => this.props.navigation.navigate( 'MessagessPage')}><Text>Poruke</Text></TouchableOpacity>
//<TouchableOpacity style={{flex:1}} onPress={() => this.props.navigation.navigate('WaiterAppSecondPage')}><Text>Predjelo</Text></TouchableOpacity>