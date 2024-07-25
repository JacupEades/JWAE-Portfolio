Basic Shell:

```jsx
import { useState } from 'react';

import { Box, Button, Typography } from '@saviynt/design-system';

const [isOpen, setIsOpen] = useState(false);

<Box className='flexWrapper'>
  <Popover
    trigger={
      <Button type='button' kind='filled' size='large'>
        Open Popover
      </Button>
    }
    popoverContent={
      <Box className='flexContainer'>
        <Typography kind='h3'>🔁 Custom content placeholder</Typography>
        <Typography kind='body2'>
          Flexible content. Pass in an element prop or children for content.
        </Typography>
      </Box>
    }
    isOpen={isOpen}
    setIsOpen={setIsOpen}
  />
</Box>;
```

<style>
  .flexWrapper {
    position: relative;
    display: flex;
    width: max-content;
  }
  /* Needed to cover other popovers */
  .flexWrapper .Popover-wrapper--isOpen {
    z-index: var(--z-index-popover);
  }

  .flexContainer {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 1rem 1.5rem;
    text-align: center;
    color: var(--color-foreground-neutral-bold, #212328);
    width: 16.75rem
  }
</style>
