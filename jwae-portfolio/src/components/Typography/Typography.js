import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './Typography.css';

const KINDS_MAP = [
  'header',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'body1',
  'body1-bold',
  'body2',
  'body2-bold',
  'body3',
  'body3-bold',
  'label',
].reduce((acc, kind) => ({ ...acc, [kind]: kind }), {});

const FONTS_MAP = [
  'display-d',
  'h1-d',
  'h2-d',
  'h3-d',
  'h4-d',
  'h5-d',
  'body1-d',
  'body1-bold-d',
  'body2-d',
  'body2-bold-d',
  'body3-d',
  'body3-bold-d',
  'display-m',
  'h1-m',
  'h2-m',
  'h3-m',
  'h4-m',
  'h5-m',
  'body1-m',
  'body1-bold-m',
  'body2-m',
  'body2-bold-m',
  'body3-m',
  'body3-bold-m',
].reduce((acc, font) => ({ ...acc, [font]: font }), {});

function Typography({
  kind,
  desktop,
  mobile,
  htmlFor,
  children,
  isDisabled,
  className,
  dataTestId,
}) {
  const Tag = ['header', 'h1', 'h2', 'h3', 'h4', 'h5', 'label'].includes(kind)
    ? kind
    : 'p';

  const desktopClass = `Typography-${desktop || `${kind}-d`}`;
  const mobileClass = `Typography-mobile-${mobile || `${kind}-m`}`;
  const typographyClasses = classnames(
    'Typography',
    desktopClass,
    mobileClass,
    kind === 'label' && 'Typography--isNoWrap',
    isDisabled && 'Typography--isDisabled',
    className
  );

  if (Tag === 'label') {
    return (
      <label
        className={typographyClasses}
        htmlFor={htmlFor}
        aria-disabled={isDisabled}
        data-testid={dataTestId}>
        {children}
      </label>
    );
  }

  return (
    <Tag className={typographyClasses} data-testid={dataTestId}>
      {children}
    </Tag>
  );
}

Typography.propTypes = {
  kind: PropTypes.oneOf(Object.keys(KINDS_MAP)).isRequired,
  desktop: PropTypes.oneOf([...Object.keys(FONTS_MAP), null]),
  mobile: PropTypes.oneOf([...Object.keys(FONTS_MAP), null]),
  htmlFor: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
  dataTestId: PropTypes.string,
};
Typography.defaultProps = {
  desktop: null,
  mobile: null,
  htmlFor: '',
  isDisabled: false,
  className: '',
  dataTestId: '',
};

export default Typography;
