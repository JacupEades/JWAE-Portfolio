/* eslint-disable no-console */
import React from 'react';
import { render } from '@testing-library/react';
import Lottie from 'lottie-react';

import LoopMainBrand from '../../assets/images/lotties/loop-large-brand.json';

import Loader from './Loader';

describe('Loader component', () => {
  const originalError = console.error;

  beforeEach(() => {
    console.error = jest.fn();
  });

  afterEach(() => {
    console.error = originalError;
  });

  it('Renders correctly', () => {
    const { getByTestId } = render(
      <Loader kind='loop' format='inline' color='brand' dataTestId='loader1' />
    );
    const loader = getByTestId('loader1');

    expect(loader).toBeInTheDocument();
  });

  it('Render fallback LoopMainBrand if kind, format, color is invalid', () => {
    // Use valid props, but ensure the matchString doesn't match any key
    render(<Loader kind='loop' format='invalid' color='brand' />);
    expect(Lottie).toHaveBeenCalledWith(
      expect.objectContaining({ animationData: LoopMainBrand }),
      {}
    );
  });

  it('Throws prop-type error for invalid prop', () => {
    render(<Loader kind='invalidKind' format='inline' color='brand' />);
    expect(console.error).toHaveBeenCalled();
  });

  it('Throws prop-type error for missing kind prop', () => {
    render(<Loader format='inline' color='brand' />);
    expect(console.error).toHaveBeenCalled();
  });

  it('Throws prop-type error for missing format prop', () => {
    render(<Loader kind='loop' color='brand' />);
    expect(console.error).toHaveBeenCalled();
  });

  it('Throws prop-type error for missing color prop', () => {
    render(<Loader kind='loop' format='inline' />);
    expect(console.error).toHaveBeenCalled();
  });
});
