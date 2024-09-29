import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Pressable, SafeAreaView} from 'react-native';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

function HomeScreen(){
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'VT323': require('/assets/VT323-Regular.ttf'), // Adjust the path if necessary
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Text style={{fontFamily: 'VT323', fontSize: 26, fontWeight: '400', textAlign: 'center', width: 351, marginTop: 50}}>A premium online store for sporter and their stylish choice</Text>
      </View>
      <View style={styles.backgroundImage}>
        <Image source={{uri: 'https://s3-alpha-sig.figma.com/img/b657/871f/5c0d8c0f67fc78f523516fd7768fec28?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WneaSoVQ2QdGDmpIvICqOB7XdcwX-iXnEaRL8wdnxd2eVU60EILs5uPd9aS5XRR-6LqggBFjipTvS69U8DVThDn5dDDXwxZXAsesRzARDAh1Yw5cOdI-OrZImbjvcpDDWxSvmKSCS55v1AmWpBbLJoKXSyUjmSOs1ZrCvrpqxxXPPXLRGEGFNh0gLUXQvgrhvhBsmKVx6QFRHpU3iwJHnCxNcbW1aEkRLJlhDXce6u1ncpb2~x~QDHv9M77nnsjoGneSyfwSAakPIPxXwX76PLVdW9aaj4t2gDxn-aABLGrS0IA6uSsiELxXnBo19SNzrirK4fnB4~yknz02qrCt7Q__'}} style={styles.imageProduct}/>
      </View>
      <View>
        <Text style={{fontFamily: 'Ubutu', fontSize: 26, fontWeight: '700', textAlign: 'center', width: 351}}>POWER BIKE {'\n'} SHOP</Text>
      </View>
      <Pressable style={styles.btnStart} onPress={()=> navigation.navigate('ListProduct')}>
        <Text style={{fontFamily: 'VT323', fontSize: 26, fontWeight: '400', textAlign: 'center', color: 'white', width: 351}}>Get started</Text>
      </Pressable>
    </View>
  );
}

function ListProductScreen(){
  const navigation = useNavigation();
  return (
    <View style={styles.container, {}}>
        <View>
          <Text style={{color: 'rgba(233, 65, 65, 1)', fontSize: 25, fontWeight: '700'}}>The world’s Best Bike</Text>
        </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} // Ẩn tên màn hình
        />
        <Stack.Screen
          name="ListProduct"
          component={ListProductScreen} 
          options={{ headerShown: false }} // Ẩn tên màn hình
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 8,
    justifyContent: 'flex-start',
    textAlign: 'center',
    alignItems: 'center'
  },
  imageProduct:{
    width: 292,
    height: 270
  },
  backgroundImage:{
    backgroundColor: 'rgba(233, 65, 65, 0.1)',
    width: 359,
    height: 359,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20
  },
  btnStart:{
    backgroundColor: 'rgba(233, 65, 65, 1)',
    width: 340,
    height: 61,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 50
  }
});
