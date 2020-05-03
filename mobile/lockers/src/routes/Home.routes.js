import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '@screens/Home';
import Servicos from '@screens/Home';
import Product from '@screens/Product';

import QRCode from '@screens/QRCode';

const Stack = createStackNavigator();

export default function HomeRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#fff',
        headerTransparent: true,
        headerShown: false,
        //headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Search"
        options={{
          title: 'Buscar',
          headerShown: false,
        }}
        component={Servicos}
      />
      <Stack.Screen
        name="Product"
        options={{
          title: 'Produto',
          headerShown: false,
        }}
        component={Product}
      />
      <Stack.Screen
        name="QRCode"
        options={{
          title: 'QRCode',
          headerShown: false,
        }}
        component={QRCode}
      />
    </Stack.Navigator>
  );
}
