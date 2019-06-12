import React from 'react';
import { View ,AsyncStorage, ActivityIndicator} from 'react-native';



export default class AppLoad extends React.Component {

  static navigationOptions={

    header:null
  }


  constructor()
  {
    super()   
     //this.state={ loading:true,}
    this.loadData();
    
  }


  loadData = async() =>{

    const LocalUser= await AsyncStorage.getItem('LocalUser'); 

    //this.lUser=LocalUser;  
       switch(LocalUser)
       { 
           case '0':
           return this.FirstPage(); break;
         case '1':
         return this.User(); break;
         case '2':
         return this.Hostess();break;
         case '3':
         return this.Waiter();break;
         case '4':
         return this.Newlyweds();break;
         case '5':
         return this.Manager();break;
         }  
         this.props.navigation.replace('AppFirstPage'); 
 }
 
 
 FirstPage=()=>{   
    this.props.navigation.replace('AppFirstPage');
  // this.setState({loading:false});
 }

 User=()=>{   
    this.props.navigation.replace('UserDrawerNavigator');
   //this.setState({loading:false});
 }
 Hostess=()=>{   
   this.props.navigation.replace('HostessDrawerNavigator');
  // this.setState({loading:false});
 }
 
 Waiter= async()=>{   
   const idWaiter=await AsyncStorage.getItem('Waiter_id');
   this.props.navigation.replace({ routeName:'WaiterDrawerNavigator',params: {id:idWaiter}});
  // this.setState({loading:false});
 }

 Newlyweds= async()=>{ 



 // const response= await AsyncStorage.getItem('newlyweds'); 
   this.props.navigation.replace({ routeName: 'NewlywedsTabNavigator'});
  //this.setState({loading:false});
 }

 Manager=()=>{ 
   this.props.navigation.replace('ManagerTabNavigator');
   //this.props.navigation.replace('ManagerAppFirstPage');
  //this.setState({loading:false});
 }
 
 
    
    render() {
     
  
      return (
        <View>
       
       
      <ActivityIndicator size="large" color="00ff00"/>

      </View>
      );
    }
  }
  