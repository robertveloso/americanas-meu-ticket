import React from "react";
import { StatusBar } from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Profile from "pages/Profile";
import HomeRoutes from "routes/Home.routes";
import colors from "styles/colors";

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: colors.primary,
        }}
      >
        <Tab.Screen
          name="Conversas"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="comment" size={size} color={color} />
            ),
          }}
          component={HomeRoutes}
        />
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
          component={HomeRoutes}
        />
        <Tab.Screen
          name="Profile"
          options={{
            tabBarLabel: "Perfil",
            tabBarIcon: ({ color, size }) => (
              <Icon name="person" size={size} color={color} />
            ),
          }}
          component={Profile}
        />
      </Tab.Navigator>
    </>
  );
}
