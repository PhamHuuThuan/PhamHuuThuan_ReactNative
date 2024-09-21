import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function DetailProductScreen() {
  const navigation = useNavigation();
  const [selectedColor, setSelectedColor] = useState('#234896'); // Màu mặc định
  const images = {
    '#C5F1FB': 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/aee6d16882f7e9e9e4154103c6678314',
    '#F30D0D': 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/00d431560e7cf43d4f0810a3d194786c',
    '#000000': 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/e1d44ffa1b1d1fb2f5008c63d6144f89',
    '#234896': 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/b93ad14ed7da498788208432e391d4f0',
  };
  return (
    <View style={styles.background}>
      <View>
        <Image source={{uri: images[selectedColor]}} style={{width: 275, height: 340, margin: 10}} />
      </View>
      <View>
        <Text style={styles.textNormal}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      </View>
      <View style={styles.reviews}>
        <View style={styles.stars}>
          <MaterialIcons name="star" size={24} style={styles.starSelected} />
          <MaterialIcons name="star" size={24} style={styles.starSelected} />
          <MaterialIcons name="star" size={24} style={styles.starSelected} />
          <MaterialIcons name="star" size={24} style={styles.starSelected} />
          <MaterialIcons name="star" size={24} style={styles.starSelected} />
        </View>
        <Text style={styles.textNormal}>(Xem 828 đánh giá)</Text>
      </View>
      <View style={styles.price}>
        <Text style={styles.priceText}>1.790.000 đ</Text>
        <Text style={styles.priceOriginal}>1.790.000 đ</Text>
        <Text></Text>
      </View>
      <View style={styles.note}>
        <Text style={styles.noteText}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Image source={{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/5929d92db3ead73ff59f0c1cdf683c4e'}} style={{width: 16, height: 16, margin: 10}}></Image>
      </View>
      <View>
        <Pressable style={styles.selectColorBtn} onPress={() => navigation.navigate('SelectColor', {selectedColor, setSelectedColor})}>
          <Text style={styles.textNormal}>4 MÀU-CHỌN MÀU       ></Text>
        </Pressable>
      </View>
      <View>
        <Pressable style={styles.buyBtn} onPress={() => navigation.navigate('SelectColor', {selectedColor, setSelectedColor})}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: '700'}}>CHỌN MUA</Text>
        </Pressable>
      </View>
    </View>
  );
}

function SelectColorScreen({route}){
  const { selectedColor: initialColor, setSelectedColor } = route.params;
  const [selectedColor, setLocalSelectedColor] = useState(initialColor);
  const [colorSelected, setColorSelected] = useState(false);
  const navigation = useNavigation();
  const images = {
    '#C5F1FB': 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/aee6d16882f7e9e9e4154103c6678314',
    '#F30D0D': 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/00d431560e7cf43d4f0810a3d194786c',
    '#000000': 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/e1d44ffa1b1d1fb2f5008c63d6144f89',
    '#234896': 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/b93ad14ed7da498788208432e391d4f0',
  };
  const handleColorSelect = (color) => {
    setLocalSelectedColor(color);
    setSelectedColor(color);
    setColorSelected(true);
  };
  return (
    <View style={styles.background}>
      <View style={{flex: 1.5, flexDirection: 'row', justifyContent: 'flex-start', margin: 10}}>
        <Image source={{uri: images[selectedColor]}} style={{width: 100, height: 125, marginRight: 10}}/>
        <View style={{justifyContent:'space-between'}}>
          <Text style={styles.textNormal}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
          {colorSelected && (
            <>
              <Text style={styles.textNormal}>Màu: <View style={{ width: 50, height: 20, backgroundColor: selectedColor, marginTop: 5 }}></View></Text>
              <Text style={styles.textNormal}>Cung cấp bởi: <Text style={styles.priceText}>TikiTrading</Text></Text>
              <Text style={styles.priceText}>1.790.000 đ</Text>
            </>
          )}
        </View>
      </View>
      <View style={{flex: 6, width:'100%',display: 'flex',flexDirection: 'column', alignItems: 'center', backgroundColor: 'rgba(196, 196, 196, 1)'}}>
        <View style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <View style={{width: '100%', justifyContent: 'flex-start', margin: 10, paddingLeft: 10}}><Text style={{fontSize: 18}}>Chọn một màu bên dưới:</Text></View>
          <View style={styles.selectColor}>
            <Pressable onPress={() => handleColorSelect('#C5F1FB')}>
              <View style={{ width: 85, height: 80, backgroundColor: '#C5F1FB' }}></View>
            </Pressable>
            <Pressable onPress={() => handleColorSelect('#F30D0D')}>
              <View style={{ width: 85, height: 80, backgroundColor: '#F30D0D' }}></View>
            </Pressable>
            <Pressable onPress={() => handleColorSelect('#000000')}>
              <View style={{ width: 85, height: 80, backgroundColor: '#000000' }}></View>
            </Pressable>
            <Pressable onPress={() => handleColorSelect('#234896')}>
              <View style={{ width: 85, height: 80, backgroundColor: '#234896' }}></View>
            </Pressable>
          </View>
          <View>
            <Pressable style={styles.doneBtn} onPress={() => navigation.navigate('DetailProduct')}>
              <Text style={{color: 'white', fontSize: 20, fontWeight: '700'}}>Xong</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="DetailProduct">
        <Stack.Screen name="DetailProduct" component={DetailProductScreen} />
        <Stack.Screen name="SelectColor" component={SelectColorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background:{
    flex: 1,
    backgroundColor: 'white', 
    padding: 5,
    alignItems: 'center',
  },
  textNormal:{
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Roboto',
  },
  priceText:{
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  stars: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 30,
  },
  starSelected: {
    color: '#E0E41A',
  },
  reviews:{
    display: 'flex',
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  price:{
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  priceOriginal: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  noteText:{
    fontSize: 12,
    fontWeight: '700',
    color: '#FA0000',
  },
  note:{
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10
  },
  selectColorBtn:{
    backgroundColor: 'rgba(196, 196, 196, 0)',
    borderColor: 'rgba(0, 0, 0, 0.46)',
    borderWidth: 1,
    width: 332,
    height: 34,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 25
  },
  buyBtn:{
    backgroundColor: '#CA1536',
    width: 326,
    height: 44,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 25
  },
  doneBtn:{
    backgroundColor: 'rgba(25, 82, 226, 0.58)',
    borderColor: '#CA1536',
    borderWidth: 1,
    width: 326,
    height: 44,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 25
  },
  selectColor:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 400
  }
});
