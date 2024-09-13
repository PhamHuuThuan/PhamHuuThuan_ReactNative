import React from 'react';
import { Image, StyleSheet, Platform, Text, View, Pressable} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#00CCF9'}}>
      <View style={{flex: 4, alignItems: 'center', justifyContent: 'center'}}>
        <Image source = {{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/5e2e3bdfc77883adf59a700dd80ea654'}} style={{height: 140, width: 140}} />
      </View>
      <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
        <Text style ={{ fontSize: 25, fontWeight: 'bold'}}>GROW</Text>
        <Text style ={{ fontSize: 25,  fontWeight: 'bold'}}>YOUR BUSINESS</Text>
      </View>
      <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 15, fontWeight: 'bold'}}>We will help you to grow your business</Text>
            <Text style={{ fontSize: 15, fontWeight: 'bold'}}>using online server</Text>
      </View>
      <View style={{flex: 3, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
        <Pressable style = {styles.button}><Text style = {styles.text}>LOGIN</Text></Pressable>
        <Pressable style = {styles.button}><Text style = {styles.text}>SIGN UP</Text></Pressable>
      </View>
    </View>   
  );
};
const styles = StyleSheet.create({
  button:{
    width: 119,
    height: 48,
    backgroundColor: '#E3C000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
