import React, { useState } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import ButtonIcon from "../../ButtonIcon/ButtonIcon";
import Icon from "../../Icon/Icon";
import Menu from "../../componentsNew/Menu/Menu";

import "./PaginationCondensed.css";

const DEFAULT_RANGE = [
  {
    label: "5",
    value: "5",
  },
  {
    label: "15",
    value: "15",
  },
  {
    label: "20",
    value: "20",
  },
  {
    label: "25",
    value: "25",
    isChecked: true,
  },
  {
    label: "50",
    value: "50",
  },
  {
    label: "100",
    value: "100",
  },
];

function PaginationCondensed({
  count,
  range,
  setRange,
  rangeOptions,
  pageCount,
  pageIndex,
  setPageIndex,
  className,
}) {
  const [options, setOptions] = useState(rangeOptions);

  const paginationCondensedClass = classnames("PaginationCondensed", className);

  const renderRangeCalulations = () => (
    <p
      className="PaginationCondensed-body"
      data-testid="pagination-condensed-range-body"
    >
      {pageIndex === 1 && count !== 0 ? 1 : pageIndex * range - range}
      {" - "}
      {pageIndex === pageCount || count === 0 ? count : pageIndex * range}
      {" of "}
      {count}
    </p>
  );

  const renderDirectionButton = (dir) => {
    const handlePageDirection = () => {
      setPageIndex(dir === "left" ? pageIndex - 1 : pageIndex + 1);
    };

    return (
      <ButtonIcon
        size="small"
        kind="ghost"
        isDisabled={dir === "left" ? pageIndex <= 1 : pageIndex >= pageCount}
        icon={
          <Icon kind="ChevronDown" rotate={dir === "left" ? "90" : "270"} />
        }
        onClick={() => handlePageDirection()}
        dataTestId={dir === "left" ? "prev-button" : "next-button"}
      />
    );
  };

  const handleChange = (selectedOption) => {
    setOptions((currentOptions) =>
      currentOptions.map((option) => ({
        ...option,
        isChecked: option.value === selectedOption.value,
      }))
    );
    setRange(parseInt(selectedOption.value, 10));
  };

  return (
    <section
      className={paginationCondensedClass}
      data-testid="pagination-condensed-section"
    >
      <div className="PaginationCondensed-rangePicker">
        <p className="PaginationCondensed-body">Records per page:</p>
        <Menu kind="simple" options={options} onChange={handleChange} />
      </div>
      <div className="PaginationCondensed-divider" />
      <div className="PaginationCondensed-rangeOutline">
        {renderRangeCalulations()}
        {renderDirectionButton("left")}
        {renderDirectionButton("right")}
      </div>
    </section>
  );
}

PaginationCondensed.defaultProps = {
  count: null,
  range: 25,
  setRange: () => {},
  rangeOptions: DEFAULT_RANGE,
  pageCount: null,
  pageIndex: null,
  setPageIndex: null,
  className: null,
};

PaginationCondensed.propTypes = {
  count: PropTypes.number,
  range: PropTypes.number,
  setRange: PropTypes.func,
  rangeOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      isDisabled: PropTypes.bool,
      isChecked: PropTypes.bool,
    })
  ),
  pageCount: PropTypes.number,
  pageIndex: PropTypes.number,
  setPageIndex: PropTypes.func,
  className: PropTypes.string,
};

export default PaginationCondensed;
