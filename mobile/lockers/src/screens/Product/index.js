import React from 'react';
import tailwind from 'tailwind-rn';

import * as S from './styles';
import Order from '@components/Order';

export default function Home() {
  return (
    <S.SafeAreaView style={tailwind('h-full w-full flex')}>
      <Order />
    </S.SafeAreaView>
  );
}
