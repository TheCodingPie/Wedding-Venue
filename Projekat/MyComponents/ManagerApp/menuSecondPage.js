import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,TouchableOpacity,CheckBox,Picker,ImageBackground,Dimensions,Alert} from 'react-native';

import styles from '../../styles';
import FetchConstants from '../../Classes/fetchConstants';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export default class menuSecondPageScreen extends React.Component {
  
  constructor(){
    super();
    this.state={
      cb:false,
      vegeterian:0,
      name:"",
      price:"",
      tipMenija:"osnovni"
    }
  }
  cbChange(){
    //alert("j");
    this.setState({cb:!this.state.cb});
    if(this.state.cb)
    this.setState({vegeterian:0});
    else
    this.setState({vegeterian:1});
   // alert(this.state.cb);
  };
  onTextChangeName=(newText)=>{this.setState({name:newText})};
  onTextChangePrice=(newText)=>{this.setState({price:newText})};
  createStarter=()=>{
    if(this.state.name=="")
    {
      Alert.alert("Obaveštenje","Proverite unete podatke.");
      return;
    }
    const formData=new FormData();
    formData.append("createMain",1);
    formData.append("vegeterian",this.state.vegeterian);
    formData.append("name",this.state.name);
    formData.append("price",this.state.tipMenija);
    formData.append("Restaurant_idRestaurant",1111);
    const fetchData={
      method:"post",
      body:formData
    };
   
    fetch( FetchConstants.url+"/Manager.php",fetchData)
    .then((response)=>response.json())
    .then((response)=>{
     if(response==true)
     Alert.alert("Obaveštenje","Kreirali ste jelo.");
     else
     {
      alert("Main course not created");
     }
    })
    .catch((error)=>{alert(error);});
    
  }

  static navigationOptions={

    header:null
  }

render() {
    return (
      <ScrollView contentContainerStyle={{ height:Dimensions.get('window').height*0.9}}>
<ImageBackground source={require('../Images/marble.jpg')} style={{ display:'flex', flexDirection:'column',flex:1,width: '100%', height: '100%'}}>
     
<View style={{ display:'flex', flexDirection:'column',flex:1}}>
        <View style={{display:'flex', flexDirection:'row',flex:1,backgroundColor:'#fbb0a9'}}>
                <View style={{display:'flex',flex:1,flexDirection:'row',alignContent:'center',justifyContent:'center',
              borderTopColor:'#fbb0a9',borderLeftColor:'#fbb0a9',borderRightColor:'#fbb0a9',borderTopLeftRadius:20,
              borderTopRightRadius:20,borderTopWidth:2,borderLeftWidth:2,borderRightWidth:2,backgroundColor:'white',borderBottomWidth:4,borderBottomColor:'#fbb0a9'}}>
                <TouchableOpacity style={{display:'flex',flexDirection:'row',alignContent:'center',alignItems:'center'}} onPress={()=>this.props.navigation.navigate('menuFirstPage')}>
                  <Text style={{color:'black',fontSize:28,fontFamily:'cursive',fontWeight:'300'}}>Predjelo</Text></TouchableOpacity>
               </View>
               <View style={{display:'flex',flex:1,flexDirection:'row',alignContent:'center',justifyContent:'center',
              borderTopColor:'#fbb0a9',borderLeftColor:'#fbb0a9',borderRightColor:'#fbb0a9',borderTopLeftRadius:20,
              borderTopRightRadius:20,borderTopWidth:2,borderLeftWidth:2,borderRightWidth:2,backgroundColor:'#F1F1F1'}}>
               <TouchableOpacity style={{display:'flex',flexDirection:'row',alignContent:'center',alignItems:'center'}}>
                  <Text style={{color:'black',fontSize:28,fontFamily:'cursive',fontWeight:'300'}}>Jelo</Text></TouchableOpacity>
               </View>
               <View style={{display:'flex',flex:1,flexDirection:'row',alignContent:'center',justifyContent:'center',
             borderTopColor:'#fbb0a9',borderLeftColor:'#fbb0a9',borderRightColor:'#fbb0a9',borderBottomColor:'#fbb0a9',borderTopLeftRadius:20,borderBottomWidth:4,
              borderTopRightRadius:20,borderTopWidth:2,borderLeftWidth:2,borderRightWidth:2,backgroundColor:'white'}}>
               <TouchableOpacity style={{display:'flex',flexDirection:'row',alignContent:'center',alignItems:'center'}}>
                  <Text style={{color:'black',fontSize:28,fontFamily:'cursive',fontWeight:'300'}} onPress={()=>this.props.navigation.navigate('menuThirdPage')}>Desert</Text></TouchableOpacity>
               </View>
        </View>
  
  
<View style={{display:'flex',flexDirection:'column',flex:10,}}>
    <View style={{flex:2.2,alignContent:'stretch',justifyContent:'center'}}><Text style={{fontFamily:'cursive',fontSize:33,color:'black'}}>Dodavanje jela</Text></View>
    <View style={{flex:10,display:'flex',flexDirection:'row'}}>
        <View style={{flex:0.5}}></View>
        <LinearGradient start={{x: 0, y: 0}} end={{x:0 , y: 1}} colors={['white','#F1F1F1']} style={{flex:1,flex:8.5,display:'flex',flexDirection:'row',borderRadius:20,borderColor:'grey',borderWidth:1}}>
         <View style={{flex:1}}></View>
          <View style={{flex:4,display:'flex',flexDirection:'column'}}>
             <View style={{flex:3}}></View>
             <TextInput placeholder="Ime jela" placeholderTextColor='#fbb0a9' onChangeText={this.onTextChangeName} style={{flex:1.5,borderBottomColor:'black',
                              borderBottomWidth:2,shadowColor:'pink'}}></TextInput>
            <View style={{flex:2}}></View>
            <View style={{flex:1.5,flexDirection:'row',alignContent:'center'}}>
             <CheckBox value={this.state.cb} style={{color:'white'}} onChange={()=>this.cbChange()}/>
             <Text style={{flexGrow:1,color:'#fbb0a9',fontSize:20}}>Vegeterijansko</Text>
             </View>
             <View style={{flex:2}}></View>
             <Picker
  selectedValue={this.state.tipMenija}
  mode='dropdown'
  style={{flex:1,color:'#fbb0a9',borderColor:'black',borderWidth:2}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({tipMenija: itemValue})
  }>
      <Picker.Item label="Osnovni" value="osnovni" />
  <Picker.Item label="Premium" value="premium" />
  <Picker.Item label="Gold" value="gold" />
  <Picker.Item label="Platinum" value="platinum" />
</Picker>
            <View style={{flex:2}}></View>
            <View style={{flex:1.5,display:'flex',flexDirection:'row',alignContent:'center',justifyContent:'center'}}>
              
              <TouchableOpacity onPress={this.createStarter} style={{display:'flex',alignItems:'center',justifyContent:'center',borderRadius:25,backgroundColor:'#fbb0a9',flex:1}}><Text style={{fontSize:20}}> Kreiraj jelo</Text></TouchableOpacity>
              </View>
         <View style={{flex:2}}></View>
          
       </View>
       <View style={{flex:1}}></View>
       </LinearGradient>
       <View style={{flex:0.5}}></View>
   </View>
   <View style={{flex:0.5}}></View>
</View>
</View>
      
</ImageBackground>
</ScrollView>
      
    );
  }
}

