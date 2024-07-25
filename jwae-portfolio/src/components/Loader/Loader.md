**Loop Main**

```js
import { Box } from '@saviynt/design-system';

<Box className='flexBox'>
  <Box className='background'>
    <Loader kind='loop' format='main' color='brand' />
    <Loader kind='loop' format='main' color='inverse' />
  </Box>
</Box>;
```

**Loop Inline**

```js
import { Box } from '@saviynt/design-system';

<Box className='flexBox'>
  <Box className='background'>
    <Loader kind='loop' format='inline' color='brand' />
    <Loader kind='loop' format='inline' color='info' />
    <Loader kind='loop' format='inline' color='critical' />
    <Loader kind='loop' format='inline' color='inverse' />
  </Box>
</Box>;
```

**Dots Inline**

```js
import { Box } from '@saviynt/design-system';

<Box className='flexBox'>
  <Box className='background'>
    <Loader kind='dots' format='inline' color='brand' />
    <Loader kind='dots' format='inline' color='info' />
    <Loader kind='dots' format='inline' color='critical' />
    <Loader kind='dots' format='inline' color='inverse' />
  </Box>
</Box>;
```

**Skeleton**

```js
import { Box } from '@saviynt/design-system';

<Box className='flexBox'>
  <Box className='background'>
    <Loader kind='skeleton' format='circle' color='inverse' />
    <Loader kind='skeleton' format='text' color='inverse' />
    <Loader kind='skeleton' format='square' color='inverse' />
  </Box>
</Box>;
```

<style>
  .flexBox {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .background {
    display: flex;
    align-items: center;   
    gap: 1rem;
    padding: 1rem;
    background: var(--color-page-subtle, #F2F4F8);
  }
</style>
