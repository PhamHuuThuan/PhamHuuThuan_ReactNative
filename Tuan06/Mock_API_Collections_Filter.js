import React, { useState, useEffect } from 'react';
import { Text, Pressable, Image, TextInput,View, SafeAreaView, StyleSheet, FlatList } from 'react-native';

const mockApi1 = 'https://api.mockfly.dev/mocks/551e2234-6785-4d2c-812e-265d0239a339/donuts';
const mockApi2 = 'https://api.mockfly.dev/mocks/551e2234-6785-4d2c-812e-265d0239a339/pink_donut';
const mockApi3 = 'https://api.mockfly.dev/mocks/551e2234-6785-4d2c-812e-265d0239a339/floating';

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

export default function App() {
  const [selectedApi, setSelectedApi] = useState(mockApi1);
  const [data, setData] = useState([]);
  const [selectedButton, setSelectedButton] = useState('Donut');

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchData(selectedApi);
      setData(result);
    };
    loadData();
  }, [selectedApi]);
  
  const handlePress = (api, button) => {
    setSelectedApi(api);
    setSelectedButton(button);
  };

  const renderItem = ({ item }) => (
    <View style={{width: 340, height: 115, 
      backgroundColor: 'rgba(244, 221, 221, 1)', borderRadius: 10, 
      flexDirection: 'row', alignItems: 'center', paddingLeft: 10,
      marginBottom: 25, position: 'relative'}}>
      <Image source={{ uri: item.img }} style={styles.imageProductSmall}/>
      <View style={{flexDirection: 'column', justifyContent: 'space-around', height: '100%', marginLeft: 10}}>
        <Text style={styles.textName}>{item.name}</Text>
        <Text style={styles.textNormal}>{item.desc}</Text>
        <Text style={styles.textName}>{item.price}</Text>
      </View>
      <Pressable style={styles.addBtn}>
        <View style={styles.textContainer}>
          <Text style={styles.addBtnText}>+</Text>
        </View>
      </Pressable>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
          <Text style={styles.textNormal}>Welcome, Jala!</Text>
          <Text style={styles.textName}>Choice you Best food</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <TextInput style={styles.searchBox} placeholder="Search food"/>
          <Pressable style={styles.searchBtn}>
            <Image source={{uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/104252abca48a6bd643ad1d4bb3995d2"}} 
            style={{width: 30, height: 30}}/>
          </Pressable>
      </View>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <Pressable style={[styles.filterBtn, selectedButton === 'Donut' && styles.selectedBtn]}>
            <Text style={{fontSize: 14, fontWeight: '700'}} onPress={() => handlePress(mockApi1, 'Donut')}>Donut</Text>
          </Pressable>
          <Pressable style={[styles.filterBtn, selectedButton === 'Pink Donut' && styles.selectedBtn]}>
            <Text style={{fontSize: 14, fontWeight: '700'}} onPress={() => handlePress(mockApi2, 'Pink Donut')}>Pink Donut</Text>
          </Pressable>
          <Pressable style={[styles.filterBtn, selectedButton === 'Floating' && styles.selectedBtn]}>
            <Text style={{fontSize: 14, fontWeight: '700'}} onPress={() => handlePress(mockApi3, 'Floating')}>Floating</Text>
          </Pressable>
      </View>
      <View style={{flex: 8}}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={{ flex: 8 }}
        />
      </View>
    </SafeAreaView>
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
});
