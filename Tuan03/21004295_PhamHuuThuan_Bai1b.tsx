import { StyleSheet, Text, View, Image, Pressable, SafeAreaView, TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <LinearGradient style={{flex: 1}} colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8']}>
          <View style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
            <Image source = {{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/648401a3fc2da07be619ea0fcd822ae1'}} style={{height: 117, width: 105}} />
          </View>
      <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
        <Text style ={{ fontSize: 25, fontWeight: 'bold'}}>FORGET</Text>
        <Text style ={{ fontSize: 25,  fontWeight: 'bold'}}>PASSWORD</Text>
      </View>
      <View style={{flex: 0.5, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.text}>Provide your account’s email for which you want to reset your password</Text>
      </View>
      <SafeAreaView style={{flex: 1.5, alignItems: 'center', justifyContent: 'center'}}>
        <TextInput style={styles.input} placeholder = 'Email'>
        </TextInput>
      </SafeAreaView>
        <View style={{flex: 2, justifyContent: 'flex-start', alignItems: 'center'}}>
          <Pressable style = {styles.button}><Text style = {styles.textButton}>NEXT</Text></Pressable>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  button:{
    width: 305,
    height: 45,
    backgroundColor: '#E3C000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    width: 302,
    height: 53,
    textAlign: 'center',
  },
  textButton:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  input:{
    width: 305,
    height: 45,
    backgroundColor: '#C4C4C4',
    paddingLeft: 10,
  }
});
