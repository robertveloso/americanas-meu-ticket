import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '@screen/SignIn';
import SignUp from '@screen/SignUp';

import DashboardRoutes from './Dashboard.routes';

const Stack = createStackNavigator();

export default function createRouter() {
  return (
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
      <Stack.Screen
        name="Dashboard"
        options={{ headerShown: false }}
        component={DashboardRoutes}
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
