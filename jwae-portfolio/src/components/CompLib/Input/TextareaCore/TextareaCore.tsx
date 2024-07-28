import React, { ChangeEvent, KeyboardEvent, MouseEvent } from "react";
import classNames from "classnames";

interface TextareaCoreProps {
  name?: string;
  id?: string | null;
  placeholder?: string;
  className?: string;
  autoComplete?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onClick?:
    | ((e: MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void)
    | null;
  value?: string;
  isReadOnly?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  ariaDescribedBy?: string | null;
  onMouseDown?: (e: MouseEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  rows?: number;
  cols?: number;
  maxLength?: number | null;
  textAreaMaxHeight?: string;
  tabIndex?: number;
}

const TextareaCore: React.FC<TextareaCoreProps> = ({
  name = null,
  id = null,
  placeholder = null,
  className = null,
  autoComplete = "off",
  onChange = null,
  onClick = null,
  value = "",
  isReadOnly = false,
  isDisabled = false,
  isRequired = false,
  ariaDescribedBy = "",
  onMouseDown = null,
  onKeyDown,
  rows = 4,
  cols = undefined,
  maxLength = undefined,
  textAreaMaxHeight = "31.5rem",
  tabIndex = 0,
}) => {
  const textareaCoreClass = classNames("TextareaCore", className);

  return (
    <textarea
      name={name || undefined}
      id={id || undefined}
      placeholder={placeholder || undefined}
      className={textareaCoreClass}
      autoComplete={autoComplete}
      onChange={onChange || undefined}
      onClick={onClick || undefined}
      value={value}
      readOnly={isReadOnly}
      disabled={isDisabled}
      required={isRequired}
      aria-describedby={ariaDescribedBy || undefined}
      aria-required={isRequired}
      onMouseDown={onMouseDown || undefined}
      onKeyDown={(e: KeyboardEvent<HTMLTextAreaElement>) =>
        onKeyDown && onKeyDown(e as unknown as KeyboardEvent<HTMLInputElement>)
      }
      rows={rows}
      cols={cols}
      maxLength={maxLength || undefined}
      style={{ maxHeight: textAreaMaxHeight }}
      tabIndex={isDisabled ? -1 : tabIndex}
    />
  );
};

export default TextareaCore;
