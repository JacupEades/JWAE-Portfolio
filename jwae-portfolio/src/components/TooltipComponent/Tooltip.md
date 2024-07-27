Placements:

```jsx
import { Box, Button, Tooltip } from '@saviynt/design-system';

<Box className='flexContainerGrid'>
  <Box className='flexRow'>
    <Tooltip
      trigger={<Button size='small'>top-start</Button>}
      text='Short Tooltip. Lorem ipsum dolor sit amet cons'
      placement='top-start'
    />
    <Tooltip
      trigger={<Button size='small'>top</Button>}
      text='Short Tooltip. Lorem ipsum dolor sit amet cons'
      placement='top'
    />
    <Tooltip
      trigger={<Button size='small'>top-end</Button>}
      text='Short Tooltip. Lorem ipsum dolor sit amet cons'
      placement='top-end'
    />
  </Box>
  <Box className='flexRow'>
    <Tooltip
      trigger={<Button size='small'>left-start</Button>}
      text='Short Tooltip. Lorem ipsum dolor sit amet cons'
      placement='left-start'
    />
    <Tooltip
      trigger={<Button size='small'>left</Button>}
      text='Short Tooltip. Lorem ipsum dolor sit amet cons'
      placement='left'
    />
    <Tooltip
      trigger={<Button size='small'>left-end</Button>}
      text='Short Tooltip. Lorem ipsum dolor sit amet cons'
      placement='left-end'
    />
  </Box>
  <Box className='flexRow'>
    <Tooltip
      trigger={<Button size='small'>right-start</Button>}
      text='Short Tooltip. Lorem ipsum dolor sit amet cons'
      placement='right-start'
    />
    <Tooltip
      trigger={<Button size='small'>right</Button>}
      text='Short Tooltip. Lorem ipsum dolor sit amet cons'
      placement='right'
    />
    <Tooltip
      trigger={<Button size='small'>right-end</Button>}
      text='Short Tooltip. Lorem ipsum dolor sit amet cons'
      placement='right-end'
    />
  </Box>
  <Box className='flexRow'>
    <Tooltip
      trigger={<Button size='small'>bottom-start</Button>}
      text='Short Tooltip. Lorem ipsum dolor sit amet cons'
      placement='bottom-start'
    />
    <Tooltip
      trigger={<Button size='small'>bottom</Button>}
      text='Short Tooltip. Lorem ipsum dolor sit amet cons'
      placement='bottom'
    />
    <Tooltip
      trigger={<Button size='small'>bottom-end</Button>}
      text='Short Tooltip. Lorem ipsum dolor sit amet cons'
      placement='bottom-end'
    />
  </Box>
</Box>;
```

Max Width:

```jsx
import { Box, Button, Tooltip } from '@saviynt/design-system';

<Box className='flexContainer'>
  <Tooltip
    trigger={<Button size='small'>Default: 11rem (176px)</Button>}
    text='Short Tooltip. Lorem ipsum dolor sit amet cons'
  />
  <Tooltip
    trigger={<Button size='small'>Wide with long text</Button>}
    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    maxWidth='20rem'
  />
  <Tooltip
    trigger={<Button size='small'>long text</Button>}
    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  />
  <Tooltip trigger={<Button size='small'>No text</Button>} text='' />
</Box>;
```

Delayed:

```jsx
import { Box, Button, Tooltip } from '@saviynt/design-system';

<Box className='flexContainer'>
  <Tooltip
    trigger={<Button size='small'>Default: none</Button>}
    text='No Delay (100ms)'
  />
  <Tooltip
    trigger={<Button size='small'>0.25 Second</Button>}
    text='0.25 second Delay'
    openDelay={250}
    // Not required
    closeDelay={100}
  />
  <Tooltip
    trigger={<Button size='small'>0.5 Second</Button>}
    text='0.5 second Delay'
    openDelay={500}
    // Not required
    closeDelay={100}
  />
  <Tooltip
    trigger={<Button size='small'>1 Second</Button>}
    text='1 second Delay'
    openDelay={1000}
    // Not required
    closeDelay={100}
  />
  <Tooltip
    trigger={<Button size='small'>Long open</Button>}
    text='1 second Delay'
    openDelay={1000}
    closeDelay={10}
  />
  <Tooltip
    trigger={<Button size='small'>Long close</Button>}
    text='1 second Delay'
    openDelay={10}
    closeDelay={2000}
  />
</Box>;
```

Static offset and offset X/Y:

```jsx
import { Box, Button, Tooltip } from '@saviynt/design-system';

<Box className='flexContainer'>
  <Tooltip
    trigger={<Button size='small'>Static offset (String)</Button>}
    text='Forcing the arrow to one side either positive or negative. (up/down, left/right)'
    arrowStaticOffset='24'
  />
  <Tooltip
    trigger={<Button size='small'>Offset x: 50, y: 16</Button>}
    text='offset={{X: 50, y:16}}'
    offset={{ x: 50, y: 16 }}
  />
  <Tooltip
    trigger={<Button size='small'>Offset x: 16, y: 50</Button>}
    text='offset={{X: 16, y:50}}'
    offset={{ x: 16, y: 50 }}
  />
</Box>;
```

<style>
  .flexContainer {
    display: flex;
    gap: 2rem;
  }
  .flexContainer .Button {
    white-space: nowrap;
  }

  .flexContainerGrid {
    display: flex;
    gap: 1rem;
    width: 40rem;
  }
  .flexRow {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: max-content;
  }
</style>
