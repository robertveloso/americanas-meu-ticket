import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '@screens/SignIn';
import SignUp from '@screens/SignUp';
import Recover from '@screens/Recover';
import OTP from '@screens/OTP';

import DashboardRoutes from './Dashboard.routes';

const Stack = createStackNavigator();

export default function createRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        options={{ headerShown: false }}
        component={DashboardRoutes}
      />
      <Stack.Screen
        name="SignIn"
        options={{
          title: 'Login',
          headerShown: true,
        }}
        component={SignIn}
      />
      <Stack.Screen
        name="SignUp"
        options={{
          title: 'Inscreva-se',
          headerShown: true,
        }}
        component={SignUp}
      />
      <Stack.Screen
        name="Recover"
        options={{
          title: 'Recuperar senha',
          headerShown: true,
        }}
        component={Recover}
      />
      <Stack.Screen
        name="OTP"
        options={{
          title: 'Entrar com número',
          headerShown: true,
        }}
        component={OTP}
      />
    </Stack.Navigator>
  );
}

/*
export default function createRouter(isSigned = false) {
  return !isSigned ? (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        options={{ headerShown: false }}
        component={SignIn}
      />
      <Stack.Screen
        name="SignUp"
        options={{ headerShown: false }}
        component={SignUp}
      />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        options={{ headerShown: false }}
        component={DashboardRoutes}
      />
    </Stack.Navigator>
  );
}
*/
