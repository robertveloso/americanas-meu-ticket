import React from 'react';

import * as S from './styles';

export default function BestBuy({ image }) {
  return (
    <S.bestSellers>
      <S.Title>as melhores ofertas</S.Title>
      <S.bestSellersProduct>
        <S.bestSellersProductImage>
          <S.Image source={image} />
        </S.bestSellersProductImage>
        <S.bestSellersProductTitle>
          Apple Watch Series 3 GPS - 38 mm
        </S.bestSellersProductTitle>
        <S.bestSellersProductValue>R$ 1785,00</S.bestSellersProductValue>
      </S.bestSellersProduct>
      <S.bestSellersProduct>
        <S.bestSellersProductImage>
          <S.Image source={image} />
        </S.bestSellersProductImage>
        <S.bestSellersProductTitle>
          Apple Watch Series 3 GPS - 38 mm
        </S.bestSellersProductTitle>
        <S.bestSellersProductValue>R$ 1785,00</S.bestSellersProductValue>
      </S.bestSellersProduct>
    </S.bestSellers>
  );
}