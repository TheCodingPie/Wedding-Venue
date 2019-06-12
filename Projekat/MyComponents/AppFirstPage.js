import React from 'react';

import { StyleSheet, Text, View,TouchableOpacity,Button,ImageBackground } from 'react-native';

import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import styles from './stylesAppFirstPage';
import { TouchableHighlight } from 'react-native-gesture-handler';

//import {styles} from '../styles';
export default class AppFirstPageScreen extends React.Component {
  
  constructor()
  {
     super()
     this.state={}
     this.state.firstPageBtnStyles={
       color:'black',

     }
    
     

  }
  static navigationOptions={

    header:null
  }

      btnKonobarPress=()=>{

        this.props.navigation.navigate('WaiterAppFirstPage')  
          
          }
          
      btnGostPress=()=>{
          
        this.props.navigation.navigate('UserAppFirstPage') 
            
            }
     btnHostesaPress=()=>{
          
              this.props.navigation.navigate('HostessAppFirstPage') 
                  
                  }
     btnMladenciPress=()=>{
          
                    this.props.navigation.navigate('NewlywedsAppFirstPage') 
                        
                        }
     btnMenadzerPress=()=>{
          
                          this.props.navigation.navigate('ManagerAppFirstPage') 
                              
                          }
  
      
      render() {
          return (
              <ImageBackground source ={require( './Images/Vencanje.jpg')} style={styles.containerImage} >
                 <View style={styles.containerImageLayer1}>

                 
                 <View style={styles.gornjideo}></View>
                 <View style={styles.donjipravougaonik}>
                  <View style={styles.levo}></View>
                  <TouchableOpacity style={styles.firstPageTO} onPress={this.btnGostPress}><Text style={{fontFamily:'news701i',fontSize:30,alignItems:'center',color:'white'}}>Gost</Text></TouchableOpacity>
                  
                  <View style={styles.levo}></View>
                  </View>
                  <View style={styles.donjipravougaonik}>
                  <View style={styles.levo}></View>
                  <TouchableOpacity style={styles.firstPageTO} onPress={this.btnMladenciPress}><Text style={{fontFamily:'news701i',fontSize:30,alignItems:'center',color:'white'}}>Mladenci</Text></TouchableOpacity>
                 <View style={styles.levo}></View>
                 </View>
                  <View style={styles.donjipravougaonik}>
                  <View style={styles.levo}></View>
                  <TouchableOpacity style={styles.firstPageTO} onPress={this.btnHostesaPress}><Text style={{fontFamily:'news701i',fontSize:30,alignItems:'center',color:'white'}}>Hostesa</Text></TouchableOpacity>
                  <View style={styles.levo}></View>
                  </View>
                  <View style={styles.donjipravougaonik}>
                  <View style={styles.levo}></View>
                  <TouchableOpacity style={styles.firstPageTO} onPress={this.btnKonobarPress}><Text style={{fontFamily:'news701i',fontSize:30,alignItems:'center',color:'white'}}>Konobar</Text></TouchableOpacity> 
                  <View style={styles.levo}></View>
                  </View>
                  <View style={styles.donjipravougaonik}>
                  <View style={styles.levo}></View>
                  <TouchableOpacity style={styles.firstPageTO} onPress={this.btnMenadzerPress}><Text style={{fontFamily:'news701i',fontSize:30,alignItems:'center',color:'white'}}>Menadžer</Text></TouchableOpacity>
                  <View style={styles.levo}></View>
                  </View>

                  <View style={styles.dole}></View>

                 
                  </View>
                   
              </ImageBackground>
                  
               
          );
        }



  }
  
  /*
    const styles = StyleSheet.create({
       
    
         textinput:{
          flex:0.6,
          backgroundColor: '#edd7f4',
         
          justifyContent: 'center',
          height:40,
          marginLeft:10,
          },
          text:{
            flex:0.3,
            color: 'black',
            fontWeight: 'bold',
            fontSize: 14,
            height:20,
           },
          container:{
            flex: 0.2,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection:'row',
            backgroundColor: '#ecb3ff',
          },
         
    }); 
    */