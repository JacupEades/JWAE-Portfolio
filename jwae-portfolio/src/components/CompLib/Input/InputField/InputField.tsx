import React, {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useState,
} from "react";
import classnames from "classnames";

import {
  ButtonCore,
  ButtonIcon,
  Icon,
  InputCore,
  TextareaCore,
} from "../../../index";
import { INPUTMODE, SIZES, TYPES } from "../constants.ts";

import "./InputField.scss";

interface InputFieldProps {
  id?: string;
  name: string;
  placeholder: string;
  kind?: "search" | "singleline" | "multiline";
  size?: keyof typeof SIZES;
  type?: keyof typeof TYPES;
  inputmode?: string;
  label?: React.ReactNode;
  className?: string;
  regexPattern?: string;
  isRequired?: boolean;
  isCritical?: boolean;
  isReadOnly?: boolean;
  CriticalHelperText?: React.ReactNode;
  HelperText?: React.ReactNode;
  isDisabled?: boolean;
  prefixIcon?: React.ReactNode;
  suffixButtonType?: "date" | "password" | "dropdown" | "timePicker";
  suffixIsToggle?: boolean;
  suffixOnClick?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onClick?: (e: MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onKeyDown?: (
    e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  backgroundColor?: "neutral" | "secondary";
  value?: string | number;
  setValue?: (value: string) => void;
  setIsCritical?: (isCritical: boolean) => void;
  minRequiredChars?: number;
  maxLength?: number;
  shouldDisallowBrackets?: boolean;
  tabIndex?: number;
  textAreaMaxHeight?: string;
  resetValue?: () => void;
}

const InputField: React.FC<InputFieldProps> = ({
  id = null,
  name,
  placeholder,
  kind = "singleline",
  size = "large",
  type = "text",
  inputmode = "text",
  label = null,
  className = null,
  regexPattern = ".*",
  isRequired = false,
  isCritical = false,
  isReadOnly = false,
  CriticalHelperText = null,
  HelperText = null,
  isDisabled = false,
  prefixIcon = null,
  suffixButtonType = null,
  suffixIsToggle = false,
  suffixOnClick = null,
  onChange = null,
  onClick = null,
  onKeyDown = null,
  backgroundColor = "neutral",
  value = null,
  setValue = null,
  setIsCritical = null,
  minRequiredChars = 1,
  maxLength = null,
  shouldDisallowBrackets = true,
  tabIndex = 0,
  textAreaMaxHeight = "31.5rem",
  resetValue = null,
}) => {
  const [isUsingMouse, setIsUsingMouse] = useState(false);
  const [doesValueHaveBrackets, setDoesValueHaveBrackets] = useState(false);

  const bracketsErrorMsg = <p>TODO update and or make a Typography comp</p>;

  const handleMouseDown = () => {
    setIsUsingMouse(true);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Tab") {
      setIsUsingMouse(false);
    }
  };

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      setIsUsingMouse(true);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        setIsUsingMouse(false);
      }
    };

    const addEventListeners = () => {
      document.addEventListener(
        "mousedown",
        handleMouseDown as unknown as EventListener
      );
      document.addEventListener(
        "keydown",
        handleKeyDown as unknown as EventListener
      );
    };

    const removeEventListeners = () => {
      document.removeEventListener(
        "mousedown",
        handleMouseDown as unknown as EventListener
      );
      document.removeEventListener(
        "keydown",
        handleKeyDown as unknown as EventListener
      );
    };

    addEventListeners();

    return removeEventListeners;
  }, []);

  const inputClass = classnames(
    "InputField-input",
    `InputField--${size}`,
    `InputField--${kind}`,
    `InputField--${backgroundColor}`,
    prefixIcon && `InputField-input-prefixIcon--${size}`,
    suffixButtonType && `InputField-input-suffixButton`,
    isDisabled && `InputField-input--isDisabled`,
    (isCritical || doesValueHaveBrackets) && `InputField-input--isCritical`,
    isReadOnly && `InputField-input--isReadOnly`,
    isUsingMouse && "InputField-noOutline",
    className
  );

  const multilineClass = classnames(
    "InputField-input",
    `InputField--${kind}`,
    `InputField--${backgroundColor}`,
    isDisabled && `InputField-input--isDisabled`,
    (isCritical || doesValueHaveBrackets) && `InputField-input--isCritical`,
    isReadOnly && `InputField-input--isReadOnly`,
    isUsingMouse && "InputField-noOutline",
    className
  );

  const closeClass = classnames(
    `InputField-closeButtonContainer`,
    kind === "multiline"
      ? "InputField-closeButtonContainer--multiline"
      : `InputField-closeButtonContainer--${size}`,
    suffixButtonType && `InputField-closeButtonContainer--suffixButton`,
    isReadOnly && `InputField-closeButtonContainer--isReadOnly`
  );

  const suffixButtonClass = classnames(
    "InputField-suffixButton",
    isRequired &&
      (isCritical || doesValueHaveBrackets) &&
      "InputField-suffixButton--isCritical",
    (isCritical || doesValueHaveBrackets) &&
      "InputField-suffixButton--isCritical",
    isDisabled && "InputField-suffixButton--isDisabled",
    isReadOnly && `InputField-suffixButton--isReadOnly`
  );

  const clearValue = () => {
    setValue?.("");
    setDoesValueHaveBrackets(false);
    if (resetValue) resetValue();
  };

  const getSuffixButtonIcon = () => {
    switch (suffixButtonType) {
      case "password":
        return (
          <Icon
            className="InputField-suffixButton-icon"
            kind={suffixIsToggle ? "visibilityOff" : "visibilityOn"}
            size="smallMedium"
          />
        );
      case "date":
        return (
          <Icon
            className="InputField-suffixButton-icon"
            kind="calendar"
            size="smallMedium"
          />
        );
      case "dropdown":
        return (
          <div className="InputField-suffixButton-icon">
            <Icon
              className="InputField-suffixButton-icon"
              kind="chevronDown"
              size="smallMedium"
              rotate={suffixIsToggle ? 180 : undefined}
            />
          </div>
        );
      case "timePicker":
        return (
          <Icon
            className="InputField-suffixButton-icon"
            kind="time"
            size="smallMedium"
          />
        );
      default:
        return null;
    }
  };

  const checkTypeNumber = (typeValue: string) => {
    if (type === "number" || inputmode === "numeric") {
      return typeValue.replace(/\D/g, "");
    }

    return typeValue;
  };

  const onInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange?.(event);

    if (!setValue) return;

    let valueLocal = event.target.value;
    const hasAngleBrackets = /<|>/.test(valueLocal);

    if (shouldDisallowBrackets && hasAngleBrackets) {
      setDoesValueHaveBrackets(true);
      setValue(valueLocal);

      return;
    }

    setDoesValueHaveBrackets(false);

    valueLocal = checkTypeNumber(valueLocal);
    setValue(valueLocal);

    if (valueLocal.trim().length >= minRequiredChars) {
      setDoesValueHaveBrackets(false);
      setIsCritical?.(false);
    }
  };

  const renderInlineMessage = () => {
    if (doesValueHaveBrackets && shouldDisallowBrackets)
      return bracketsErrorMsg;

    if (CriticalHelperText && isCritical)
      return <div>{CriticalHelperText}</div>;

    if (HelperText) return <div>{HelperText}</div>;

    return null;
  };

  const shouldRequiredAsteriskRender = Boolean(
    shouldDisallowBrackets
      ? isCritical ||
          (value &&
            value.toString().replace(/[<>]/g, "")?.trim()?.length <
              minRequiredChars)
      : isCritical ||
          (value && value.toString().trim()?.length < minRequiredChars)
  );

  return (
    <div className="InputField-Container">
      <div className={`InputField InputField-${kind}`}>
        {/* Label Container */}
        <div className="InputField-labelContainer">
          {/* isRequired */}
          {isRequired && (
            <div className="InputField--isRequired">
              {shouldRequiredAsteriskRender && (
                <div
                  className={`InputField--isRequired--${
                    isCritical ? "isCritical" : "isWarning"
                  }`}
                >
                  *
                </div>
              )}
            </div>
          )}
          {/* Label */}
          {kind !== "search" && label}
        </div>
        <div className="InputField-inputContainer">
          {kind === "multiline" ? (
            <TextareaCore
              name={name}
              id={id}
              placeholder={placeholder}
              className={multilineClass}
              autoComplete="off"
              onChange={onInputChange}
              onClick={onClick}
              value={value?.toString()}
              isReadOnly={isReadOnly}
              isDisabled={isDisabled}
              isRequired={isRequired}
              ariaDescribedBy={placeholder}
              maxLength={maxLength}
              rows={4}
              onKeyDown={onKeyDown || handleKeyDown}
              tabIndex={isDisabled ? -1 : tabIndex}
              textAreaMaxHeight={textAreaMaxHeight}
            />
          ) : (
            <InputCore
              name={name}
              id={id}
              type={type}
              inputmode={inputmode as keyof typeof INPUTMODE}
              placeholder={placeholder}
              className={inputClass}
              autoComplete="off"
              onChange={onInputChange}
              onClick={onClick}
              value={value?.toString()}
              isReadOnly={isReadOnly}
              isDisabled={isDisabled}
              isRequired={isRequired}
              ariaDescribedBy={placeholder}
              regexPattern={regexPattern}
              maxLength={maxLength}
              onMouseDown={handleMouseDown}
              onKeyDown={onKeyDown || handleKeyDown}
              tabIndex={isDisabled ? -1 : tabIndex}
            />
          )}
          {prefixIcon && (
            <i
              className={`InputField-prefixIcon InputField-prefixIcon--${size}`}
            >
              {prefixIcon}
            </i>
          )}
          {value &&
            value.toString().length > 0 &&
            !isDisabled &&
            kind !== "multiline" && (
              <div className={closeClass}>
                <ButtonIcon
                  size="small"
                  kind="ghost"
                  tabIndex={tabIndex}
                  className="InputField-closeButtonIcon"
                  icon={
                    <Icon kind="close" color="neutral-1000" size="xSmall" />
                  }
                  onClick={() => clearValue()}
                />
              </div>
            )}
          {suffixButtonType && (
            <ButtonCore
              type="button"
              tabIndex={isDisabled ? -1 : tabIndex}
              onClick={() => suffixOnClick?.()}
              isDisabled={isDisabled}
              className={suffixButtonClass}
            >
              {getSuffixButtonIcon()}
              <span
                aria-hidden="true"
                className={classnames(
                  "InputField-suffixButton-overlay",
                  isDisabled && "InputField-suffixButton-overlay--isDisabled"
                )}
              />
            </ButtonCore>
          )}
        </div>
        {renderInlineMessage()}
      </div>
    </div>
  );
};

export default InputField;
