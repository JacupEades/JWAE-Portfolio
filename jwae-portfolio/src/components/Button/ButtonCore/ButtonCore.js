import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { SYSTEM_DATA_THEMES } from '../../../misc/constants';

/**
 * `ButtonCore` is the foundational button component for the design system.
 * It provides essential button functionalities including click handling and
 * disabled states.
 */

function ButtonCore({
  id,
  dataTheme,
  type,
  onClick,
  isDisabled,
  children,
  onFocus,
  onBlur,
  ariaExpanded,
  tabIndex,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
  ref,
  className,
  style,
  dataTestId,
}) {
  const classes = classNames('ButtonCore', className);

  return (
    <button
      id={id}
      data-theme={dataTheme === SYSTEM_DATA_THEMES.LIGHT ? null : dataTheme}
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      onFocus={onFocus}
      onBlur={onBlur}
      aria-expanded={ariaExpanded}
      tabIndex={isDisabled ? -1 : tabIndex}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      ref={ref}
      className={classes}
      data-testid={dataTestId}
      style={style}
    >
      {children}
    </button>
  );
}

ButtonCore.propTypes = {
  id: PropTypes.string,
  dataTheme: PropTypes.oneOf(Object.values(SYSTEM_DATA_THEMES)),
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  ariaExpanded: PropTypes.string,
  tabIndex: PropTypes.number,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
  ref: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  className: PropTypes.string,
  style: PropTypes.element,
  dataTestId: PropTypes.string,
};

ButtonCore.defaultProps = {
  id: null,
  dataTheme: null,
  type: 'button',
  isDisabled: false,
  onClick: () => {},
  children: null,
  onFocus: null,
  onBlur: null,
  ariaExpanded: 'false',
  tabIndex: 0,
  onMouseEnter: null,
  onMouseLeave: null,
  onMouseDown: null,
  onMouseUp: null,
  ref: null,
  className: null,
  style: null,
  dataTestId: null,
};

export default ButtonCore;
