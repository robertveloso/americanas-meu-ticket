import * as React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { HeeboText } from '../components/StyledText';

import Colors from '@styles/colors';

import api from '../services/api';

import '../config/reactotron';

export default function HomeScreen() {
  const handleClick = async () => {
    const response = await api.post('api/messages', {
      to: '+5538999880075',
      body: 'Olá Robert!',
    });
    console.tron.log(response);
  };
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Button title="ENVIAR SMS" onPress={() => handleClick()} />
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
  // headerTitle: 'HIIII',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.tintColor,
  },
  contentContainer: {
    paddingTop: 30,
  },
});
