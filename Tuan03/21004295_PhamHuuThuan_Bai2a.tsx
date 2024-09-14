import { StyleSheet, Text, View, Image, Pressable, SafeAreaView, TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <LinearGradient style={{flex: 2, padding: 20}} colors={['#FBCB00', '#BF9A00']}>
        <View style={styles.title}>
          <Text style={{fontSize: 30, fontWeight: 700}}>LOGIN</Text>
        </View>
        <SafeAreaView style={styles.inputName}>
          <View style={styles.inputText}>
            <Image source={{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/32ddd7aa5495a0bfa4a48d0ffa4c4fd6'}} style={{width: 32, height: 32}} />
            <TextInput style={styles.text} placeholder='Name'></TextInput>
          </View>
        </SafeAreaView>
        <SafeAreaView style={styles.inputPassword}>
          <View style={styles.inputText}>
            <Image source={{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/648401a3fc2da07be619ea0fcd822ae1'}} style={{width: 32, height: 32}} />
            <TextInput style={styles.text} placeholder='Password'></TextInput>
          </View>
          <Image source={{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/bb8e6498d17a21face18972834122eed'}} style={{width: 32, height: 32}} />
        </SafeAreaView>
        <Pressable style={styles.buttonLogin}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>LOGIN</Text>
        </Pressable>
        <View style={{flex: 0.75, alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>CREATE ACCOUNT</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text:{
    fontSize: 18,
    paddingLeft: 20
  },
  inputText:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 20,
  }
  ,
  inputName:{
    width: 330,
    height: 54,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    borderWidth: 1,
    borderColor: '#F2F2F2',
    marginBottom: 20
  },
  inputPassword:{
    width: 330,
    height: 54,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    borderWidth: 1,
    borderColor: '#F2F2F2',
    paddingRight: 30,
    marginBottom: 20
  },
  buttonLogin:{
    width: 330,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#060000',
    marginTop: 50,
    marginBottom: 50,
  }
});
