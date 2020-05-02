import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '@screens/Home';
import Servicos from '@screens/Home';
import Consultas from '@screens/Home';

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
        name="Products"
        options={{
          title: 'Produto',
          headerShown: false,
        }}
        component={Consultas}
      />
    </Stack.Navigator>
  );
}
