import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './index';


storiesOf('Button', module)
  .add('default', () => <Button size={'default'} onClick={action('clicked')}>Learn more</Button>)
  .add('default - small', () => (
    <Button size={'small'} onClick={action('clicked')}>
      Learn more
    </Button>
  ))
  .add('default - medium', () => (
    <Button size={'medium'} onClick={action('clicked')}>
      Learn more
    </Button>
  ))
  .add('default - large', () => (
    <Button size={'large'} onClick={action('clicked')}>
      Learn more
    </Button>
  ))
  .add('rounded', () => (
    <Button size={'medium'} theme={'rounded'} onClick={action('clicked')}>
      Learn more
    </Button>
  ))
  .add('disabled', () => (
    <Button size={'default'} disabled onClick={action('clicked')}>
      Learn more
    </Button>
  ));
