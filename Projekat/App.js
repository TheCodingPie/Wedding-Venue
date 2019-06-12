import React from 'react';

import signOut from './MyComponents//WaiterApp/thirdPageWaiterApp';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import {createDrawerNavigator,DrawerItems,SafeAreaView} from 'react-navigation';
import {View,ScrollView,Dimensions,Text,Image, ImageBackground,TouchableOpacity,AsyncStorage} from'react-native';
import { createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation'
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'
import firebase from'react-native-firebase';

import{ StackActions,NavigationActions} from 'react-navigation';



import AppFirstPageScreen from './MyComponents/AppFirstPage';
import AppLoad from './MyComponents/AppLoad';
import { Provider as PaperProvider } from 'react-native-paper';
import FirstPageScreenUserApp from './MyComponents/UserApp/firstPageUserApp';
import SecondPageScreenUserApp from './MyComponents//UserApp/secondPageUserApp';
import ThirdPageScreenUserApp from './MyComponents//UserApp/thirdPageUserApp';
import FourthPageScreenUserApp from './MyComponents//UserApp/fourthPageUserApp';
import zaKocke from './MyComponents//UserApp/zaKocke';
import UserLogout from './MyComponents//UserApp/logout';
import menuPage from './MyComponents//UserApp/menuPage';

import FirstPageScreenHostessApp from './MyComponents/HostessApp/firstPageHostessApp';
import SecondPageScreenHostessApp from './MyComponents//HostessApp/secondPageHostessApp';
import ThirdPageScreenHostessApp from './MyComponents//HostessApp/thirdPageHostessApp';
import FourthPageScreenHostessApp from './MyComponents//HostessApp/zaJoks';

import FirstPageScreenWaiterApp from './MyComponents/WaiterApp/firstPageWaiterApp';
import SecondPageScreenWaiterApp from './MyComponents//WaiterApp/secondPageWaiterApp';
import ThirdPageScreenWaiterApp from './MyComponents//WaiterApp/thirdPageWaiterApp';
import FourthPageScreenWaiterApp from './MyComponents//WaiterApp/fourthPageWaiterApp';
import FifthPageScreenWaiterApp from './MyComponents//WaiterApp/fifthPageWaiterApp';
import MessagessPageScreenWaiterApp from './MyComponents//WaiterApp/MessagessPage';
import prvaZaStackScreen from './MyComponents//WaiterApp/prvaZaStack';
import WaiterLogout from './MyComponents//WaiterApp/logout';

import FirstPageScreenNewlywedsApp from './MyComponents/NewlywedsApp/firstPageNewlywedsApp';
import SecondPageScreenNewlywedsApp from './MyComponents//NewlywedsApp/secondPageNewlywedsApp';
import ThirdPageScreenNewlywedsApp from './MyComponents//NewlywedsApp/thirdPageNewlywedsApp';
import FourthPageScreenNewlywedsApp from './MyComponents//NewlywedsApp/fourthPageNewlywedsApp';
import PregledGostiju from './MyComponents//NewlywedsApp/PregledGostiju';
import FifthPageScreenNewlywedsApp from './MyComponents//NewlywedsApp/fifthPageNewlywedsApp';
import optionPageScreen from './MyComponents//NewlywedsApp/optionPage';
import kreirajRasporedScreen from './MyComponents//NewlywedsApp/kreirajRaspored';
import NewlywedsLogout from './MyComponents//NewlywedsApp/NewlywedsLogout';

import FirstPageScreenManagerApp from './MyComponents/ManagerApp/firstPageManagerApp';

import {createStackNavigator,createAppContainer,createBottomTabNavigator} from 'react-navigation';

import CreateWeddingSecondPageScreen from './MyComponents/ManagerApp/CreateWeddingSecondPage';
import CreateWeddingScreen from './MyComponents/ManagerApp/CreateWeddingPage';
import AddWaiterScreen from './MyComponents/ManagerApp/AddWaiterScreen';
import AddHostessScreen from './MyComponents/ManagerApp/AddHostessScreen';
import AddWaiterWeddingScreen from './MyComponents/ManagerApp/AddWaiterWeddingScreen';
import waiterZaJoks from './MyComponents/ManagerApp/waiterZaJoks';
import UpdateMenuScreen from './MyComponents/ManagerApp/UpdateMenuScreen';
import UpdateMenuScreenJelo from './MyComponents/ManagerApp/UpdateMenuScreenJelo';
import UpdateMenuScreenDesert from './MyComponents/ManagerApp/UpdateMenuScreenDesert';
import FreeDaysScreen from './MyComponents/ManagerApp/FreeDaysScreen';
import LogoutScreen from './MyComponents/ManagerApp/LogoutScreen';
import MenuScreen from './MyComponents/ManagerApp/MenuScreen';
import floorPlanFirstPageScreen from './MyComponents/ManagerApp/floorPlanFirstPage';
import floorPlanWeddIdPageScreen from './MyComponents/ManagerApp/floorPlanWeddIdPage';
import floorPlanSeeFPPageScreen from './MyComponents/ManagerApp/floorPlanSeeFPPage';
import floorPlanSeePlanScreen from './MyComponents/ManagerApp/floorPlanSeePlan';
import floorPlanFirstPageNewWeddScreen from './MyComponents/ManagerApp/floorPlanFirstPageNewWedd';
import menuFirstPageScreen from './MyComponents/ManagerApp/menuFirstPage';
import menuSecondPageScreen from './MyComponents/ManagerApp/menuSecondPage';
import menuThirdPageScreen from './MyComponents/ManagerApp/menuThirdPage';
import ManagerLogout from './MyComponents/ManagerApp/logout';
import ManagerBrisiVencanje from './MyComponents/ManagerApp/ManagerBrisiVencanje';
import ManagerAppCreateAccount from './MyComponents/ManagerApp/ManagerAppCreateAccount';



const ManagerCreateWeddingStackNavigator=createStackNavigator({

  CreateWeddingPage:CreateWeddingScreen,

  CreateWeddingSecondPage:CreateWeddingSecondPageScreen,

  
});
const NewlywedsStackNavigatorRaspored=createStackNavigator({

  optionPage:optionPageScreen,
  FourthPageScreenNewlywedsApp:FourthPageScreenNewlywedsApp,//pregledaj raspored
  kreirajRaspored:kreirajRasporedScreen,
  

  
});

const NewlywedsStackNavigator=createStackNavigator({

  ThirdPageScreenNewlywedsApp:ThirdPageScreenNewlywedsApp,

  FifthPageScreenNewlywedsApp:FifthPageScreenNewlywedsApp,

  

  
});
const NewlywedsDrawerNavigator= createDrawerNavigator({
      
  
  Pocetna:{
   screen: SecondPageScreenNewlywedsApp,
   navigationOptions : {
      drawerLabel: 'Početna',
      drawerIcon:({ tintColor }) => (
        <Icon name="home" color='#fbb0a9' size={20}/>
      ),  
 }
  },

  Logout:{
    screen: NewlywedsLogout,
    navigationOptions : {
       drawerLabel: 'Odjavi se',
       drawerIcon:({ tintColor }) => (
         <Icon name="logout" color='#fbb0a9' size={20}/>
       ),  
  }
   },
},
{

  contentComponent: props => 
 
  
  
  <ScrollView contentContainerStyle={{ height: Dimensions.get('window').height}} >
   <ImageBackground source={require('./MyComponents/Images/marble.jpg')} style={{width:'100%', height: '100%', display:"flex",flexDirection:"column",flex:1}}>
    <View style={{flex:1}}>
    <DrawerItems {...props}  />
    </View>
    <View style={{flex:0.7,display:"flex",flexDirection:'row', alignContent:'center', justifyContent:'center'}}></View>
    <View style={{flex:4,display:"flex",flexDirection:'column', alignContent:'center', justifyContent:'center'}}>
    <View style={{flex:1.25,display:"flex",flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
    <Image source={require('./MyComponents/Images/logo.png')} style={{width:240,height:240}} ></Image>
    </View>
    
   
    </View>
    
    </ImageBackground>
    
  </ScrollView>
 
 
 }

);

NewlywedsDrawerNavigator.navigationOptions = {
 
  header: null,
};

const NewlywedsTabNavigator=createBottomTabNavigator({

  Countdown_Timer:{
    screen:NewlywedsDrawerNavigator,//SecondPageScreenNewlywedsApp,
    navigationOptions:{
      tabBarLabel:'Jos koliko dana slobode??',
      
      tabBarIcon: ({ tintColor }) => (
        <Icon name="calendar-clock" size={30}/>
      ), 
      
      }
  },
  Dodaj_Porodicu:{
    screen:NewlywedsStackNavigator,
    navigationOptions:{
      tabBarLabel:'Dodaj porodicu',
      
      tabBarIcon: ({ tintColor }) => (
        <Icon name="account-group" size={35}/>
      ), 
     
      }
  },
  Pregled_Rasporeda:{
    screen:NewlywedsStackNavigatorRaspored,
    navigationOptions:{
      tabBarLabel:'Raspored ',
      
      tabBarIcon: ({ tintColor }) => (
        <Icon name="view-dashboard" size={30}/>
      ), 
 
    },
    
 },
 Pregled_Gostiju:{
  screen:PregledGostiju,
  navigationOptions:{
    tabBarLabel:'Gosti ',
    
    tabBarIcon: ({ tintColor }) => (
      <Icon name="view-dashboard" size={30}/>
    ), 

  },
  
},

});
NewlywedsTabNavigator.navigationOptions = {
  //da se skloni heder za sve tabnavigatore
  header: null,
};



const ManagerMenuStackNavigator=createStackNavigator({

  menuFirstPage:menuFirstPageScreen,

  menuSecondPage:menuSecondPageScreen,

  menuThirdPage:menuThirdPageScreen

  
});


const ManagerFloorPlanStackNavigator=createStackNavigator({
  floorPlanFirstPageNewWedd:floorPlanFirstPageNewWeddScreen,//izbor broja gostiju
  //floorPlanFirstPage:floorPlanFirstPageScreen,//da li nova svadba ili pregled neke vec zakazane
  
  floorPlanWeddIdPage:floorPlanWeddIdPageScreen,

  floorPlanSeeFPPage:floorPlanSeeFPPageScreen,

 

  floorPlanSeePlan:floorPlanSeePlanScreen,

});

ManagerFloorPlanStackNavigator.navigationOptions = {
  
  header: null,
};
const UserStackNavigator=createStackNavigator({

  
  zaKocke:zaKocke,
  menuPage:menuPage,
  UserAppSecondPage:SecondPageScreenUserApp,
  UserAppThirdPage:ThirdPageScreenUserApp,
  UserAppFourthPage:FourthPageScreenUserApp,

  
});

UserStackNavigator.navigationOptions = {
 
  header: null,
};

const UserDrawerNavigator= createDrawerNavigator({
      
  
  Pocetna:{
   screen: UserStackNavigator,
   navigationOptions : {
      drawerLabel: 'Početna',
      drawerIcon:({ tintColor }) => (
        <Icon name="home" color='#fbb0a9' size={20}/>
      ),  
 }
  },

  Logout:{
    screen: UserLogout,
    navigationOptions : {
       drawerLabel: 'Odjavi se',
       drawerIcon:({ tintColor }) => (
         <Icon name="logout" color='#fbb0a9' size={20}/>
       ),  
  }
   },
},
{

  contentComponent: props => 
 
  
  
  <ScrollView contentContainerStyle={{ height: Dimensions.get('window').height}} >
   <ImageBackground source={require('./MyComponents/Images/marble.jpg')} style={{width:'100%', height: '100%', display:"flex",flexDirection:"column",flex:1}}>
    <View style={{flex:1}}>
    <DrawerItems {...props}  />
    </View>
    
    <View style={{flex:4,display:"flex",flexDirection:'column', alignContent:'center', justifyContent:'center'}}>
    <View style={{flex:1.25,display:"flex",flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
    <Image source={require('./MyComponents/Images/logo.png')} style={{width:240,height:240}} ></Image>
    </View>
    
   
    </View>
    
    </ImageBackground>
    
  </ScrollView>
 
 
 }

);

UserDrawerNavigator.navigationOptions = {
 
  header: null,
};

const HostessStackNavigator=createStackNavigator({

  //HostessAppFirstPage:FirstPageScreenHostessApp,
  HostessAppSecondPage:SecondPageScreenHostessApp,
  HostessAppThirdPage:ThirdPageScreenHostessApp,
  zaJoks:FourthPageScreenHostessApp,

  
});

HostessStackNavigator.navigationOptions = {
 
  header: null,
};
const HostessDrawerNavigator= createDrawerNavigator({
      
  
  Pocetna:{
   screen: HostessStackNavigator,
   navigationOptions : {
      drawerLabel: 'Početna',
      drawerIcon:({ tintColor }) => (
        <Icon name="home" color='#fbb0a9' size={20}/>
      ),  
 }
  },

  Logout:{
    screen: ManagerLogout,
    navigationOptions : {
       drawerLabel: 'Odjavi se',
       drawerIcon:({ tintColor }) => (
         <Icon name="logout" color='#fbb0a9' size={20}/>
       ),  
  }
   },
},
{

  contentComponent: props => 
 
  
  
  <ScrollView contentContainerStyle={{ height: Dimensions.get('window').height}} >
   <ImageBackground source={require('./MyComponents/Images/marble.jpg')} style={{width:'100%', height: '100%', display:"flex",flexDirection:"column",flex:1}}>
    <View style={{flex:1}}>
    <DrawerItems {...props}  />
    </View>
    <View style={{flex:0.7,display:"flex",flexDirection:'row', alignContent:'center', justifyContent:'center'}}></View>
    <View style={{flex:4,display:"flex",flexDirection:'column', alignContent:'center', justifyContent:'center'}}>
    <View style={{flex:1.25,display:"flex",flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
    <Image source={require('./MyComponents/Images/logo.png')} style={{width:240,height:240}} ></Image>
    </View>
    
   
    </View>
    
    </ImageBackground>
    
  </ScrollView>
 
 
 }

);
HostessDrawerNavigator.navigationOptions = {
 
  header: null,
};


const WaiterStackNavigator=createStackNavigator({

  prvaZaStack:prvaZaStackScreen,

  WaiterAppSecondPage:SecondPageScreenWaiterApp,//predjela

  WaiterAppFourthPage:FourthPageScreenWaiterApp,//jela
  WaiterAppFifthPage:FifthPageScreenWaiterApp,//deserti
  MessagessPage:MessagessPageScreenWaiterApp,//poruke

  
});

WaiterStackNavigator.navigationOptions = {
 
  header: null,
};
const WaiterDrawerNavigator= createDrawerNavigator({
      
  
  Pocetna:{
   screen: WaiterStackNavigator,
   navigationOptions : {
      drawerLabel: 'Početna',
      drawerIcon:({ tintColor }) => (
        <Icon name="home" color='#fbb0a9' size={20}/>
      ),  
 }
  },

  Logout:{
    screen: WaiterLogout,
    navigationOptions : {
       drawerLabel: 'Odjavi se',
       drawerIcon:({ tintColor }) => (
         <Icon name="logout" color='#fbb0a9' size={20}/>
       ),  
  }
   },
},
{

  contentComponent: props => 
 
  
  
  <ScrollView contentContainerStyle={{ height: Dimensions.get('window').height}} >
   <ImageBackground source={require('./MyComponents/Images/marble.jpg')} style={{width:'100%', height: '100%', display:"flex",flexDirection:"column",flex:1}}>
    <View style={{flex:1}}>
    <DrawerItems {...props}  />
    </View>
    <View style={{flex:0.7,display:"flex",flexDirection:'row', alignContent:'center', justifyContent:'center'}}></View>
    <View style={{flex:4,display:"flex",flexDirection:'column', alignContent:'center', justifyContent:'center'}}>
    <View style={{flex:1.25,display:"flex",flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
    <Image source={require('./MyComponents/Images/logo.png')} style={{width:240,height:240}} ></Image>
    </View>
    
   
    </View>
    
    </ImageBackground>
    
  </ScrollView>
 
 
 }

);
WaiterDrawerNavigator.navigationOptions = {
 
  header: null,
};




const AddWaiterWeddingStackNavigator=createStackNavigator({

  waiterZaJoks:waiterZaJoks,
  AddWaiterWeddingScreen:AddWaiterWeddingScreen

  

  
});

const UpdateMenuStackNavigator=createStackNavigator({

  UpdateMenuScreen:UpdateMenuScreen,
  UpdateMenuScreenJelo:UpdateMenuScreenJelo,
  UpdateMenuScreenDesert:UpdateMenuScreenDesert,

  

  
});

const ManagerDrawerNavigator= createDrawerNavigator({
      
  
  Slobodni_dani:{
   screen:FreeDaysScreen,
   navigationOptions : {
      drawerLabel: 'Početna',
      drawerIcon:({ tintColor }) => (
        <Icon name="home" color='#fbb0a9' size={20}/>
      ),  
 }
  },
    
  Dodaj_Konobara:{
    screen: AddWaiterScreen,
    navigationOptions : {
      drawerLabel: 'Dodaj konobara',
      drawerIcon:({ tintColor }) => (
        <Icon name="human-male"  color='#fbb0a9' size={20}/>
      ),
  }
   },
   Dodaj_Hostesu:{
    screen:AddHostessScreen,
   navigationOptions : {
      drawerLabel: 'Dodaj hostesu',
      drawerIcon:({ tintColor }) => (
        <Icon name="human-female" color='#fbb0a9' size={20}/>
      ),
  }
  },
  Dodaj_Konobar_Vencanje:{
    screen:AddWaiterWeddingStackNavigator,
    navigationOptions : {
      drawerLabel: 'Dodaj konobaru vencanje',
      drawerIcon:({ tintColor }) => (
        <Icon name="account-plus" color='#fbb0a9' size={20}/>
      ),    
  }
  },
  Izmeni_Meni:{
    screen:UpdateMenuStackNavigator,
    navigationOptions : {
      drawerLabel: 'Izmeni meni',
      drawerIcon:({ tintColor }) => (
        <Icon name="account-plus" color='#fbb0a9' size={20}/>
      ),    
  }
  },
  Brisi_Vencanje:{
    screen: ManagerBrisiVencanje,
    navigationOptions : {
       drawerLabel: 'Brisi vencanje',
       drawerIcon:({ tintColor }) => (
         <Icon name="delete" color='#fbb0a9' size={20}/>
       ),  
  }
   },
   Logout:{
    screen: ManagerLogout,
    navigationOptions : {
       drawerLabel: 'Odjavi se',
       drawerIcon:({ tintColor }) => (
         <Icon name="logout" color='#fbb0a9' size={20}/>
       ),  
  }
   },

},

  {

 contentComponent: props => 

 
 
 <ScrollView contentContainerStyle={{ height: Dimensions.get('window').height}} >
  <ImageBackground source={require('./MyComponents/Images/marble.jpg')} style={{width:'100%', height: '100%', display:"flex",flexDirection:"column",flex:1}}>
   <View style={{flex:2}}>
   <DrawerItems {...props}  />
   </View>
   <View style={{flex:2.5,display:"flex",flexDirection:'row', alignContent:'center', justifyContent:'center'}}></View>
   <View style={{flex:3.5,display:"flex",flexDirection:'column', alignContent:'center', justifyContent:'center'}}>
   <View style={{flex:1.25,display:"flex",flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
   <Image source={require('./MyComponents/Images/logo.png')} style={{width:240,height:240}} ></Image>
   </View>
   
   
   </View>
   
   </ImageBackground>
   
 </ScrollView>


});






const ManagerTabNavigator=createBottomTabNavigator({

  Slobondi_dani:{
    screen:ManagerDrawerNavigator,
    navigationOptions:{
      tabBarLabel:'Slobodni dani',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="calendar-heart" size={20}/>
      ), 
      
      },
      tabBarOptions: { 
        showIcon: true 
      },  
  },
  Kreiraj_Vencanje:{
    screen:ManagerCreateWeddingStackNavigator,
    navigationOptions:{
      tabBarLabel:'Kreiraj vencanje',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="human-male-female" size={20}/>
      ),  
     
      },
      tabBarOptions: { 
        showIcon: true 
      },  
  },
  Meni:{
    screen:ManagerMenuStackNavigator,
    navigationOptions:{
      tabBarLabel:'Meni',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="book-open-page-variant" size={20}/>
      ),    
      
      },
      tabBarOptions: { 
        showIcon: true 
      },  
    
  },
  Raspored_Stolova:{
    //screen:FloorPlanScreen,
    screen:ManagerFloorPlanStackNavigator,
    navigationOptions:{
      tabBarLabel:'Raspored stolova',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="view-dashboard" size={20}/>
      ),    
      
      },
      tabBarOptions: { 
        showIcon: true 
      },  
  },
  
 
  

});


ManagerTabNavigator.navigationOptions = {
  //da se skloni heder za sve tabnavigatore
  header: null,
};

AppStackNavigator=createStackNavigator({
  AppLoad:AppLoad,
  AppFirstPage:AppFirstPageScreen,
  
  UserAppFirstPage:FirstPageScreenUserApp,
  /*UserAppSecondPage:SecondPageScreenUserApp,
  UserAppThirdPage:ThirdPageScreenUserApp,
  UserAppFourthPage:FourthPageScreenUserApp,
  */
 UserDrawerNavigator:UserDrawerNavigator,

  HostessAppFirstPage:FirstPageScreenHostessApp,
  
  HostessDrawerNavigator:HostessDrawerNavigator,

  WaiterAppFirstPage:FirstPageScreenWaiterApp,
  
WaiterDrawerNavigator:WaiterDrawerNavigator,


NewlywedsAppFirstPage:FirstPageScreenNewlywedsApp,
NewlywedsTabNavigator:NewlywedsTabNavigator,


  ManagerAppFirstPage:FirstPageScreenManagerApp,
  ManagerAppCreateAccount: ManagerAppCreateAccount,

  //ManagerAppSecondPage:SecondPageScreenManagerApp,
  
  //ManagerDrawerNavigator:ManagerDrawerNavigator,
  ManagerTabNavigator:ManagerTabNavigator,
 

});

const MyAppContainer=createAppContainer(AppStackNavigator);




export default class App extends React.Component {

  
  
 render() {
        return (
          <PaperProvider>
          <MyAppContainer />
          
           </PaperProvider>
         
       
      );
    }

}
