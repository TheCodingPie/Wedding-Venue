import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,AsyncStorage,ScrollView,ImageBackground,TouchableOpacity,Image,Dimensions } from 'react-native';
import firebase from 'react-native-firebase';
import styles from '../../styles';
import{ StackActions,NavigationActions} from 'react-navigation';
import FetchConstants from '../../Classes/fetchConstants';


export default class FirstPageScreenUserApp extends React.Component {
  static navigationOptions={

    header:null
  }
    constructor(){
       super()
       this.state={
         password:"",
         email:"",
         member:null
         }

    }

    


    storeToken = async (response) => {
      try {
        let proba = JSON.stringify(response);
        await AsyncStorage.setItem('User',proba);
        this.storeToken2();
      } catch (e) {
        // saving error
      }   
     
     }
    
    



     storeToken2=async() =>{
     
      try {
        await AsyncStorage.setItem('LocalUser', '1');
         } 
      catch (e) {
        // saving error
      }
     }


     resetNav=()=>
    {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'UserDrawerNavigator' })],
      });
      this.props.navigation.dispatch(resetAction);
    }


    handleChangeTextPassword=(newText)=>this.setState({password:newText});
    handleChangeTextEmail=(newText)=>this.setState({email:newText});
    
    btnDaljePress=()=>
    {
       
       //this.props.navigation.navigate('UserDrawerNavigator');
        if(this.state.email=="" && this.state.password=="")
        {
        alert( "Trebate uneti id restorana i password" );
        return;
        }
  
        const formData=new FormData();
        formData.append("login",1);
        formData.append("email",this.state.email);
        formData.append("password",this.state.password);
        const fetchData={
          method:"post",
          body:formData
        };
       
        fetch( FetchConstants.url+"/Member.php",fetchData)
        .then((response)=>response.json())
        .then((response)=>{
        if(response==null)
        {
         this.textInput.clear();
         this.textInput1.clear();
            alert("Proverite svoje podatke");
           this.setState({email:clearImmediate()})
        }
        else
        {
          //alert(response.idMember);
          this.storeToken(response);
           this.resetNav();
        
        }
        })
        .catch((error)=>{alert(error);});
    };
     

render() {
    return (<ScrollView contentContainerStyle={{ height:Dimensions.get('window').height}}>
    <ImageBackground source={require('../Images/marble.jpg')} style={{width: '100%', height: '100%', display:"flex",flexDirection:"column"}}>
    <View style={{display:"flex",flexDirection:"column", flex:1,alignContent:'center', justifyContent:'center'}}>
      <View style={{flex:3,display:"flex",flexDirection:'column', alignContent:'center', justifyContent:'center' }}>
        <View style={{flex:1}}></View>
        <View style={{flex:2,display:"flex",flexDirection:'row', alignContent:'center', justifyContent:'center'}}>
       <Image source={require('../Images/logo.png')} style={{width:125,height:125 }}></Image>
       </View>
       <View style={{flex:0.5}}></View>
      </View>
    <View style={{display:"flex" ,flexDirection:"row",flex:4.5,alignContent:"flex-start"}}>
      <View style={{flex:1}}></View>
      <View style={{flex:5,backgroundColor:'white',display:'flex',flexDirection:'column',borderRadius:25}}>
        <View style={{flex:2.5}}></View>
        <View style={{display:"flex",flexDirection:"row", flex:2,alignItems:'center',justifyContent:'center'}}>
        <View style={{flex:1}}></View>
        <TextInput ref={input => { this.textInput = input }} placeholder="Email" style={{flex:4,backgroundColor:'white',borderBottomColor:'black',borderBottomWidth:1}} onChangeText={this.handleChangeTextEmail} placeholderTextColor='#fbb0a9'></TextInput>
        <View style={{flex:1}}></View>
        </View>
        <View style={{flex:2.5}}></View>
        <View style={{display:"flex",flexDirection:"row", flex:2,alignItems:'center',justifyContent:'center'}}>
        <View style={{flex:1}}></View>
        <TextInput ref={input => { this.textInput1 = input }} placeholder="Vasa šifra" secureTextEntry={true }style={{flex:4,backgroundColor:'white',borderBottomColor:'black',borderBottomWidth:1}} onChangeText={this.handleChangeTextPassword} placeholderTextColor='#fbb0a9'></TextInput>
        <View style={{flex:1}}></View>
        </View>
        <View style={{flex:2.5}}></View>
        <View style={{display:"flex",flexDirection:"row", flex:2,alignItems:'center',justifyContent:'center'}}>
        <View style={{flex:1}}></View>
        <View style={{display:'flex',flex:5,flexDirection:'column'}}>
        <TouchableOpacity style={{flex:5,flexDirection:"column",borderRadius:30, alignItems:'center',justifyContent:'center',backgroundColor:'#fbb0a9'}} onPress={this.btnDaljePress}><Text style={{color:'white',fontSize:18}}>Prijavi se</Text></TouchableOpacity>
       </View>
        <View style={{flex:1}}></View>
        </View>
        <View style={{flex:1}}></View>
      </View>
      <View style={{flex:1}}></View>
    </View>
    <View style={{flex:1}}></View>
    </View>
    </ImageBackground>
    </ScrollView>
      
    );
  }
}

/*
 <View style={styles.form} >
           <View style={styles.container}> 
                <Text style={styles.text}>Unesite sifru:</Text>
                <TextInput style={styles.textinput} onChangeText={this.handleChangeTextPassword} /> 
            </View>
            <View style={styles.container}> 
                <Text style={styles.text}>Unesite prezime:</Text>
                <TextInput style={styles.textinput} onChangeText={this.handleChangeTextEmail} /> 
             </View>
           <Button title='Dalje' color="#260033" onPress={this.btnDaljePress}>  </Button>
           
     </View>
*/
