import styled from '@emotion/native';

import Button from '@components/Button';
import { Input as UnInput } from '@components/Form';

import Colors from '@styles/colors';

export const Touch = styled.TouchableOpacity``;

export const Container = styled.View`
  background: #fff;
  flex: 1;

  justify-content: center;
  align-items: center;

  padding: 0 25px;
`;

export const Text = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 40px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const RecoverText = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 35px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const SigunUpText = styled.Text`
  bottom: 0;
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;
  display: flex;
  background: #fff;
  color: ${Colors.tintColor};
  width: 100%;
`;

export const InputBox = styled.View`
  flex-direction: row;
  margin-left: 15px;
  margin-right: 15px;
`;

export const User = styled(UnInput)`
  background: #fff;
  margin-bottom: 5px;
  border-bottom-width: 2;
  border-bottom-color: ${Colors.text};
`;

export const Password = styled(UnInput)`
  background: #fff;
  margin-top: 5px;
  margin-bottom: 15px;
  border-bottom-width: 2;
  border-bottom-color: ${Colors.text};
`;

export const SubmitButton = styled(Button)`
  background: ${Colors.tintColor};
  width: 100%;
  margin-top: 15.5px;
`;
