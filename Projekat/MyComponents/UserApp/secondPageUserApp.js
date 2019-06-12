import React from 'react';
import { StyleSheet, Text, View,TextInput, AsyncStorage, ScrollView ,TouchableOpacity} from 'react-native';

import{ StackActions,NavigationActions} from 'react-navigation';
import FetchConstants from '../../Classes/fetchConstants';

import LinearGradient from 'react-native-linear-gradient';
import {Header,Left,Icon} from 'native-base';

import { ListItem,Button } from 'react-native-elements';
import {Dialog , Portal, Button as Button2} from "react-native-paper";

export default class SecondPageScreenUserApp extends React.Component {

  static navigationOptions={

    header:null
  }
  constructor(props){
    super(props);
    this.state={
    
      isAnswered:false,
      starters:[],
      starter:this.props.navigation.state.params.member.starter,
      dialogVisible: false,
      member:this.props.navigation.state.params.member,
      chosenStarter:this.props.navigation.state.params.member.starter,
     
      
    }
  
  }




  showDialog = () => {
    this.setState({ dialogVisible: true });
  };
 
  handleCancel = () => {
    this.setState({ dialogVisible: false });
  };
 
  handleDelete = () => {
    this.setState({ dialogVisible: false });
  };


  
  showDialog = (element) => this.setState({ dialogVisible: true, chosenStarter:element });
  hideDialog = () => this.setState({ dialogVisible: false,chosenStarter:null });

  hideDialogAndSaveYes= async()=>{ 

    this.setState({ dialogVisible: false });
    this.predjelo(this.state.chosenStarter)
  
  }




  


  returnTableAndWaiter=()=>{
    const formData=new FormData();
  formData.append("returnTableAndWaiter",1);
  formData.append("priceRange",this.state.priceRange);

  const fetchData={
    method:"post",
    body:formData
  };
  fetch( FetchConstants.url+"/Member.php",fetchData)
  .then((response)=>response.json())
  .then((response)=>{
  // alert(response);

  })
  .catch((error)=>{alert(error);});

  }
componentDidMount(){
  const formData=new FormData();
  formData.append("returnStarters",1);
  formData.append("priceRange",this.state.member.priceRange);

  const fetchData={
    method:"post",
    body:formData
  };
  fetch( FetchConstants.url+"/Member.php",fetchData)
  .then((response)=>response.json())
  .then((response)=>{
  // alert(response);

    this.setState({starters:response})
  })
  .catch((error)=>{alert(error);});
}
/*
  ComingOrNot=()=>{
    const formData=new FormData();
        formData.append("MemberComing",1);
        formData.append("coming",this.state.member.coming);
        formData.append("idMember",this.state.member.idMember);
        formData.append("wedid",this.state.member.idWedding);
        const fetchData={
          method:"post",
          body:formData
        };
       
        fetch( FetchConstants.url+"/Member.php",fetchData)
        .then((response)=>response.json())
        .then((response)=>{
         alert(1+response);
      
        })
        .catch((error)=>{alert(error);});
  }*/
  handleComing=(newText)=>{this.setState({coming:newText})}
  handleStarter=(newText)=>{this.setState({starter:newText})}
  predjelo=(starter)=>{
    const formData=new FormData();
    formData.append("updateStarter",1);
        formData.append("idMember",this.state.member.idMember);
        formData.append("starter",starter);
        const fetchData={
          method:"post",
          body:formData
        };
       
        fetch( FetchConstants.url+"/Member.php",fetchData)
        .then((response)=>response.json())
        .then((response)=>{
        // alert(response);
        if(response!=null)
        {
         this.storeUser(this.state.member, starter)
        }
        else{
          setState({starter:null})
        }
      
        })
        .catch((error)=>{alert(error);});
  }

  storeUser = async (response ,desert) => {
    try {
      response.starter=desert;
      this.setState({starter:desert})
      let proba = JSON.stringify(response);
     // alert(this.state.member.starter)
      await AsyncStorage.setItem('User',proba);
    } catch (e) {
      // saving error
    }   
  }

  fj=()=>{
    alert(this.state.starter)
  }
   

    render() {
      if(this.state.member.coming!=0)
      {
      if(this.state.starter==null)
      {
          return (
            <LinearGradient   colors={['#FFDEC3','#FFCCB4','#FFB7AA']} style={{flex:1}}>
         <View style={{flex:1, alingItems:'center', justifyContent:'center'}}>
           <View style={{flex:0.2}}></View>
            <View  style={{flex:4,  flexDirection:'row'}}>
                <View style={{flex:0.3}}></View>
    
                 <View style={{flex:3,borderRadius:20,alingItems:'center',justifyContent:'center', backgroundColor:'white', borderColor:'#D98292',borderWidth: 1,shadowOffset:{width:2,height:4},shadowOpacity:0.8,shadowRadius:2,elevation:5,shadowColor:'#000' }}>
                 <View style={{flex:0.17,display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#FFF9D2',borderTopStartRadius:20}}>
                    <Text style={{fontFamily:'news701i',fontSize:25}}>Izaberite predjelo</Text>
                  </View>
                  <View style={{flex:1}}>
                  <ScrollView>
                 {  
    
    this.state.starters.map((element,index)=>(
      <ListItem
    
      


     title={
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#D97E7E','#F29979','#FFDEC3']} style={{width:'100%',borderRadius:40,height:65}}>
       <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',display:'flex',borderRadius:40,height:65,width:'100%'}}>
         <View style={{flex:1,justifyContent:'center',display:'flex'}}>
       <Text>{element}</Text>
       </View>
       <View style={{flex:1,flexDirection:'row-reverse'}}>
       <Button
        onPress={() =>this.showDialog(element)}
        title='Izaberite'
       buttonStyle={{height: 40, width: 80, borderRadius: 30,backgroundColor:'#A64E6E',marginRight:10}}
       
     /></View>
       </View>
       </LinearGradient>}
           
            titleStyle={{ fontSize: 25,color: 'black', }}
     />
    ))
    
       } 
       
                   </ScrollView>
                   </View>
    
                 </View>
                 <View style={{flex:0.3}}></View>
          </View>
          <View style={{flex:0.3}}></View>
    
          <Portal>
              <Dialog
                 visible={this.state.dialogVisible}
                 onDismiss={this.hideDialog}>
                <Dialog.Title>Izabrali ste ovo predjelo</Dialog.Title>
                <Dialog.Content>
                  <Text>Klikom na ovo dugme obaveštavate da  ste izabrali ovo predjelo, koje će Vam uskoro biti servirano.</Text>
                </Dialog.Content>
                <Dialog.Actions>
                <Button2  onPress={this.hideDialogAndSaveYes}>Da</Button2>
                <Button2 onPress={this.hideDialog}>Otkaži</Button2>
                </Dialog.Actions>
              </Dialog>
            </Portal>
           </View>
    
           </LinearGradient>
          );
      }else{
      
        return(
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <View style={{flex:0.2}}></View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontFamily:'news701i',fontSize:22}}>Već ste izabrali predjelo.</Text>
     
            </View>
            <View style={{flex:1, flexDirection:'row'}}>
         <View style={{flex:0.1}}></View>
         <View style={{flex:0.8}}>
         <View style={{flex:0.4}}></View>
           <View style={{flex:0.6 ,backgroundColor:'yellow',borderRadius:30}}>

             <TouchableOpacity style={{display:'flex',flex:1,alignItems:'center',justifyContent:'center'}} onPress={() => this.props.navigation.navigate('menuPage')}>
               <Text style={{fontFamily:'news701i',fontSize:16}}>Nazad na početnu.</Text>
             </TouchableOpacity>
           </View>
           <View style={{flex:1}}></View>
         </View>
         <View style={{flex:0.1}}></View>
            </View>
            <View style={{flex:0.2}}></View>
       
          </View>
    
        );
      }
    }else{
      return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <View style={{flex:0.2}}></View>
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontFamily:'news701i',fontSize:18,alignItems:'center'}}>Žao nam je,</Text> 
         <Text style={{fontFamily:'news701i',fontSize:16,alignItems:'center'}}> Vi ste otkazali dolazak na venčanje.</Text>
        </View>
        <View style={{flex:1, flexDirection:'row'}}>
     <View style={{flex:0.1}}></View>
     <View style={{flex:0.8}}>
     <View style={{flex:0.4}}></View>
       <View style={{flex:0.6 ,backgroundColor:'yellow',borderRadius:30}}>

         <TouchableOpacity style={{display:'flex',flex:1,alignItems:'center',justifyContent:'center'}} onPress={() => this.props.navigation.navigate('zaKocke')}>
           <Text style={{fontFamily:'news701i',fontSize:16}}>Nazad na početnu.</Text>
         </TouchableOpacity>
       </View>
       <View style={{flex:1}}></View>
     </View>
     <View style={{flex:0.1}}></View>
        </View>
        <View style={{flex:0.2}}></View>
   
      </View>
      );
        
    }
    
    }
  }


  /* 
    if(this.state.member.coming!=0)
      {
  return ( 
        <View style={styles.form}>
         
        <TextInput placeholder='Dolazis ili ne ' onChangeText={this.handleComing}></TextInput>
        <Button title="Potvrdi/Otkazi" onPress={this.ComingOrNot}></Button>
        <TextInput placeholder='Obrok' onChangeText={this.handleStarter}></TextInput>
        <TouchableOpacity title='Okbrokkk' onPress={this.predjelo}><Text>Add predjelo</Text></TouchableOpacity>
      </View>
      );
  }
  else{
    <View style={styles.form}>
    <Text>Zao mi je vi ne dolazite na vencanje</Text>
    </View>)
  }*/
