import { StyleSheet} from 'react-native';

export default StyleSheet.create({
    Container: {
        flex:1,
      backgroundColor: '#000000',
      
    },
    ListContainer:{
        backgroundColor:'#1F1F1F',
        padding: 10,
        borderTopRightRadius:25,
        borderTopLeftRadius:25,
        flex:1
    },
    Heading:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        marginVertical:15,
    },
    membersContainer:{
      padding: 10,
      marginBottom:15
    },
    Camera:{
      fontSize:40,
    },
    CameraContainer:{
      position: 'absolute',
      width: 60,
      height: 60,
      borderRadius:30,
      backgroundColor:'red',
      bottom: 60,
      right:35,
      justifyContent:'center',
      backgroundColor:'white',
      alignItems:'center'
    },
    DPContainer:{
      justifyContent:'center',
      alignItems:'center',
      marginVertical:5
    },
    DPImage:{
      height: 50, 
      width: 50 ,
      borderRadius:50,
    }
  });
  