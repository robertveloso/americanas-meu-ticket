import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Home from "pages/Home";
import Servicos from "pages/Services";
import Consultas from "pages/Consulta";

const Stack = createStackNavigator();

export default function HomeRoutes() {
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
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Servicos"
        options={{
          title: "Serviços",
          headerShown: false,
        }}
        component={Servicos}
      />
      <Stack.Screen
        name="Consultas"
        options={{
          title: "Consultas",
          headerShown: false,
        }}
        component={Consultas}
      />
    </Stack.Navigator>
  );
}
