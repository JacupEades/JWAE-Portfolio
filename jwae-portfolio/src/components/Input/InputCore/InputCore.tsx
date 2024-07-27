import React, {
  ChangeEvent,
  forwardRef,
  KeyboardEvent,
  MouseEvent,
} from "react";
import classNames from "classnames";

import { INPUTMODE, TYPES } from "../constants";

interface InputCoreProps {
  name?: string;
  id?: string | null;
  type?: keyof typeof TYPES;
  inputmode?: keyof typeof INPUTMODE | null;
  placeholder?: string;
  className?: string;
  regexPattern?: string;
  autoComplete?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?:
    | ((e: MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void)
    | null;
  value?: string | number;
  isReadOnly?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  ariaDescribedBy?: string;
  onMouseDown?: (e: MouseEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  multiple?: boolean;
  accept?: string;
  maxLength?: number | null;
  tabIndex?: number;
}

const InputCore = forwardRef<HTMLInputElement, InputCoreProps>(
  (
    {
      name,
      id,
      type = "text",
      inputmode = "text",
      placeholder,
      className,
      regexPattern = ".*",
      autoComplete = "off",
      onChange,
      onClick,
      value,
      isReadOnly = false,
      isDisabled = false,
      isRequired = false,
      ariaDescribedBy,
      onMouseDown,
      onKeyDown,
      multiple = false,
      accept,
      maxLength,
      tabIndex = 0,
    },
    ref,
  ) => {
    const inputCoreClass = classNames("InputCore", className);

    return (
      <input
        name={name}
        id={id || undefined}
        type={type}
        inputMode={
          inputmode ? INPUTMODE[inputmode as keyof typeof INPUTMODE] : undefined
        }
        pattern={regexPattern}
        placeholder={placeholder}
        className={inputCoreClass}
        autoComplete={autoComplete}
        onChange={onChange}
        onClick={onClick || undefined}
        {...(type !== "file" ? { value } : {})}
        readOnly={isReadOnly}
        disabled={isDisabled}
        required={isRequired}
        aria-describedby={ariaDescribedBy || undefined}
        onMouseDown={onMouseDown}
        onKeyDown={onKeyDown}
        multiple={multiple}
        accept={accept}
        maxLength={maxLength || undefined}
        ref={ref}
        tabIndex={isDisabled ? -1 : tabIndex}
      />
    );
  },
);

InputCore.displayName = "InputCore";

export default InputCore;
