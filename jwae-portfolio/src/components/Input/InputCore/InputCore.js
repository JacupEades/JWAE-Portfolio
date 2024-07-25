import React, { forwardRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const TYPES = {
  text: 'text',
  password: 'password',
  email: 'email',
  number: 'number',
  date: 'date',
  time: 'time',
  file: 'file',
};

const INPUTMODE = {
  NONE: 'none',
  TEXT: 'text',
  DECIMAL: 'decimal',
  NUMERIC: 'numeric',
  TEL: 'tel',
  SEARCH: 'search',
  EMAIL: 'email',
  URL: 'url',
};

const InputCore = forwardRef(
  (
    {
      name,
      id,
      type,
      inputmode,
      placeholder,
      className,
      regexPattern,
      autoComplete,
      onChange,
      onClick,
      value,
      isReadOnly,
      isDisabled,
      isRequired,
      ariaDescribedBy,
      onMouseDown,
      onKeyDown,
      multiple,
      accept,
      maxLength,
      tabIndex,
    },
    ref
  ) => {
    const inputCoreClass = classNames('InputCore', className);

    return (
      <input
        name={name}
        id={id}
        type={type}
        inputMode={inputmode}
        pattern={regexPattern}
        placeholder={placeholder}
        className={inputCoreClass}
        autoComplete={autoComplete}
        onChange={onChange}
        onClick={onClick}
        // value attr added only if type is not file.
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...(type !== 'file' ? { value } : {})}
        readOnly={isReadOnly}
        disabled={isDisabled}
        required={isRequired}
        aria-describedby={ariaDescribedBy}
        onMouseDown={onMouseDown}
        onKeyDown={onKeyDown}
        multiple={multiple}
        accept={accept}
        maxLength={maxLength}
        ref={ref}
        tabIndex={isDisabled ? -1 : tabIndex}
      />
    );
  }
);

InputCore.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.oneOf(Object.values(TYPES)),
  inputmode: PropTypes.oneOf(Object.values(INPUTMODE)),
  placeholder: PropTypes.string,
  className: PropTypes.string,
  regexPattern: PropTypes.string,
  autoComplete: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  value: (props, propName, componentName) => {
    if (props.type !== 'file') {
      // validate value prop only if type is not 'file'
      // if type is not file, value must be a string or number.
      const valueType = typeof props[propName];

      if (
        props[propName] !== undefined &&
        valueType !== 'string' &&
        valueType !== 'number'
      ) {
        return new Error(
          `Invalid prop \`${propName}\` of type \`${valueType}\` supplied to \`${componentName}\`, expected \`string\` or \`number\`.`
        );
      }
    }

    return null; // no error
  },
  isReadOnly: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  ariaDescribedBy: PropTypes.string,
  onMouseDown: PropTypes.func,
  onKeyDown: PropTypes.func,
  multiple: PropTypes.bool,
  accept: PropTypes.string,
  maxLength: PropTypes.number,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

InputCore.defaultProps = {
  name: null,
  id: null,
  type: TYPES.text,
  inputmode: INPUTMODE.TEXT,
  placeholder: null,
  className: null,
  regexPattern: '.*',
  autoComplete: 'off',
  onChange: null,
  onClick: null,
  value: null,
  isReadOnly: false,
  isDisabled: false,
  isRequired: false,
  ariaDescribedBy: '',
  onMouseDown: null,
  onKeyDown: null,
  multiple: false,
  accept: null,
  maxLength: null,
  tabIndex: 0,
};

export default InputCore;
