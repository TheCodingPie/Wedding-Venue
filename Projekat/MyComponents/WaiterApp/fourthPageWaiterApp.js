import React from 'react';
import { StyleSheet, Text, View,TextInput,ScrollView,Dimensions } from 'react-native';
import styles from '../../styles';
import { ListItem,Button } from 'react-native-elements'
import FetchConstants from '../../Classes/fetchConstants';

let screenWidth=Dimensions.get('window').width;
var arr=[];

function compare( a, b ) {
  if ( a.predjelo < b.predjelo ){
    return -1;
  }
  if ( a.predjelo > b.predjelo ){
    return 1;
  }
  return 0;
}






export default class FourthPageScreenWaiterApp extends React.Component {

  static navigationOptions={

    header:null
  }
  constructor(props){
    arr=[]
    super(props);
    this.state={
      waiterId:this.props.navigation.state.params.waiterId,
      date:new Date().toISOString().split('T')[0],
      listaJela:[],
      p:1
    }
   this.fja();
  }

  napravi=()=>
  {
    if( this.state.listaJela.length==0)
    return;
   this.state.listaJela.sort((a, b)=> a.idStola - b.idStola);

   this.state.listaJela.sort(compare);
   let j=-1;
let i=0;
let pomjela=[];

let pomjelo={
  predjelo: this.state.listaJela[0].predjelo,
  brojPuta:1,
  idStola: this.state.listaJela[0].idStola,
  gosti:[]

};
pomjelo.gosti.push(this.state.listaJela[0].idGosta);

if(this.state.listaJela.length!=1)
while(i< this.state.listaJela.length-1)
  {
    
    if( this.state.listaJela[i].predjelo== this.state.listaJela[i+1].predjelo &&  this.state.listaJela[i].idStola== this.state.listaJela[i+1].idStola)
    {
      pomjelo.predjelo= this.state.listaJela[i].predjelo;
      pomjelo.brojPuta++;
      pomjelo.idStola= this.state.listaJela[i].idStola;
      pomjelo.gosti.push(this.state.listaJela[i+1].idGosta);
    }
    else{
    
      pomjela.push({predjelo:pomjelo.predjelo,
        brojPuta:pomjelo.brojPuta,
        idStola:pomjelo.idStola,
        gosti:pomjelo.gosti}
        );
    
      pomjelo.predjelo= this.state.listaJela[i+1].predjelo;
      pomjelo.idStola= this.state.listaJela[i+1].idStola;
      pomjelo.brojPuta=1;
      pomjelo.gosti=[];
      pomjelo.gosti.push(this.state.listaJela[i+1].idGosta)
    
    
    }
    if(i== this.state.listaJela.length-2)
    pomjela.push({predjelo:pomjelo.predjelo,
      brojPuta:pomjelo.brojPuta,
      idStola:pomjelo.idStola,
      gosti:pomjelo.gosti}
      );
    i++;

   

  }
  else{

    pomjela.push({predjelo:this.state.listaJela[0].predjelo,
      brojPuta:1,
      idStola:this.state.listaJela[0].idStola,
      gosti:[]}
      );
      pomjela[0].gosti.push(this.state.listaJela[0].idGosta);
  }
  pomjela.sort((a, b)=> a.idStola - b.idStola);

  this.setState({listaJela:pomjela});
 

  }


  fja=()=>
  {
    const formData=new FormData();
      formData.append("returnMains",1);
      formData.append("date",this.state.date);
      formData.append("waiterId",this.state.waiterId);
      const fetchData={
        method:"post",
        body:formData
      };
      fetch(FetchConstants.url+"/Waiter.php",fetchData)
      .then((response)=>response.json())
      .then((response)=>{
       
        let pom=[];
        response.forEach((x)=>{
          pom.push({idStola:x.idTable,predjelo:x.starter,idGosta:x.idMember});
        });
        this.setState({listaJela:pom});
        this.napravi();
       
      })
      .catch((error)=>{alert(error);});
  }

  brisiItem=(indeks)=>{

   // this.state.listaJela[indeks].gosti.forEach(idgosta=>alert(idgosta));
    const formData=new FormData();
    formData.append("updateMemberMain",1);
  formData.append("idMember",JSON.stringify(this.state.listaJela[indeks].gosti));
  const fetchData={
    method:"post",
    body:formData
  };
  fetch(FetchConstants.url+"/Waiter.php",fetchData)
  .then((response)=>response.json())
  .then((response)=>{
   
   // alert(response);
   
  })
  .catch((error)=>{alert(error);});
  
    this.state.listaJela.splice(indeks, 1);
    arr[indeks].scrollTo({ x: 0, y: 0, animated: true });
    this.setState({
        p:2
  });
}
  

    render() {
  return (
  
    <View style={{backgroundColor:'#F1F1F1',flex:1}} >
    <ScrollView>

   
<View style={{display:'flex',flexDirection:'column'}}>
   <View style={{alignItems:'center',backgroundColor:'#49beb7',height:50,justifyContent:'center'}}>
    <Text style={{color:'white',fontSize:30}}>JELA </Text>
    </View>
    
    {
 this.state.listaJela.map((pjelo, indeks) => (


 <ScrollView horizontal={true} style={{flex:15}} ref={(scrollView) => {arr[indeks] = scrollView;}} onMomentumScrollEnd={
   (e) => {
    

     
  if(e.nativeEvent.contentOffset.x>=screenWidth-(screenWidth/2))
   
   this.brisiItem(indeks)}}
    >
 
<ListItem style={{flex:1,alignItems:'center', paddingssRight:25}}

rightElement={<Button
 onPress={()=>this.brisiItem(indeks)}
 
 title={pjelo.idStola}
 titleStyle={{color:'white'}}
 buttonStyle={{ borderColor:'#49beb7',height: 50, width: 50, borderRadius: 30,borderWidth:1,backgroundColor:'#49beb7'}}
 
/>}
 
topDivider={true}
bottomDivider={true}
     key={indeks} 
      title={pjelo.predjelo}
      subtitle={" broj porcija: "+pjelo.brojPuta}
      containerStyle={{width:screenWidth-10,backgroundColor:'white',marginTop: 20,borderRadius:20,marginLeft: 5,marginRight: 5,borderColor:'#696969',borderWidth:2}}
      titleStyle={{ fontWeight: 'bold', fontSize: 25,color: '#fbb0a9', }}
      subtitleStyle={{ fontWeight: 'bold', fontSize: 19,color: '#49beb7', }}
      
   />
        <View  key={indeks} style={{width:screenWidth,alignItems:'center',justifyContent:'center', backgroundColor:'red',marginTop: 20,borderRadius:20,display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
   <Text style={{color:'white',fontSize:30,paddingLeft:10}}>BRIŠI</Text>
  
    </View>
   

   </ScrollView>
 ))

}
</View>

</ScrollView>
</View>
 
      );
    }
  }


  