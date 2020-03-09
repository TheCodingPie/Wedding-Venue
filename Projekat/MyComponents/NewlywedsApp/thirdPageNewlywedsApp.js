import React from 'react';
import { StyleSheet, Text, View,TextInput,Picker,TouchableOpacity,AsyncStorage,ScrollView,Dimensions,Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../../styles';
import FetchConstants from '../../Classes/fetchConstants';



export default class ThirdPageScreenNewlywedsApp extends React.Component {
  constructor(){
    super();
    this.state={
      lastname:"",
      numOfMembers:0,
      guestType:"porodica",
      com:false,
      coming:0,
      numComing:0,
      //idWedding:0,
      idTable:null,
      newlyweds:null

    }
    this.loadData();
  }
  static navigationOptions={

    header:null
  }


/*
  loadData = async() =>{
    var response;
    try {
    const storeString = await AsyncStorage.getItem('newlyweds');
    if (storeString !== null){
       response = JSON.parse(storeString);
    }
     } catch (error) {
   
  }
    this.setState({newlyweds:response,idWedding:response.id});
    
  }*/
  
  loadData = async() =>{
    var response;
    try {
    AsyncStorage.getItem('newlyweds').then( (storeString)=>{
   
       this.setState({newlyweds:JSON.parse(storeString)})
       //alert(newlyweds.id);
      })
    
  }catch (error) { }
}

  /*findIdWedding=()=>{
    const formData=new FormData();
    formData.append("addFamily",1);
    formData.append("lastname",this.state.lastname);
    formData.append("numOfMembers",parseInt(this.state.numOfMembers));
    formData.append("guestType",this.state.guestType);
    formData.append("idWedding",1);
  
  
  
    const fetchData={
      method:"post",
      body:formData
    };
   
    fetch(FetchConstants.url+"/BrideAndGroom.php",fetchData)
    .then((response)=>response.json())
    .then((response)=>{
     if(response==null){

     }
     else
     {
       this.setState({idWedding:response});
     }
    })
    .catch((error)=>{alert(error);});
  }*/
  bntClick=()=>{
    if( this.state.lastname=="")
  {
    Alert.alert("Obaveštenje","Proverite unete podatke.");
    this.setState({
  lastname:"",

  numOfMembers:0
  
  })
    return;
  }
  if(isNaN(this.state.numOfMembers))
    {
      
      Alert.alert("Obaveštenje","Proverite unete podatke.");
      this.setState({
        lastname:"",
      
        numOfMembers:0
        
        })
          return;
    }
    const formData=new FormData();
    formData.append("addFamily",1);
    formData.append("lastname",this.state.lastname);
    formData.append("numOfMembers",parseInt(this.state.numOfMembers));
    formData.append("guestType",this.state.guestType);
    formData.append("idWedding",this.state.newlyweds.idWedding);
  
  
  
    const fetchData={
      method:"post",
      body:formData
    };
   
    fetch(FetchConstants.url+"/BrideAndGroom.php",fetchData)
    .then((response)=>response.json())
    .then((response)=>{
     if(response==null)
     Alert.alert("Obaveštenje","Proverite podatke.");
     else
     {
      Alert.alert("Obaveštenje","Dodali ste porodicu.");
     // alert(response);
     // this.props.navigation.navigate('FifthPageScreenNewlywedsApp',{wedid:this.state.idWedding,numOfMembers:this.state.numOfMembers,familyId:parseInt(response)});
     this.props.navigation.navigate('FifthPageScreenNewlywedsApp',{wedid:this.state.newlyweds.idWedding,numOfMembers:this.state.numOfMembers,familyId:parseInt(response)});
     }
     this.setState({
      lastname:"",
    
      numOfMembers:0
      
      })
    })
    .catch((error)=>{alert(error);});
  
  }
  handleChangeTextGuestType=(newText)=>{this.setState({guestType:newText})};
  handleChangeTextLastname=(newText)=>{this.setState({lastname:newText})};
  handleChangeTextNumOfMembers=(newText)=>{this.setState({numOfMembers:newText})};

    
    render() {
  return (
        <View  style={{display:'flex',flex:1}}> 
        <ScrollView contentContainerStyle={{ height:0.9*Dimensions.get('window').height}}>
             <View style={{flex:1}}></View>

               <View style={{display:'flex',flexDirection:'row',flex:15}}>

               <View style={{flex:1}}></View>

               <LinearGradient start={{x: 0, y: 0}} end={{x:0 , y: 1}} colors={['white','#F1F1F1']} style={{flex:10,display:'flex',flexDirection:'row',borderRadius:20,borderColor:'white',shadowOffset:{width:2,height:4},shadowOpacity:0.8,shadowRadius:2,elevation:5,shadowColor:'#000'}}>
      
               <View style={{flex:4,display:'flex',flexDirection:'column'}}>
                 <View style={{flex:0.15,alignItems:'center',justifyContent:'center' }}>
                 <Text style={{fontFamily:'news701i',fontSize:20,alignItems:'center',color:'#f99388'}}>Forma za dodavanje</Text>
                 <Text  style={{fontFamily:'news701i',fontSize:20,alignItems:'center',color:'#f99388'}}> porodice</Text>
                 </View>
                 <View style={{flex:0.07}}></View>
                 
       <View  style={{flex:0.85,flexDirection:'row'}} >
         <View style={{flex:0.1}}></View>
         <View style={{flex:0.8 ,flexDirection:'column',display:'flex'}}>
           <View style={{flex:1 ,alignItems:'center',justifyContent:'center', flexDirection:'row'}}>
             <View style={{flex:0.1}}></View>
        <TextInput value={this.state.lastname} placeholder="Prezime" style={{fontSize:18 ,borderBottomColor:'black',borderBottomWidth:1,flex:1}} placeholderTextColor='#f99388' onChangeText={this.handleChangeTextLastname}></TextInput>
        <View style={{flex:0.1}}></View>
        </View>
       <View style={{flex:1 ,alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
       <View style={{flex:0.1}}></View>
        <TextInput value={this.state.numOfMembers} placeholder="Broj članova porodice"  style={{fontSize:18,borderBottomColor:'black',borderBottomWidth:1,flex:1}} placeholderTextColor='#f99388' onChangeText={this.handleChangeTextNumOfMembers}></TextInput>
        <View style={{flex:0.1}}></View>
        </View>
        <View  style={{flex:1 }}   >
          <View style={{flex:0.4}}></View>
          <View style={{ flex:1,fontSize:25,flexDirection:'row'}}>
            <View style={{flex:0.07}} ></View>
            <View  style={{ borderWidth: 1, borderColor:'#fbb0a9', overflow: 'hidden',flex:1,fontSize:25,flexDirection:'row'}}>
        <Picker
        style={{flex:1}}
        mode='dropdown'
    selectedValue={this.state.guestType}
    onValueChange={(loc) => this.setState({guestType: loc})}>
 <Picker.Item  color="#fbb0a9" label="Porodica" value="porodica"  /> 
  <Picker.Item  color="#fbb0a9" label="Prijatelji" value="prijatelji"  /> 
  <Picker.Item  color="#fbb0a9" label="Kumovi" value="kumovi" />
  <Picker.Item  color="#fbb0a9" label="Kolege" value="kolege"/>
</Picker>
</View>
<View style={{flex:0.07}}></View>
</View>
<View style={{flex:0.6}}></View>
</View>
<View style={{flex:1}}>
       <View style={{flex:0.35}}></View>
       <View style={{flex:1,flexDirection:'row'}}>
            <View style={{flex:0.1}}></View>
            <View style={{flex:0.8}}>
               <TouchableOpacity style={{flex:1,borderRadius:30,backgroundColor:'#fbb0a9' ,alignItems:'center',justifyContent:'center'}} title='Unesi' onPress={this.bntClick}><Text style={{fontSize:18,alignItems:'center',color:'white'}} >Dodaj članove</Text>
               </TouchableOpacity>
               </View>
                <View style={{flex:0.1}}></View>
         </View>

     <View style={{flex:0.35}}></View>
           
              </View>
     </View>
     <View style={{flex:0.1}}></View>
     </View>
    

              </View>   
              </LinearGradient> 



              <View style={{flex:1}}></View>
      </View>
      <View style={{flex:1}}></View>
      </ScrollView>
      </View>
      );
    }
  }


  