import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Color from '../Color/Color';
import { COLORS_KEYS } from '../Color/dist/Color-constants';

import * as Icons from './Icons';

import './Icon.css';

const SIZES = {
  'xx-xxxSmall': 'xx-xxxSmall',
  'x-xxxSmall': 'x-xxxSmall',
  xxxSmall: 'xxxSmall',
  xxSmall: 'xxSmall',
  xSmall: 'xSmall',
  small: 'small',
  smallMedium: 'smallMedium',
  medium: 'medium',
  large: 'large',
  xLarge: 'xLarge',
  xxLarge: 'xxLarge',
};

function Icon({ kind, color, size, rotate, className, dataTestId }) {
  if (!kind) return null;

  const iconName = kind.charAt(0).toUpperCase() + kind.slice(1);
  const IconSvg = Icons[iconName];
  const classes = classnames(
    'Icon',
    size && `Icon--${size}`,
    rotate && `Icon--rotate-${rotate}`,
    className
  );

  return (
    <Color
      color={color}
      className={classes}
      type='icon'
      dataTestId={`Icon-${dataTestId || kind}`}>
      {IconSvg && <IconSvg />}
    </Color>
  );
}

function caseInsensitiveIconPropType(props, propName, componentName) {
  if (props[propName] === null) {
    return; // allow null values for kind.
  }

  // don't throw prop error based on 'kind' casing. 'alertCritical' and 'AlertCritical' are valid.
  const lowerCaseIcons = Object.keys(Icons).map((icon) => icon.toLowerCase());

  if (!lowerCaseIcons.includes(props[propName].toLowerCase())) {
    throw new Error(
      `Invalid prop '${propName}' with value '${props[propName]}'
      supplied to '${componentName}'. Validation failed.`
    );
  }
}

Icon.propTypes = {
  kind: caseInsensitiveIconPropType,
  color: PropTypes.oneOf(COLORS_KEYS),
  size: PropTypes.oneOf(Object.values(SIZES)),
  rotate: PropTypes.oneOf(['90', '180', '270']),
  className: PropTypes.string,
  dataTestId: PropTypes.string,
};

Icon.defaultProps = {
  kind: null,
  color: null,
  size: 'medium',
  rotate: null,
  className: null,
  dataTestId: null,
};

export default Icon;
