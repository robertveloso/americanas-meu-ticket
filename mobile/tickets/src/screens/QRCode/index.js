import React, { useEffect, useState } from 'react';
import { QRCode } from 'react-native-custom-qr-codes-expo';

import * as S from './styles';

import api from '@services/api';

import icon from '@assets/images/icon.png';
import Layout from '@styles/layout';
import Colors from '@styles/colors';

// yarn remove bcryptjs
export default function QRCodeScreen() {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function load() {
      const response = await api.get('/api/generate');
      __DEV__ && console.tron.log(response);
      setCode(response.data.result);
      setLoading(false);
    }
    load();
  }, []);

  return loading ? (
    <S.ViewQRCode>
      <S.Text>Gerando QRCode</S.Text>
    </S.ViewQRCode>
  ) : (
    <S.ViewQRCode>
      <QRCode
        codStyle="dot"
        content={code}
        logo={icon}
        color={Colors.tintColor}
        size={Layout.window.width}
      />
    </S.ViewQRCode>
  );
}
