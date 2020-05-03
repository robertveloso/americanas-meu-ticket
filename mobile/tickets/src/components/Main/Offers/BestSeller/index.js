import React from 'react';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

export default function BestSeller({ image, title, price }) {
  const navigation = useNavigation();

  return (
    <S.Touch onPress={() => navigation.navigate('Product')}>
      <S.bestSellersProduct>
        <S.bestSellersProductImage>
          <S.Image source={image} />
        </S.bestSellersProductImage>
        <S.bestSellersProductTitle>{title}</S.bestSellersProductTitle>
        <S.bestSellersProductValue>R$ {price}</S.bestSellersProductValue>
      </S.bestSellersProduct>
    </S.Touch>
  );
}
