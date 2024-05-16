import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import HomeScreen from '../atomic/views/home';
import ProductScreen from '../atomic/views/products/product';
import EditScreen from '../atomic/views/products/edit';
import AddScreen from '../atomic/views/products/add';

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="product"
          component={ProductScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="edit"
          component={EditScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="add"
          component={AddScreen}
          options={{headerShown: false}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
