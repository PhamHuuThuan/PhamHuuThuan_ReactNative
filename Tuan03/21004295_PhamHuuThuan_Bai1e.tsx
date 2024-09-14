import { StyleSheet, Text, View, Image, Pressable, SafeAreaView, TextInput} from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.background}>
        <View style={styles.title}>
          <Text style={{fontSize: 25, fontWeight: 700}}>REGISTER</Text>
        </View>
        <SafeAreaView style={styles.inputEmail}>
          <TextInput style={{fontSize: 18}} placeholder='Name'>
          </TextInput>
        </SafeAreaView>
        <SafeAreaView style={styles.inputEmail}>
          <TextInput style={{fontSize: 18}} placeholder='Phone'>
          </TextInput>
        </SafeAreaView>
        <SafeAreaView style={styles.inputEmail}>
          <TextInput style={{fontSize: 18}} placeholder='Email'>
          </TextInput>
        </SafeAreaView>
        <SafeAreaView style={styles.inputPassword}>
          <TextInput style={{fontSize: 18}} placeholder='Password'>
          </TextInput>
          <Image source={{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/bb8e6498d17a21face18972834122eed'}} style={{width: 38, height: 24.5}} />
        </SafeAreaView>
        <SafeAreaView style={styles.inputEmail}>
          <TextInput style={{fontSize: 18}} placeholder='Birthday'>
          </TextInput>
        </SafeAreaView>
        <View style={styles.checkGender}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton value="Male"/>
            <Text>Male</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton value="Female"/>
            <Text>Female</Text>
          </View>
        </View>
        <Pressable style={styles.button}>
        <Text style={{fontSize: 18, fontWeight: 700, color: 'white'}}>REGISTER</Text>
        </Pressable>
        <View style={styles.text}>
          <Text style={{fontSize: 14}}>When you agree to terms and conditions</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgba(49 170 82 / 0.25)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputEmail:{
    width: 330,
    height: 54,
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 17,
    marginBottom: 15,
  },
  inputPassword:{
    width: 330,
    height: 54,
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 17,
    paddingRight: 17,
    marginBottom: 15,
  },
  button:{
    width: 330,
    height: 45,
    backgroundColor: 'rgba(229, 57, 53, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    flex: 1,
    fontWeight: 400,
    justifyContent: 'flex-start',
    paddingTop: 25,
  },
  checkGender:{
    flex: 0.5,
    width: 330,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingLeft: 15,
  }
});
