import React from 'react';
import { View, Image } from 'react-native';
import tailwind from 'tailwind-rn';

import { useNavigation } from '@react-navigation/core';

import logo from '@assets/images/min_logo.png'; // assets/images/logo.png';

import * as S from './styles';
export default function Home() {
  const navigation = useNavigation();
  return (
    <S.SafeAreaView>
      <S.Header style={tailwind('h-full pt-12 items-center justify-center')}>
        <View style={tailwind('flex flex-row')}>
          <Image source={logo} style={{ justifyContent: 'center' }} />
        </View>
        <S.Title>lockers</S.Title>
        <S.Button onPress={() => navigation.navigate('LockerReader')}>
          <S.Text>Retirar pedido</S.Text>
        </S.Button>
      </S.Header>
    </S.SafeAreaView>
  );
}

Home.navigationOptions = {
  header: null,
};
