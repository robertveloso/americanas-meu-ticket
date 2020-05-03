import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import * as S from './styles';

import alpino from '@assets/images/alpino.png';

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
      <S.Title>Alpino delicioso</S.Title>
      <S.bestSellersProduct>
        <S.productCode>(Cód. 1345208595)</S.productCode>
        <S.productImage>
          <S.Image source={alpino} />
        </S.productImage>
        <S.productValue>R$ 2,00</S.productValue>
        <S.productValueAME>
          em até 12x sem juros no cartão de crédito com AME e receba R$ 0,16
        </S.productValueAME>
        <S.productValueCashBack>(2% de volta)</S.productValueCashBack>
        <S.Touch onPress={() => handleBuy()}>
          <S.productBuy>comprar</S.productBuy>
        </S.Touch>
        <S.productDesc>
          Alpino é o mais puro e cremoso chocolate NESTLÉ® com um sabor
          inconfundível dos Alpes Suíços
        </S.productDesc>
      </S.bestSellersProduct>
    </S.bestSellers>
  );
}
