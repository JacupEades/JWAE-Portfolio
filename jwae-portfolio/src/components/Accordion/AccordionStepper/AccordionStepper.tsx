import React, { useEffect, useRef } from "react";
import classnames from "classnames";

import { ButtonCore, Icon, Typography } from "../../index.ts";

import "./AccordionStepper.scss";

interface AccordionStepperProps {
  isExpanded: boolean;
  isCritical?: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
  prefixIconKind: string;
  headerText: string;
  primarySupportingText: string;
  secondarySupportingText?: string;
  isShowingSupportingTextOnExpanded?: boolean;
  accordionValue?: React.ReactNode;
  suffixLink?: React.ReactNode;
  children?: React.ReactNode;
  buttonClassName?: string;
  contentPanelClassName?: string;
  CriticalMessage?: React.ReactNode;
  dataTestId?: string;
}

const ACCORDION_SHIFT_OFFSET = 8;
const PIXELS_PER_REM = 16;
const OVERFLOW_VISIBLE_STYLE_DELAY = 250;

const AccordionStepper: React.FC<AccordionStepperProps> = ({
  isExpanded,
  isCritical = false,
  setIsExpanded,
  prefixIconKind,
  headerText,
  primarySupportingText,
  secondarySupportingText = null,
  isShowingSupportingTextOnExpanded = false,
  accordionValue = null,
  suffixLink = null,
  children = null,
  buttonClassName = null,
  contentPanelClassName = null,
  CriticalMessage = null,
  dataTestId = null,
}) => {
  const contentPanelRef = useRef<HTMLDivElement>(null);

  const setExpandedClass = (content: string) =>
    `AccordionStepper-${content} ${
      isExpanded ? `AccordionStepper-${content}--isExpanded` : ""
    }`;

  const showingTextClass = !isShowingSupportingTextOnExpanded
    ? "AccordionStepper-supportingContent--isShowingSupportingTextOnExpanded"
    : null;
  const secondaryTextClass =
    secondarySupportingText && !isExpanded && accordionValue
      ? "AccordionStepper-supportingContent--hasSecondaryText"
      : null;

  const articleClasses = classnames(
    "AccordionStepper-article",
    isCritical && "AccordionStepper-article--isCritical",
    secondarySupportingText &&
      accordionValue &&
      "AccordionStepper-article--hasSecondaryText",
  );

  const buttonClasses = classnames(
    setExpandedClass("button"),
    isExpanded && !suffixLink && "AccordionStepper-button--noSuffixLink",
    secondarySupportingText &&
      accordionValue &&
      "AccordionStepper-button--hasSecondaryText",
    buttonClassName,
  );

  const supportingContentClasses = classnames(
    setExpandedClass("supportingContent"),
    showingTextClass,
    secondaryTextClass,
  );

  const contentPanelClasses = classnames(
    setExpandedClass("contentPanel"),
    contentPanelClassName,
  );

  const contentPanelWrapperClasses = classnames(
    "AccordionStepper-contentPanelWrapper",
    isExpanded
      ? `AccordionStepper-contentPanelWrapper--isExpanded`
      : `AccordionStepper-contentPanelWrapper--isNotExpanded`,
  );

  const prefixIconClasses = setExpandedClass("prefixIcon");
  const bodyContentClasses = setExpandedClass("bodyContent");
  const headerTextClasses = setExpandedClass("header");

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let lastWidth = window.innerWidth;

    const recalculateHeight = () => {
      if (contentPanelRef.current) {
        if (isExpanded) {
          const height = contentPanelRef.current.scrollHeight;
          const heightInRem = height / PIXELS_PER_REM;

          contentPanelRef.current.style.maxHeight = `${
            heightInRem + ACCORDION_SHIFT_OFFSET
          }rem`;

          if (timeoutId) clearTimeout(timeoutId);

          timeoutId = setTimeout(() => {
            contentPanelRef.current!.style.overflow = "visible";
          }, OVERFLOW_VISIBLE_STYLE_DELAY);
        } else {
          contentPanelRef.current.style.maxHeight = "0";
          contentPanelRef.current.style.overflow = "hidden";
        }
      }
    };

    recalculateHeight();

    const handleResize = () => {
      const currentWidth = window.innerWidth;

      if (
        (lastWidth > 1440 && currentWidth <= 1440) ||
        (lastWidth > 1024 && currentWidth <= 1024) ||
        (lastWidth <= 1024 && currentWidth > 1024) ||
        (lastWidth > 600 && currentWidth <= 600) ||
        (lastWidth <= 600 && currentWidth > 600) ||
        (lastWidth > 375 && currentWidth <= 375)
      ) {
        recalculateHeight();
      }

      lastWidth = currentWidth;
    };

    window.addEventListener("resize", handleResize);

    const observer = new MutationObserver(recalculateHeight);

    observer.observe(contentPanelRef.current!, {
      childList: true,
      subtree: true,
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isExpanded]);

  const renderedSupportingText = () => (
    <div className={supportingContentClasses}>
      {accordionValue && !isExpanded ? (
        <div className="AccordionStepper-accordionValue">{accordionValue}</div>
      ) : (
        <Typography kind="body1" className="AccordionStepper-supportingText">
          {primarySupportingText}
        </Typography>
      )}
      {!isExpanded && secondarySupportingText && accordionValue ? (
        <Typography kind="body1" className="AccordionStepper-supportingText">
          {secondarySupportingText}
        </Typography>
      ) : null}
    </div>
  );

  return (
    <article className="AccordionStepper-inlineBox">
      <div className={articleClasses} data-testid={dataTestId}>
        <ButtonCore
          type="button"
          aria-expanded={isExpanded ? "true" : "false"}
          className={buttonClasses}
          onClick={() => setIsExpanded(!isExpanded)}
          data-testid={`${dataTestId}-button`}
        >
          <div className={prefixIconClasses}>
            <Icon kind={prefixIconKind} />
          </div>
          <div className={bodyContentClasses}>
            <Typography
              kind="h4"
              desktop="body2-d"
              mobile="body2-m"
              className={headerTextClasses}
            >
              {headerText}
            </Typography>
            {renderedSupportingText()}
          </div>
          {isExpanded && suffixLink}
          {!isExpanded && (
            <div className="AccordionStepper-suffixIcon">
              <Icon kind="edit" />
            </div>
          )}
        </ButtonCore>
        <section ref={contentPanelRef} className={contentPanelWrapperClasses}>
          <div
            className={contentPanelClasses}
            data-testid={`${dataTestId}-content-panel`}
          >
            {children}
          </div>
        </section>
      </div>
      {CriticalMessage}
    </article>
  );
};

export default AccordionStepper;
