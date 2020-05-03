import React from 'react';
import { View, Text, Image } from 'react-native';
import tailwind from 'tailwind-rn';

import { FontAwesome5 } from '@expo/vector-icons';

import logo from '@assets/images/logo.png'; // assets/images/logo.png';
import offer from '@assets/images/offer.png'; // assets/images/logo.png';
import appleWatch from '@assets/images/apple-watch.png'; // assets/images/logo.png';

import * as S from './styles';
import Colors from '@styles/colors';
import Offer from '../../components/Main/Offers';
import Covid from '../../components/Main/Covid';
import BestSellers from '../../components/Main/Offers/BestSeller';
import Login from '../../components/Login';
import BestBuy from '../../components/Main/Offers/BestBuy';

export default function Home() {
  const slide = React.useRef();
  const exampleContent = () => {
    return (
      <View style={tailwind('h-full w-full')}>
        <S.Notifications style={tailwind('pt-2 items-end')}>
          <S.notificationText>
            Você possui 1 compra para retirar
          </S.notificationText>
          <S.dateText>30/04 - 15h - 16h</S.dateText>
          <S.timerText>daqui 5 dias</S.timerText>
        </S.Notifications>
      </View>
    );
  };
  return (
    <S.SafeAreaView style={tailwind('h-full')}>
      <S.ScrollView>
        <S.Header style={tailwind('pt-12 items-center')}>
          <View style={tailwind('flex flex-row')}>
            <Image source={logo} style={{ justifyContent: 'center' }} />
            <FontAwesome5
              name="bell"
              size={30}
              color="#fff"
              style={{ marginLeft: 15, alignSelf: 'center' }}
              onPress={() => slide.current._slideUp()}
            />
          </View>
          <S.SectionStyle style={tailwind('flex flex-row')}>
            <FontAwesome5
              name="search"
              size={30}
              color={Colors.tintColor}
              style={{ left: 10, alignSelf: 'center' }}
            />
            <S.Input placeholder="tem tuuudoo, pode procurar! :)" />
          </S.SectionStyle>
        </S.Header>
        <View style={tailwind('pt-4')}>
          <S.offers>
            <Covid />
            <Offer image={offer} />
            <BestSellers image={appleWatch} />
            <Login />
            <BestBuy image={appleWatch} />
          </S.offers>
        </View>
      </S.ScrollView>
      <S.Notification
        ref={slide}
        dragBgColor={Colors.background}
        dragArrowColor={Colors.tintColor}
        contentSection={exampleContent()}
      />
    </S.SafeAreaView>
  );
}
