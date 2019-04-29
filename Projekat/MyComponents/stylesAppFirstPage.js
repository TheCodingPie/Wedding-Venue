import React, {StyleSheet} from 'react-native';
import { Content } from 'native-base';


export default StyleSheet.create({

    containerImage:{
        flex:1,
        width:'100%',
        height:'100%',
        flexDirection:'column'

    },
    containerImageLayer1:{
        flex:1,
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(255,255,255,0.4)',
    },
    containerTOView:{
        flex:5,
        justifyContent:'center',
        flexDirection:'row',
    },
    containerTO:
    {
        opacity:1.4,
        backgroundColor:'transparent',
        alignItems:'center',
        justifyContent: 'center',
    },
    containerTextInput:{
        borderColor:'black',
        backgroundColor:"magenta"
    }

})