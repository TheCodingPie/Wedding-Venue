import React from 'react';
import { StyleSheet, Text, View,TextInput,ScrollView,AsyncStorage,TouchableOpacity } from 'react-native';
import styles from '../../styles';
import FetchConstants from '../../Classes/fetchConstants';

import LinearGradient from 'react-native-linear-gradient';

import {Icon} from 'native-base';

import { ListItem,Button } from 'react-native-elements';
import {Dialog , Portal, Button as Button2} from "react-native-paper";


export default class ThirdPageScreenUserApp extends React.Component {
  static navigationOptions={

    header:null
  }
  constructor(props){
    super(props);
    this.state={
      isAnswered:false,
      mainCourses:[],
      chosenMainCourse:this.props.navigation.state.params.member.main,
      dialogVisible: false,
      member:this.props.navigation.state.params.member,
      mainCourse:this.props.navigation.state.params.member.main,
    }
  }





  showDialog = (element) => this.setState({ dialogVisible: true, chosenMainCourse:element });
  hideDialog = () => this.setState({ dialogVisible: false, chosenMainCourse:null });
  
  hideDialogAndSaveYes= async()=>{ 
  
    this.setState({ dialogVisible: false });
    this.updateMainCourse(this.state.chosenMainCourse)
  }



  storeUser = async (response ,desert) => {
    try {
      response.main=desert;
      let proba = JSON.stringify(response);
      this.setState({mainCourse:desert})
      await AsyncStorage.setItem('User',proba);
    } catch (e) {
      // saving error
    }   
   
   }
   
  componentDidMount(){
   const formData=new FormData();
    formData.append("returnMains",1);
    formData.append("priceRange",this.state.member.priceRange);
  
    const fetchData={
      method:"post",
      body:formData
    };
    fetch( FetchConstants.url+"/Member.php",fetchData)
    .then((response)=>response.json())
    .then((response)=>{
     //alert(response);
     this.setState({mainCourses:response})

  
    })
    .catch((error)=>{alert(error);});
  }




  glavnoJelo=(newText)=>{this.setState({mainCourse:newText})}




  updateMainCourse=(mainCourse)=>{
    const formData=new FormData();
    formData.append("updateMainCourse",1);
        formData.append("idMember",this.state.member.idMember);
        formData.append("mainCourse",mainCourse);
        const fetchData={
          method:"post",
          body:formData
        };
       
        fetch( FetchConstants.url+"/Member.php",fetchData)
        .then((response)=>response.json())
        .then((response)=>{
       
         if(response!=null)
        {
         this.storeUser(this.state.member, mainCourse)
        }
        else{
          setState({mainCourse:null})
        }
      
        })
        .catch((error)=>{alert(error);});
  }
    render() {

      if(this.state.member.coming!=0)
      {
      if(this.state.mainCourse==null)
      {
          return (
          
         <View style={{flex:1, alingItems:'center', justifyContent:'center'}}>
           <View style={{flex:0.2}}></View>
            <View  style={{flex:4,  flexDirection:'row'}}>
                <View style={{flex:0.3}}></View>
    
                 <View style={{flex:4,borderRadius:20,alingItems:'center',justifyContent:'center', backgroundColor:'#F1f1f1',shadowOffset:{width:2,height:4},shadowOpacity:0.8,shadowRadius:2,elevation:5,shadowColor:'#000' }}>
                  <View style={{flex:0.17,display:'flex',alignItems:'center',justifyContent:'center',borderTopStartRadius:20}}>
                    <Text style={{fontFamily:'news701i',fontSize:25,color:'#49beb7'}}>Izaberite jelo</Text>
                  </View>
                  <View style={{flex:1}}>
                  <ScrollView >
                 {  
    
    this.state.mainCourses.map((element,index)=>(
      
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
       buttonStyle={{height: 40, width: 100, borderRadius: 30,backgroundColor:'#fbb0a9',marginRight:10,}}
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
                <Dialog.Title>Izabrali ste ovo glavno jelo.</Dialog.Title>
                <Dialog.Content>
                  <Text>Klikom na ovo dugme obaveštavate da  ste izabrali ovo glavno jelo, koje će Vam uskoro biti servirano.</Text>
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
            <Text style={{fontFamily:'news701i',fontSize:22 ,color:'#49beb7'}}>Već ste izabrali glavno jelo.</Text>
   
          </View>
          <View style={{flex:1, flexDirection:'row'}}>
       <View style={{flex:0.1}}></View>
       <View style={{flex:0.8}}>
       <View style={{flex:0.4}}></View>
         <View style={{flex:0.6 ,backgroundColor:'#fbb0a9',borderRadius:30}}>

           <TouchableOpacity style={{display:'flex',flex:1,alignItems:'center',justifyContent:'center'}} onPress={() => this.props.navigation.navigate('menuPage')}>
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
    }else{
      return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <View style={{flex:0.2}}></View>
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontFamily:'news701i',fontSize:18,alignItems:'center', color:'#49beb7'}}>Žao nam je,</Text> 
         <Text style={{fontFamily:'news701i',fontSize:16,alignItems:'center', color:'#49beb7'}}> Vi ste otkazali dolazak na venčanje.</Text>
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
        )
      
    }
     
  
     
    }
  }
  


  /*
   return (
        <View style={styles.form}>
          <Text>Za glavno jelo stranica</Text>
       <TextInput placeholder='Glavno jelo' onChangeText={this.glavnoJelo}></TextInput>
       <TouchableOpacity onPress={this.updateMainCourse}><Text>Unesi glavno jelo</Text></TouchableOpacity>
     
      </View>
      );
   */