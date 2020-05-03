import React from 'react';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

import logo from '@assets/images/logo_red.png';
import bg from '@assets/images/ticket_bg.png';

import ProgressBar from '@components/ProgressBar';

export default function Login() {
  const navigation = useNavigation();

  return (
    <S.Background source={bg}>
      <S.Image source={logo} />
      <S.productInfo>
        <S.buyInfo>
          <S.Label>Produto</S.Label>
          <S.Text>Apple Watch S3</S.Text>
        </S.buyInfo>
        <S.buyInfo>
          <S.Label>Valor</S.Label>
          <S.Text>R$ 1.785,00</S.Text>
        </S.buyInfo>

        <S.row>
          <S.left>
            <S.Label>De</S.Label>
            <S.Text>15:00</S.Text>
          </S.left>
          <S.right>
            <S.Label>Até</S.Label>
            <S.Text>16:00</S.Text>
          </S.right>
        </S.row>
        <S.row>
          <S.left>
            <S.Label>Forma de Pagamento</S.Label>
            <S.Text>Cartão - x573</S.Text>
          </S.left>
          <S.right>
            <S.Label>Parcelamento</S.Label>
            <S.Text>6x383,33</S.Text>
          </S.right>
        </S.row>
        <S.row>
          <S.left>
            <S.Label>Armário</S.Label>
            <S.Text>AX01</S.Text>
          </S.left>
          <S.right>
            <S.Label>Loja</S.Label>
            <S.Text>Shopping Boulevard</S.Text>
          </S.right>
        </S.row>
      </S.productInfo>
      <S.View>
        <ProgressBar />
      </S.View>
    </S.Background>
  );
}
