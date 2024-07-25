import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { SYSTEM_DATA_THEMES } from '../../misc/constants';
import Icon from '../Icon/Icon';
import Loader from '../Loader/Loader';

import ButtonCore from './ButtonCore/ButtonCore';

import './Button.css';

const SIZES = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

const KINDS = {
  filled: 'filled',
  outlined: 'outlined',
  subtle: 'subtle',
  ghost: 'ghost',
};

function Button({
  dataTheme,
  size,
  kind,
  isDisabled,
  isEnabled,
  isLoading,
  isSuccess,
  onClick,
  children,
  leftIcon,
  rightIcon,
  type,
  className,
  dataTestId,
}) {
  const buttonClass = classnames(
    'Button',
    `Button-${kind}`,
    `Button--${size}`,
    isEnabled && `Button-${kind}--isEnabled`,
    isLoading && 'Button--isLoading',
    isDisabled && 'Button--isDisabled',
    isSuccess && `Button-${kind}--isSuccess`,
    !leftIcon && !children && `Button-square--${size}`,
    !rightIcon && !children && `Button-square--${size}`,
    className
  );

  const leftIconClass = classnames('Button-left-icon', `Button-icons--${size}`);

  const childrenClass = classnames(
    `Button-children`,
    !children && `Button-children-null`
  );

  const rightIconClass = classnames(
    'Button-right-icon',
    `Button-icons--${size}`
  );

  const buttonIconOverlayClass = classnames(
    'Button-overlay',
    `Button-overlay-${kind}`,
    isEnabled && `Button-overlay-${kind}--isEnabled`
  );

  return (
    <ButtonCore
      dataTheme={dataTheme}
      type={type}
      tabIndex={isLoading || isSuccess ? -1 : 0}
      onClick={onClick}
      isDisabled={isDisabled}
      className={buttonClass}
      dataTestId={dataTestId}
    >
      <div className='Button-content-container'>
        {isLoading && <Loader kind='dots' format='inline' color='brand' />}
        {leftIcon && !isLoading && (
          <div className={leftIconClass}>
            {isSuccess ? <Icon kind='Check' /> : leftIcon}
          </div>
        )}
        <div className={childrenClass}>
          {!isLoading && !isSuccess && children}
          {isLoading && 'Loading'}
          {isSuccess && 'Success'}
        </div>
        {rightIcon && <div className={rightIconClass}>{rightIcon}</div>}
      </div>
      <span className={buttonIconOverlayClass} />
    </ButtonCore>
  );
}

Button.propTypes = {
  dataTheme: PropTypes.oneOf(Object.values(SYSTEM_DATA_THEMES)),
  kind: PropTypes.oneOf(Object.values(KINDS)),
  size: PropTypes.oneOf(Object.values(SIZES)),
  isEnabled: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isSuccess: PropTypes.bool,
  onClick: PropTypes.func,
  leftIcon: PropTypes.element,
  children: PropTypes.node,
  rightIcon: PropTypes.element,
  type: PropTypes.string,
  className: PropTypes.string,
  dataTestId: PropTypes.string,
};

Button.defaultProps = {
  dataTheme: null,
  kind: KINDS.filled,
  size: SIZES.medium,
  isEnabled: false,
  isDisabled: false,
  isLoading: false,
  isSuccess: false,
  onClick: () => {},
  leftIcon: null,
  children: null,
  rightIcon: null,
  type: 'button',
  className: null,
  dataTestId: null,
};

export default Button;
