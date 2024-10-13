import React, { useRef } from 'react';
import { View, TextInput, Button } from 'react-native';

export default function App() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // Đặt focus vào input khi nhấn nút
    }
  };

  return (
    <View>
      <TextInput
        ref={inputRef} // Gắn ref vào TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Nhập văn bản..."
      />
      <Button title="Focus Input" onPress={handleFocus} />
    </View>
  );
}
