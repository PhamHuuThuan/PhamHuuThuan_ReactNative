import React, { useState, useCallback } from 'react';
import { View, Text, Button } from 'react-native';

// Component con nhận một hàm callback từ component cha
const ChildComponent = React.memo(({ onClick }) => {
  console.log('ChildComponent rendered');

  return <Button title="Click me" onPress={onClick} />;
});

export default function App() {
  const [count, setCount] = useState(0);

  // Sử dụng useCallback để ghi nhớ hàm onClick
  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, [setCount]); // Chỉ tạo lại hàm khi setCount thay đổi

  return (
    <View>
      <Text>Count: {count}</Text>
      <ChildComponent onClick={handleClick} />
    </View>
  );
}
