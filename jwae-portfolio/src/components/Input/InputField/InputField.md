Default Neutral, Secondary, Disabled, Read-only, Max-length:

```jsx
import { useState } from 'react';
import { Box, Typography } from '@saviynt/design-system';

const [value1, setValue1] = useState('');
const [value2, setValue2] = useState('');
const [value3, setValue3] = useState('');
const [value4, setValue4] = useState(
  'Lorem ipsum dolor sit amet consectetur. Massa cras risus ac posuere porttitor vel sit amet felis. Accumsan adipiscing velit id ultrices rhoncus amet. Eget platea nunc a ridiculus venenatis risus purus.'
);
const [value5, setValue5] = useState('');

<Box className='flexBox'>
  <InputField
    name='basic'
    placeholder='Placeholder'
    label={
      <Typography kind='label' htmlFor='Neutral'>
        Neutral
      </Typography>
    }
    value={value1}
    setValue={setValue1}
  />
  <InputField
    name='basic'
    placeholder='Placeholder'
    label={
      <Typography kind='label' htmlFor='Secondary'>
        Secondary
      </Typography>
    }
    backgroundColor='secondary'
    value={value2}
    setValue={setValue2}
  />
  <InputField
    name='disabled'
    placeholder='Placeholder'
    label={
      <Typography kind='label' htmlFor='Disabled'>
        Disabled
      </Typography>
    }
    isDisabled
    value={value3}
    setValue={setValue3}
  />
  <InputField
    name='disabled'
    placeholder='Placeholder'
    label={
      <Typography kind='label' htmlFor='Read-only'>
        Read-only
      </Typography>
    }
    isReadOnly
    value={value4}
    setValue={setValue4}
  />
  <InputField
    name='maxLength'
    placeholder='Max 5 chars'
    label={
      <Typography kind='label' htmlFor='Max-length'>
        Max-length
      </Typography>
    }
    value={value5}
    setValue={setValue5}
    maxLength={5}
  />
</Box>;
```

Suffix Button Variety:

```jsx
import {
  Box,
  Button,
  Icon,
  InlineMessage,
  Typography,
} from '@saviynt/design-system';
import { useState } from 'react';

const [value1, setValue1] = useState('');
const [value2, setValue2] = useState('');
const [value3, setValue3] = useState('');
const [value4, setValue4] = useState('');
const [value5, setValue5] = useState('SuperSecretPassword');
const [critical, setCritical] = useState(true);
const [visible, setVisible] = useState(false);

<Box className='flexBox'>
  <InputField
    name='basic'
    placeholder='Placeholder'
    label={
      <Typography kind='label' htmlFor='Neutral'>
        Neutral
      </Typography>
    }
    suffixButtonType='password'
    suffixOnClick={() => console.log('Test suffixOnClick')}
    value={value1}
    setValue={setValue1}
  />
  <InputField
    name='basic'
    placeholder='Placeholder'
    label={
      <Typography kind='label' htmlFor='Secondary'>
        Secondary
      </Typography>
    }
    backgroundColor='secondary'
    suffixButtonType='password'
    suffixOnClick={() => console.log('Test suffixOnClick')}
    value={value2}
    setValue={setValue2}
  />
  <InputField
    name='basic'
    placeholder='Placeholder'
    label={
      <Typography kind='label' htmlFor='Critical'>
        Critical
      </Typography>
    }
    suffixButtonType='password'
    suffixOnClick={() => {
      console.log('Test suffixOnClick');
    }}
    value={value3}
    setValue={setValue3}
    isRequired
    isCritical={critical}
    setIsCritical={setCritical}
    CriticalHelperText={
      <InlineMessage
        text='Helper Text'
        colorTheme='critical'
        size='small'
        leftIcon={<Icon kind='AlertCritical' color='critical-700' />}
      />
    }
  />
  <Box className='buttonBox'>
    <Button
      onClick={() => setCritical(!critical)}
      type='button'
      kind='filled'
      size='small'>
      Toggle Critical
    </Button>
  </Box>
  <InputField
    name='basic'
    placeholder='Placeholder'
    label={
      <Typography kind='label' htmlFor='Disabled'>
        Disabled
      </Typography>
    }
    backgroundColor='neutral'
    suffixButtonType='password'
    suffixOnClick={() => {
      console.log('Test suffixOnClick');
    }}
    value={value4}
    setValue={setValue4}
    isDisabled
  />
  <InputField
    name='disabled'
    placeholder='Placeholder'
    label={
      <Typography kind='label' htmlFor='Read-only'>
        Read-only
      </Typography>
    }
    suffixButtonType='password'
    suffixOnClick={() => {
      console.log('Test suffixOnClick');
    }}
    isReadOnly
    suffixIsToggle={visible}
    type={visible ? 'text' : 'password'}
    suffixOnClick={() => setVisible(!visible)}
    value={value5}
    setValue={setValue5}
  />
</Box>;
```

Suffix Button Types:

```jsx
import { Box, Icon, InlineMessage, Typography } from '@saviynt/design-system';
import { useState } from 'react';

const [value1, setValue1] = useState('');
const [visible, setVisible] = useState(false);
const [value2, setValue2] = useState('');
const [value3, setValue3] = useState('');
const [dropdown, setDropdown] = useState(false);
const [value4, setValue4] = useState('');

<Box className='flexBox'>
  <InputField
    name='basic'
    placeholder='Password'
    label={
      <Typography kind='label' htmlFor='Password'>
        Password
      </Typography>
    }
    suffixButtonType='password'
    suffixIsToggle={visible}
    type={visible ? 'text' : 'password'}
    suffixOnClick={() => setVisible(!visible)}
    value={value1}
    setValue={setValue1}
  />
  <InputField
    name='dateInput'
    placeholder='MM/DD/YYYY'
    label={
      <Typography kind='label' htmlFor='Date'>
        Date
      </Typography>
    }
    suffixButtonType='date'
    suffixOnClick={() => {}}
    value={value2}
    setValue={setValue2}
  />
  <InputField
    name='basic'
    placeholder='Placeholder'
    label={
      <Typography kind='label' htmlFor='Dropdown'>
        Dropdown
      </Typography>
    }
    suffixButtonType='dropdown'
    suffixIsToggle={dropdown}
    suffixOnClick={() => setDropdown(!dropdown)}
    value={value3}
    setValue={setValue3}
  />
  <InputField
    name='basic'
    placeholder='HH : MM : SS'
    label={
      <Typography kind='label' htmlFor='Select Time'>
        Select Time
      </Typography>
    }
    suffixButtonType='timePicker'
    suffixOnClick={() => console.log('Test suffixOnClick')}
    value={value4}
    setValue={setValue4}
  />
</Box>;
```

Search Small, Medium, Large:

```jsx
import { Box, Icon, Typography } from '@saviynt/design-system';
import { useState } from 'react';

const [value1, setValue1] = useState('');
const [value2, setValue2] = useState('');
const [value3, setValue3] = useState('');

<Box className='flexBox'>
  <InputField
    name='basic'
    placeholder='Placeholder'
    label={
      <Typography kind='label' htmlFor='Label'>
        Label
      </Typography>
    }
    kind='search'
    prefixIcon={<Icon kind='search' color='neutral-600' size='smallMedium' />}
    value={value1}
    setValue={setValue1}
  />
  <InputField
    name='basic'
    placeholder='Placeholder'
    label={
      <Typography kind='label' htmlFor='Label'>
        Label
      </Typography>
    }
    kind='search'
    size='medium'
    prefixIcon={<Icon kind='search' color='neutral-600' size='smallMedium' />}
    value={value2}
    setValue={setValue2}
  />
  <InputField
    name='basic'
    placeholder='Placeholder'
    label={
      <Typography kind='label' htmlFor='Label'>
        Label
      </Typography>
    }
    kind='search'
    size='small'
    prefixIcon={<Icon kind='search' color='neutral-600' size='smallMedium' />}
    value={value3}
    setValue={setValue3}
  />
</Box>;
```

Singleline Has Value:

```jsx
import { Box, Icon, Typography } from '@saviynt/design-system';
import { useState } from 'react';

const [value1, setValue1] = useState(
  'Lorem ipsum dolor sit amet consectetur. Massa cras risus ac posuere porttitor vel sit amet felis. Accumsan adipiscing velit id ultrices rhoncus amet. Eget platea nunc a ridiculus venenatis risus purus.'
);
const [value2, setValue2] = useState(
  'Lorem ipsum dolor sit amet consectetur. Massa cras risus ac posuere porttitor vel sit amet felis. Accumsan adipiscing velit id ultrices rhoncus amet. Eget platea nunc a ridiculus venenatis risus purus.'
);
const [value3, setValue3] = useState(
  'Lorem ipsum dolor sit amet consectetur. Massa cras risus ac posuere porttitor vel sit amet felis. Accumsan adipiscing velit id ultrices rhoncus amet. Eget platea nunc a ridiculus venenatis risus purus.'
);

<Box className='flexBox'>
  <InputField
    name='basic'
    placeholder='Placeholder'
    label={
      <Typography kind='label' htmlFor='Label'>
        Label
      </Typography>
    }
    value={value1}
    setValue={setValue1}
  />
  <InputField
    name='disabled'
    placeholder='Placeholder'
    label={
      <Typography kind='label' htmlFor='Disabled'>
        Disabled
      </Typography>
    }
    value={value2}
    setValue={setValue2}
    isDisabled
  />
  <InputField
    name='basic'
    placeholder='Placeholder'
    label={
      <Typography kind='label' htmlFor='Label'>
        Label
      </Typography>
    }
    kind='search'
    value={value3}
    setValue={setValue3}
    prefixIcon={<Icon kind='search' color='neutral-600' size='smallMedium' />}
  />
</Box>;
```

Required Warning/Critical:

```jsx
import {
  Box,
  Button,
  Icon,
  InlineMessage,
  Typography,
} from '@saviynt/design-system';
import { useState } from 'react';

const [value1, setValue1] = useState('');
const [value2, setValue2] = useState('');
const [value3, setValue3] = useState('');
const [isCritical, setIsCritical] = useState(true);

<Box className='flexBox'>
  <InputField
    name='required'
    placeholder='Placeholder'
    label={
      <Typography kind='label' htmlFor='Warning'>
        Warning
      </Typography>
    }
    value={value1}
    setValue={setValue1}
    isRequired
  />
  <InputField
    name='required'
    placeholder='Placeholder'
    label={
      <Typography kind='label' htmlFor='Warning'>
        Warning (Minimum 5 chars)
      </Typography>
    }
    value={value2}
    setValue={setValue2}
    isRequired
    minRequiredChars={5}
  />
  <InputField
    name='required'
    placeholder='Placeholder'
    label={
      <Typography kind='label' htmlFor='Critical'>
        Critical
      </Typography>
    }
    value={value3}
    setValue={setValue3}
    isRequired
    isCritical={isCritical}
    setIsCritical={setIsCritical}
    CriticalHelperText={
      <InlineMessage
        text='Helper Text'
        colorTheme='critical'
        size='small'
        leftIcon={<Icon kind='AlertCritical' color='critical-700' />}
      />
    }
  />
  <Box className='buttonBox'>
    <Button
      onClick={() => setIsCritical(!isCritical)}
      type='button'
      kind='filled'
      size='small'>
      Toggle Critical
    </Button>
  </Box>
</Box>;
```

Multiline Variety:

```jsx
import { Box, Icon, InlineMessage, Typography } from '@saviynt/design-system';
import { useState } from 'react';

const [value1, setValue1] = useState('');
const [value2, setValue2] = useState('');
const [value3, setValue3] = useState('');
const [value4, setValue4] = useState(
  'Lorem ipsum dolor sit amet consectetur. Massa cras risus ac posuere porttitor vel sit amet felis. Accumsan adipiscing velit id ultrices rhoncus amet. Eget platea nunc a ridiculus venenatis risus purus. Lorem ipsum dolor sit amet consectetur. Massa cras risus ac posuere porttitor vel sit amet felis. Accumsan adipiscing velit id ultrices rhoncus amet. Eget platea nunc a ridiculus venenatis risus purus.'
);
const [value5, setValue5] = useState(
  'Lorem ipsum dolor sit amet consectetur. Massa cras risus ac posuere porttitor vel sit amet felis. Accumsan adipiscing velit id ultrices rhoncus amet. Eget platea nunc a ridiculus venenatis risus purus. Lorem ipsum dolor sit amet consectetur. Massa cras risus ac posuere porttitor vel sit amet felis. Accumsan adipiscing velit id ultrices rhoncus amet. Eget platea nunc a ridiculus venenatis risus purus.'
);
const [critical, setCritical] = useState(false);

<Box className='flexBox'>
  <InputField
    name='basic'
    placeholder='Placeholder'
    label={
      <Typography kind='label' htmlFor='Neutral'>
        Neutral
      </Typography>
    }
    value={value1}
    setValue={setValue1}
    kind='multiline'
  />
  <InputField
    name='basic'
    placeholder='Placeholder'
    label={
      <Typography kind='label' htmlFor='Required'>
        Required
      </Typography>
    }
    value={value2}
    setValue={setValue2}
    kind='multiline'
    isRequired
  />
  <InputField
    name='basic'
    placeholder='Placeholder'
    label={
      <Typography kind='label' htmlFor='Critical'>
        Critical
      </Typography>
    }
    value={value3}
    setValue={setValue3}
    kind='multiline'
    isRequired
    isCritical={critical}
    setIsCritical={setCritical}
    CriticalHelperText={
      <InlineMessage
        text='Helper Text'
        colorTheme='critical'
        size='small'
        leftIcon={<Icon kind='AlertCritical' color='critical-700' />}
      />
    }
  />
  <InputField
    name='basic'
    placeholder='Placeholder'
    label={
      <Typography kind='label' htmlFor='Disabled'>
        Disabled
      </Typography>
    }
    value={value4}
    setValue={setValue4}
    backgroundColor='secondary'
    kind='multiline'
    isDisabled
  />
  <InputField
    name='basic'
    placeholder='Placeholder'
    label={
      <Typography kind='label' htmlFor='Filled'>
        Filled
      </Typography>
    }
    value={value5}
    setValue={setValue5}
    kind='multiline'
  />
</Box>;
```

Type Number:

```jsx
import { useState } from 'react';
import { Typography } from '@saviynt/design-system';

const [value1, setValue1] = useState('');

<InputField
  type='text'
  inputmode='numeric'
  name='NumberInput'
  placeholder='Enter number'
  label={
    <Typography kind='label' htmlFor='Input Type Number'>
      Input Type Number
    </Typography>
  }
  value={value1}
  setValue={setValue1}
  regexPattern='[0-9]*'
/>;
```

<style>
  .flexBox {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .buttonBox {
    width: min-content;
  }
</style>
