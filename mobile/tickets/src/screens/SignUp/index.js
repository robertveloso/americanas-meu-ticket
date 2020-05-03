import React, { useRef, useState, useEffect } from 'react';
import { Image, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { Form } from '@unform/mobile';

import { signUpRequest } from '@store/modules/auth/actions';
import logo from '@assets/images/logo2x.png';
import colors from '@styles/colors';

import * as S from './styles';

export default function SignUp() {
  const [visibility, setVisibility] = useState(true);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const formRef = useRef(null);

  function handleSubmit({ email, password, displayName }, { reset }) {
    dispatch(signUpRequest(email, password, displayName));
    reset();
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
    });
  }, [navigation]);

  return (
    <>
      <S.Container>
        <StatusBar backgroundColor={colors.primary} />
        <Image source={logo} />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <S.InputBox style={{ marginTop: 37.5 }}>
            <MaterialIcons
              name="person"
              size={30}
              color={'red'}
              style={{ position: 'relative', marginTop: 15, marginRight: 5 }}
            />
            <S.Name
              name="displayName"
              keyboardType="default"
              placeholder="Informe seu nome"
              autoCorrect={false}
              returnKeyType="send"
              autoCapitalize="none"
            />
            <MaterialIcons
              name="email"
              size={30}
              color="#fff"
              style={{ opacity: 0, marginLeft: 5 }}
            />
          </S.InputBox>
          <S.InputBox>
            <MaterialIcons
              name="email"
              size={30}
              color={'red'}
              style={{ position: 'relative', marginTop: 15, marginRight: 5 }}
            />
            <S.User
              name="email"
              keyboardType="email"
              placeholder="Informe seu email"
              autoCorrect={false}
              returnKeyType="send"
              autoCapitalize="none"
            />
            <MaterialIcons
              name="email"
              size={30}
              color="#fff"
              style={{ opacity: 0, marginLeft: 5 }}
            />
          </S.InputBox>
          <S.InputBox>
            <MaterialIcons
              name="lock"
              size={30}
              color={'red'}
              style={{ position: 'relative', marginTop: 15, marginRight: 5 }}
            />
            <S.Password
              name="password"
              keyboardType="default"
              placeholder="Informe sua senha"
              autoCorrect={false}
              returnKeyType="send"
              autoCapitalize="none"
              secureTextEntry={visibility}
            />
            <S.Touch onPress={() => setVisibility(!visibility)}>
              <MaterialIcons
                name={visibility ? 'visibility' : 'visibility-off'}
                size={30}
                color={'red'}
                style={{ position: 'relative', marginTop: 15, marginLeft: 5 }}
              />
            </S.Touch>
          </S.InputBox>
          <S.SubmitButton
            loading={loading}
            onPress={() => formRef.current.submitForm()}
          >
            cadastrar
          </S.SubmitButton>
        </Form>
      </S.Container>
    </>
  );
}
