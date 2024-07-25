Sizes:

```js
import { Box, Icon } from '@saviynt/design-system';

<Box className='rowFlexContainer'>
  <Chip
    size='xxSmall'
    label='xxSmall'
    leftIcon={<Icon kind='Add' />}
    rightIcon={<Icon kind='Edit' />}
  />
  <Chip
    size='xSmall'
    label='xSmall'
    leftIcon={<Icon kind='Add' />}
    rightIcon={<Icon kind='Edit' />}
  />
  <Chip
    size='small'
    label='Small'
    leftIcon={<Icon kind='Add' />}
    rightIcon={<Icon kind='Edit' />}
  />
  <Chip
    label='Medium'
    leftIcon={<Icon kind='Add' />}
    rightIcon={<Icon kind='Edit' />}
  />
  <Chip
    size='large'
    label='Large'
    leftIcon={<Icon kind='Add' />}
    rightIcon={<Icon kind='Edit' />}
  />
</Box>;
```

Kinds:

```js
import { Box, Icon, Label } from '@saviynt/design-system';

<Box className='rowFlexContainer'>
  <Chip
    kind='outlined'
    label='Outlined'
    leftIcon={<Icon kind='Add' />}
    rightIcon={<Icon kind='Edit' />}
  />
  <Chip
    kind='boldFilled'
    label='Bold Filled'
    leftIcon={<Icon kind='Add' />}
    rightIcon={<Icon kind='Edit' />}
  />
  <Chip
    kind='subtleFilled'
    label='Subtle Filled'
    leftIcon={<Icon kind='Add' />}
    rightIcon={<Icon kind='Edit' />}
  />
</Box>;
```

Disabled:

```js
import { Box, Icon, Label } from '@saviynt/design-system';

<Box className='rowFlexContainer'>
  <Chip
    kind='outlined'
    label='Outlined'
    isDisabled
    leftIcon={<Icon kind='Add' />}
    rightIcon={<Icon kind='Edit' />}
  />
  <Chip
    kind='boldFilled'
    label='Bold Filled'
    isDisabled
    leftIcon={<Icon kind='Add' />}
    rightIcon={<Icon kind='Edit' />}
  />
  <Chip
    kind='subtleFilled'
    label='Subtle Filled'
    isDisabled
    leftIcon={<Icon kind='Add' />}
    rightIcon={<Icon kind='Edit' />}
  />
</Box>;
```

Selected:

```js
import { Box, Icon, Label } from '@saviynt/design-system';
import { useState } from 'react';

const [isSelected, setIsSelected] = useState(true);

<Box className='rowFlexContainer'>
  <Chip
    kind={isSelected ? 'boldFilled' : 'outlined'}
    label='Select'
    isSelected={isSelected}
    onClick={() => setIsSelected(!isSelected)}
    leftIcon={<Icon kind='Add' />}
    rightIcon={<Icon kind='Edit' />}
  />
  <Chip
    kind={isSelected ? 'boldFilled' : 'outlined'}
    label='Select'
    isSelected={isSelected}
    onClick={() => setIsSelected(!isSelected)}
    color='brandPrimary'
    leftIcon={<Icon kind='Add' />}
    rightIcon={<Icon kind='Edit' />}
  />
  <Chip
    kind={isSelected ? 'boldFilled' : 'outlined'}
    label='Select'
    isSelected={isSelected}
    onClick={() => setIsSelected(!isSelected)}
    color='brandSecondary'
    leftIcon={<Icon kind='Add' />}
    rightIcon={<Icon kind='Edit' />}
  />
  <Chip
    kind={isSelected ? 'boldFilled' : 'outlined'}
    label='Select'
    isSelected={isSelected}
    onClick={() => setIsSelected(!isSelected)}
    color='critical'
    leftIcon={<Icon kind='Add' />}
    rightIcon={<Icon kind='Edit' />}
  />
  <Chip
    kind={isSelected ? 'boldFilled' : 'outlined'}
    label='Select'
    isSelected={isSelected}
    onClick={() => setIsSelected(!isSelected)}
    color='success'
    leftIcon={<Icon kind='Add' />}
    rightIcon={<Icon kind='Edit' />}
  />
  <Chip
    kind={isSelected ? 'boldFilled' : 'outlined'}
    label='Select'
    isSelected={isSelected}
    onClick={() => setIsSelected(!isSelected)}
    color='warning'
    leftIcon={<Icon kind='Add' />}
    rightIcon={<Icon kind='Edit' />}
  />
  <Chip
    kind={isSelected ? 'boldFilled' : 'outlined'}
    label='Select'
    isSelected={isSelected}
    onClick={() => setIsSelected(!isSelected)}
    color='info'
    leftIcon={<Icon kind='Add' />}
    rightIcon={<Icon kind='Edit' />}
  />
</Box>;
```

Colors:

```js
import { Box, Icon, Label } from '@saviynt/design-system';

<Box className='flexContainer'>
  <Box className='rowFlexContainer'>
    <Chip
      kind='outlined'
      label='Outline'
      leftIcon={<Icon kind='Add' />}
      rightIcon={<Icon kind='Edit' />}
    />
    <Chip
      kind='outlined'
      label='Outline'
      color='brandPrimary'
      leftIcon={<Icon kind='Add' />}
      rightIcon={<Icon kind='Edit' />}
    />
    <Chip
      kind='outlined'
      label='Outline'
      color='brandSecondary'
      leftIcon={<Icon kind='Add' />}
      rightIcon={<Icon kind='Edit' />}
    />
    <Chip
      kind='outlined'
      label='Outline'
      color='critical'
      leftIcon={<Icon kind='Add' />}
      rightIcon={<Icon kind='Edit' />}
    />
    <Chip
      kind='outlined'
      label='Outline'
      color='success'
      leftIcon={<Icon kind='Add' />}
      rightIcon={<Icon kind='Edit' />}
    />
    <Chip
      kind='outlined'
      label='Outline'
      color='warning'
      leftIcon={<Icon kind='Add' />}
      rightIcon={<Icon kind='Edit' />}
    />
    <Chip
      kind='outlined'
      label='Outline'
      color='info'
      leftIcon={<Icon kind='Add' />}
      rightIcon={<Icon kind='Edit' />}
    />
  </Box>
  <Box className='rowFlexContainer'>
    <Chip
      kind='boldFilled'
      label='Bold'
      leftIcon={<Icon kind='Add' />}
      rightIcon={<Icon kind='Edit' />}
    />
    <Chip
      kind='boldFilled'
      label='Bold'
      color='brandPrimary'
      leftIcon={<Icon kind='Add' />}
      rightIcon={<Icon kind='Edit' />}
    />
    <Chip
      kind='boldFilled'
      label='Bold'
      color='brandSecondary'
      leftIcon={<Icon kind='Add' />}
      rightIcon={<Icon kind='Edit' />}
    />
    <Chip
      kind='boldFilled'
      label='Bold'
      color='critical'
      leftIcon={<Icon kind='Add' />}
      rightIcon={<Icon kind='Edit' />}
    />
    <Chip
      kind='boldFilled'
      label='Bold'
      color='success'
      leftIcon={<Icon kind='Add' />}
      rightIcon={<Icon kind='Edit' />}
    />
    <Chip
      kind='boldFilled'
      label='Bold'
      color='warning'
      leftIcon={<Icon kind='Add' />}
      rightIcon={<Icon kind='Edit' />}
    />
    <Chip
      kind='boldFilled'
      label='Bold'
      color='info'
      leftIcon={<Icon kind='Add' />}
      rightIcon={<Icon kind='Edit' />}
    />
  </Box>
  <Box className='rowFlexContainer'>
    <Chip
      kind='subtleFilled'
      label='Filled'
      leftIcon={<Icon kind='Add' />}
      rightIcon={<Icon kind='Edit' />}
    />
    <Chip
      kind='subtleFilled'
      label='Filled'
      color='brandPrimary'
      leftIcon={<Icon kind='Add' />}
      rightIcon={<Icon kind='Edit' />}
    />
    <Chip
      kind='subtleFilled'
      label='Filled'
      color='brandSecondary'
      leftIcon={<Icon kind='Add' />}
      rightIcon={<Icon kind='Edit' />}
    />
    <Chip
      kind='subtleFilled'
      label='Filled'
      color='critical'
      leftIcon={<Icon kind='Add' />}
      rightIcon={<Icon kind='Edit' />}
    />
    <Chip
      kind='subtleFilled'
      label='Filled'
      color='success'
      leftIcon={<Icon kind='Add' />}
      rightIcon={<Icon kind='Edit' />}
    />
    <Chip
      kind='subtleFilled'
      label='Filled'
      color='warning'
      leftIcon={<Icon kind='Add' />}
      rightIcon={<Icon kind='Edit' />}
    />
    <Chip
      kind='subtleFilled'
      label='Filled'
      color='info'
      leftIcon={<Icon kind='Add' />}
      rightIcon={<Icon kind='Edit' />}
    />
  </Box>
</Box>;
```

Icons:

```js
import { Box, Icon, Label } from '@saviynt/design-system';

<Box className='rowFlexContainer'>
  <Chip
    label='Both'
    leftIcon={<Icon kind='Add' />}
    rightIcon={<Icon kind='Edit' />}
  />
  <Chip label='Right' rightIcon={<Icon kind='Edit' />} />
  <Chip label='Left' leftIcon={<Icon kind='Add' />} />
  <Chip label='None' />
</Box>;
```

<style>
  .flexContainer {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .rowFlexContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
</style>
