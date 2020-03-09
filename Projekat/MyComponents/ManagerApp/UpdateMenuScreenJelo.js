import React from 'react';


import FetchConstants from '../../Classes/fetchConstants';

import { StyleSheet, Text, View,TextInput,Button,TouchableOpacity,Image,Picker ,ImageBackground,Dimensions,Alert} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
let cb=false;
export default class UpdateMenuScreenJelo extends React.Component {
  static navigationOptions={

    header:null
  }
    constructor(props){
       super(props);
       this.state={
       jela:[],
       starterLabel:"",
       toChange:"",
       vegetarian:0,
       tipMenija:"osnovni",
       opacity:0

         }
         cb=true;
         this.returnJela();

    }
    cbChange=()=>{
      cb=!cb;
    if(cb)
    this.setState({vegeterian:0,opacity:0});
    else
    this.setState({vegeterian:1,opacity:1});
      //alert(this.state.cb);
    };

   returnJela=()=>{

    const formData=new FormData();
    formData.append("returnMainsToUpdate",1);
    const fetchData={
      method:"post",
      body:formData
    };
   
    fetch( FetchConstants.url+"/Manager.php",fetchData)
    .then((response)=>response.json())
    .then((response)=>{
     this.setState({jela:response,toChange:response[0]});
    })
    .catch((error)=>{alert(error);});

   }
   updateMain=()=>{
    const formData=new FormData();
    formData.append("updateMainManager",1);
    formData.append("name",this.state.toChange);
    formData.append("vegeterian",this.state.vegetarian);
    formData.append("priceRange",this.state.tipMenija);
    const fetchData={
      method:"post",
      body:formData
    };
   // alert(this.state.toChange+" "+this.state.vegeterian+" "+this.state.tipMenija);
    fetch( FetchConstants.url+"/Manager.php",fetchData)
    .then((response)=>response.json())
    .then((response)=>{
     if(response==true)
     Alert.alert("Obaveštenje","Izmenili ste jelo.");
     else
     Alert.alert("Obaveštenje","Niste izmenili jelo.");
    })
    .catch((error)=>{alert(error);});
   }
   pickerChange(index){
    this.state.jela.map( (v,i)=>{
     if( index === i ){
       this.setState({
      
       toChange: this.state.jela[index].name
      })
     }
    })
   }
     

render() {
    return (
      <ScrollView contentContainerStyle={{ height:Dimensions.get('window').height*0.95}}>
      <ImageBackground source={require('../Images/marble.jpg')} style={{ display:'flex', flexDirection:'column',flex:1,width: '100%', height: '100%'}}>
              <View style={{display:'flex', flexDirection:'row',flex:1,backgroundColor:'#fbb0a9'}}>
                      <View  style={{display:'flex',flex:1,flexDirection:'row',alignContent:'center',justifyContent:'center',
                    borderTopColor:'#fbb0a9',borderLeftColor:'#fbb0a9',borderRightColor:'#fbb0a9',borderTopLeftRadius:20,backgroundColor:'white',borderBottomColor:'#fbb0a9',borderBottomWidth:4,
                    borderTopRightRadius:20,borderTopWidth:2,borderLeftWidth:2,borderRightWidth:2}}>
                      <TouchableOpacity style={{display:'flex',flexDirection:'row',alignContent:'center',alignItems:'center'}} onPress={()=>this.props.navigation.navigate('UpdateMenuScreen')}>
                     
                        <Text style={{color:'black',fontSize:28,fontFamily:'cursive',fontWeight:'300'}}>Predjelo</Text></TouchableOpacity>
                     </View>
                     <View style={{display:'flex',flex:1,flexDirection:'row',alignContent:'center',justifyContent:'center',
                    borderTopColor:'#fbb0a9',borderLeftColor:'#fbb0a9',borderRightColor:'#fbb0a9',borderTopLeftRadius:20,
                    borderTopRightRadius:20,borderTopWidth:2,borderLeftWidth:2,borderRightWidth:2,backgroundColor:'#F1F1F1'}}>
                     <TouchableOpacity style={{display:'flex',flexDirection:'row',alignContent:'center',alignItems:'center'}} >
                        <Text style={{color:'black',fontSize:28,fontFamily:'cursive',fontWeight:'300'}}>Jelo</Text></TouchableOpacity>
                     </View>
                     <View style={{display:'flex',flex:1,flexDirection:'row',alignContent:'center',justifyContent:'center',
                   borderTopColor:'#fbb0a9',borderLeftColor:'#fbb0a9',borderRightColor:'#fbb0a9',borderBottomColor:'#fbb0a9',borderTopLeftRadius:20,borderBottomWidth:4,
                    borderTopRightRadius:20,borderTopWidth:2,borderLeftWidth:2,borderRightWidth:2,backgroundColor:'white'}}>
                     <TouchableOpacity style={{display:'flex',flexDirection:'row',alignContent:'center',alignItems:'center'}}  onPress={()=>this.props.navigation.navigate('UpdateMenuScreenDesert')}>
                        <Text style={{color:'black',fontSize:28,fontFamily:'cursive',fontWeight:'300'}}>Desert</Text></TouchableOpacity>
                     </View>
              </View>
        
        
      <View style={{display:'flex',flexDirection:'column',flex:10}}>
          <View style={{flex:2.2,alignContent:'stretch',justifyContent:'center'}}><Text style={{fontFamily:'cursive',fontSize:33,color:'black'}}>Izmena jela</Text></View>
          <View style={{flex:10,display:'flex',flexDirection:'row'}}>
              <View style={{flex:0.5}}></View>
              <LinearGradient start={{x: 0, y: 0}} end={{x:0 , y: 1}} colors={['white','#F1F1F1']} style={{flex:1,flex:8.5,display:'flex',flexDirection:'row',borderRadius:20,borderColor:'white',shadowOffset:{width:2,height:4},shadowOpacity:0.8,shadowRadius:2,elevation:5,shadowColor:'#000'}}>
                <View style={{flex:1}}></View>
                <View style={{flex:4,display:'flex',flexDirection:'column'}}>
                   <View style={{flex:3}}></View>
                  
                   <Picker
selectedValue={this.state.toChange}
mode='dropdown'
onValueChange={(itemValue, itemIndex) => this.pickerChange(itemIndex)}>{
  this.state.jela.map( (v)=>{

   return <Picker.Item label={v.name} value={v.name} />
  })
 }
</Picker>
                  
                  <View style={{flex:2}}></View>
                  <View style={{flex:1.5,flexDirection:'row',alignContent:'center',justifyContent:'center'}}>
                  <View style={{flex:7,alignContent:'center',flexDirection:'column',justifyContent:'center'}}><Text style={{color:'#fbb0a9',alignContent:'center'}}>Vegeterijansko</Text></View> 
                   <TouchableOpacity  onPress={this.cbChange} style={{flex:1,alignContent:'center',display:'flex',flexDirection:'row',backgroundColor:'white',justifyContent:'center',borderColor:'lightgrey',borderRadius:7,borderWidth:2}} >
                   <Image opacity={this.state.opacity}
  style={{flex:1, height: undefined, width: undefined}}
  source={require('../Images/RozeX.png')}
  resizeMode="contain"
/>
</TouchableOpacity>
                   </View>
                   <View style={{flex:2}}></View>
                   
                   <Picker
        selectedValue={this.state.tipMenija}
        mode='dropdown'
       
        onValueChange={(itemValue, itemIndex) =>
          this.setState({tipMenija: itemValue})
        }>
        <Picker.Item label="Osnovni" value="osnovni" />
        <Picker.Item label="Premium" value="premium" />
        <Picker.Item label="Gold" value="gold" />
        <Picker.Item label="Platinum" value="platinum" />
      </Picker>
      <View style={{flex:1.5}}></View>
               <View style={{flex:1.5}}><TouchableOpacity style={{flex:1,flexDirection:"column",borderRadius:30, alignItems:'center',justifyContent:'center',backgroundColor:'#fbb0a9'}} onPress={this.updateMain}><Text style={{color:'white'}}>Izmeni jelo</Text></TouchableOpacity></View>
          
               <View style={{flex:2}}></View>
                
             </View>
             <View style={{flex:1}}></View>
             </LinearGradient>
             <View style={{flex:0.5}}></View>
         </View>
         <View style={{flex:0.5}}></View>
      </View>
      </ImageBackground>
      </ScrollView>
      
        

    );
  }
}

