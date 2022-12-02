import React from 'react';
import { ButtonProps } from './Button.types';
import * as Styles from './Button.styles';

const Button = ({label='sample'}:ButtonProps) => {
  return (
    <Styles.Button>{label}</Styles.Button>
  )
}

export default Button;