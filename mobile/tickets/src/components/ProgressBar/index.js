import React from 'react';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

export default function ProgressBar() {
  const navigation = useNavigation();
  return (
    <S.Touch onPress={() => navigation.navigate('QRCode')}>
      <S.View>
        <S.stockInPlace />
        <S.wrappingPackage />
        <S.productReady />
        <S.Line />
      </S.View>
      <S.ViewLabel>
        <S.Label>
          tudo pronto, <S.LabelRed>retirar produto</S.LabelRed>
        </S.Label>
      </S.ViewLabel>
    </S.Touch>
  );
}
