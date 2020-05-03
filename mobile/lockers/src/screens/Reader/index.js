import React from 'react';
import tailwind from 'tailwind-rn';

import * as S from './styles';
import Reader from '@components/Reader';

export default function Home() {
  return (
    <S.SafeAreaView style={tailwind('h-full w-full flex')}>
      <Reader />
    </S.SafeAreaView>
  );
}
