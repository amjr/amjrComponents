import React from 'react';
import { ButtonProps } from './Button.types';
import * as Styles from './Button.styles';

const Button = ({
  label='sample',
  testId='button'
}:ButtonProps) => {
  return (
    <Styles.Button data-testid={testId}>{label}</Styles.Button>
  )
}

export default Button;