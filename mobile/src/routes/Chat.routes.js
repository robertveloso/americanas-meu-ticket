import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import CreateProblem from "pages/CreateProblem";
import Home from "pages/Home";

const Stack = createStackNavigator();

export default function ChatRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTintColor: "#fff",
        headerTransparent: true,
      }}
      initialRouteName="Início"
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Entregas"
        component={Home}
      />
    </Stack.Navigator>
  );
}
