import { View, Button, Text, SafeAreaView, StyleSheet } from 'react-native';
import React, { useState, useMemo } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  const expensiveCalculation = useMemo(()=>{
    return count*2;
  }, [count]);
  return (
    <SafeAreaView style={styles.container}>
      <Text>Count: {count}</Text>
      <Text>Double Count (Expensive Calculation): {expensiveCalculation}</Text>
      <Button title="Increase Count" onPress={() => setCount(count + 1)} />
      <Text>Input: {input}</Text>
      <Button title="Change Input" onPress={() => setInput('Updated Input')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
