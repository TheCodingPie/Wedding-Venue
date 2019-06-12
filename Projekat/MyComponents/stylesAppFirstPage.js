import React, {StyleSheet} from 'react-native';
import { Content } from 'native-base';


export default StyleSheet.create({

    containerImage:{
        flex:1,
        height:null,
        flexDirection:'column',
        resizeMode:"cover",
        

    },
    containerImageLayer1:{
        flex:1,
        width:'100%',
        height:'100%',
        backgroundColor: 'rgba(255,255,255,0.3)'
      
     
       
        
    },
  
    containerTOView:{
        flex:5,
        justifyContent:'center',
        flexDirection:'row',
    },
    containerTO:
    {
        flex:1,
        backgroundColor:'transparent',
        alignItems:'center',
        justifyContent: 'center',
    },
    containerTextInput:{
        borderColor:'black',
        backgroundColor:"magenta"
    },
    gornjideo:{
        flex:4
    },
    donjipravougaonik:{
        flex:1,
        padding:0,
        margin:0,
        flexDirection:'row',
        backgroundColor:'transparent',
    },
    dole:{
        flex:2
    },
    levo:{
        flex:0.3
    },
    firstPageTO: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:28,
        backgroundColor:'#fbb0a9',
        marginBottom:10
      
  
      },

})