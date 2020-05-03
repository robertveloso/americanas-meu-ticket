import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import * as S from './styles';

import product from '@assets/images/apple-watch.png';

export default function BestBuy() {
  const navigation = useNavigation();
  const signed = useSelector((state) => state.auth.signed);

  const handleBuy = () => {
    if (signed) {
      navigation.navigate('Orders');
    } else {
      navigation.navigate('SignIn');
    }
  };

  return (
    <S.bestSellers>
      <S.Title>
        Apple Watch Series 3 GPS - 42mm - Caixa cinza-espacial de alumínio com
        pulseira esportiva
      </S.Title>
      <S.bestSellersProduct>
        <S.productCode>(Cód. 1345208595)</S.productCode>
        <S.productImage>
          <S.Image source={product} />
        </S.productImage>
        <S.productValue>R$ 1.785,00</S.productValue>
        <S.productValueAME>
          em até 12x sem juros no cartão de crédito com AME e receba R$ 42,38
        </S.productValueAME>
        <S.productValueCashBack>(2% de volta)</S.productValueCashBack>
        <S.Touch onPress={() => handleBuy()}>
          <S.productBuy>comprar</S.productBuy>
        </S.Touch>
        <S.productDesc>
          O novo Apple Watch Series 3 está avançado em todos os sentidos! Com
          GPS e novo altímetro integrados, o ele registra todas as suas
          atividades ao ar livre. O app Exercício atualizado incluí opções de
          treino de alta intensidade em inte...
        </S.productDesc>
      </S.bestSellersProduct>
    </S.bestSellers>
  );
}
