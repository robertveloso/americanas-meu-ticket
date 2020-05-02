import styled from '@emotion/native';

import Colors from '@styles/colors';

export const Touch = styled.TouchableOpacity``;

export const Image = styled.Image``;

export const auth = styled.View`
  background: ${Colors.componentBG};
  /* bgOffer */

  display: flex;
  margin: 10px;

  width: 346px;
  height: 170px;

  background: #ffffff;
  border-radius: 5px;
`;

export const authTitle = styled.Text`
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

export const authDesc = styled.Text`
  /* notification */

  position: absolute;
  width: 306px;
  height: 44px;
  left: 20px;
  top: 65px;

  font-family: Heebo;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;

  color: #020202;
`;
export const authCTA = styled.Text`
  /* notification */

  position: absolute;
  width: 55px;
  height: 29px;
  left: 146px;
  top: 125px;

  font-family: Heebo;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 29px;
  text-align: center;

  /* Primary */

  color: #e60016;
`;
