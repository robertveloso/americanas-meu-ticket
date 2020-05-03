import styled from '@emotion/native';

import Colors from '@styles/colors';

export const Text = styled.Text`
  font-family: Heebo;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  letter-spacing: 1px;

  color: #000000;
`;

export const ViewQRCode = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.background};
`;
