import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../../Icon/Icon';
import Typography from '../../Typography/Typography';
import ButtonCore from '../ButtonCore/ButtonCore';

import './ButtonSelectRectangle.css';
import './ButtonSelectPill.css';
import './ButtonSelectIcon.css';

const KINDS = {
  RECTANGLE: 'rectangle',
  PILL: 'pill',
  ICON: 'icon',
};

const SIZES = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
};

function ButtonSelect({
  kind,
  size,
  label,
  isOpen,
  isDisabled,
  onClick,
  prefixIcon,
  BadgeComp,
  widthConfigs,
  isIconSvgFilled,
  dataTestId,
  className,
}) {
  const buttonSelectClasses = classnames(
    'ButtonSelect',
    `ButtonSelect--${kind}`,
    `ButtonSelect--${size}`,
    isDisabled && 'ButtonSelect--isDisabled',
    isOpen && `ButtonSelect--${kind}--isOpen`,
    BadgeComp && 'ButtonSelect--hasBadge',
    className
  );
  const buttonSelectLabelClasses = classnames('ButtonSelect-label');
  const buttonSelectOverlayClasses = classnames(
    'ButtonSelect-overlay',
    `ButtonSelect-overlay--${kind}`
  );

  // Size info:
  // RECTANGLE: LARGE and MEDIUM sizes are the same.
  // PILL: only has one size (MEDIUM)
  const getChevronIconSize = () => {
    switch (kind) {
      case KINDS.PILL:
        return 'xSmall';
      case KINDS.RECTANGLE:
        return size === SIZES.SMALL ? 'xSmall' : 'smallMedium';
      default:
        return SIZES.MEDIUM;
    }
  };

  const inlineStyle = widthConfigs && {
    minWidth: widthConfigs.minWidth,
    width: widthConfigs.width,
    maxWidth: widthConfigs.maxWidth,
  };

  return (
    <ButtonCore
      className={buttonSelectClasses}
      isDisabled={isDisabled}
      onClick={onClick}
      dataTestId={dataTestId}
      style={inlineStyle}>
      <div className='ButtonSelect-content-container'>
        {prefixIcon && (
          <div
            className={classnames(
              `ButtonSelect--${kind}-prefixIcon`,
              isIconSvgFilled && 'ButtonSelect--isIconSvgFilled'
            )}>
            {prefixIcon}
          </div>
        )}
        {kind === KINDS.ICON ? null : (
          <>
            <Typography kind='label' className={buttonSelectLabelClasses}>
              {label}
            </Typography>
            <span
              className={classnames(
                `ButtonSelect--${kind}-chevron`,
                isIconSvgFilled && 'ButtonSelect--isIconSvgFilled'
              )}>
              <Icon
                kind='ButtonSelectChevronUp'
                size={getChevronIconSize()}
                rotate={!isOpen ? '180' : null}
              />
            </span>
          </>
        )}
        {BadgeComp}
      </div>
      <span className={buttonSelectOverlayClasses} />
    </ButtonCore>
  );
}

ButtonSelect.propTypes = {
  kind: PropTypes.oneOf(Object.values(KINDS)),
  size: PropTypes.oneOf(Object.values(SIZES)),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  isOpen: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  prefixIcon: PropTypes.element,
  BadgeComp: PropTypes.element,
  widthConfigs: PropTypes.shape({
    minWidth: PropTypes.string || null,
    width: PropTypes.string || null,
    maxWidth: PropTypes.string || null,
  }),
  isIconSvgFilled: PropTypes.bool,
  dataTestId: PropTypes.string,
  className: PropTypes.string,
};

ButtonSelect.defaultProps = {
  kind: KINDS.RECTANGLE,
  size: SIZES.MEDIUM,
  label: null,
  isOpen: false,
  isDisabled: false,
  onClick: () => {},
  prefixIcon: null,
  BadgeComp: null,
  widthConfigs: null,
  isIconSvgFilled: true,
  dataTestId: null,
  className: null,
};

export default ButtonSelect;
