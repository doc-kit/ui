import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { withReadme } from 'storybook-readme';
import ColorBox from './ColorBox';

// tslint:disable-next-line no-var-requires
const readme = require('./README.md');

storiesOf('ColorBox', module)
  .addDecorator(withReadme(readme))
  .add('default', () => (
    <ColorBox
      colorName={text('colorName', 'Red Barn')}
      hexValue={text('hexValue', '#F00000')}
    />
  ));
