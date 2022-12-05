import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import { Button } from '.';

describe('Button', () => {
  it('should render correctly', () => {
    render(<Button label="sample test" />);
    const button = screen.getByTestId('button');
    expect(button).toHaveTextContent('sample test');
  });
});
