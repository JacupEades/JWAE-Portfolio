/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable object-curly-newline */
import React, { useRef } from 'react';
import {
  arrow,
  autoUpdate,
  flip,
  FloatingArrow,
  FloatingFocusManager,
  offset as floatingOffset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import PropTypes from 'prop-types';

import { FLOATING_PLACEMENTS, SYSTEM_DATA_THEMES } from '../../misc/constants';
import Box from '../Box/Box';

import './Popover.css';

// Important Documentation: https://floating-ui.com/

function Popover({
  dataTheme,
  isOpen,
  setIsOpen,
  trigger,
  popoverContent,
  placement,
  offset,
}) {
  const arrowRef = useRef(null);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    middleware: [
      floatingOffset(offset),
      flip({ fallbackAxisSideDirection: 'end' }),
      shift(),
      arrow({ element: arrowRef.current }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const clickInteraction = useClick(context);
  const dismissInteraction = useDismiss(context);
  const roleInteraction = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    clickInteraction,
    dismissInteraction,
    roleInteraction,
  ]);

  return (
    <Box
      tag='div'
      className={isOpen ? 'Popover-wrapper--isOpen' : undefined}
      dataTheme={dataTheme}>
      <div ref={refs.setReference} {...getReferenceProps()}>
        {trigger}
      </div>
      {isOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <div
            className='Popover'
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}>
            {popoverContent}
            {/* Arrow */}
            <FloatingArrow
              ref={arrowRef}
              context={context}
              width={26}
              height={14}
              stroke='var(--color-border-neutral-subtlest, #cecfd9)'
              strokeWidth={1}
              fill='var(--color-background-neutral-subtlest, #fff)'
            />
          </div>
        </FloatingFocusManager>
      )}
    </Box>
  );
}

Popover.propTypes = {
  dataTheme: PropTypes.oneOf(Object.values(SYSTEM_DATA_THEMES)),
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  trigger: PropTypes.element.isRequired,
  popoverContent: PropTypes.element.isRequired,
  placement: PropTypes.oneOf(Object.values(FLOATING_PLACEMENTS)),
  offset: PropTypes.number,
};

Popover.defaultProps = {
  dataTheme: null,
  placement: FLOATING_PLACEMENTS.BOTTOM,
  offset: 16,
};

export default Popover;
