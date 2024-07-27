/* eslint-disable react/jsx-curly-spacing */
/* eslint-disable indent */
import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { localize } from "@saviynt/common";
import classnames from "classnames";
import PropTypes from "prop-types";

import ButtonCore from "../../Button/ButtonCore/ButtonCore";
import ButtonIcon from "../../ButtonIcon/ButtonIcon";
import InlineMessage from "../../componentsNew/InlineMessage/InlineMessage";
import Icon from "../../Icon/Icon";
import InputCore from "../InputCore/InputCore";
import TextareaCore from "../TextareaCore/TextareaCore";

import "./InputField.css";

const msgs = {
  neo: {
    inputField: {
      bracketsErrorMsg: {
        id: "neo.inputField.bracketsErrorMsg",
        defaultMessage:
          "Please make sure there are no angle brackets (< >) in your text.",
      },
    },
  },
};

const SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};

function InputField({
  id,
  name,
  placeholder,
  kind,
  size,
  type,
  inputmode,
  label,
  className,
  regexPattern,
  isRequired,
  isCritical,
  isReadOnly,
  CriticalHelperText,
  HelperText,
  isDisabled,
  prefixIcon,
  suffixButtonType,
  suffixIsToggle,
  suffixOnClick,
  onChange,
  onClick,
  onKeyDown,
  backgroundColor,
  value,
  setValue,
  setIsCritical,
  minRequiredChars,
  maxLength,
  shouldDisallowBrackets,
  tabIndex,
  textAreaMaxHeight,
  resetValue,
}) {
  const [isUsingMouse, setIsUsingMouse] = useState(false);
  const [doesValueHaveBrackets, setDoesValueHaveBrackets] = useState(false);

  const intl = useIntl();

  const bracketsErrorMsg = (
    <InlineMessage
      text={localize(intl, msgs.neo.inputField.bracketsErrorMsg)}
      colorTheme="critical"
      size="small"
      leftIcon={<Icon kind="AlertCritical" color="critical-700" />}
    />
  );

  const handleMouseDown = () => {
    setIsUsingMouse(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Tab") {
      setIsUsingMouse(false);
    }
  };

  const addEventListeners = () => {
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("keydown", handleKeyDown);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousedown", handleMouseDown);
    document.removeEventListener("keydown", handleKeyDown);
  };

  useEffect(() => {
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
        if (!suffixIsToggle) {
          return (
            <Icon
              className="InputField-suffixButton-icon"
              kind="visibilityOn"
              visibilityOn
              size="smallMedium"
            />
          );
        }

        return (
          <Icon
            className="InputField-suffixButton-icon"
            kind="visibilityOff"
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
              rotate={suffixIsToggle ? "180" : null}
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

  const checkTypeNumber = (typeValue) => {
    if (type === "number" || inputmode === "numeric") {
      const numericValue = typeValue.replace(/\D/g, "");

      return numericValue;
    }

    return typeValue;
  };

  const onInputChange = (event) => {
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
          value?.replace(/[<>]/g, "")?.trim()?.length < minRequiredChars
      : isCritical || value?.trim()?.length < minRequiredChars
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
              value={value}
              isReadOnly={isReadOnly}
              isDisabled={isDisabled}
              isRequired={isRequired}
              ariaDescribedBy={placeholder}
              maxLength={maxLength}
              rows={4}
              onKeyDown={onKeyDown}
              tabIndex={isDisabled ? -1 : tabIndex}
              textAreaMaxHeight={textAreaMaxHeight}
            />
          ) : (
            <InputCore
              name={name}
              id={id}
              type={type}
              inputmode={inputmode}
              placeholder={placeholder}
              className={inputClass}
              autoComplete="off"
              onChange={onInputChange}
              onClick={onClick}
              value={value}
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
          {value?.length > 0 && !isDisabled && kind !== "multiline" && (
            <div className={closeClass}>
              <ButtonIcon
                size="small"
                kind="ghost"
                tabIndex={tabIndex}
                className="InputField-closeButtonIcon"
                icon={<Icon kind="close" color="neutral-1000" size="xSmall" />}
                onClick={() => clearValue()}
              />
            </div>
          )}
          {suffixButtonType && (
            <ButtonCore
              type="button"
              tabIndex={isDisabled ? -1 : tabIndex}
              onClick={() => suffixOnClick()}
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
}

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  kind: PropTypes.oneOf(["search", "singleline", "multiline"]),
  size: PropTypes.oneOf(Object.values(SIZES)),
  type: PropTypes.string,
  inputmode: PropTypes.string,
  label: PropTypes.element,
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
  regexPattern: PropTypes.string,
  isRequired: PropTypes.bool,
  isCritical: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  prefixIcon: PropTypes.node,
  CriticalHelperText: PropTypes.node,
  HelperText: PropTypes.node,
  suffixButtonType: PropTypes.oneOf([
    "date",
    "password",
    "dropdown",
    "timePicker",
  ]),
  suffixIsToggle: PropTypes.bool,
  suffixOnClick: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  backgroundColor: PropTypes.oneOf(["neutral", "secondary"]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setValue: PropTypes.func,
  setIsCritical: PropTypes.func,
  minRequiredChars: PropTypes.number,
  maxLength: PropTypes.number,
  shouldDisallowBrackets: PropTypes.bool,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  textAreaMaxHeight: PropTypes.string,
  resetValue: PropTypes.func,
};

InputField.defaultProps = {
  id: null,
  type: "text",
  inputmode: "text",
  kind: "singleline",
  size: "large",
  className: null,
  regexPattern: ".*",
  label: null,
  isDisabled: false,
  isRequired: false,
  isCritical: false,
  isReadOnly: false,
  CriticalHelperText: null,
  HelperText: null,
  prefixIcon: null,
  suffixButtonType: null,
  suffixIsToggle: false,
  suffixOnClick: null,
  onChange: null,
  onClick: null,
  onKeyDown: null,
  backgroundColor: "neutral",
  value: null,
  setValue: null,
  setIsCritical: null,
  minRequiredChars: 1,
  maxLength: null,
  shouldDisallowBrackets: true,
  tabIndex: 0,
  textAreaMaxHeight: "31.5rem",
  resetValue: null,
};

export default InputField;
