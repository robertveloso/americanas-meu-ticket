import * as React from 'react';
import renderer from 'react-test-renderer';

import { HeeboText } from '../StyledText';

it(`renders correctly`, () => {
  const tree = renderer.create(<HeeboText>Snapshot test!</HeeboText>).toJSON();

  expect(tree).toMatchSnapshot();
});
