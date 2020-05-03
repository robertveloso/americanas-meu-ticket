import React from 'react';
import { QRCode } from 'react-native-custom-qr-codes-expo';

import * as S from './styles';

import api from '@services/api';

import icon from '@assets/images/icon.png';
import Colors from '@styles/colors';

// cliente_id+product_id+armario_id
// yarn remove bcryptjs
export default function QRCodeScreen() {
  const [code, setCode] = React.useState('gerando...');
  React.useEffect(() => {
    async function load() {
      const response = await api.get('/api/generate');
      console.tron.log(response);
      setCode(response.data.result);
    }
    load();
  }, [code]);

  return (
    <S.ViewQRCode>
      <QRCode
        codStyle="dot"
        content={code}
        logo={icon}
        color={Colors.tintColor}
      />
    </S.ViewQRCode>
  );
}
