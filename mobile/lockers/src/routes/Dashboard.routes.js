import React from 'react';
// import { StatusBar } from "react-native";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBarIcon from '@components/TabBarIcon';

import HomeRoutes from '@routes/Home.routes';

import Profile from '@screens/Profile';
import Orders from '@screens/Orders';
import Favorites from '@screens/Favorites';
import ShoppingCart from '@screens/ShoppingCart';

import colors from '@styles/colors';

const Tab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function Dashboard() {
  return (
    <>
      {/*<StatusBar backgroundColor="#fff" barStyle="dark-content" />*/}
      <Tab.Navigator
        initialRouteName={INITIAL_ROUTE_NAME}
        tabBarOptions={{
          activeTintColor: colors.primary,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeRoutes}
          options={{
            title: 'Destaques',
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="star" />
            ),
          }}
        />
        <Tab.Screen
          name="Orders"
          component={Orders}
          options={{
            title: 'Compras',
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="shipping-fast" />
            ),
          }}
        />
        <Tab.Screen
          name="ShoppingCart"
          component={ShoppingCart}
          options={{
            title: 'Meu carrinho',
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="shopping-basket" />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            title: 'Favoritos',
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="heart" />
            ),
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={Profile}
          options={{
            title: 'Minha conta',
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="user" />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
