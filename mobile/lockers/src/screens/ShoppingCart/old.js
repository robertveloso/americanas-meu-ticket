import React from 'react';
import tailwind from 'tailwind-rn';

import * as S from './styles';

import api from '@services/api';

export default function ShoppingCart() {
  const handleClick = async () => {
    const response = await api.post('api/messages', {
      to: '+5538999880075',
      body: 'Olá Robert!',
    });
    console.tron.log(response);
  };
  return (
    <S.SafeAreaView>
      <S.ScrollView>
        <S.Button title="ENVIAR SMS" onPress={() => handleClick()} />
      </S.ScrollView>
    </S.SafeAreaView>
  );
}
