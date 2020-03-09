import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,AsyncStorage,UIManager , LayoutAnimation,Vibration,Dimensions,ScrollView} from 'react-native';
//import Icon from 'native-base';
import {Header,Left,Icon} from 'native-base';
import styles from '../../styles'
import FetchConstants from '../../Classes/fetchConstants';
import firebase from 'react-native-firebase';
import LinearGradient from 'react-native-linear-gradient';
import { ListItem,Button } from 'react-native-elements'
let screenWidth=Dimensions.get('window').width;
var arr=[];


export default class MessagessPageScreenWaiterApp extends React.Component {
  static navigationOptions={

    header:null
  }
  constructor() {
    super();
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
      this.state={
        notificationArray:[],
        
      }
     
      this.loadData();
      setInterval(this.loadData, 1000);
  }



  loadData = async() =>{
    let storeArray;
  try {
  var storeString = await AsyncStorage.getItem('arrayNotification');
  //alert(storeString);
  if (storeString !== null){
     storeArray = JSON.parse(storeString);
     this.setState({notificationArray:storeArray})
  }
   } catch (error) {
 
}
      
  }



 

  AddNotification (body) {   

    this.setState({notificationArray:this.state.notificationArray.push({body:body})});
   LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
    this.storeNot(this.state.notificationArray)
  }


  storeNot = async (newArray) => {
  try {
    const proba = JSON.stringify(newArray);
    await AsyncStorage.setItem('arrayNotification',proba);
  } catch (e) {
    // saving error
  }

}

/*
  async componentDidMount() {
    this.createNotificationListeners(); 
  }
  


componentWillUnmount() {
  this.notificationListener();
  this.notificationOpenedListener();
  this.notificationDisplayedListener();
}


async createNotificationListeners() {
  /*
  * Triggered when a particular notification has been received in foreground
  
  this.notificationListener = firebase.notifications().onNotification((notification) => {
      const { title, body } = notification;
      this.AddNotification(body);
      const DURATION = 100;
//const PATTERN = [1000, 2000, 3000];
const notification2 = new firebase.notifications.Notification()
.setNotificationId('notificationId')
.setTitle('My notification title')
.setBody('My notification body')
.setData({
  key1: 'value1',
  key2: 'value2',
});

notification2
.android.setChannelId('test')
.android.setSmallIcon('ic_launcher');


firebase.notifications().displayNotification(notification2);

Vibration.vibrate(DURATION);
      this.showAlert(title, body);  // ovo se okida kad je ukljuceno
  });

 

  this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification) => {
    // Process your notification as required
    const DURATION = 100;
    //const PATTERN = [1000, 2000, 3000];
    
    Vibration.vibrate(DURATION);
    // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
});
// Build a channel
const channel = new firebase.notifications.Android.Channel('test', 'test', firebase.notifications.Android.Importance.Max)
  .setDescription('My apps test channel');

// Create the channel
firebase.notifications().android.createChannel(channel);

 
  /*
  * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
  * 
 
  this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
     const { title, body } = notificationOpen.notification;
     const DURATION2 = 100;
     //const PATTERN = [1000, 2000, 3000];
     
     Vibration.vibrate(DURATION2);
   
     //this.showAlert(title, body);
  });


  this.messageListener = firebase.messaging().onMessage((message) => {
    //process data message
   alert(JSON.stringify(message));
  });

/*
  const notificationOpen = await firebase.notifications().getInitialNotification();
  if (notificationOpen) {
      const { title, body } = notificationOpen.notification;
    this.showAlert(title, body);
  }
*/

  
//} 

//showAlert(title, body) {
///alert(title);

//}





removeItem=(id)=>{ 
this.setState({notificationArray:this.state.notificationArray.splice(id,1)});
arr[id].scrollTo({ x: 0, y: 0, animated: true });
LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)
 this.storeNot(this.state.notificationArray)
}






  render() {  return (
         
    <View  style={{backgroundColor:'#F1F1F1',flex:1}}>
  <ScrollView>

  <View style={{display:'flex',flexDirection:'column'}}>
 <View style={{alignItems:'center',backgroundColor:'#49beb7',height:50,justifyContent:'center'}}>
  <Text style={{color:'white',fontSize:30}}>POZIVI </Text>
  </View>
{
  this.state.notificationArray.map((element,index)=> (


<ScrollView horizontal={true}  ref={(scrollView) => {arr[index] = scrollView;}} onMomentumScrollEnd={
 (e) => {
  

   
if(e.nativeEvent.contentOffset.x>=screenWidth-(screenWidth/2))
 
this.removeItem(index)}}
  >

<ListItem style={{flex:1,alignItems:'center', paddingssRight:25}}

topDivider={true}
bottomDivider={true}
   key={index} 
   title={element.body}
 
    containerStyle={{width:screenWidth-10,backgroundColor:'white',marginTop: 20,borderRadius:20,marginLeft: 5,marginRight: 5,borderColor:'#696969',borderWidth:2}}
    titleStyle={{ fontWeight: 'bold', fontSize: 25,color: '#fbb0a9', }}
    
 />
   <View  key={index} style={{width:screenWidth,alignItems:'center',justifyContent:'center', backgroundColor:'red',marginTop: 20,borderRadius:20,display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
 <Text style={{color:'white',fontSize:30,paddingLeft:10}}>BRIŠI</Text>
  </View>
 </ScrollView>
))

}

</View>
</ScrollView>
</View>

 ); 

 
    }


  }



  
/*     
  return (
    <View style={{flex:1,backgroundColor:'#F1F1F1'}}>
      <View style={{flex:0.15,alignItems:'center',justifyContent:'center',backgroundColor:'#49beb7'}}>
      <Text style={{fontFamily:'news701i',fontSize:25,color:'white'}}>Dolazni pozivi:</Text>
      </View>
      <View style={{flex:0.85}}>
    <ScrollView>
    
   

  {  
this.state.notificationArray.map((element,index)=>(
  <ScrollView horizontal={true}  ref={(scrollView) => {arr[index] = scrollView;}} onMomentumScrollEnd={
    (e) => {
     

      
   if(e.nativeEvent.contentOffset.x>=screenWidth-(screenWidth/2))
    
    this.removeItem(index)}}
     >
      <ListItem
  
  
   
  topDivider={true}
  bottomDivider={true}
       key={index} 
        title={element.body}
        titleStyle={{color:'white'}}
        buttonStyle={{ borderColor:'#49beb7',height: 50, width: 50, borderRadius: 30,borderWidth:1,backgroundColor:'#49beb7'}}
        
        
     /> 
   <View  key={index} style={{width:screenWidth,alignItems:'center',justifyContent:'center', backgroundColor:'red',marginTop: 20,borderRadius:20,display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
     <Button  key={index}
 onPress={()=>this.removeItem(index)}
 icon={ <Icon name="delete" type='MaterialCommunityIcons'   style={{fontSize:35 ,color:"white"}} />}
 
 buttonStyle={{height: 50, width: 50, borderRadius: 30,backgroundColor:'black'}}
 
/>
    </View>


   </ScrollView>))

   } 

    

      



   </ScrollView>
   </View>
   </View>

      );  */