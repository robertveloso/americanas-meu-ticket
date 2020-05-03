import React from 'react';
import { QRCode } from 'react-native-custom-qr-codes-expo';

import * as S from './styles';

import icon from '@assets/images/icon.png';
import Colors from '@styles/colors';

export default function QRCodeScreen() {
  return (
    <S.ViewQRCode>
      <QRCode
        codStyle="dot"
        content="https://americanas.com"
        logo={icon}
        color={Colors.tintColor}
      />
    </S.ViewQRCode>
  );
}
