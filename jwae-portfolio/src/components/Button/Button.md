## **Introduction**

Buttons are used to communicate calls to action and help users interact with pages in a variety of ways, such as starting tasks, expanding page sections, completing tasks and much more. The label/text on buttons clearly sets the expectation of what action will occur when the user interacts with it.

### Don’t Use a Button...

- If space is limited. Consider using an icon button instead.
- If the intended action is to take the user to a new page. Use a link instead.
- If you have a confined space or need less visual emphasis. Use a link-styled button, which is considered a button because it triggers an action, but it:
  <ol>
    <li>Fits in tight spaces where there’s no room for the additional padding (e.g., inline with other text).</li>
    <li>Isn’t as visually impactful as a regular button (e.g., used for expanding and collapsing content).</li>
  </ol>

## **Variants**

### Filled

These provide the strongest visual emphasis with a solid background, and they’re often used to draw attention to the primary action on the page. Use only one filled button per page or area/section.

```js
import { Box, Icon } from '@saviynt/design-system';

<Box className='flexBox'>
  <Button
    type='button'
    kind='filled'
    size='large'
    leftIcon={<Icon kind='Add' size='medium' color={'neutral-100'} />}
    rightIcon={<Icon kind='ArrowRight' size='medium' color={'neutral-100'} />}
  >
    Filled
  </Button>
</Box>;
```

### Outlined

These are the most frequently used buttons, and they incorporate a border outline to indicate a supplemental action.

```js
import { Box, Icon } from '@saviynt/design-system';

<Box className='flexBox'>
  <Button
    type='button'
    kind='outlined'
    size='large'
    leftIcon={<Icon kind='Add' size='medium' color={'neutral-100'} />}
    rightIcon={<Icon kind='ArrowRight' size='medium' color={'neutral-100'} />}
  >
    Outlined
  </Button>
</Box>;
```

### Subtle

When other types of buttons cause too much distraction, these buttons provide the right visual appeal.

```js
import { Box, Icon } from '@saviynt/design-system';

<Box className='flexBox'>
  <Button
    type='button'
    kind='subtle'
    size='large'
    leftIcon={<Icon kind='Add' size='medium' color={'neutral-100'} />}
    rightIcon={<Icon kind='ArrowRight' size='medium' color={'neutral-100'} />}
  >
    Subtle
  </Button>
</Box>;
```

### Ghost

In situations where information density is high or lower emphasis is needed for interface elements, ghost buttons are used on a case-by-case basis to provide a clear CTA without competing with other elements for attention.

```js
import { Box, Icon } from '@saviynt/design-system';

<Box className='flexBox'>
  <Button
    type='button'
    kind='ghost'
    size='large'
    leftIcon={<Icon kind='Add' size='medium' color={'neutral-100'} />}
    rightIcon={<Icon kind='ArrowRight' size='medium' color={'neutral-100'} />}
  >
    Ghost
  </Button>
</Box>;
```

### Size

The size of a button is determined by the hierarchy of the action or by the constraint of the space around the button,

1. **Large** (3rem height): Often located on the top right of the page header or in the page level action footer bar, this size is used to distinguish the most prominent actions.
2. **Medium** (2.5rem height): Designated as the default size, this is the most common button.
3. **Small** (2rem height): Used sparingly, small buttons are only needed for vertical density.

```js
import { Box, Icon } from '@saviynt/design-system';

<Box className='flexBox'>
  <Button
    type='button'
    kind='filled'
    size='large'
    leftIcon={<Icon kind='Add' size='medium' color={'neutral-100'} />}
    rightIcon={<Icon kind='ArrowRight' size='medium' color={'neutral-100'} />}
  >
    Large
  </Button>
  <Button
    type='button'
    kind='filled'
    size='medium'
    leftIcon={<Icon kind='Add' size='smallMedium' color={'neutral-100'} />}
    rightIcon={
      <Icon kind='ArrowRight' size='smallMedium' color={'neutral-100'} />
    }
  >
    Medium
  </Button>
  <Button
    type='button'
    kind='filled'
    size='small'
    leftIcon={<Icon kind='Add' size='xSmall' color={'neutral-100'} />}
    rightIcon={<Icon kind='ArrowRight' size='xSmall' color={'neutral-100'} />}
  >
    Small
  </Button>
</Box>;
```

### Critical

These indicate a destructive action that may be difficult or impossible to reverse (stick to one per context).

1. **Primary**: Users will likely want or need to take this main action despite the destructive result. DO NOT pair with a brand primary button!
2. **Secondary**: Usually paired with a primary brand button, this indicates an alternative to the preferable primary action.
3. **Tertiary**: These are used when the destructive action isn’t recommended or isn’t commonly used.

```js
import { Box, Icon } from '@saviynt/design-system';

<Box className='flexBox'>
  <Button
    type='button'
    kind='filled'
    size='large'
    isEnabled
    leftIcon={<Icon kind='Add' size='medium' color={'neutral-100'} />}
    rightIcon={<Icon kind='ArrowRight' size='medium' color={'neutral-100'} />}
  >
    Filled
  </Button>
  <Button
    type='button'
    kind='outlined'
    size='large'
    isEnabled
    leftIcon={<Icon kind='Add' size='medium' color={'neutral-100'} />}
    rightIcon={<Icon kind='ArrowRight' size='medium' color={'neutral-100'} />}
  >
    Outlined
  </Button>
  <Button
    type='button'
    kind='subtle'
    size='large'
    isEnabled
    leftIcon={<Icon kind='Add' size='medium' color={'neutral-100'} />}
    rightIcon={<Icon kind='ArrowRight' size='medium' color={'neutral-100'} />}
  >
    Subtle
  </Button>
  <Button
    type='button'
    kind='ghost'
    size='large'
    isEnabled
    leftIcon={<Icon kind='Add' size='medium' color={'neutral-100'} />}
    rightIcon={<Icon kind='ArrowRight' size='medium' color={'neutral-100'} />}
  >
    Ghost
  </Button>
</Box>;
```

### Icon-Text Pairs

To improve recognition about an object or action, buttons can feature an icon paired with the text label. The icon can be placed before (prefix) or after (suffix) the label, but not both on the same button.

Icons are used regularly across all button variants, and use of them is up to the designer’s discretion.

```js
import { Box, Icon } from '@saviynt/design-system';

<Box className='flexBox'>
  <Button
    type='button'
    kind='filled'
    size='large'
    leftIcon={<Icon kind='Add' size='medium' color={'neutral-100'} />}
    rightIcon={<Icon kind='ArrowRight' size='medium' color={'neutral-100'} />}
  >
    Two Icons With Text
  </Button>
  <Button
    type='button'
    kind='filled'
    size='large'
    rightIcon={<Icon kind='ArrowRight' size='medium' color={'neutral-100'} />}
  >
    Right Icon Only
  </Button>
  <Button
    type='button'
    kind='filled'
    size='large'
    leftIcon={<Icon kind='Add' size='medium' color={'neutral-100'} />}
  >
    Left Icon Only
  </Button>
  <Button type='button' kind='filled' size='large'>
    Text Only
  </Button>
  <Button
    type='button'
    kind='filled'
    size='large'
    leftIcon={<Icon kind='Add' size='medium' color={'neutral-100'} />}
  />
</Box>;
```

## Behaviors

### Disabled

Use the disabled state sparingly to indicate actions that are currently unavailable. The user should clearly understand why a button is disabled (e.g., if it follows a single entry field that’s been left empty).

In most cases, show the button in its enabled state, followed by helpful messaging after it's pressed. For example, if required fields are missing on a form, show the primary button as a secondary button. After a user click it, an alert banner and inline messages should point the user to the missing fields. Once resolved, the secondary button becomes primary.

```js
import { Box, Icon } from '@saviynt/design-system';
<Box className='flexBox'>
  <Button
    type='button'
    kind='filled'
    size='large'
    isDisabled
    leftIcon={<Icon kind='Add' size='medium' color={'neutral-100'} />}
    rightIcon={<Icon kind='ArrowRight' size='medium' color={'neutral-100'} />}
  >
    Disabled
  </Button>
</Box>;
```

### Loading

If an action doesn’t happen instantly, use the loading state to indicate that the button is disabled while the action processes. The button maintains its size, but the text will be hidden and a loader is shown in its place.

```js
import { useState } from 'react';
import { Box, Icon } from '@saviynt/design-system';

const [loading, setLoading] = useState(false);
const handleLoading = () => {
  console.log('Button pressed');
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
};

const [loading2, setLoading2] = useState(false);
const [success, setSuccess] = useState(false);
const handleSuccess = () => {
  setLoading2(true);
  setTimeout(() => {
    console.log('Button pressed');
    setLoading2(false);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }, 3000);
};

<Box className='flexBox'>
  <Button
    type='button'
    kind='filled'
    size='large'
    isLoading={loading}
    onClick={() => handleLoading()}
    leftIcon={<Icon kind='Add' size='medium' color={'neutral-100'} />}
  >
    Loading Button
  </Button>
  <Button
    type='button'
    kind='outlined'
    size='large'
    isEnabled
    isLoading={loading}
    onClick={() => handleLoading()}
    leftIcon={<Icon kind='Add' size='medium' color={'neutral-100'} />}
  >
    Loading Button
  </Button>
</Box>;
```

### Success

After successfully completing an action, the success state can overtake the default enabled state of a button. The button is disabled in this state, and it maintains its size. To indicate success, the button often turns green and displays a checkmark either by itself or with a text label reflecting the success state (e.g., “Add” becomes “Added”).

```js
import { useState } from 'react';
import { Box, Icon } from '@saviynt/design-system';

const [loading, setLoading] = useState(false);
const handleLoading = () => {
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
};

const [loading2, setLoading2] = useState(false);
const [success, setSuccess] = useState(false);
const handleSuccess = () => {
  setLoading2(true);
  setTimeout(() => {
    setLoading2(false);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }, 3000);
};

<Box className='flexBox'>
  <Button
    type='button'
    kind='filled'
    size='large'
    isLoading={loading2}
    isSuccess={success}
    onClick={() => handleSuccess()}
    leftIcon={<Icon kind='Add' size='medium' color={'neutral-100'} />}
  >
    Add
  </Button>
  <Button
    type='button'
    kind='outlined'
    size='large'
    isLoading={loading2}
    isSuccess={success}
    onClick={() => handleSuccess()}
    leftIcon={<Icon kind='Add' size='medium' color={'neutral-100'} />}
  >
    Add
  </Button>
  <Button
    type='button'
    kind='subtle'
    size='large'
    isLoading={loading2}
    isSuccess={success}
    onClick={() => handleSuccess()}
    leftIcon={<Icon kind='Add' size='medium' color={'neutral-100'} />}
  >
    Add
  </Button>
  <Button
    type='button'
    kind='ghost'
    size='large'
    isLoading={loading2}
    isSuccess={success}
    onClick={() => handleSuccess()}
    leftIcon={<Icon kind='Add' size='medium' color={'neutral-100'} />}
  >
    Add
  </Button>
</Box>;
```

<style>
  .flexBox {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
</style>
