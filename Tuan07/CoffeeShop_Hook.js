import React, { useState, useEffect } from 'react';
import {Text,
  TextInput,
  View,
  Image,
  SafeAreaView,
  Pressable,
  StyleSheet,
  FlatList, } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HelloScreen = ({ navigation }) => {
  const startDiscover = () => {
    return navigation.navigate('ListShop');
  };
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: 'rgba(222, 225, 230, 1)' }]}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={styles.textTitle}>Welcome to Cafe world</Text>
      </View>
      <View style={styles.imgHelloArea}>
        <Image
          source={{ uri: 'https://s.net.vn/uAzq' }}
          style={styles.imgShopLarge}
        />
        <Image
          source={{ uri: 'https://s.net.vn/bt4m' }}
          style={styles.imgShopLarge}
        />
        <Image
          source={{ uri: 'https://s.net.vn/uAzq' }}
          style={styles.imgShopLarge}
        />
      </View>
      <View style={{ flex: 2, justifyContent: 'center' }}>
        <Pressable style={styles.startBtn} onPress={() => startDiscover()}>
          <Text style={styles.textButton}>GET STARTED</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const ListShopScreen = ({navigation}) => {
  const [coffeeShops, setCoffeeShops] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [searchText, setSearchText] = useState("");
 
  const filteredShops = coffeeShops.filter(shop=>
  shop.name.toLowerCase().includes(searchText.toLowerCase()));

  const displayedShops = showAll ? filteredShops : filteredShops.slice(0, 3);

  const getCoffeeShops = () => {
    fetch('https://run.mocky.io/v3/181f8f73-cf8b-4d83-acbe-077445b5390d', {
      method: 'GET',
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setCoffeeShops(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCoffeeShops();
  }, []);

  return (
    <SafeAreaView style={{...styles.container, backgroundColor: 'rgba(18, 15, 40, 0.12)'}}>
      <View style={styles.headerBar}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '60%',
            justifyContent: 'space-between',
          }}>
          <Pressable
            onPress={() => {
              navigation.navigate('Hello');
            }}>
            <Image
              source={{
                uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/cfb5b067658032fd1870f734369d041b',
              }}
              style={styles.iconImg}
            />
          </Pressable>
          <Text style={styles.textTitle}>Shops Near Me</Text>
        </View>
        <TextInput
          style={{ width: 100, height: 20, paddingLeft: 5, backgroundColor: '#fff', borderRadius: 6 }}
          value={searchText}
          onChangeText={setSearchText}></TextInput>
        <Pressable>
          <Image
            source={{ uri: 'https://s.net.vn/TeAC' }}
            style={styles.iconImg}
          />
        </Pressable>
      </View>
      <FlatList
        data={displayedShops}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.coffeeShop}>
            <Image source={item.img} style={{width: '100%', height: '50%', borderRadius: 6}}/>
            <View style={{flexDirection: 'row', width: '100%'}}>
                {item.status ? (
                  <View style={{flexDirection: 'row', marginRight: 30}}>
                    <Image source={{ uri: 'https://s.net.vn/Z2Z4' }} style={{ width: 20, height: 20 }} />
                    <Text>Accepting Orders</Text>
                  </View>
                ) : (
                  <View style={{flexDirection: 'row', marginRight: 30}}>
                    <Image source={{ uri: 'https://s.net.vn/oznq' }} style={{ width: 20, height: 20 }} />
                    <Text>Temporary Unavailable</Text>
                  </View>
                )}
                <View style={{flexDirection: 'row'}}>
                    <Image source={{ uri: 'https://s.net.vn/YjvE' }} style={{ width: 20, height: 20 }} />
                    <Text>{item.time}</Text>
                </View>
            </View>
            <Text style={styles.textTitle}>{item.name}</Text>
            <View style={{flexDirection: 'row'}}>
              <Image source={{uri: 'https://s.net.vn/JPSR'}} style={{ width: 14, height: 18 }}/>
              <Text>{item.address}</Text>
            </View>
          </View>
        )}
        style={styles.listShopArea}
      />
      <View>
        {!showAll && (
          <Pressable style={styles.startBtn} onPress={() => setShowAll(true)}>
            <Text style={styles.textButton}>See all >></Text>
          </Pressable>
        )}
        {showAll && (
          <Pressable style={styles.startBtn} onPress={() => setShowAll(false)}>
            <Text style={styles.textButton}>{"See less <<"}</Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Hello">
        <Stack.Screen
          name="Hello"
          component={HelloScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ListShop"
          component={ListShopScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(18, 15, 40, 0.12)',
    paddingTop: 30,
  },
  textTitle: {
    fontSize: 24,
    fontWeight: 700,
  },
  imgHelloArea: {
    flex: 3,
    justifyContent: 'space-evenly',
  },
  imgShopLarge: {
    width: 200,
    height: 62,
    borderRadius: 6,
  },
  textButton: {
    fontWeight: '400',
    fontSize: 14,
    color: '#fff',
  },
  startBtn: {
    width: 312,
    height: 50,
    backgroundColor: 'rgba(0, 189, 214, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  headerBar: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconImg: {
    width: 24,
    height: 24,
  },
  listShopArea: {
    flex: 1,
  },
  coffeeShop: {
    width: 347,
    backgroundColor: '#fff',
    height: 200,
    borderRadius: 6,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
