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

export default class FifthPageScreenWaiterApp extends React.Component {

  static navigationOptions={

    header:null
  }
  constructor(props){
    arr=[];
    super(props);
    this.state={
      waiterId:this.props.navigation.state.params.waiterId,
      date:'2019-06-07',
      listaDeserta:[],
      p:1
    }
   this.fja();
  }

  napravi=()=>
  {
    if( this.state.listaDeserta.length==0)
    return;
   this.state.listaDeserta.sort((a, b)=> a.idStola - b.idStola);

   this.state.listaDeserta.sort(compare);
   let j=-1;
let i=0;
let pomdeserti=[];

let pomdesert={
  predjelo: this.state.listaDeserta[0].predjelo,
  brojPuta:1,
  idStola: this.state.listaDeserta[0].idStola,
  gosti:[]

};
pomdesert.gosti.push(this.state.listaDeserta[0].idGosta);

if(this.state.listaDeserta.length!=1)
while(i< this.state.listaDeserta.length-1)
  {
    
    if( this.state.listaDeserta[i].predjelo== this.state.listaDeserta[i+1].predjelo &&  this.state.listaDeserta[i].idStola== this.state.listaDeserta[i+1].idStola)
    {
      pomdesert.predjelo= this.state.listaDeserta[i].predjelo;
      pomdesert.brojPuta++;
      pomdesert.idStola= this.state.listaDeserta[i].idStola;
      pomdesert.gosti.push(this.state.listaDeserta[i+1].idGosta);

    }
    else{
    
      pomdeserti.push({predjelo:pomdesert.predjelo,
        brojPuta:pomdesert.brojPuta,
        idStola:pomdesert.idStola,
        gosti:pomdesert.gosti}
        );
    
      pomdesert.predjelo= this.state.listaDeserta[i+1].predjelo;
      pomdesert.idStola= this.state.listaDeserta[i+1].idStola;
      pomdesert.brojPuta=1;
      pomdesert.gosti=[];
      pomdesert.gosti.push(this.state.listaDeserta[i+1].idGosta)
     
    
    
    }
    if(i== this.state.listaDeserta.length-2)
    pomdeserti.push({predjelo:pomdesert.predjelo,
      brojPuta:pomdesert.brojPuta,
      idStola:pomdesert.idStola,
      gosti:pomdesert.gosti}
      );
    i++;

   

  }
  else{
    pomdeserti.push({predjelo:this.state.listaDeserta[0].predjelo,
      brojPuta:1,
      idStola:this.state.listaDeserta[0].idStola,
      gosti:[]}
      );
      pomdeserti[0].gosti.push(this.state.listaDeserta[0].idGosta);


  }
  pomdeserti.sort((a, b)=> a.idStola - b.idStola);

  this.setState({listaDeserta:pomdeserti});
 

  }

  brisiItem=(indeks)=>{

    // this.state.listaJela[indeks].gosti.forEach(idgosta=>alert(idgosta));
     const formData=new FormData();
     formData.append("updateMemberDesert",1);
   formData.append("idMember",JSON.stringify(this.state.listaDeserta[indeks].gosti));
   const fetchData={
     method:"post",
     body:formData
   };
   fetch(FetchConstants.url+"/Waiter.php",fetchData)
   .then((response)=>response.json())
   .then((response)=>{
    
     //alert(response);
    
   })
   .catch((error)=>{alert(error);});
   
     this.state.listaDeserta.splice(indeks, 1);
     arr[indeks].scrollTo({ x: 0, y: 0, animated: true });
     this.setState({
         p:2
   });
 }
  fja=()=>
  {
    const formData=new FormData();
      formData.append("returnDesserts",1);
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
        this.setState({listaDeserta:pom});
       this.napravi();

      })
      .catch((error)=>{alert(error);});
  }




    render() {
  return (
  
    <View style={{backgroundColor:'#F1F1F1',flex:1}} >
    <ScrollView>

   
<View style={{display:'flex',flexDirection:'column'}}>
   <View style={{alignItems:'center',backgroundColor:'#49beb7',height:50,justifyContent:'center'}}>
    <Text style={{color:'white',fontSize:30}}>DESERTI </Text>
    </View>
       {
    this.state.listaDeserta.map((desert, indeks) => (
 
   
    <ScrollView horizontal={true}  ref={(scrollView) => {arr[indeks] = scrollView;}} onMomentumScrollEnd={
      (e) => {
       

        
     if(e.nativeEvent.contentOffset.x>=screenWidth-(screenWidth/2))
      
      this.brisiItem(indeks)}}
       >
    
   <ListItem
  
   rightElement={<Button
    onPress={()=>this.brisiItem(indeks)}
    
    title={desert.idStola}
    titleStyle={{color:'white'}}
    buttonStyle={{ borderColor:'#49beb7',height: 50, width: 50, borderRadius: 30,borderWidth:1,backgroundColor:'#49beb7'}}
    
  />}
    
   topDivider={true}
   bottomDivider={true}
        key={indeks} 
         title={desert.predjelo}
         subtitle={" broj porcija: "+desert.brojPuta}
         containerStyle={{width:screenWidth-10,backgroundColor:'white',marginTop: 20,borderRadius:20,marginLeft: 5,marginRight: 5,borderColor:'#696969',borderWidth:2}}
         titleStyle={{ fontWeight: 'bold', fontSize: 25,color: '#fbb0a9', }}
         subtitleStyle={{ fontWeight: 'bold', fontSize: 19,color: '#49beb7', }}
      />
         <View  key={indeks} style={{width:screenWidth,alignItems:'center',justifyContent:'center', backgroundColor:'red',marginTop: 20,borderRadius:20,display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
      <Text style={{color:'white',fontSize:30,paddingLeft:10}}>BRISI</Text>
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


  