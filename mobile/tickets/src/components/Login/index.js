import React from 'react';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

export default function Login() {
  const navigation = useNavigation();
  return (
    <S.Touch onPress={() => navigation.navigate('SignIn')}>
      <S.auth>
        <S.authTitle>olá, seja bem-vindo</S.authTitle>
        <S.authDesc>
          faça seu login ou cadastre-se para ver ofertas incríveis escolhidas só
          para voceê
        </S.authDesc>
        <S.authCTA>entrar</S.authCTA>
      </S.auth>
    </S.Touch>
  );
}
