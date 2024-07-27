Default Modal Island:

```jsx
import React, { useState, useEffect, useRef } from "react";
import { useDetectScroll } from "@saviynt/common";
import {
  Button,
  Icon,
  InlineMessage,
  InputField,
  FooterActionBar,
  Typography,
} from "@saviynt/design-system";

const [isOpen, setIsOpen] = useState(false);
const [isOpen2, setIsOpen2] = useState(false);
const [value1, setValue1] = useState("");
const [value2, setValue2] = useState("");
const sectionRef = useRef(null);

const { isScrolled: sectionRefIsScrolled } = useDetectScroll(null, sectionRef);

const sampleFooterActionBar = () => {
  return (
    <div className="FlexBox">
      <div className="FooterActionBar-extraContent">
        <Button kind="subtle" size="medium" onClick={() => {}}>
          Tertiary
        </Button>
        <div className="FooterActionBar-inlineMessage">
          <InlineMessage
            text={"HelperText"}
            colorTheme="info"
            size="medium"
            leftIcon={<Icon kind="Info" />}
          />
        </div>
      </div>
      <div className="FooterActionBar-actionButtons">
        <Button kind="outlined" size="medium" onClick={() => {}}>
          Secondary
        </Button>
        <div className="FooterActionBar-actionButtons--primary">
          <Button kind="filled" size="medium" onClick={() => {}}>
            Primary
          </Button>
        </div>
      </div>
    </div>
  );
};

const sampleBodyP = () => {
  return (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor tellus ut
      neque proin. Pretium pellentesque tortor bibendum nulla lectus odio non
      felis at. Mi gravida consectetur in tristique facilisi semper non vitae
      nibh. Auctor ullamcorper fringilla vulputate dignissim tellus.
    </p>
  );
};

<>
  <div className="ModalIslandBox">
    <Button
      type="button"
      kind="filled"
      size="large"
      onClick={() => setIsOpen(!isOpen)}
    >
      ModalIsland
    </Button>
    <ModalIsland
      onClose={() => setIsOpen(false)}
      isOpen={isOpen}
      title="Title"
      contentBody={<>{sampleBodyP()}</>}
      sectionRef={sectionRef}
      FooterActionBarComp={
        <FooterActionBar size="large" isScrolled={sectionRefIsScrolled}>
          {sampleFooterActionBar()}
        </FooterActionBar>
      }
    />
  </div>
  <Button
    type="button"
    kind="filled"
    size="large"
    onClick={() => setIsOpen2(!isOpen2)}
  >
    Overflow and Subtitle
  </Button>
  <ModalIsland
    onClose={() => setIsOpen2(false)}
    isOpen={isOpen2}
    title="Title"
    subtitle="subtitle"
    contentBody={
      <>
        {sampleBodyP()}
        <div className="ModalIsland-exampleContentBody">
          <InputField
            name="InputField1"
            placeholder="Placeholder"
            label={
              <Typography kind="label" htmlFor="Label">
                Label
              </Typography>
            }
            value={value1}
            setValue={setValue1}
          />
          <InputField
            name="InputField1"
            placeholder="Placeholder"
            label={
              <Typography kind="label" htmlFor="Label">
                Label
              </Typography>
            }
            value={value2}
            setValue={setValue2}
          />
        </div>
        {sampleBodyP()}
        {sampleBodyP()}
        {sampleBodyP()}
        {sampleBodyP()}
        <div className="ModalIsland-exampleContentBody">
          <InputField
            name="InputField1"
            placeholder="Placeholder"
            label={
              <Typography kind="label" htmlFor="Label">
                Label
              </Typography>
            }
            value={value1}
            setValue={setValue1}
          />
          <InputField
            name="InputField1"
            placeholder="Placeholder"
            label={
              <Typography kind="label" htmlFor="Label">
                Label
              </Typography>
            }
            value={value2}
            setValue={setValue2}
          />
        </div>
      </>
    }
    sectionRef={sectionRef}
    FooterActionBarComp={
      <FooterActionBar size="large" isScrolled={sectionRefIsScrolled}>
        {sampleFooterActionBar()}
      </FooterActionBar>
    }
  />
</>;
```

Modal Island Varieties:

```jsx
import React, { useState } from "react";
import { Button } from "@saviynt/design-system";

const [isOpen1, setIsOpen1] = useState(false);
const [isOpen2, setIsOpen2] = useState(false);
const [isOpen3, setIsOpen3] = useState(false);
const [isOpen4, setIsOpen4] = useState(false);
const [isOpen5, setIsOpen5] = useState(false);

<>
  <div className="ModalIslandBox">
    <Button
      type="button"
      kind="filled"
      size="large"
      onClick={() => setIsOpen1(true)}
    >
      Open Question
    </Button>
    <ModalIsland
      kind="question"
      alertTitle="Island Modal Title"
      alertSubtitle="Lorem ipsum dolor sit amet consectetur. Arcu curabitur rhoncus elit at lectus congue sit. Facilisis cursus scelerisque lobortis bibendum ultricies. Adipiscing tristique sed posuere rutrum nisl hendrerit dignissim diam."
      onClose={() => setIsOpen1(false)}
      isOpen={isOpen1}
      primaryButton={
        <Button type="button" kind="outlined" size="medium">
          Primary Button
        </Button>
      }
      secondaryButton={
        <Button type="button" kind="ghost" size="medium">
          Cancel
        </Button>
      }
    />
  </div>

  <div className="ModalIslandBox">
    <Button
      type="button"
      kind="filled"
      size="large"
      onClick={() => setIsOpen2(true)}
    >
      Open Success
    </Button>
    <ModalIsland
      kind="success"
      alertTitle="Island Modal Title"
      alertSubtitle="Lorem ipsum dolor sit amet consectetur. Arcu curabitur rhoncus elit at lectus congue sit. Facilisis cursus scelerisque lobortis bibendum ultricies. Adipiscing tristique sed posuere rutrum nisl hendrerit dignissim diam."
      onClose={() => setIsOpen2(false)}
      isOpen={isOpen2}
      primaryButton={
        <Button type="button" kind="filled" size="medium">
          Primary Button
        </Button>
      }
      secondaryButton={
        <Button type="button" kind="ghost" size="medium">
          Cancel
        </Button>
      }
    />
  </div>

  <div className="ModalIslandBox">
    <Button
      type="button"
      kind="filled"
      size="large"
      onClick={() => setIsOpen3(true)}
    >
      Open Warning
    </Button>
    <ModalIsland
      kind="warning"
      alertTitle="Island Modal Title"
      alertSubtitle="Lorem ipsum dolor sit amet consectetur. Arcu curabitur rhoncus elit at lectus congue sit. Facilisis cursus scelerisque lobortis bibendum ultricies. Adipiscing tristique sed posuere rutrum nisl hendrerit dignissim diam."
      onClose={() => setIsOpen3(false)}
      isOpen={isOpen3}
      primaryButton={
        <Button type="button" kind="outlined" size="medium">
          Primary Button
        </Button>
      }
      secondaryButton={
        <Button type="button" kind="ghost" size="medium">
          Cancel
        </Button>
      }
    />
  </div>

  <div className="ModalIslandBox">
    <Button
      type="button"
      kind="filled"
      isEnabled
      size="large"
      onClick={() => setIsOpen4(true)}
    >
      Open Critical
    </Button>
    <ModalIsland
      kind="critical"
      alertTitle="Island Modal Title"
      alertSubtitle="Lorem ipsum dolor sit amet consectetur. Arcu curabitur rhoncus elit at lectus congue sit. Facilisis cursus scelerisque lobortis bibendum ultricies. Adipiscing tristique sed posuere rutrum nisl hendrerit dignissim diam."
      onClose={() => setIsOpen4(false)}
      isOpen={isOpen4}
      primaryButton={
        <Button type="button" kind="outlined" isEnabled size="medium">
          Primary Button
        </Button>
      }
      secondaryButton={
        <Button type="button" kind="ghost" size="medium">
          Cancel
        </Button>
      }
    />
  </div>

  <div className="ModalIslandBox">
    <Button
      type="button"
      kind="filled"
      size="large"
      onClick={() => setIsOpen5(true)}
    >
      Open Saviynt
    </Button>
    <ModalIsland
      kind="saviynt"
      alertTitle="Island Modal Title"
      alertSubtitle="Lorem ipsum dolor sit amet consectetur. Arcu curabitur rhoncus elit at lectus congue sit. Facilisis cursus scelerisque lobortis bibendum ultricies. Adipiscing tristique sed posuere rutrum nisl hendrerit dignissim diam."
      onClose={() => setIsOpen5(false)}
      isOpen={isOpen5}
      primaryButton={
        <Button type="button" kind="outlined" size="medium">
          Primary Button
        </Button>
      }
      secondaryButton={
        <Button type="button" kind="ghost" size="medium">
          Cancel
        </Button>
      }
    />
  </div>
</>;
```

Custom Alert Island:

```jsx
import React, { useState } from "react";
import { Button, Icon } from "@saviynt/design-system";

const [isOpen, setIsOpen] = useState(false);

<div className="ModalIslandBox">
  <Button
    type="button"
    kind="filled"
    size="large"
    onClick={() => setIsOpen(true)}
  >
    Custom Alert Icon & Background
  </Button>
  <ModalIsland
    kind="customAlert"
    customAlertIcon={
      <Icon kind="Saviynt" className="ModalIsland-alertContent-icon" />
    }
    alertBackgroundClassName="CustomAlertBackGround"
    alertTitle="Island Modal Title"
    alertSubtitle="Lorem ipsum dolor sit amet consectetur. Arcu curabitur rhoncus elit at lectus congue sit. Facilisis cursus scelerisque lobortis bibendum ultricies. Adipiscing tristique sed posuere rutrum nisl hendrerit dignissim diam."
    onClose={() => setIsOpen(false)}
    isOpen={isOpen}
    primaryButton={
      <Button type="button" kind="outlined" size="medium">
        Primary Button
      </Button>
    }
    secondaryButton={
      <Button type="button" kind="ghost" size="medium">
        Cancel
      </Button>
    }
  />
</div>;
```

<style>
  .FlexBox {
    display: flex;
    flex-direction: row;
    width: 100%;
    max-height: 4rem;
  }
  .FooterActionBar-actionButtons {
    display: flex;
    padding-left: 0.5rem;
  }

  .FooterActionBar-actionButtons--primary {
    padding-left: 0.5rem;
    justify-content: flex-end;
  }

  .FooterActionBar-extraContent {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .FooterActionBar-inlineMessage {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }

  .ModalIslandBox {
    margin-bottom: 1rem;
  }

  .ModalIsland-exampleContentBody {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    margin: 0.5rem 0;
  }

  .CustomAlertBackGround svg path {
    fill: var(--color-background-secondary-subtle, #F2F4F8);
  }
</style>
