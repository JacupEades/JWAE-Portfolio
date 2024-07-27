import React from 'react';
import { capitalizeFirstLetter } from '@saviynt/common';
import classnames from 'classnames';
import Lottie from 'lottie-react';
import PropTypes from 'prop-types';

import DotsInlineBrand from '../../assets/images/lotties/dots-inline-brand.json';
import DotsInlineCritical from '../../assets/images/lotties/dots-inline-critical.json';
import DotsInlineInfo from '../../assets/images/lotties/dots-inline-info.json';
import DotsInlineInverse from '../../assets/images/lotties/dots-inline-white.json';
import LoopInlineBrand from '../../assets/images/lotties/loop-inline-brand.json';
import LoopInlineCritical from '../../assets/images/lotties/loop-inline-critical.json';
import LoopInlineInfo from '../../assets/images/lotties/loop-inline-info.json';
import LoopInlineInverse from '../../assets/images/lotties/loop-inline-white.json';
import LoopMainBrand from '../../assets/images/lotties/loop-large-brand.json';
import LoopMainInverse from '../../assets/images/lotties/loop-large-white.json';
import SkeletonCircleInverse from '../../assets/images/lotties/skeleton-circle.json';
import SkeletonSquareInverse from '../../assets/images/lotties/skeleton-square.json';
import SkeletonTextInverse from '../../assets/images/lotties/skeleton-text.json';

import './Loader.css';

const KINDS = {
  LOOP: 'loop',
  DOTS: 'dots',
  SKELETON: 'skeleton',
};

const FORMATS = {
  MAIN: 'main',
  INLINE: 'inline',
  CIRCLE: 'circle',
  TEXT: 'text',
  SQUARE: 'square',
};

const COLORS = {
  BRAND: 'brand',
  INFO: 'info',
  CRITICAL: 'critical',
  INVERSE: 'inverse',
};

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const LOTTIE_MAP = {
  LoopMainBrand,
  LoopMainInverse,
  DotsInlineBrand,
  DotsInlineCritical,
  DotsInlineInfo,
  DotsInlineInverse,
  LoopInlineBrand,
  LoopInlineCritical,
  LoopInlineInfo,
  LoopInlineInverse,
  SkeletonCircleInverse,
  SkeletonSquareInverse,
  SkeletonTextInverse,
};

function Loader({ kind, format, size, color, className, dataTestId }) {
  const classes = classnames(
    'Loader',
    `Loader--${format}${capitalizeFirstLetter(size)}`,
    className
  );

  const caseKind = capitalizeFirstLetter(kind);
  const caseFormat = capitalizeFirstLetter(format);
  const caseColor = capitalizeFirstLetter(color);

  const matchString = `${caseKind}${caseFormat}${caseColor}`;

  const lottieData = LOTTIE_MAP[matchString] || LoopMainBrand;

  return (
    <Lottie
      className={classes}
      animationData={lottieData}
      data-testid={dataTestId}
    />
  );
}

Loader.propTypes = {
  kind: PropTypes.oneOf(Object.values(KINDS)).isRequired,
  format: PropTypes.oneOf(Object.values(FORMATS)).isRequired,
  color: PropTypes.oneOf(Object.values(COLORS)).isRequired,
  size: PropTypes.oneOf(Object.values(SIZES)),
  className: PropTypes.string,
  dataTestId: PropTypes.string,
};

Loader.defaultProps = { className: null, dataTestId: null, size: '' };

export default Loader;
