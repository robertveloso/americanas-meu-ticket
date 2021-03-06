import React from 'react';
import { View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';
import tailwind from 'tailwind-rn';
import firebase from 'firebase';

import { FontAwesome5 } from '@expo/vector-icons';

import logo from '@assets/images/logo.png'; // assets/images/logo.png';
import offer from '@assets/images/offer.png'; // assets/images/logo.png';
import alpino from '@assets/images/alpino.png';
import negresco from '@assets/images/negresco.png';

import * as S from './styles';
import Colors from '@styles/colors';
import Offer from '../../components/Main/Offers';
import Covid from '../../components/Main/Covid';
import BestSeller from '../../components/Main/Offers/BestSeller';
import Login from '../../components/Login';
import BestBuy from '../../components/Main/Offers/BestBuy';

export default function Home() {
  const slide = React.useRef();
  const [user, setUser] = React.useState();
  const signed = useSelector((state) => state.auth.signed);
  React.useEffect(() => {
    async function load() {
      const response = await firebase.auth().currentUser;
      setUser(response);
    }
    load();
  }, [signed]);
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
            <S.HighlightsBox>
              <S.HighlightsTitle>os mais vendidos de hoje</S.HighlightsTitle>
              <BestSeller image={alpino} title={'alpino'} price={'2,00'} />
              <BestSeller image={negresco} title={'negresco'} price={'3,00'} />
            </S.HighlightsBox>
            {!signed ? <Login /> : null}
            <S.HighlightsBox>
              <S.HighlightsTitle>as melhores ofertas</S.HighlightsTitle>
              <BestBuy image={alpino} title={'alpino'} price={'2,00'} />
              <BestBuy image={negresco} title={'negresco'} price={'3,00'} />
            </S.HighlightsBox>
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

Home.navigationOptions = {
  header: null,
};
