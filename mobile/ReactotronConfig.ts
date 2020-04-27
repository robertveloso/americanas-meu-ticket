import Reactotron from 'reactotron-react-native';
import { AsyncStorage } from 'react-native';

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({ host: '192.168.1.104' })
    .useReactNative()
    //.use(reactotronRedux())
    //.use(sagaPlugin())
    .connect();

  tron.clear();

  console.tron = tron;
}
