import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import AppFirstPageScreen from './MyComponents/AppFirstPage';

import FirstPageScreenUserApp from './MyComponents/UserApp/firstPageUserApp';
import SecondPageScreenUserApp from './MyComponents//UserApp/secondPageUserApp';
import ThirdPageScreenUserApp from './MyComponents//UserApp/thirdPageUserApp';

import FirstPageScreenHostessApp from './MyComponents/HostessApp/firstPageHostessApp';
import SecondPageScreenHostessApp from './MyComponents//HostessApp/secondPageHostessApp';
import ThirdPageScreenHostessApp from './MyComponents//HostessApp/thirdPageHostessApp';

import FirstPageScreenWaiterApp from './MyComponents/WaiterApp/firstPageWaiterApp';
import SecondPageScreenWaiterApp from './MyComponents//WaiterApp/secondPageWaiterApp';
import ThirdPageScreenWaiterApp from './MyComponents//WaiterApp/thirdPageWaiterApp';

import FirstPageScreenNewlywedsApp from './MyComponents/NewlywedsApp/firstPageNewlywedsApp';
import SecondPageScreenNewlywedsApp from './MyComponents//NewlywedsApp/secondPageNewlywedsApp';
import ThirdPageScreenNewlywedsApp from './MyComponents//NewlywedsApp/thirdPageNewlywedsApp';
import FourthPageScreenNewlywedsApp from './MyComponents//NewlywedsApp/fourthPageNewlywedsApp';

import FirstPageScreenManagerApp from './MyComponents/ManagerApp/firstPageManagerApp';

import {createStackNavigator,createAppContainer,createDrawerNavigator,createBottomTabNavigator} from 'react-navigation';

import CreateWeddingScreen from './MyComponents/ManagerApp/CreateWeddingScreen';
import AddWaiterScreen from './MyComponents/ManagerApp/AddWaiterScreen';
import AddHostessScreen from './MyComponents/ManagerApp/AddHostessScreen';
import FreeDaysScreen from './MyComponents/ManagerApp/FreeDaysScreen';
import MenuScreen from './MyComponents/ManagerApp/MenuScreen';
import FloorPlanScreen from './MyComponents/ManagerApp/FloorPlanScreen';


import Manager from './Classes/classManager'


const ManagerDrawerNavigator=createDrawerNavigator({
      
      
  //Kreiraj_Vencanje:ManagerTabNavigator,
   
  Slobodni_dani:FreeDaysScreen,
    
  Dodaj_Konobara: AddWaiterScreen,
   Dodaj_Hostesu:AddHostessScreen,
 

})


const ManagerTabNavigator=createBottomTabNavigator({

  Slobondi_dani:{
    screen:ManagerDrawerNavigator,
    navigationOptions:{
      tabBarLabel:'Slobodni dani',
      
      }
  },
  Kreiraj_Vencanje:{
    screen:CreateWeddingScreen,
    navigationOptions:{
      tabBarLabel:'Kreiraj vencanje',
     
      }
  },
  Meni:{
    screen:MenuScreen,
    
  },
  Raspored_Stolova:{
    screen:FloorPlanScreen,
    navigationOptions:{
      tabBarLabel:'Raspored stolova',
      
      }
  },
  
  

  

});
ManagerTabNavigator.navigationOptions = {
  //da se skloni heder za sve tabnavigatore
  header: null,
};

AppStackNavigator=createStackNavigator({
  AppFirstPage:AppFirstPageScreen,
  
  UserAppFirstPage:FirstPageScreenUserApp,
  UserAppSecondPage:SecondPageScreenUserApp,
  UserAppThirdPage:ThirdPageScreenUserApp,
  
  HostessAppFirstPage:FirstPageScreenHostessApp,
  HostessAppSecondPage:SecondPageScreenHostessApp,
  HostessAppThirdPage:ThirdPageScreenHostessApp,

  WaiterAppFirstPage:FirstPageScreenWaiterApp,
  WaiterAppSecondPage:SecondPageScreenWaiterApp,
  WaiterAppThirdPage:ThirdPageScreenWaiterApp,

  NewlywedsAppFirstPage:FirstPageScreenNewlywedsApp,
  NewlywedsAppSecondPage:SecondPageScreenNewlywedsApp,
  NewlywedsAppThirdPage:ThirdPageScreenNewlywedsApp,
  NewlywedsAppFourthPage:FourthPageScreenNewlywedsApp,
  
  ManagerAppFirstPage:FirstPageScreenManagerApp,
  //ManagerAppSecondPage:SecondPageScreenManagerApp,
  
  //ManagerDrawerNavigator:ManagerDrawerNavigator,
  ManagerTabNavigator:ManagerTabNavigator,
 
 

});

const MyAppContainer=createAppContainer(AppStackNavigator);




export default class App extends React.Component {
  
  
 render() {
        return (
           <MyAppContainer />
         
       
      );
    }

}