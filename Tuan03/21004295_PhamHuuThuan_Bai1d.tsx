import { StyleSheet, Text, View, Image, Pressable, SafeAreaView, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.background}>
        <View style={styles.title}>
          <Text style={{fontSize: 25, fontWeight: 700}}>LOGIN</Text>
        </View>
        <SafeAreaView style={styles.inputEmail}>
          <TextInput style={{fontSize: 18}} placeholder='Email'>
          </TextInput>
        </SafeAreaView>
        <SafeAreaView style={styles.inputPassword}>
          <TextInput style={{fontSize: 18}} placeholder='Password'>
          </TextInput>
          <Image source={{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/bb8e6498d17a21face18972834122eed'}} style={{width: 38, height: 24.5}} />
        </SafeAreaView>
        <Pressable style={styles.button}>
        <Text style={{fontSize: 18, fontWeight: 700, color: 'white'}}>LOGIN</Text>
        </Pressable>
        <View style={styles.text}>
          <Text style={{fontSize: 14}}>When you agree to terms and conditions</Text>
          <Text style={{fontSize: 14, color: '#5D25FA'}}>For got your password?</Text>
          <Text style={{fontSize: 14}}>Or login with</Text>
        </View>
        <View style={styles.socials}>
          <View style={styles.facebook}>
            <Image source = {{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/6296b6a9914aa659733b49c8f1ea894f' }} style={styles.iconSocial}/>
          </View>
          <View style={styles.zalo}>
            <Image source = {{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2c621e89680fd893eaa8c04bcf6d0d39' }} style={styles.iconSocial}/>
          </View>
          <View style={styles.google}>
            <Image source = {{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/ca2f7db280e9c773e341589a81c15082' }} style={styles.iconSocial}/>
          </View>
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
    flex: 2,
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
    marginBottom: 30,
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
    marginBottom: 30,
  },
  button:{
    width: 330,
    height: 45,
    backgroundColor: 'rgba(229, 57, 53, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    flex: 1.5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  iconSocial:{
    width: 30,
    height: 30,
  },
  socials:{
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  facebook:{
    width: 110,
    height: 45,
    backgroundColor: '#25479B',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  }, 
  zalo:{
    width: 110,
    height: 45,
    backgroundColor: '#0F8EE0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  google:{
    width: 110,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#0680F1',
    borderWidth: 1,
    borderRadius: 2,
  }
});
