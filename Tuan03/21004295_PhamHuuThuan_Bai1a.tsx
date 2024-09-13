import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <LinearGradient
          style={{flex: 1}}
          colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8']}>
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
      <View style={{flex: 3, flexDirection: 'column', justifyContent: 'flex-end'}}>
        <View style={{flex: 0.5, flexDirection: 'row', justifyContent: 'space-around'}}>
          <Pressable style = {styles.button}><Text style = {styles.text}>LOGIN</Text></Pressable>
          <Pressable style = {styles.button}><Text style = {styles.text}>SIGN UP</Text></Pressable>
        </View>
        <Text style ={{ flex: 1, fontSize: 25,  fontWeight: 'bold', justifyContent: 'center', textAlign: 'center'}}>HOW WE WORK?</Text>
      </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  button:{
    width: 119,
    height: 48,
    backgroundColor: '#E3C000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
