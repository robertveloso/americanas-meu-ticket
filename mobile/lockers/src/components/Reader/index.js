import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

import { BarCodeScanner } from 'expo-barcode-scanner';

import api from '@services/api';
import logo from '@assets/images/logo_red.png';
import bg from '@assets/images/ticket_bg.png';

import * as S from './styles';

export default function Reader() {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    setData(data);
    const response = await api.post('/api/scan', {
      code: data,
    });
    __DEV__ && console.tron.log('Reader', response.data);
    if (response.data.result === true) {
      navigation.navigate('LockerProduct');
    } else {
      setScanned(false);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <S.Background source={bg}>
      <S.Image source={logo} />
      <S.View>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ flex: 0.9 }}
          type={BarCodeScanner.Constants.Type.front}
        />
        <S.Touch onPress={() => setScanned(false)}>
          {scanned ? (
            <S.Text>código verificado com sucesso</S.Text>
          ) : (
            <S.Text>aponte o QRCode para a tela</S.Text>
          )}
        </S.Touch>
      </S.View>
    </S.Background>
  );
}
