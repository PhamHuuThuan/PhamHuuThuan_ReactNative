import { StyleSheet, Text, View, Image, Pressable, SafeAreaView, TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <LinearGradient style={{flex: 1}} colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8']}>
          <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
            <Text style ={{ fontSize: 60, fontWeight: 'bold'}}>CODE</Text>
          </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style ={{ fontSize: 25, fontWeight: 'bold'}}>VERIFICATION</Text>
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.text}>Enter ontime password sent on ++849092605798</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        <Text style = {styles.codeText}></Text>
        <Text style = {styles.codeText}></Text>
        <Text style = {styles.codeText}></Text>
        <Text style = {styles.codeText}></Text>
        <Text style = {styles.codeText}></Text>
        <Text style = {styles.codeText}></Text>
      </View>
        <View style={{flex: 2, justifyContent: 'flex-start', alignItems: 'center'}}>
          <Pressable style = {styles.button}><Text style = {styles.textButton}>VERIFY CODE</Text></Pressable>
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
    width: 220,
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
  },
  codeText: {
    width: 50,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
  }
});
