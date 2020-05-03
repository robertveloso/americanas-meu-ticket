import React from 'react';
import { View, Image } from 'react-native';
import tailwind from 'tailwind-rn';

import logo from '@assets/images/min_logo.png'; // assets/images/logo.png';

import * as S from './styles';
export default function Home() {
  return (
    <S.SafeAreaView>
      <S.Header style={tailwind('h-full pt-12 items-center justify-center')}>
        <View style={tailwind('flex flex-row')}>
          <Image source={logo} style={{ justifyContent: 'center' }} />
        </View>
        <S.Title>lockers</S.Title>
        <S.Button>
          <S.Text>Retirar pedido</S.Text>
        </S.Button>
      </S.Header>
    </S.SafeAreaView>
  );
}

Home.navigationOptions = {
  header: null,
};
