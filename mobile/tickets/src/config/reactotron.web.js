import Reactotron from 'reactotron-react-js';

if (__DEV__) {
  const wsReplace = /ws:/;
  const tron = Reactotron.configure({
    host: '192.168.1.104',
    createSocket: (path) => new WebSocket(path.replace(wsReplace, 'wss:')),
  }).connect();
  console.log(tron);

  tron.clear();

  console.tron = tron;
}
