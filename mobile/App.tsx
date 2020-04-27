import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import api from './api';

import './ReactotronConfig';

export default function App() {
  const handleClick = async () => {
    console.tron.log('Post');
    const response = await api.post('api/messages', {
      to: '+5538999880075',
      body: 'Olá Robert!',
    });
    console.tron.log(response);
  };
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button title="Enviar SMS" onPress={() => handleClick()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
