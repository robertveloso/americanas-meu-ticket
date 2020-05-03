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

export const Input = styled.TextInput`
  margin: 20px;
  width: 295px;
  height: 30;
  background: #fff;
`;

export const SectionStyle = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-width: 0.5px;
  border-color: #000;
  height: 40px;
  border-radius: 5px;
  margin: 20px;
`;

export const Notifications = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${Colors.tintColor};
`;

export const notificationText = styled.Text`
  font-family: Heebo;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  /* identical to box height */

  text-align: right;
  padding-right: 20px;

  color: #ffffff;
`;
export const dateText = styled.Text`
  font-family: Heebo;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 32px;
  text-align: right;
  padding-right: 20px;

  color: #ffffff;
`;

export const timerText = styled.Text`
  font-family: Heebo;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  /* identical to box height */

  text-align: right;
  padding-right: 20px;

  color: #ffffff;

  opacity: 0.69;
`;

export const offers = styled.View`
  background: ${Colors.background};
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
`;

export const offer = styled.View`
  padding-bottom: 10px;
  padding-top: 10px;
`;

export const HighlightsBox = styled.View`
  background: ${Colors.componentBG};
  width: 346px;
  height: 338px;
  padding: 5px;
  text-align: center;
  flex: 1;
  flex-direction: row;
  align-self: center;
  margin: 0px 20px;
  border-radius: 5px;
  margin: 10px;
`;

export const HighlightsTitle = styled.Text`
  /* titleOffer */

  position: absolute;
  width: 306px;
  height: 35px;
  left: 17px;
  top: 14px;

  font-family: Heebo;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  letter-spacing: 1px;

  color: #000000;
`;

export const Notification = styled(SlideUp)``;
