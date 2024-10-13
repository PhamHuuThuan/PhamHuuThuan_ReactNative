import {View, Text, SafeAreaView, StyleSheet, Button, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';

export default function App() {
  const [resourceType, setResourceType] = useState("donuts");
  const [arr, setArr] = useState([]);

  useEffect(()=>{
    fetch(`https://api.mockfly.dev/mocks/551e2234-6785-4d2c-812e-265d0239a339/${resourceType}`)
    .then(res=>{
      return res.json();
    })
    .then(res=>{
      setArr(res);
    })
  }, [resourceType]);
  return (
    <SafeAreaView style={styles.container}>
      <Button title="donuts" onPress={()=>{setResourceType("donuts")}}/>
      <Button title="pink_donut" onPress={()=>{setResourceType("pink_donut")}}/>
      <Button title="floating" onPress={()=>{setResourceType("floating")}}/>
      <ScrollView>
        {arr.map(p => (
          <View key={p.id}>
            <Text>{p.name}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
