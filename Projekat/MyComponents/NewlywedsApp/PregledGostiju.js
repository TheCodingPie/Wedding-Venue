import React from 'react';
import { StyleSheet, Text, View,TextInput,AsyncStorage,Dimensions,ScrollView} from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import styles from '../../styles';
import { ListItem,Button } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import FetchConstants from '../../Classes/fetchConstants';
let screenWidth=Dimensions.get('window').width;
var pomarr;
var cc;
var pp;
    
var pom=[];
export default class PregledGostiju extends React.Component {
  static navigationOptions={

    header:null
  }
    constructor(){
       super()
       this.state={
         email:"",
         password:"",
         newlyweds:null,
         members:[],
         pita:2
         }
         cc=[];
          pp=[];
             
         for (var m = 0; m < 20; m++) {
           cc[m] = [];
           
         }
         
         pom=[];
         for(let k=0;k<15;k++)
              pom.push(0);



         
         this.loadData();

         

    }
    prikazi=(indeks)=>{
 
      if(pom[indeks]==0)
      
     pom[indeks]=1;
     else
     
     pom[indeks]=0;
     
     this.setState({
    
      pita:1
    });
    
    }

    sredi=()=>{
    
      this.state.members.sort((a, b)=> a.id - b.id);
      
      
      var i=-1;
      var j=0;
      var pomprez="";
      while(i<parseInt(this.state.members.length)-1)
      {
        
      i++;
        while(i<parseInt(this.state.members.length)-1 && this.state.members[i].id==this.state.members[i+1].id)
          {
  
            cc[j].push({ime:this.state.members[i].name,coming:this.state.members[i].coming})
            i++;
          }
  
         if(i<parseInt(this.state.members.length)-1)
         {
          cc[j].push({ime:this.state.members[i].name,coming:this.state.members[i].coming})
          pomprez=this.state.members[i].lastname
         }
          else if(this.state.members[i].id==this.state.members[i-1].id)
        {
          cc[j].push({ime:this.state.members[i].name,coming:this.state.members[i].coming})
          pomprez=this.state.members[i].lastname
         } else
         { 
          pomprez=this.state.members[i-1].lastname
         cc[j+1].push({ime:this.state.members[i].name,coming:this.state.members[i].coming})
         }
          pp.push({prezime:pomprez});
         // alert(pp.length);
          j++;
          
      }
      this.setState({pita:2});
     }
    
   returnGuestsForWedding=()=>{
    const formData=new FormData();
    formData.append("returnGuestsForWedding",1);
    formData.append("idWedding",this.state.newlyweds.idWedding);//treba iz state-a da uzmem treba localstoragde
   
 //alert(this.state.newlyweds.idWedding);
    const fetchData={
      method:"post",
      body:formData
    };
   
    fetch( FetchConstants.url+"/BrideAndGroom.php",fetchData)
    .then((response)=>response.json())
    .then((response)=>{
     //alert(response[0].coming);
      this.setState({members:response});
      this.sredi();
    })
    .catch((error)=>{alert(error);});
   }


   loadData = async() =>{
    var response;
    try {
    const storeString = await AsyncStorage.getItem('newlyweds');
    if (storeString !== null){
       response = JSON.parse(storeString);
    }

     } catch (error) { }
   

    this.setState({newlyweds:response});
    this.returnGuestsForWedding();
    
  }
    

render() {

  pomarr=[];
 // alert(pp.length);
  pp.forEach((p,indeks)=>{
pomarr.push( <ListItem

  rightElement={<Button
   onPress={()=>this.prikazi(indeks)}
   icon={{name: 'plus', type: 'font-awesome',color:'white'}}
   
   buttonStyle={{height: 50, width: 50, borderRadius: 30,backgroundColor:'#fbb0a9'}}
   
 />}
   
  topDivider={true}
  bottomDivider={true}
       
        title={p.prezime}
        
       containerStyle={{width:screenWidth,backgroundColor:'white',marginTop: 20,borderRadius:20,marginLeft: 5,marginRight: 5,borderColor:'#fbb0a9',borderWidth:2}}
        titleStyle={{ fontWeight: 'bold', fontSize: 25,color: '#fbb0a9', }}
        subtitleStyle={{ fontWeight: 'bold', fontSize: 19,color: 'black', }}
        
     />);

     if(pom[indeks]==1)
      {
        let pomboja;
        cc[indeks].forEach((osoba,indeks)=>
        {
         
        if(osoba.coming==1)
          pomboja='green'
          else if(osoba.coming==0)
          pomboja='red'
          else
          pomboja='gray'
           pomarr.push(<ListItem
            rightElement={<Button
              onPress={()=>this.prikazi(indeks)}
              
              
              buttonStyle={{height: 30, width: 30, borderRadius: 30,backgroundColor:pomboja}}
              
            />}
              
                       title={osoba.ime}
                      
                      containerStyle={{width:screenWidth/2,backgroundColor:'#fbb0a9',marginTop: 20,borderRadius:20,marginLeft: 5,marginRight: 5}}
                       titleStyle={{ fontWeight: 'bold', fontSize: 25,color: 'white', }}
                     
                       
                    />);});
      
    
    }


  });
  

  return (
    <View style={{backgroundColor:'#F1F1F1'}} >
<ScrollView>
<View>
{pomarr}

</View>
</ScrollView>

  </View>
 );
  }
}


