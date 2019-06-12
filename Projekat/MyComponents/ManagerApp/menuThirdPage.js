import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,TouchableOpacity ,CheckBox,ImageBackground,Dimensions,Picker} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../../styles';
import FetchConstants from '../../Classes/fetchConstants';
export default class menuThirdPageScreen extends React.Component {//desert
  
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
  cbChange=()=>{
    this.setState({cb:!this.state.cb });
    if(this.state.cb)
    this.setState({vegeterian:0});
    else
    this.setState({vegeterian:1});
  };
  onTextChangeName=(newText)=>{this.setState({name:newText})};
  onTextChangePrice=(newText)=>{this.setState({price:newText})};
 

  static navigationOptions={

    header:null
  }
  createDesert=()=>{
    const formData=new FormData();
    formData.append("createDesert",1);
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
     alert("Desert created")
     else
     {
      alert("Desert not created");
     }
    })
    .catch((error)=>{alert(error);});
    
  }

render() {
    return (
      <ScrollView contentContainerStyle={{ height:Dimensions.get('window').height*0.9}}>
      <ImageBackground source={require('../Images/marble.jpg')} style={{ display:'flex', flexDirection:'column',flex:1,width: '100%', height: '100%'}}>
<View style={{backgroundColor:'white', display:'flex', flexDirection:'column',flex:1}}>
        <View style={{display:'flex', flexDirection:'row',flex:1,backgroundColor:'#fbb0a9'}}>
                <View style={{display:'flex',flex:1,flexDirection:'row',alignContent:'center',justifyContent:'center',
              borderTopColor:'#fbb0a9',borderLeftColor:'#fbb0a9',borderRightColor:'#fbb0a9',borderTopLeftRadius:20,
              borderTopRightRadius:20,borderTopWidth:2,borderLeftWidth:2,borderRightWidth:2,backgroundColor:'white',borderBottomWidth:4,borderBottomColor:'#fbb0a9'}}>
                <TouchableOpacity style={{display:'flex',flexDirection:'row',alignContent:'center',alignItems:'center'}} onPress={()=>this.props.navigation.navigate('menuFirstPage')} >
                  <Text style={{color:'black',fontSize:28,fontFamily:'cursive',fontWeight:'300'}}>Predjelo</Text></TouchableOpacity>
               </View>
               <View style={{display:'flex',flex:1,flexDirection:'row',alignContent:'center',justifyContent:'center',
              borderTopColor:'#fbb0a9',borderLeftColor:'#fbb0a9',borderRightColor:'#fbb0a9',borderTopLeftRadius:20,
              borderTopRightRadius:20,borderTopWidth:2,borderLeftWidth:2,borderRightWidth:2,backgroundColor:'white',borderBottomColor:'#fbb0a9',borderBottomWidth:4,}}>
               <TouchableOpacity style={{display:'flex',flexDirection:'row',alignContent:'center',alignItems:'center'}}>
                  <Text style={{color:'black',fontSize:28,fontFamily:'cursive',fontWeight:'300'}} onPress={()=>this.props.navigation.navigate('menuSecondPage')}>Jelo</Text></TouchableOpacity>
               </View>
               <View style={{display:'flex',flex:1,flexDirection:'row',alignContent:'center',justifyContent:'center',
             borderTopColor:'#fbb0a9',borderLeftColor:'#fbb0a9',borderRightColor:'#fbb0a9',borderTopLeftRadius:20,
              borderTopRightRadius:20,borderTopWidth:2,borderLeftWidth:2,borderRightWidth:2,backgroundColor:'white'}}>
               <TouchableOpacity style={{display:'flex',flexDirection:'row',alignContent:'center',alignItems:'center'}}>
                  <Text style={{color:'black',fontSize:28,fontFamily:'cursive',fontWeight:'300'}}>Desert</Text></TouchableOpacity>
               </View>
        </View>
  
  
<View style={{display:'flex',flexDirection:'column',flex:10,backgroundColor:'white'}}>
    <View style={{flex:2.2,alignContent:'stretch',justifyContent:'center'}}><Text style={{fontFamily:'cursive',fontSize:33,color:'black'}}>Dodavanje deserta</Text></View>
    <View style={{flex:10,display:'flex',flexDirection:'row'}}>
        <View style={{flex:0.5}}></View>
        <View  style={{flex:8.5,display:'flex',flexDirection:'row',backgroundColor:'#900C3F',borderRadius:20,borderColor:'grey',borderWidth:1}}>
          <View style={{flex:1}}></View>
          <View style={{flex:4,display:'flex',flexDirection:'column'}}>
             <View style={{flex:3}}></View>
             <TextInput placeholder="Ime deserta" placeholderTextColor='white' onChangeText={this.onTextChangeName} style={{flex:1.5,borderBottomColor:'black',
                              borderBottomWidth:2,shadowColor:'pink'}}></TextInput>
            <View style={{flex:2}}></View>
            <View style={{flex:1.5,flexDirection:'row',alignContent:'center'}}>
            <View style={{flex:1}}><TouchableOpacity style={{flex:1, display:'flex',flexDirection:'column'}}>
              </TouchableOpacity></View>
              <View style={{flex:1.5,flexDirection:'row',alignContent:'center'}}>
             <CheckBox value={this.state.cb} style={{color:'#fbb0a9'}} onChange={()=>this.cbChange()}/>
             <Text style={{flexGrow:1,color:'#fbb0a9'}}>Vegeterijansko</Text>
             </View>
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
         <TouchableOpacity onPress={this.createDesert} style={{display:'flex',alignContent:'center',justifyContent:'center'}}><Text> Kreiraj desert</Text></TouchableOpacity>
         </View>
         <View style={{flex:2}}></View>
          
       </View>
       <View style={{flex:1}}></View>
       </View>
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


