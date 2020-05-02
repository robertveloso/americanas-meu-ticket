import React from 'react';

import * as S from './styles';

export default function Offer({ image }) {
  return (
    <S.Offer>
      <S.Image source={image} />
    </S.Offer>
  );
}
