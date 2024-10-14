import React, { useReducer } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const initialState = {
  cart: [],
  totalItems: 0
}

function cartReducer(state, action){
  switch(action.type){
    case 'ADD':
      return {
        ...state,
        cart: [...state.cart, action.payload],
        totalItems: state.totalItems + 1,
      };
    case 'REMOVE':
      return {
        ...state,
        cart: state.cart.filter(item=>item.id!==action.payload.id),
        totalItems: state.totalItems-1,
      };
    
    default:
      return state;
  }
}

export default function ShoppingCart() {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const addItemToCart = (item) => {
    dispatch({type: 'ADD', payload: item});
  }
  const removeItemFromCart = (item)=>{
    dispatch({type: 'REMOVE', payload: item});
  }

  return (
    <View>
      <Text>Total Items: {state.totalItems}</Text>
      <Button title="Add Item 1" onPress={()=>{addItemToCart({id: 1, name: 'Item 1'})}}/>
      <Button title="Add Item 2" onPress={()=>{addItemToCart({id: 2, name: 'Item 2'})}}/>
      <Button title="Clear Cart" />

      <FlatList
        data={state.cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Button title="Remove" onPress={()=>{removeItemFromCart(item)}}/>
          </View>
        )}
      />
    </View>
  );
}
