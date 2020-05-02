import * as React from 'react';
import { Text } from 'react-native';

export function HeeboText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'heebo-regular' }]} />
  );
}
