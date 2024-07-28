import React from "react";

import "./ButtonCL.scss";

import { Button, Icon, Typography } from "../../index.ts";

interface ButtonCLProps {}

const ButtonCL: React.FC<ButtonCLProps> = () => {
  const buildSection = (title: string, node: React.JSX.Element) => {
    console.log("Test");

    return (
      <section className="ButtonCL-titleWithExample">
        <Typography kind="h3">{title}</Typography>
        <div className="ButtonCL-example">{node}</div>
      </section>
    );
  };

  const getKinds = () => (
    <>
      <Button type="button" kind="filled" size="large">
        Filled
      </Button>
      <Button type="button" kind="outlined" size="large">
        Outlined
      </Button>
      <Button type="button" kind="subtle" size="large">
        Subtle
      </Button>
      <Button type="button" kind="ghost" size="large">
        Ghost
      </Button>
    </>
  );

  const getSizes = () => (
    <>
      <Button
        type="button"
        kind="filled"
        size="large"
        leftIcon={<Icon kind="ChevronDown" />}
        rightIcon={<Icon kind="ChevronDown" />}
      >
        Large
      </Button>
      <Button
        type="button"
        kind="filled"
        size="medium"
        leftIcon={<Icon kind="ChevronDown" />}
        rightIcon={<Icon kind="ChevronDown" />}
      >
        Medium
      </Button>
      <Button
        type="button"
        kind="filled"
        size="small"
        leftIcon={<Icon kind="ChevronDown" />}
        rightIcon={<Icon kind="ChevronDown" />}
      >
        Small
      </Button>
    </>
  );

  const getDisabled = () => (
    <Button
      type="button"
      kind="filled"
      size="large"
      isDisabled
      rightIcon={<Icon kind="ChevronDown" />}
    >
      Disabled
    </Button>
  );

  const getCritical = () => (
    <>
      <Button type="button" kind="filled" size="large" isEnabled>
        Filled
      </Button>
      <Button type="button" kind="outlined" size="large" isEnabled>
        Outlined
      </Button>
      <Button type="button" kind="subtle" size="large" isEnabled>
        Subtle
      </Button>
      <Button type="button" kind="ghost" size="large" isEnabled>
        Ghost
      </Button>
    </>
  );

  const getPairs = () => (
    <>
      <Button
        type="button"
        kind="filled"
        size="large"
        leftIcon={<Icon kind="ChevronDown" />}
        rightIcon={<Icon kind="ChevronDown" />}
      >
        Two Icons With Text
      </Button>
      <Button
        type="button"
        kind="filled"
        size="large"
        rightIcon={<Icon kind="ChevronDown" />}
      >
        Right Icon Only
      </Button>
      <Button
        type="button"
        kind="filled"
        size="large"
        leftIcon={<Icon kind="ChevronDown" />}
      >
        Left Icon Only
      </Button>
      <Button type="button" kind="filled" size="large">
        Text Only
      </Button>
      <Button
        type="button"
        kind="filled"
        size="large"
        leftIcon={<Icon kind="ChevronDown" />}
      />
    </>
  );

  const getComingSoon = () => (
    <Typography kind="h4">Loading and Success States</Typography>
  );

  return (
    <div className="ButtonCL">
      <div className="ButtonCL-flexBox">
        {buildSection("Kinds:", getKinds())}
        {buildSection("Sizes: Large, Medium, Small", getSizes())}
        {buildSection("Critical:", getCritical())}
        {buildSection("Icon-Text Pairs:", getPairs())}
        {buildSection("Disabled:", getDisabled())}
        {buildSection("Coming soon...", getComingSoon())}
      </div>
    </div>
  );
};

export default ButtonCL;
