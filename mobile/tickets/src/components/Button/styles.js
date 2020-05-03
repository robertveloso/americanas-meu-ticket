import { BaseButton } from 'react-native-gesture-handler';

import styled from '@emotion/native';

export const Container = styled(BaseButton)`
  height: 46px;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
