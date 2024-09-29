import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Pressable, FlatList} from 'react-native';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const DATA = [
  {
    id: 'P001',
    name: 'Pinarello',
    price: 1800,
    discount: 15,
    img: 'https://s.net.vn/ZArb',
    desc: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc'
  },
    {
    id: 'P002',
    name: 'Pina Mountai',
    price: 1700,
    discount: 20,
    img: 'https://s.net.vn/v9et',
    desc: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc'
  },
  {
    id: 'P003',
    name: 'Pina Bike',
    price: 1500,
    discount: 10,
    img: 'https://s.net.vn/dd9m',
    desc: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc'
  },
  {
    id: 'P004',
    name: 'Pinarello',
    price: 1500,
    discount: 30,
    img: 'https://s.net.vn/OxZ3',
    desc: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc'
  },
  {
    id: 'P005',
    name: 'Pinarello',
    price: 2700,
    discount: 35,
    img: 'https://s.net.vn/dd9m',
    desc: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc'
  },
  {
    id: 'P006',
    name: 'Pinarello',
    price: 1350,
    discount: 5,
    img: 'https://s.net.vn/v9et',
    desc: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc'
  },
  {
    id: 'P007',
    name: 'Pina Bike',
    price: 1500,
    discount: 10,
    img: 'https://s.net.vn/dd9m',
    desc: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc'
  },
  {
    id: 'P008',
    name: 'Pina Bike',
    price: 1500,
    discount: 10,
    img: 'https://s.net.vn/dd9m',
    desc: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc'
  }
]

function HomeScreen(){
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'VT323': require('/assets/VT323-Regular.ttf'), // Adjust the path if necessary
      'Voltaire': require('/assets/Voltaire-Regular.ttf'),
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
const Item = ({ item }) => {
  const [isPressed, setIsPressed] = useState(false); // Move useState here

  return (
    <View style={styles.backgroundItem}>
      <Pressable
        style={[styles.backgroundItem, isPressed && styles.shadow]}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
      >
        <View>
          <FontAwesome name="heart-o" size={24} color="gray" style={{ top: 10, left: -5 }} />
          <Image source={item.img} style={styles.imgProduct} />
        </View>
        <Text style={styles.nameProduct}>{item.name}</Text>
        <Text style={styles.nameProduct}>
          <Text style={{ color: 'rgba(247, 186, 131, 1)' }}>$</Text> {item.price}
        </Text>
      </Pressable>
    </View>
  );
};


function ListProductScreen(){
  const navigation = useNavigation();
  const [selected, setSelected] = useState('All');
  return (
    <View style={styles.container}>
        <View style={{paddingTop: 40}}>
          <Text style={{color: 'rgba(233, 65, 65, 1)', fontSize: 25, fontWeight: '700'}}>The world’s Best Bike</Text>
        </View>
        <View style={styles.filterArea}>
          <Pressable style={styles.filterBtn} onPress={() => setSelected('All')}>
            <Text style={{color: selected === 'All' ? 'red' : 'gray', fontSize: 20}}>All</Text>
          </Pressable>
          <Pressable style={styles.filterBtn} onPress={() => setSelected('Road Bike')}>
            <Text style={{color: selected === 'Road Bike'?'red':'gray', fontSize: 20}}>Road Bike</Text>
          </Pressable>
          <Pressable style={styles.filterBtn} onPress={() => setSelected('Mountain')}>
            <Text style={{color: selected === 'Mountain'?'red':'gray', fontSize: 20}}>Mountain</Text>
          </Pressable>
        </View>
        <View style={styles.listProduct}>
          <FlatList
            data={DATA}
            renderItem={({item})=><Item item = {item}/>}
            numColumns={2}
            showsVerticalScrollIndicator={false}>
          </FlatList>
        </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="ListProduct">
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
    alignItems: 'center',
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
  },
  filterArea:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingBottom: 15
  },
  filterBtn:{
    width: 99,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(233, 65, 65, 0.53)',
    borderRadius: 5,
    margin: 5
  },
  imgProduct:{
    width: 135,
    height: 127
  },
  listProduct:{
    flex: 1
  },
  backgroundItem:{
    position: 'relative',
    backgroundColor: 'rgba(247, 186, 131, 0.15)',
    width: 167,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10
  },
  nameProduct:{
    fontSize: 20,
    fontFamily: 'Voltaire',
    color: 'rgba(0, 0, 0, 0.6)'
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  }
});
