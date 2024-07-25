/* eslint-disable react/jsx-curly-spacing */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Icon from '../../Icon/Icon';

import ButtonSelect from './ButtonSelect';

const LABEL = 'Label';

describe('ButtonSelect', () => {
  it('Renders the label correctly', () => {
    const label = LABEL;
    const { getByText } = render(<ButtonSelect label={label} />);

    expect(getByText(label)).toBeInTheDocument();
  });

  it('Calls the onClick function when the button is clicked', () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <ButtonSelect label={LABEL} onClick={onClick} />
    );

    fireEvent.click(getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  it('Disables the button when the isDisabled prop is true', () => {
    const { getByRole } = render(<ButtonSelect label={LABEL} isDisabled />);

    expect(getByRole('button')).toBeDisabled();
  });

  it('Renders with the correct size class', () => {
    const { getByRole } = render(<ButtonSelect size='small' label={LABEL} />);

    expect(getByRole('button')).toHaveClass('ButtonSelect--small');
  });

  it('Renders the mocked Icon with the correct data-testid', () => {
    const { getByTestId } = render(
      <ButtonSelect
        label={LABEL}
        prefixIcon={
          <Icon kind='Filter' color='neutral-600' dataTestId='Icon-Filter' />
        }
      />
    );

    expect(getByTestId('Icon-Filter')).toBeInTheDocument();
  });
});
