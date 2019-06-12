import React from 'react';
import {Text, View,ImageBackground,AsyncStorage ,TouchableOpacity} from 'react-native';
import styles from '../../styles';
import {Header,Left,Icon} from 'native-base';

import FetchConstants from '../../Classes/fetchConstants';



export default class MenuPage extends React.Component {
  static navigationOptions={

    header:null
  }
  constructor(props){
    super(props);
    this.state={
  
     member:null,
     
    }
    this.loadData();
  }

  loadData = async() =>{
    try {
    AsyncStorage.getItem('User').then( (storeString)=>{
   
      
       this.setState({member:JSON.parse(storeString)});
     
      
 
      }) }
      catch (error) { }

  }
  
    render() {

  
      return (
        <View style={{flex:1}}>
    <View style={{flex:0.2}}></View>



    <View style={{flex:1}}>

              <View style={{flex:0.45,flexDirection:'row'}}>

                <View style={{flex:0.3}}></View>

                <View style={{flex:0.5,backgroundColor:'red',borderRadius:25}}>
                <TouchableOpacity  style={{display:'flex',flex:1,alignItems:'center',justifyContent:'center'}} onPress={() => this.props.navigation.navigate('UserAppSecondPage',{member:this.state.member})}>
                <Icon name="bowl" type='MaterialCommunityIcons'  style={{fontSize:100,color:"white"}}  />
                  <Text style={{fontFamily:'news701i',fontSize:18}}>Predjelo</Text></TouchableOpacity>
                </View>

                <View style={{flex:0.3}}></View>
               
              </View>





               <View style={{flex:0.1}}></View>

              <View style={{flex:0.45,flexDirection:'row'}}>

               
                    <View style={{flex:1, flexDirection:'row'}}>

                    <View style={{flex:0.125}}></View>
                   <View style={{flex:1,backgroundColor:'yellow', borderRadius:25}}>
                   <TouchableOpacity  style={{display:'flex',flex:1,alignItems:'center',justifyContent:'center'}}  onPress={() => this.props.navigation.navigate('UserAppThirdPage',{member:this.state.member})} >
                   <Icon name="room-service" type='MaterialCommunityIcons'  style={{fontSize:100,color:"white"}}  />
                     <Text style={{fontFamily:'news701i',fontSize:18}}>Jelo</Text></TouchableOpacity>
                   </View>

                   <View style={{flex:0.125}}></View>
             

                   <View style={{flex:1,backgroundColor:'red',borderRadius:25}}>
                   <TouchableOpacity style={{display:'flex',flex:1,alignItems:'center',justifyContent:'center'}}  onPress={() => this.props.navigation.navigate('UserAppFourthPage',{member:this.state.member})} >
                   <Icon name="cupcake" type='MaterialCommunityIcons'  style={{fontSize:100,color:"white"}}  />
                     <Text style={{fontFamily:'news701i',fontSize:18}}>Desert</Text></TouchableOpacity>
                   </View>
                   <View style={{flex:0.125}}></View>
                   </View>

                  
                 

              </View>
              
            
    </View>



    <View style={{flex:0.2}}></View>


  
       
      
      
    

      
    
       </View>
      );
    }
  }
  


  