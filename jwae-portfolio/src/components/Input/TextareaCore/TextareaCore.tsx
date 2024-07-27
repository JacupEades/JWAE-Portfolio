import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function TextareaCore({
  name,
  id,
  placeholder,
  className,
  autoComplete,
  onChange,
  onClick,
  value,
  isReadOnly,
  isDisabled,
  isRequired,
  ariaDescribedby,
  onMouseDown,
  onKeyDown,
  rows,
  cols,
  maxLength,
  textAreaMaxHeight,
}) {
  const textareaCoreClass = classNames('TextareaCore', className);

  return (
    <textarea
      name={name}
      id={id}
      placeholder={placeholder}
      className={textareaCoreClass}
      autoComplete={autoComplete}
      onChange={onChange}
      onClick={onClick}
      value={value}
      readOnly={isReadOnly}
      disabled={isDisabled}
      required={isRequired}
      aria-describedby={ariaDescribedby}
      aria-required={isRequired}
      onMouseDown={onMouseDown}
      onKeyDown={onKeyDown}
      rows={rows}
      cols={cols}
      maxLength={maxLength}
      style={{ maxHeight: textAreaMaxHeight }}
    />
  );
}

TextareaCore.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  autoComplete: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  value: PropTypes.string,
  isReadOnly: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  ariaDescribedby: PropTypes.string,
  onMouseDown: PropTypes.func,
  onKeyDown: PropTypes.func,
  rows: PropTypes.number,
  cols: PropTypes.number,
  maxLength: PropTypes.number,
  textAreaMaxHeight: PropTypes.string,
};

TextareaCore.defaultProps = {
  name: null,
  id: null,
  placeholder: null,
  className: null,
  autoComplete: 'off',
  onChange: null,
  onClick: null,
  value: '',
  isReadOnly: false,
  isDisabled: false,
  isRequired: false,
  ariaDescribedby: '',
  onMouseDown: null,
  onKeyDown: null,
  rows: 4,
  cols: null,
  maxLength: null,
  textAreaMaxHeight: '31.5rem',
};

export default TextareaCore;
