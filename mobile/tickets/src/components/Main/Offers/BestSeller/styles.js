import styled from '@emotion/native';

import Colors from '@styles/colors';

export const Touch = styled.TouchableOpacity``;

export const Image = styled.Image``;

export const Title = styled.Text`
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

export const bestSellers = styled.View`
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

export const bestSellersProduct = styled.View`
  width: 137px;
  margin-right: 5px;
  margin-left: 5px;
`;

export const bestSellersProductImage = styled.View`
  position: absolute;
  width: 137px;
  height: 167px;
  margin-top: 55px;
  margin-left: 25px;
`;
export const bestSellersProductTitle = styled.Text`
  position: absolute;
  width: 137px;
  height: 44px;
  left: 26px;
  top: 241px;

  font-family: Heebo;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;

  /* Text Primary */

  color: #000000;
`;
export const bestSellersProductValue = styled.Text`
  /* offer-price ☁️ */
  position: absolute;
  left: 26px;
  top: 287px;

  font-family: Heebo;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  /* identical to box height */

  text-align: center;

  /* Primary */

  color: #e60016;
`;
