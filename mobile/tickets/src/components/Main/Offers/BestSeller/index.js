import React from 'react';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

export default function BestSeller({ image }) {
  const navigation = useNavigation();

  return (
    <S.Touch onPress={() => navigation.navigate('Product')}>
      <S.bestSellersProduct>
        <S.bestSellersProductImage>
          <S.Image source={image} />
        </S.bestSellersProductImage>
        <S.bestSellersProductTitle>
          Apple Watch Series 3 GPS - 38 mm
        </S.bestSellersProductTitle>
        <S.bestSellersProductValue>R$ 1.785,00</S.bestSellersProductValue>
      </S.bestSellersProduct>
    </S.Touch>
  );
}
