import styled from '@emotion/native';

import Colors from '@styles/colors';

export const Touch = styled.TouchableOpacity``;

export const View = styled.View`
  flex-direction: row;
  margin-left: 20px;
  margin-right: 20px;
`;
export const ViewLabel = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 20px;
`;
export const ViewQRCode = styled.View`
  align-items: center;
  justify-content: flex-start;
  margin-top: -50px;
`;
export const stockInPlace = styled.View`
  /* stockInPlace */
  position: absolute;
  top: 0%;
  left: 0%;
  z-index: 9;

  height: 30px;
  width: 30px;
  border-radius: 50px;

  background: #0eb000;
`;
export const wrappingPackage = styled.View`
  /* wrappingPackage */
  position: absolute;
  top: 0%;
  left: 45%;
  z-index: 9;

  height: 30px;
  width: 30px;
  border-radius: 50px;

  background: #0eb000;
`;
export const productReady = styled.View`
  /* productReady */
  position: absolute;
  top: 0%;
  left: 92%;
  z-index: 9;

  height: 30px;
  width: 30px;
  border-radius: 50px;

  background: #0eb000;
`;

export const Line = styled.View`
  margin-top: 13px;
  flex: 1;
  height: 1px;
  border: 1px solid #d2d2d2;
`;

export const Label = styled.Text`
  font-family: Heebo;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  color: #c4c4c4;
`;

export const LabelRed = styled.Text`
  font-family: Heebo;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  color: ${Colors.tintColor};
`;
