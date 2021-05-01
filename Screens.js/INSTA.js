import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Myheader from './Myheader'

export default class Insta extends React.Component{
  render(){
    return (
    <View style={styles.container}>
        <Myheader title='BUZZ APP'/>

      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Image source={require('../assets/insta.png')} style={{height:60,width:60}}/>
      <Text style={{fontFamily:'monospace',fontSize:30,fontWeight:2,color:'#D43D94'}}>Instagram</Text>
      <StatusBar style="auto" />
    </View>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7048c6',
  },
});
