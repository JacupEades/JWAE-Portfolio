import React, { useState } from 'react';
import { fireEvent, render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import Icon from '../Icon/Icon';

import Chip from './Chip';

describe('Chip component', () => {
  it('renders correctly', () => {
    const mockClick = jest.fn();

    const { getByTestId } = render(
      <Chip
        kind='outlined'
        label='Select'
        dataTestId='chip-id'
        onClick={mockClick}
        leftIcon={<Icon kind='Add' size='smallMedium' />}
        rightIcon={<Icon kind='Edit' size='smallMedium' />}
      />
    );

    const chip = getByTestId('chip-id');

    expect(chip).toBeInTheDocument();
  });

  it('does not respond to clicks when disabled', () => {
    const mockClick = jest.fn();

    const { getByTestId } = render(
      <Chip
        kind='outlined'
        label='Select'
        dataTestId='chip-id'
        onClick={mockClick}
        isDisabled
        leftIcon={<Icon kind='Add' size='smallMedium' />}
        rightIcon={<Icon kind='Edit' size='smallMedium' />}
      />
    );

    const chip = getByTestId('chip-id');

    fireEvent.click(chip);
    expect(mockClick).not.toHaveBeenCalled();
  });

  it('changes state from false to true when clicked', () => {
    function TestComponent() {
      const [isSelected, setIsSelected] = useState(false);

      return (
        <Chip
          kind={isSelected ? 'boldFilled' : 'outlined'}
          label='Select'
          isSelected={isSelected}
          dataTestId='chip-id'
          onClick={() => setIsSelected(true)}
          leftIcon={<Icon kind='Add' size='smallMedium' />}
          rightIcon={<Icon kind='Edit' size='smallMedium' />}
        />
      );
    }

    const { getByTestId } = render(<TestComponent />);

    const chip = getByTestId('chip-id');

    expect(chip).not.toHaveClass('Chip--isSelected');
    fireEvent.click(chip);
    expect(chip).toHaveClass('Chip--isSelected');
  });
});
