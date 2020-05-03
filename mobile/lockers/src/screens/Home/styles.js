import styled, { css } from '@emotion/native';
import SlideUp from 'react-native-overlay-section';

import Colors from '@styles/colors';

export const SafeAreaView = styled.SafeAreaView`
  background: ${Colors.background};
`;

export const ScrollView = styled.ScrollView``;

export const Header = styled.View`
  background: ${Colors.tintColor};
`;

export const Title = styled.Text`
  font-family: Heebo;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 47px;
  text-align: center;
  letter-spacing: 1px;

  color: #ffffff;
`;

export const Text = styled.Text`
  font-family: Heebo;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 47px;
  /* identical to box height */

  text-align: center;

  color: #e60016;
`;

export const Button = styled.View`
  margin: 20px;
  width: 227px;
  height: 65px;
  background: #ffffff;
  border-radius: 10px;
  justify-content: center;
`;
