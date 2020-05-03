import styled from '@emotion/native';

import Colors from '@styles/colors';

export const Touch = styled.TouchableOpacity``;

export const Background = styled.ImageBackground`
  position: relative;
  top: 25px;
  flex: 1;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.Image`
  margin-top: 25px;
  margin-bottom: 20px;
  justify-content: center;
  align-self: center;
`;

export const View = styled.View`
  flex: 1;
  margin-top: 80px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const productInfo = styled.View`
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
`;

export const buyInfo = styled.View`
  flex-direction: row;
  align-items: baseline;
  margin-top: 20px;
`;

export const row = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

export const left = styled.View`
  display: flex;
  flex: 1;
  align-items: flex-start;
`;
export const right = styled.View`
  display: flex;
  align-items: flex-end;
`;

export const Label = styled.Text`
  font-family: Heebo;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  color: #c4c4c4;
  margin-right: 20px;
`;
export const Text = styled.Text`
  font-family: Heebo;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  letter-spacing: 1px;
  color: ${Colors.text};
`;
