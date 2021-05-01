import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Myheader from './Myheader'

export default class Fb extends React.Component{
  render(){
    return (
    <View style={styles.container}>
      <Myheader title='BUZZ APP'/>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Image source={require('../assets/fb.png')} style={{height:100,width:100}}/>
          <Text style={{fontFamily:'monospace',fontSize:30,fontWeight:2,color:'white',}} >Facebook</Text>
          <StatusBar style="auto" />
        </View>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
});
