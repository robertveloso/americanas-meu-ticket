import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import * as S from './styles';

import logo from '@assets/images/logo_red.png';
import bg from '@assets/images/ticket_bg.png';
import alpino from '@assets/images/alpino.png';

import api from '@services/api';

export default function Order() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);
  const code = '1835';

  useEffect(() => {
    __DEV__ && console.tron.log('enviando sms');
    async function sendSMS() {
      const response = await api.post('/api/messages', {
        to: '+5519997322660',
        body: `Seu código para desbloquear o locker: ${code}`,
      });
      __DEV__ && console.tron.log('SMS', response.data);
    }
    sendSMS();
  }, [isFocused]);

  async function handleInput(txt) {
    setText(txt);
    __DEV__ && console.tron.log(txt);
    if (txt.length === 4) {
      const response = await api.post('/api/2fa', {
        code: txt,
      });
      __DEV__ && console.tron.log(response);
      if (response.data.result) {
        setOpen(true);
        alert(`Locker aberto, retire seu produto e feche novamente.`);
        navigation.navigate('Home');
      }
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <S.Background source={bg}>
        <S.Image source={logo} />
        <S.Input
          placeholder="digite o código recebido por SMS"
          value={text}
          onChangeText={(txt) => handleInput(txt)}
          keyboardType="numeric"
        />
        <S.productInfo>
          <S.row style={{ alignItems: 'center', justifyContent: 'flex-start' }}>
            <S.Image source={alpino} style={{ width: 70, height: 70 }} />
            <S.Text>Alpino</S.Text>
          </S.row>
          <S.buyInfo>
            <S.Label>Cliente</S.Label>
            <S.Text>Robert L Veloso</S.Text>
          </S.buyInfo>
          <S.buyInfo>
            <S.Label>Pedido</S.Label>
            <S.Text>#0000001</S.Text>
          </S.buyInfo>

          <S.row>
            <S.left>
              <S.Label>De</S.Label>
              <S.Text>15:00</S.Text>
            </S.left>
            <S.right>
              <S.Label>Até</S.Label>
              <S.Text>16:00</S.Text>
            </S.right>
          </S.row>
          <S.row>
            <S.left>
              <S.Label>Armário</S.Label>
              <S.Text>AX01</S.Text>
            </S.left>
          </S.row>
        </S.productInfo>
      </S.Background>
    </KeyboardAvoidingView>
  );
}
