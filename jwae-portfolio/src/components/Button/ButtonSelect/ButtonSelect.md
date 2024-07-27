### Kinds: Rectangle, Pill, and Icon

```js
import React, { useState } from "react";
import { ButtonSelect, Icon } from "@saviynt/design-system";
const [isOpen, setIsOpen] = useState(false);

const handleClick = () => {
  setIsOpen((currOpen) => {
    currOpen = !currOpen;
    console.log(`Button is now ${currOpen ? "Open" : "Closed"}`);
    return currOpen;
  });
};

<div className="flexBox">
  <ButtonSelect
    kind="rectangle"
    label="Label"
    onClick={handleClick}
    isOpen={isOpen}
    size="large"
    prefixIcon={<Icon kind="Filter" />}
  />
  <ButtonSelect
    kind="pill"
    label="Label"
    onClick={handleClick}
    isOpen={isOpen}
    prefixIcon={<Icon kind="Filter" />}
  />
  <ButtonSelect
    kind="icon"
    onClick={handleClick}
    isOpen={isOpen}
    size="large"
    prefixIcon={<Icon kind="Filter" />}
  />
</div>;
```

### Rectangle Badge

```js
import React, { useState } from "react";
import { Badge, ButtonSelect, Icon } from "@saviynt/design-system";
const [isOpen, setIsOpen] = useState(false);

const handleClick = () => {
  setIsOpen((currOpen) => {
    currOpen = !currOpen;
    console.log(`Button is now ${currOpen ? "Open" : "Closed"}`);
    return currOpen;
  });
};

<ButtonSelect
  label="Label"
  onClick={handleClick}
  isOpen={isOpen}
  size="large"
  prefixIcon={<Icon kind="Filter" />}
  BadgeComp={<Badge kind="dot" color="primary" size="small" />}
/>;
```

### Rectangle Sizes

```js
import React, { useState } from "react";
import { ButtonSelect, Icon } from "@saviynt/design-system";
const [isOpen, setIsOpen] = useState(false);

const handleClick = () => {
  setIsOpen((currOpen) => {
    currOpen = !currOpen;
    console.log(`Button is now ${currOpen ? "Open" : "Closed"}`);
    return currOpen;
  });
};

<div className="flexBox">
  <ButtonSelect
    label="Label"
    onClick={handleClick}
    isOpen={isOpen}
    size="large"
  />
  <ButtonSelect
    label="Label"
    onClick={handleClick}
    isOpen={isOpen}
    size="medium"
  />
  <ButtonSelect
    label="Label"
    onClick={handleClick}
    isOpen={isOpen}
    size="small"
  />
</div>;
```

### Rectangle Sizes + Icon

```js
import React, { useState } from "react";
import { ButtonSelect, Icon } from "@saviynt/design-system";
const [isOpen, setIsOpen] = useState(false);

const handleClick = () => {
  setIsOpen((currOpen) => {
    currOpen = !currOpen;
    console.log(`Button is now ${currOpen ? "Open" : "Closed"}`);
    return currOpen;
  });
};

<div className="flexBox">
  <ButtonSelect
    label="Label"
    onClick={handleClick}
    isOpen={isOpen}
    size="large"
    prefixIcon={<Icon kind="Filter" />}
  />
  <ButtonSelect
    label="Label"
    onClick={handleClick}
    isOpen={isOpen}
    size="medium"
    prefixIcon={<Icon kind="Filter" />}
  />
  <ButtonSelect
    label="Label"
    onClick={handleClick}
    isOpen={isOpen}
    size="small"
    prefixIcon={<Icon kind="Filter" />}
  />
</div>;
```

### Rectangle Disabled

```js
import React, { useState } from "react";
import { ButtonSelect } from "@saviynt/design-system";

<ButtonSelect label="Label" isDisabled />;
```

### Pill

```js
import React, { useState } from "react";
import { ButtonSelect } from "@saviynt/design-system";
const [isOpen, setIsOpen] = useState(false);

const handleClick = () => {
  setIsOpen((currOpen) => {
    currOpen = !currOpen;
    console.log(`Button is now ${currOpen ? "Open" : "Closed"}`);
    return currOpen;
  });
};

<ButtonSelect
  kind="pill"
  label="Label"
  onClick={handleClick}
  isOpen={isOpen}
/>;
```

### Pill Badge

```js
import React, { useState } from "react";
import { Badge, ButtonSelect } from "@saviynt/design-system";
const [isOpen, setIsOpen] = useState(false);

const handleClick = () => {
  setIsOpen((currOpen) => {
    currOpen = !currOpen;
    console.log(`Button is now ${currOpen ? "Open" : "Closed"}`);
    return currOpen;
  });
};

<ButtonSelect
  kind="pill"
  label="Label"
  onClick={handleClick}
  isOpen={isOpen}
  BadgeComp={<Badge kind="dot" color="primary" size="small" />}
/>;
```

### Pill + Icon

```js
import React, { useState } from "react";
import { ButtonSelect, Icon } from "@saviynt/design-system";
const [isOpen, setIsOpen] = useState(false);

const handleClick = () => {
  setIsOpen((currOpen) => {
    currOpen = !currOpen;
    console.log(`Button is now ${currOpen ? "Open" : "Closed"}`);
    return currOpen;
  });
};

<ButtonSelect
  kind="pill"
  label="Label"
  onClick={handleClick}
  isOpen={isOpen}
  prefixIcon={<Icon kind="Filter" />}
/>;
```

### Pill + Icon + Selected Labels

```js
import React, { useState } from "react";
import { Badge, ButtonSelect, Icon } from "@saviynt/design-system";
import { styleTextBeforeToken } from "@saviynt/common";
const [isOpen, setIsOpen] = useState(false);

const handleClick = () => {
  setIsOpen((currOpen) => {
    currOpen = !currOpen;
    console.log(`Button is now ${currOpen ? "Open" : "Closed"}`);
    return currOpen;
  });
};

<div className="selectedPillContainer">
  <ButtonSelect
    kind="pill"
    label={styleTextBeforeToken(
      "Long Label Example Certs : Item 1, Item 2, Item 3, Item 4, Item 5, Item 6, Item 7",
      ":",
      true,
      "u-button--isLabelAppended",
      "u-button--isLabelAppendedTags"
    )}
    onClick={handleClick}
    isOpen={isOpen}
    prefixIcon={<Icon kind="Filter" />}
    BadgeComp={<Badge kind="dot" color="primary" size="small" />}
  />
</div>;
```

### Pill Disabled

```js
import { ButtonSelect } from "@saviynt/design-system";

<ButtonSelect kind="pill" label="Label" isDisabled />;
```

### Icon Sizes

```js
import React, { useState } from "react";
import { ButtonSelect, Icon } from "@saviynt/design-system";
const [isOpen, setIsOpen] = useState(false);

const handleClick = () => {
  setIsOpen((currOpen) => {
    currOpen = !currOpen;
    console.log(`Button is now ${currOpen ? "Open" : "Closed"}`);
    return currOpen;
  });
};

<div className="flexBox">
  <ButtonSelect
    kind="icon"
    onClick={handleClick}
    isOpen={isOpen}
    size="large"
    prefixIcon={<Icon kind="Filter" />}
  />
  <ButtonSelect
    kind="icon"
    onClick={handleClick}
    isOpen={isOpen}
    size="medium"
    prefixIcon={<Icon kind="Filter" />}
  />
  <ButtonSelect
    kind="icon"
    onClick={handleClick}
    isOpen={isOpen}
    size="small"
    prefixIcon={<Icon kind="Filter" />}
  />
</div>;
```

### Icon Badge

```js
import React, { useState } from "react";
import { Badge, ButtonSelect, Icon } from "@saviynt/design-system";
const [isOpen, setIsOpen] = useState(false);

const handleClick = () => {
  setIsOpen((currOpen) => {
    currOpen = !currOpen;
    console.log(`Button is now ${currOpen ? "Open" : "Closed"}`);
    return currOpen;
  });
};

<ButtonSelect
  kind="icon"
  onClick={handleClick}
  isOpen={isOpen}
  size="large"
  prefixIcon={<Icon kind="Filter" />}
  BadgeComp={<Badge kind="dot" color="primary" size="small" />}
/>;
```

### Icon Disabled

```js
import { ButtonSelect, Icon } from "@saviynt/design-system";

<ButtonSelect kind="icon" prefixIcon={<Icon kind="Filter" />} isDisabled />;
```

<style>
  .flexBox {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .selectedPillContainer {
    width: 100%;
  }
</style>
