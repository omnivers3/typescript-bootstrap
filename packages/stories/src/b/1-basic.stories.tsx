import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import * as React from 'react';
// import { config, Config } from '@org/common'
// import { config, Config, Radio } from '@org/components'
import { config, Config, Radio } from '../../../components'
// import { Radio } from '@org/components';

// import { d } from "@stereobooster/d";
// import { B } from "@stereobooster/b";

storiesOf('@org/b/1. Basic', module).add(
  'first',
  withInfo({ inline: false })(() => {
    const cfg: Config = {
      version: ''
    };
    const foo = config(cfg);
    console.log('foo:', foo);
    console.log('radio:', Radio);
    return <div><Radio /></div>;
    // return <B>{d()}</B>;
  }),
);
