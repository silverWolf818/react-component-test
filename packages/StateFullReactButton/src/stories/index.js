import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import StateFullReactButton from '../StateFullReactButton';


storiesOf('Button', module).add('StateFulReactButton', () => <StateFullReactButton handleOnclick={action('clicked')} />);