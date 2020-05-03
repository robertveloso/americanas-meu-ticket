import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Colors from '@styles/colors';

import Home from '@screens/Home';
import LockerReader from '@screens/Reader';
import LockerProduct from '@screens/Product';

const Stack = createStackNavigator();

export default function createRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />
      <Stack.Screen
        name="LockerReader"
        options={{
          title: '',
          headerStyle: {
            backgroundColor: Colors.tintColor,
          },
          headerTintColor: '#fff',
          headerShown: true,
        }}
        component={LockerReader}
      />
      <Stack.Screen
        name="LockerProduct"
        options={{
          title: '',
          headerStyle: {
            backgroundColor: Colors.tintColor,
          },
          headerTintColor: '#fff',
          headerShown: true,
        }}
        component={LockerProduct}
      />
    </Stack.Navigator>
  );
}
