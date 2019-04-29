import React from 'react';
<<<<<<< .merge_file_a03136
import { StyleSheet, Text, View,TextInput,Button,ImageBackground } from 'react-native';

import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import styles from './stylesAppFirstPage';
=======
import { StyleSheet, Text, View,TouchableOpacity,Button,ImageBackground } from 'react-native';

import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import styles from './stylesAppFirstPage';
import { TouchableHighlight } from 'react-native-gesture-handler';
>>>>>>> .merge_file_a06296
//import {styles} from '../styles';
export default class AppFirstPageScreen extends React.Component {
  
  constructor()
  {
     super()
<<<<<<< .merge_file_a03136
     this.state={
       code:"",
       surname:""

       }
=======
     this.state={}
     this.state.firstPageBtnStyles={
       color:'black',

     }
     this.state.firstPageTO={
      borderColor:'black',
      opacity:100,
      borderStyle:'solid',
      borderWidth:2
     }
     setInterval(()=>{
       if(this.state.firstPageBtnStyles.color=='black')
       {
         this.setState({
           firstPageBtnStyles:'white',
           opacity:0
         })
       }
       else{
         this.setState({
          firstPageBtnStyles:{
            color:'black'
          }
         })
       }
     },1000);
>>>>>>> .merge_file_a06296
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
<<<<<<< .merge_file_a03136
                 <View style={styles.containerDugme}>
                  <Button title='Gost' color="#260033" onPress={this.btnGostPress}>  </Button>
                  <Button title='Mladenci' color="#260033" onPress={this.btnMladenciPress}>  </Button>                  
                  <Button title='Konobar' color="#260033" onPress={this.btnKonobarPress}>  </Button>
                  <Button title='Hostesa' color="#260033" onPress={this.btnHostesaPress}>  </Button>
                  <Button title='Menadzer' color="#260033" onPress={this.btnMenadzerPress}>  </Button>
=======
                 <View style={styles.containerImageLayer}>
                  <TouchableOpacity style={this.state.firstPageTO} onPress={this.btnGostPress}><Text style={this.state.firstPageBtnStyles}>Gost</Text></TouchableOpacity>
             
                 <TouchableOpacity style={this.state.firstPageTO} onPress={this.btnMladenciPress}><Text style={this.state.firstPageBtnStyles}>Mladenci</Text></TouchableOpacity>          
                
                  <TouchableOpacity style={this.state.firstPageTO} onPress={this.btnKonobarPress}><Text style={this.state.firstPageBtnStyles}>Konobar</Text></TouchableOpacity>
                  
                  <TouchableOpacity style={this.state.firstPageTO} onPress={this.btnHostesaPress}><Text style={this.state.firstPageBtnStyles}>Hostesa</Text></TouchableOpacity>
              
                  <TouchableOpacity style={this.state.firstPageTO} onPress={this.btnMenadzerPress}><Text style={this.state.firstPageBtnStyles}>Menadzer</Text></TouchableOpacity>
                  
>>>>>>> .merge_file_a06296
                  </View>
                  </View>
                   
              </ImageBackground>
                  
               
          );
        }



  }
  
  
    /*const styles = StyleSheet.create({
        form: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          
            backgroundColor: '#ecb3ff',
          },
    
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
         
    }); */
    