Static Examples:

```jsx
import { Box } from '@saviynt/design-system';

<Box className='flexBox'>
  <Box className='flexColumn'>
    <Typography kind='header'>Desktop:</Typography>
    <Typography kind='h1' desktop='h1-d' mobile='h1-d'>
      Heading 1
    </Typography>
    <Typography kind='h2' desktop='h2-d' mobile='h2-d'>
      Heading 2
    </Typography>
    <Typography kind='h3' desktop='h3-d' mobile='h3-d'>
      Heading 3
    </Typography>
    <Typography kind='h4' desktop='h4-d' mobile='h4-d'>
      Heading 4
    </Typography>
    <Typography kind='h5' desktop='h5-d' mobile='h5-d'>
      Heading 5
    </Typography>
    <Typography kind='body1' desktop='body1-d' mobile='body1-d'>
      body1
    </Typography>
    <Typography kind='body1-bold' desktop='body1-bold-d' mobile='body1-bold-d'>
      body1-bold
    </Typography>
    <Typography kind='body2' desktop='body2-d' mobile='body2-d'>
      body2
    </Typography>
    <Typography kind='body2-bold' desktop='body2-bold-d' mobile='body2-bold-d'>
      body2-bold
    </Typography>
    <Typography kind='body3' desktop='body3-d' mobile='body3-d'>
      body3
    </Typography>
    <Typography kind='body3-bold' desktop='body3-bold-d' mobile='body3-bold-d'>
      body3-bold
    </Typography>
    <Typography kind='header' desktop='display-d' mobile='display-d'>
      Display
    </Typography>
    <Typography kind='label' desktop='h3-d' mobile='h3-d'>
      label
    </Typography>
  </Box>
  <Box className='flexColumn'>
    <Typography kind='header'>Mobile:</Typography>
    <Typography kind='h1' desktop='h1-m' mobile='h1-m'>
      Heading 1
    </Typography>
    <Typography kind='h2' desktop='h2-m' mobile='h2-m'>
      Heading 2
    </Typography>
    <Typography kind='h3' desktop='h3-m' mobile='h3-m'>
      Heading 3
    </Typography>
    <Typography kind='h4' desktop='h4-m' mobile='h4-m'>
      Heading 4
    </Typography>
    <Typography kind='h5' desktop='h5-m' mobile='h5-m'>
      Heading 5
    </Typography>
    <Typography kind='body1' desktop='body1-m' mobile='body1-m'>
      body1
    </Typography>
    <Typography kind='body1-bold' desktop='body1-bold-m' mobile='body1-bold-m'>
      body1-bold
    </Typography>
    <Typography kind='body2' desktop='body2-m' mobile='body2-m'>
      body2
    </Typography>
    <Typography kind='body2-bold' desktop='body2-bold-m' mobile='body2-bold-m'>
      body2-bold
    </Typography>
    <Typography kind='body3' desktop='body3-m' mobile='body3-m'>
      body3
    </Typography>
    <Typography kind='body3-bold' desktop='body3-bold-m' mobile='body3-bold-m'>
      body3-bold
    </Typography>
    <Typography kind='header' desktop='display-m' mobile='display-m'>
      Display
    </Typography>
    <Typography kind='label' desktop='h3-m' mobile='h3-m'>
      label
    </Typography>
  </Box>
</Box>;
```

Responsive Examples:

```jsx
import { Box } from '@saviynt/design-system';

<Box className='flexColumn'>
  <Typography kind='header'>Responsive:</Typography>
  <Typography kind='h1'>Heading 1</Typography>
  <Typography kind='h2'>Heading 2</Typography>
  <Typography kind='h3'>Heading 3</Typography>
  <Typography kind='h4'>Heading 4</Typography>
  <Typography kind='h5'>Heading 5</Typography>
  <Typography kind='body1'>body1</Typography>
  <Typography kind='body1-bold'>body1-bold</Typography>
  <Typography kind='body2'>body2</Typography>
  <Typography kind='body2-bold'>body2-bold</Typography>
  <Typography kind='body3'>body3</Typography>
  <Typography kind='body3-bold'>body3-bold</Typography>
  <Typography kind='header'>Display</Typography>
  <Typography kind='label'>label</Typography>
</Box>;
```

<style>
  .flexBox {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .flexColumn {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
</style>
