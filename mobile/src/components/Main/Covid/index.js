import React from 'react';

import * as S from './styles';

export default function Covid() {
  return (
    <S.bannerCOVID>
      <S.textCOVID style={{ fontWeight: 'bold', fontSize: 16 }}>
        COVID-19
      </S.textCOVID>
      <S.textCOVID>
        {'\n'}acompanhe aqui nossas ações de combate ao coronavírus
      </S.textCOVID>
    </S.bannerCOVID>
  );
}
