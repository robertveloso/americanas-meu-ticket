import { registerRootComponent } from "expo";
import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import firebase from "firebase";

import { NavigationContainer } from "@react-navigation/native";
import { PersistGate } from "redux-persist/integration/react";

import "config/ReactotronConfig";

import { store, persistor } from "store";

import App from "./src/App";

export default function Index() {
  var firebaseConfig = {
    apiKey: "AIzaSyDdVUoR3k34VTXLMUmV5TO7o5Ns-f7OuMg",
    authDomain: "safe-92595.firebaseapp.com",
    databaseURL: "https://safe-92595.firebaseio.com",
    projectId: "safe-92595",
    storageBucket: "safe-92595.appspot.com",
    messagingSenderId: "926735896897",
    appId: "1:926735896897:web:44f5fd48b9e597a9e111c0",
    measurementId: "G-V9BEQXHXKS",
  };

  if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);
  else firebase.app();
  // firebase.analytics();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar backgroundColor="#7D40E7" barStyle="light-content" />
          <App />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
registerRootComponent(App);
