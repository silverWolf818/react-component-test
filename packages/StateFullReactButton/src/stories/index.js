import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import StateFullReactButton from '../StateFullReactButton';


storiesOf('StateFullReactButton', module).add('stateful react Button', () => <StateFullReactButton handleOnclick={action('clicked')} />);