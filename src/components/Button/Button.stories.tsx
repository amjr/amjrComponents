import React from 'react';
import { ButtonProps } from './Button.types';
import Button from './Button';

export default {
  title: 'Components/common/Button',
  component: Button,
  argTypes: {
    label: {
      conrtol: 'text',
      defaultValue: 'sample text',
    },
  },
};

export const Default = (props: ButtonProps) => <Button {...props} />;
