import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import Home from '../screens/Home';
import Login from '../screens/Login';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        activeTintColor: '#ffffff',
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Destaques',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="star" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Orders"
        component={HomeScreen}
        options={{
          title: 'Compras',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="shipping-fast" />
          ),
        }}
      />
      <BottomTab.Screen
        name="ShoppingCart"
        component={HomeScreen}
        options={{
          title: 'Meu carrinho',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="shopping-basket" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={LinksScreen}
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="heart" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Perfil"
        component={Login}
        options={{
          title: 'Minha conta',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="user" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'How to get started';
    case 'Links':
      return 'Links to learn more';
  }
}
