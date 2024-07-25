import React from 'react';
import { render, screen } from '@testing-library/react';

import Typography from './Typography';

describe('Typography Component', () => {
  it('renders without crashing', () => {
    render(<Typography kind='body1'>Test</Typography>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('applies correct classes for desktop and mobile', () => {
    render(
      <Typography kind='h1' desktop='h1-d' mobile='h1-m'>
        Header
      </Typography>
    );

    const element = screen.getByText('Header');

    expect(element).toHaveClass('Typography-h1-d');
    expect(element).toHaveClass('Typography-mobile-h1-m');
  });

  it('renders different tags based on kind prop', () => {
    const { rerender } = render(<Typography kind='h1'>Header 1</Typography>);

    expect(screen.getByText('Header 1').tagName).toBe('H1');

    rerender(<Typography kind='label'>Label</Typography>);
    expect(screen.getByText('Label').tagName).toBe('LABEL');
  });

  it('sets aria-disabled and htmlFor correctly for label', () => {
    render(
      <Typography kind='label' isDisabled htmlFor='test-id'>
        Label
      </Typography>
    );
    const label = screen.getByText('Label');

    expect(label).toHaveAttribute('aria-disabled', 'true');
    expect(label).toHaveAttribute('for', 'test-id');
  });

  it('renders children correctly', () => {
    render(<Typography kind='body1'>Child Element</Typography>);
    expect(screen.getByText('Child Element')).toBeInTheDocument();
  });
});
