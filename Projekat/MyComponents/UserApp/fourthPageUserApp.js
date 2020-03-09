import React from 'react';
import { StyleSheet, Text, View,TextInput,Picker,TouchableOpacity,Image,AsyncStorage,ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../../styles';
import {Icon} from 'native-base';

import { ListItem,Button } from 'react-native-elements';
import {Dialog , Portal, Button as Button2} from "react-native-paper";

import FetchConstants from '../../Classes/fetchConstants';


export default class FourthPageScreenUserApp extends React.Component {
  static navigationOptions={

    header:null
  }
  constructor(props){
    super(props);
    this.state={
      isAnswered:false,
      deserts:[],
      chosenDesert:this.props.navigation.state.params.member.desert,
      dialogVisible: false,
      member:this.props.navigation.state.params.member,
      desert:this.props.navigation.state.params.member.desert,
    }


  }

 



  showDialog = (element) => this.setState({dialogVisible: true,chosenDesert:element});
  hideDialog = () => {this.setState({ dialogVisible: false, chosenDesert:null })
};




  hideDialogAndSaveYes=()=>{ 
    this.setState({ dialogVisible: false });
    this.updateDesert(this.state.chosenDesert)
  
  }


  storeUser = async (response ,desert) => {
    try {
      response.desert=desert;
      let proba = JSON.stringify(response);
      this.setState({desert:desert})
      await AsyncStorage.setItem('User',proba);
    } catch (e) {
      // saving error
    }   
   
   }
   


  componentDidMount(){
   const formData=new FormData();
    formData.append("returnDesserts",1);
    formData.append("priceRange",this.state.member.priceRange);
  
    const fetchData={
      method:"post",
      body:formData
    };
    fetch( FetchConstants.url+"/Member.php",fetchData)
    .then((response)=>response.json())
    .then((response)=>{
   // alert(response);
     this.setState({deserts:response})
  
    })
    .catch((error)=>{alert(error);});
  }


  Desert=(newText)=>{this.setState({desert:newText})}
  
  updateDesert=(desert)=>{
        const formData=new FormData();
        formData.append("updateDessert",1);
        formData.append("idMember",this.state.member.idMember);
        formData.append("desert",desert);
        const fetchData={
          method:"post",
          body:formData
        };
       
        fetch( FetchConstants.url+"/Member.php",fetchData)
        .then((response)=>response.json())
        .then((response)=>{
         //alert(response);
         if(response!=null)
         this.storeUser(this.state.member, desert)
         else{
           this.setState({desert:null})
         }
      
        })
        .catch((error)=>{alert(error);});
        
  }

  fj=()=>{
    alert(this.state.chosenDesert)
  }


    render() {
      if(this.state.member.coming!=0)
      {
      if(this.state.desert==null)
      {
          return (
           
         <View style={{flex:1, alingItems:'center', justifyContent:'center',backgroundColor:'white'}}>
           <View style={{flex:0.2}}></View>
            <View  style={{flex:4,  flexDirection:'row'}}>
                <View style={{flex:0.3}}></View>
    
                 <View style={{flex:3,borderRadius:20,alingItems:'center',justifyContent:'center', backgroundColor:'#f1f1f1',shadowOffset:{width:2,height:4},shadowOpacity:0.8,shadowRadius:2,elevation:5,shadowColor:'#000' }}>
                 <View style={{flex:0.17,display:'flex',alignItems:'center',justifyContent:'center',borderTopStartRadius:20}}>
                    <Text style={{fontFamily:'news701i',fontSize:25,color:'#49beb7'}}>Izaberite desert</Text>
                  </View>
                  <View style={{flex:1}}>
                  <ScrollView>
                 {  
    
    this.state.deserts.map((element,index)=>(
      <ListItem
    
      containerStyle={{backgroundColor:'#f1f1f1'}}


      title={
       <LinearGradient start={{x: 0, y: 0}} end={{x: 1.3, y: 0}} colors={['#fbb0a9','white','white']} style={{width:'100%',borderRadius:40,height:65}}>
        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',display:'flex',borderRadius:40,height:65,width:'100%'}}>
          <View style={{flex:1,justifyContent:'center',display:'flex',flexDirection:'row'}}>
          <View style={{flex:0.1}}></View>
           <View style={{flex:0.8}}>
        <Text style={{color:'#49beb7',fontFamily:'news701i',fontSize:16}}>{element}</Text>
        </View>
        </View>
        <View style={{flex:1,flexDirection:'row-reverse'}}>
        <Button
         onPress={() =>this.showDialog(element)}
         title='Izaberite'
        buttonStyle={{height: 40, width: 100, borderRadius: 30,backgroundColor:'#fbb0a9',marginRight:10}}
        titleStyle={{fontFamily:'news701i',fontSize:15 }}
        
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
                <Dialog.Title>Izabrali ste ovaj desert.</Dialog.Title>
                <Dialog.Content>
                  <Text>Klikom na ovo dugme obaveštavate da  ste izabrali ovaj desert, koji će Vam uskoro biti serviran.</Text>
                </Dialog.Content>
                <Dialog.Actions>
                <Button2  onPress={this.hideDialogAndSaveYes}>Da</Button2>
                <Button2 onPress={this.hideDialog}>Otkaži</Button2>
                </Dialog.Actions>
              </Dialog>
            </Portal>
           </View>
    
          
          );
      }else{
      
        return(
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <View style={{flex:0.2}}></View>
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontFamily:'news701i',fontSize:22, color:'#49beb7'}}>Već ste izabrali desert.</Text>
   
          </View>
          <View style={{flex:1, flexDirection:'row'}}>
       <View style={{flex:0.1}}></View>
       <View style={{flex:0.8}}>
       <View style={{flex:0.4}}></View>
         <View style={{flex:0.6 ,backgroundColor:'#fbb0a9',borderRadius:30}}>

           <TouchableOpacity style={{display:'flex',flex:1,alignItems:'center',justifyContent:'center'}} onPress={() => this.props.navigation.navigate('menuPage')}>
             <Text style={{fontFamily:'news701i',fontSize:16, color:'white'}}>Nazad na početnu.</Text>
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
        else{
          return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <View style={{flex:0.2}}></View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontFamily:'news701i',fontSize:18,alignItems:'center',color:'#49beb7'}}>Žao nam je,</Text> 
             <Text style={{fontFamily:'news701i',fontSize:16,alignItems:'center',color:'#49beb7'}}> Vi ste otkazali dolazak na venčanje.</Text>
            </View>
            <View style={{flex:1, flexDirection:'row'}}>
         <View style={{flex:0.1}}></View>
         <View style={{flex:0.8}}>
         <View style={{flex:0.4}}></View>
           <View style={{flex:0.6, backgroundColor:'#fbb0a9',borderRadius:30}}>
    
             <TouchableOpacity style={{display:'flex',flex:1,alignItems:'center',justifyContent:'center'}} onPress={() => this.props.navigation.navigate('zaKocke')}>
               <Text style={{fontFamily:'news701i',fontSize:16,color:'white'}}>Nazad na početnu.</Text>
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
  
  

