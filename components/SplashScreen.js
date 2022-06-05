import React from 'react'
import {View,Text,Image} from 'react-native'
import {useEffect} from 'react'
import {HeaderTitle} from '../styles/appStyles'
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function SplashScreen({navigation}) {
    let changeScreen = ()=>{
        setTimeout(()=>{
          navigation.replace('Home');
        },3000);
        

      }
      useEffect(() => {
        changeScreen();
      }, []) 
  return (
    <View style={styles.splashStyle}>
        <Image 
        style={{
            resizeMode: "contain",
            borderRadius:100,
            height: 100,
            width: 200
          }}
          source={require('./sportal.jpeg')} />
        <HeaderTitle>Hi Bro! How's life?</HeaderTitle>
    </View>
  )
}
let styles={
    splashStyle:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        
    },
    textStyle:{
        // fontSize:'30px',
        // fontWeight:'bold',
        // letterSpacing:'2px',
        color:'white',

    },
   
}
