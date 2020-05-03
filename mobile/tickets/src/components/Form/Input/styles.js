import styled from '@emotion/native';

export const Container = styled.View`
  background: #fff;
  width: 100%;

  border-radius: 4px;
`;

export const TInput = styled.TextInput`
  /*font-family: 'Roboto-Regular';*/
  height: 45px;
  margin-left: 20px;
`;

TInput.defaultProps = { placeholderTextColor: '#999' };
