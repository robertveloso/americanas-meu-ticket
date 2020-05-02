import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '@screen/Home';
import Servicos from '@screen/Home';
import Consultas from '@screen/Home';

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
      initialRouteName="Início"
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
