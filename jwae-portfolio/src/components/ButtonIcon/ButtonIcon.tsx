import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { SYSTEM_DATA_THEMES } from '../../misc/constants';
import ButtonCore from '../Button/ButtonCore/ButtonCore';

import './ButtonIcon.css';

const SIZES = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

const KINDS = {
  bold: 'bold',
  outlinedSecondary: 'outlinedSecondary',
  outlinedNeutral: 'outlinedNeutral',
  ghost: 'ghost',
  outlinedCritical: 'outlinedCritical',
};

function ButtonIcon({
  id,
  dataTheme,
  size,
  kind,
  tabIndex,
  isDisabled,
  isSelected,
  icon,
  onClick,
  className,
  dataTestId,
}) {
  const buttonIconClass = classnames(
    'ButtonIcon',
    `ButtonIcon--${dataTheme}`,
    `ButtonIcon--${size}`,
    `ButtonIcon-${kind}`,
    isDisabled && `ButtonIcon-${kind}--isDisabled`,
    isSelected && `ButtonIcon-${kind}--isSelected`,
    className
  );

  const buttonIconOverlayClass = classnames(
    'ButtonIcon-overlay',
    `ButtonIcon-overlay-${kind}`,
    isSelected && `ButtonIcon-overlay-${kind}--isSelected`
  );

  return (
    <ButtonCore
      id={id}
      dataTheme={dataTheme}
      tabIndex={tabIndex}
      onClick={(e) => onClick(e)}
      isDisabled={isDisabled}
      className={buttonIconClass}
      dataTestId={dataTestId}
    >
      {icon}
      <span className={buttonIconOverlayClass} />
    </ButtonCore>
  );
}

ButtonIcon.defaultProps = {
  id: null,
  dataTheme: null,
  size: SIZES.large,
  kind: KINDS.bold,
  tabIndex: 0,
  isDisabled: false,
  isSelected: false,
  onClick: () => {},
  className: null,
  dataTestId: null,
};

ButtonIcon.propTypes = {
  id: PropTypes.string,
  dataTheme: PropTypes.oneOf(Object.values(SYSTEM_DATA_THEMES)),
  size: PropTypes.oneOf(Object.values(SIZES)),
  kind: PropTypes.oneOf(Object.values(KINDS)),
  tabIndex: PropTypes.number,
  isDisabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  dataTestId: PropTypes.string,
};

export default ButtonIcon;
