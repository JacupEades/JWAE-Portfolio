import React from 'react';
import { render } from '@testing-library/react';

import ButtonCore from './ButtonCore';

describe('ButtonCore Component', () => {
  it('renders the ButtonCore component', () => {
    const { getByTestId } = render(<ButtonCore dataTestId='button-core' />);
    const buttonCoreElement = getByTestId('button-core');

    expect(buttonCoreElement).toBeInTheDocument();
  });
});
