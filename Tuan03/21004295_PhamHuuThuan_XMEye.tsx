import { StyleSheet, Text, View, Image, Pressable, SafeAreaView, TextInput} from 'react-native';
import Svg, { Line } from 'react-native-svg';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 30}}>
      <View style={styles.logo}>
        <Image source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/9791d1eb6ef5c463f756c462c12184aa'}} style={{width: 140, height: 140}}/>
      </View>
      <SafeAreaView style={styles.input}>
        <Image source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/cd05ffc853571d079b05609a1ad9f1d2'}} style={{width: 30, height: 30}}/>
        <TextInput style={styles.inputText} placeholder='Please input user name'></TextInput>
      </SafeAreaView>
      <SafeAreaView style={styles.input}>
        <Image source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/86c3c5d221607125e9e3f93fdb32497a'}} style={{width: 30, height: 30}}/>
        <TextInput style={styles.inputText} placeholder='Please input password'></TextInput>
      </SafeAreaView>
      <Pressable style={styles.buttonLogin}>
        <Text style={{fontSize: 18, fontWeight: 400, color: 'white'}}>LOGIN</Text>
      </Pressable>
      <View style={styles.underButton}>
        <Text style={{fontSize: 18, fontWeight: 400}}>Register</Text>
        <Text style={{fontSize: 18, fontWeight: 400}}>Forgot Password</Text>
      </View>
      <View style = {styles.otherLoginText}>
          <Svg height="18" width="62">
          <Line
            x1="0"
            y1="10"
            x2="100%"
            y2="10"
            stroke="#0E18F5"
            strokeWidth="1"
          />
        </Svg>
        <Text style={{fontSize: 18, fontWeight: 400}}>Other Login Methods</Text>
        <Svg height="18" width="62">
          <Line
            x1="0"
            y1="10"
            x2="100%"
            y2="10"
            stroke="#0E18F5"
            strokeWidth="1"
          />
        </Svg>
      </View>
      <View style={styles.otherLogin}>
        <View style={{backgroundColor: '#3AB4FF', width: 74, height: 74, borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/6f8f97b56b9a771a8f44abe2fa54b068', width: 50, height: 50}}/>
        </View>
        <View style={{backgroundColor: '#F4AA47', width: 74, height: 74, borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/4572d7bddb451d3dd79928d245cecd1a', width: 50, height: 50}}/>
        </View>
        <View style={{backgroundColor: '#3A579C', width: 74, height: 74, borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/6296b6a9914aa659733b49c8f1ea894f', width: 50, height: 50}}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input:{
    width: 300,
    height: 50,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#C4C4C4',
    marginBottom: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputText:{
    fontSize: 18,
    color: 'black',
    marginLeft: 10,
  },
  buttonLogin:{
    width: 300,
    height: 48,
    backgroundColor: '#386FFC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 30
  },
  underButton:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  otherLoginText:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  otherLogin:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  }
});
