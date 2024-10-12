import React, { useState, useEffect, useMemo } from 'react';
import { Text, Pressable, Image, TextInput,View, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const fetchData = async (apiUrl) => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const MasterScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [dataFiltered, setDataFiltered] = useState([]);
  const [selectedButton, setSelectedButton] = useState(1);
  const [searchText, setSearchText] = useState("");
  const totalPay = 0;

  const getData = ()=>{
    fetch('https://testapi.io/api/thuandz321/FoodStore',
    {method: 'GET'})
    .then(res=>{
      return res.json();
    }).then(res=>{
      setData(res);
    }).catch(err=>{
      console.log(err);
    })
  }

  useEffect(() => {
    getData()
  }, []);
  
  useEffect(()=>{
    setDataFiltered(data.filter(food=>food.type===selectedButton));
  }, [selectedButton, data]);

  const handlePress = (button) => {
    setSelectedButton(button);
  };

  useEffect(()=>{
    const searchData = data.filter(food=>food.name.toLowerCase().includes(searchText.toLowerCase())&&food.type===selectedButton)
    setDataFiltered(searchData);
  }, [searchText, selectedButton, data]);

  const renderItem = ({ item }) => (
    <Pressable style={{width: 340, height: 115, 
      backgroundColor: 'rgba(244, 221, 221, 1)', borderRadius: 10, 
      flexDirection: 'row', alignItems: 'center', paddingLeft: 10,
      marginBottom: 25, position: 'relative'}}
      onPress={() => navigation.navigate('Details', { item })}
      >
      <Image source={{ uri: item.img }} style={styles.imageProductSmall}/>
      <View style={{flexDirection: 'column', justifyContent: 'space-around', height: '100%', marginLeft: 10}}>
        <Text style={styles.textName}>{item.name}</Text>
        <Text style={styles.textNormal}>{item.desc}</Text>
        <Text style={styles.textName}>{item.price}</Text>
      </View>
      <Pressable style={styles.addBtn} onPress={() => navigation.navigate('Details', { item })}>
        <View style={styles.textContainer}>
          <Text style={styles.addBtnText}>+</Text>
        </View>
      </Pressable>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
          <Text style={styles.textNormal}>Welcome, Jala!</Text>
          <Text style={styles.textName}>Choice you Best food ---- Total: {totalPay} $</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <TextInput style={styles.searchBox} placeholder="Search food"
          value={searchText}
          onChangeText={setSearchText}/>
          <Pressable style={styles.searchBtn}>
            <Image source={{uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/104252abca48a6bd643ad1d4bb3995d2"}} 
            style={{width: 30, height: 30}}/>
          </Pressable>
      </View>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <Pressable style={[styles.filterBtn, selectedButton === 1 && styles.selectedBtn]}>
            <Text style={{fontSize: 14, fontWeight: '700'}} onPress={() => handlePress(1)}>Donut</Text>
          </Pressable>
          <Pressable style={[styles.filterBtn, selectedButton === 2 && styles.selectedBtn]}>
            <Text style={{fontSize: 14, fontWeight: '700'}} onPress={() => handlePress(2)}>Pink Donut</Text>
          </Pressable>
          <Pressable style={[styles.filterBtn, selectedButton === 3 && styles.selectedBtn]}>
            <Text style={{fontSize: 14, fontWeight: '700'}} onPress={() => handlePress(3)}>Floating</Text>
          </Pressable>
      </View>
      <View style={{flex: 8}}>
        <FlatList
          data={dataFiltered}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={{ flex: 8 }}
        />
      </View>
    </SafeAreaView>
  );
}

const DetailsScreen = ({ route }) => {
  const { item } = route.params;
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={[styles.container, { justifyContent: 'space-evenly' }]}>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
        <Image source={{ uri: item.img }} style={styles.imageProductLarge} />
      </View>
      <Text style={styles.textName}>{item.name}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
        <Text style={styles.textNormal}>{item.desc}</Text>
        <Text style={styles.textName}>{item.price}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
        <View style={{ alignItems: 'center' }}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/ee0e29c168b7642ea78843b4300a372c' }} 
            style={{ width: 20, height: 20, marginRight: 10 }} />
            <Text style={styles.textNormal}>Delivery in</Text>
          </View>
          <Text style={styles.textName}>{item.delivery_time}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Pressable style={styles.countBtn} onPress={() => setCount(count - 1)}>
            <Text style={styles.textName}>-</Text>
          </Pressable>
          <Text style={styles.textName}>{count}</Text>
          <Pressable style={styles.countBtn} onPress={() => setCount(count + 1)}>
            <Text style={styles.textName}>+</Text>
          </Pressable>
        </View>
      </View>
      <View>
        <Text style={styles.textName}>Restaurant info</Text>
        <Text style={styles.textNormal}>{item.info}</Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Pressable style={styles.addCartBtn}>
          <Text style={styles.textName}>Add to cart</Text>
        </Pressable>
      </View>
      <View style={{ height: 100 }} />
    </SafeAreaView>
  );
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Master">
        <Stack.Screen name="Master" 
        component={MasterScreen} 
        options={{ headerShown: false }}/>
        <Stack.Screen name="Details" 
        component={DetailsScreen} 
        options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20
  },
  textName:{
    fontSize: 20,
    fontWeight: '700'
  },
  textNormal:{
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 0.65)'
  },
  searchBox:{
    width: '80%',
    height: 46,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: 'rgba(196, 196, 196, 1)',
    borderRadius: 3
  },
  searchBtn:{
    width: 49, 
    height: 49,
    backgroundColor: 'rgba(241, 176, 0, 1)',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  filterBtn:{
    width: '25%',
    paddingTop: 5,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    paddingBottom: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectedBtn: {
    backgroundColor: 'rgba(241, 176, 0, 1)',
  },
  imageProductSmall:{
    width: 111,
    height: 101,
    borderRadius: 10
  },
  addBtn:{
    width: 45,
    height: 45,
    position: 'absolute',
    right: -15,
    bottom: 2,
    borderRadius: 20,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderBottomWidth: 30,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'rgba(241, 176, 0, 1)',
    transform: [{ rotate: '30deg' }],
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    position: 'absolute',
    right: 0,
    bottom: -20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  addBtnText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
  imageProductLarge:{
    width: 272,
    height: 278
  },
  countBtn:{
    width: 21,
    height: 21,
    color: '#fff',
    backgroundColor: 'rgba(241, 176, 0, 1)',
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
    fontWeight: '700',
    marginRight: 10,
    marginLeft: 10
  },
  addCartBtn:{
    width: '90%',
    height: 58,
    backgroundColor: 'rgba(241, 176, 0, 1)',
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
    fontWeight: '700',
    color: '#fff',
  }
});
