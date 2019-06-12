import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  form: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'column',

    },
    floorPlanView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexDirection:'column',

      backgroundColor: '#ecb3ff',
    },

    floorPlan: {
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      flexDirection:'row',
      
      backgroundColor: 'red',
    },
   flex1:{
      flex:1,
      
   },
   header:{
   flex:1,
   backgroundColor:'#05f29b'
   },
   textinput:{
    backgroundColor: 'white',
    borderRadius:50,
    flex:0.75,
    borderWidth:2,
    borderStyle:'solid',
    borderColor:'#05f29b'
    },
    text:{
      flex:0.3,
      color: 'black',
      fontWeight: 'bold',
      fontSize: 14,
      height:20,
     },
    container:{
      flex: 1,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
    },
    containerImage:{
      flex:1,
      flexDirection:'column'
    },
    containerB:{
      flex: 1,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#407a38',
      flex:0.75,
    },
    ManagerTO:{
     flex:0.75,
     backgroundColor:'#f99388',
     borderRadius:50,
     flexDirection:'column',
     alignItems:'center',
     justifyContent:'space-evenly'
    },
    ManTOrow:{
      display:'flex',
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:50
    },
    containerA:{
      flex: 1,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
    },
    TOTxt:{
      flex:1,
      color:'white',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
    },
    CircleShapeView: {
    width: 60,
    height: 60,
    borderRadius: 150/2,
    backgroundColor: '#00BCD4',
    margin:6
},
    ManagerBackground:{
      flex:1,
      flexDirection:'column',
      backgroundColor:'#ddc6ad'
    },
    ManagerUpFirstPage:{
      flex:3,
      display:'flex',
      flexDirection:'row'
    },
    img:{
      height:20,
      width: 20
  },
  btn:{
    flexDirection: 'row'
},
   
});

export default styles;
