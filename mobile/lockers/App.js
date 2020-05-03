import { registerRootComponent } from 'expo';
import 'react-native-gesture-handler';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';

import '@config/reactotron';
import { store, persistor } from '@store';
import App from './src/App';

import useLinking from '@routes/useLinking';

export default function Index(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  var firebaseConfig = {
    apiKey: 'AIzaSyDdVUoR3k34VTXLMUmV5TO7o5Ns-f7OuMg',
    authDomain: 'safe-92595.firebaseapp.com',
    databaseURL: 'https://safe-92595.firebaseio.com',
    projectId: 'safe-92595',
    storageBucket: 'safe-92595.appspot.com',
    messagingSenderId: '926735896897',
    appId: '1:926735896897:web:44f5fd48b9e597a9e111c0',
    measurementId: 'G-V9BEQXHXKS',
  };

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          Heebo: require('./src/assets/fonts/Heebo-Regular.ttf'),
        });

        if (firebase.apps.length === 0)
          await firebase.initializeApp(firebaseConfig);
        else await firebase.app();
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <NavigationContainer
          ref={containerRef}
          initialState={initialNavigationState}
        >
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <App />
            </PersistGate>
          </Provider>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E60016',
  },
});

registerRootComponent(Index);
