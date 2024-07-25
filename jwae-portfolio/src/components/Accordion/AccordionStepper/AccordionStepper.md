Basic:

```js
import { useState } from 'react';
import { Box, Button, Icon, Link } from '@saviynt/design-system';

const [isExpanded1, setIsExpanded1] = useState(false);
const [isExpanded2, setIsExpanded2] = useState(false);
const [isExpanded3, setIsExpanded3] = useState(false);
const [isExpanded4, setIsExpanded4] = useState(false);
const [isExpanded5, setIsExpanded5] = useState(false);

const accordionPanelContent = () => {
  return (
    <Box className='contentFlexBox'>
      <p>Container to fill with content.</p>
    </Box>
  );
};

<Box className='bg'>
  <AccordionStepper
    isExpanded={isExpanded1}
    setIsExpanded={setIsExpanded1}
    prefixIconKind='Account'
    headerText='Has only primary supporting text, and is not showing on expanded.'
    primarySupportingText='Primary Supporting Text'
    suffixLink={
      <Link
        url='http://localhost:6060/#/Components/AccordionStepper'
        text='Optional Link'
        prefixIconKind='LinkChain'
        target='_self'
        shouldStopPropagation
      />
    }>
    {accordionPanelContent()}
  </AccordionStepper>
  <AccordionStepper
    isExpanded={isExpanded2}
    setIsExpanded={setIsExpanded2}
    prefixIconKind='Account'
    headerText='Has only primary supporting text.'
    primarySupportingText='Primary Supporting Text'
    isShowingSupportingTextOnExpanded
    suffixLink={
      <Link
        url='http://localhost:6060/#/Components/AccordionStepper'
        text='Optional Link'
        prefixIconKind='LinkChain'
        target='_self'
        shouldStopPropagation
      />
    }>
    {accordionPanelContent()}
  </AccordionStepper>
  <AccordionStepper
    isExpanded={isExpanded3}
    setIsExpanded={setIsExpanded3}
    prefixIconKind='Account'
    headerText='Accordion Value and secondary text, and is not showing on expanded.'
    primarySupportingText='Primary Supporting Text'
    secondarySupportingText='Secondary Supporting Text'
    accordionValue={<div>Accordion Value</div>}
    suffixLink={
      <Link
        url='http://localhost:6060/#/Components/AccordionStepper'
        text='Optional Link'
        prefixIconKind='LinkChain'
        target='_self'
        shouldStopPropagation
      />
    }>
    {accordionPanelContent()}
  </AccordionStepper>
  <AccordionStepper
    isExpanded={isExpanded4}
    setIsExpanded={setIsExpanded4}
    prefixIconKind='Account'
    headerText='Accordion Value and no secondary text.'
    primarySupportingText='Primary Supporting Text'
    accordionValue={<div>Accordion Value</div>}
    isShowingSupportingTextOnExpanded
    suffixLink={
      <Link
        url='http://localhost:6060/#/Components/AccordionStepper'
        text='Optional Link'
        prefixIconKind='LinkChain'
        target='_self'
        shouldStopPropagation
      />
    }>
    {accordionPanelContent()}
  </AccordionStepper>
  <AccordionStepper
    isExpanded={isExpanded5}
    setIsExpanded={setIsExpanded5}
    prefixIconKind='Account'
    headerText='Accordion Value and secondary text.'
    primarySupportingText='Primary Supporting Text'
    secondarySupportingText='Secondary Supporting Text'
    accordionValue={<div>Accordion Value</div>}
    isShowingSupportingTextOnExpanded
    suffixLink={
      <Link
        url='http://localhost:6060/#/Components/AccordionStepper'
        text='Optional Link'
        prefixIconKind='LinkChain'
        target='_self'
        shouldStopPropagation
      />
    }>
    {accordionPanelContent()}
  </AccordionStepper>
</Box>;
```

Example:

```js
import { useState } from 'react';
import {
  Box,
  Button,
  Icon,
  InputField,
  Link,
  Typography,
} from '@saviynt/design-system';

const [isExpanded, setIsExpanded] = useState(false);
const [savedValue, setSavedValue] = useState({
  SERVER: '',
  PORT: '3389',
});
const [value1, setValue1] = useState('');
const [value2, setValue2] = useState('3389');

const handleSubmit = () => {
  setIsExpanded(false);
  setSavedValue({ SERVER: value1, PORT: value2 });
};

const accordionSupportingValue = () => {
  return savedValue.SERVER && !isExpanded ? (
    <div className='accordionValueFlexBox'>
      <div className='accordionValueBody'>
        <p className='accordionValueHeading'>
          Server:
          <span className='accordionValue'>{savedValue.SERVER}</span>
        </p>
      </div>
      <div className='accordionValueBody'>
        <p className='accordionValueHeading'>
          Port:
          <span className='accordionValue'>{savedValue.PORT}</span>
        </p>
      </div>
    </div>
  ) : null;
};

const accordionPanelContent = () => {
  return (
    <Box className='contentFlexBox'>
      <Box className='inputFlexBox'>
        <InputField
          name='Target IP'
          placeholder='Enter the name or IP address of the remote system'
          label={
            <Typography kind='label' htmlFor='Target Windows Server'>
              Target Windows Server
            </Typography>
          }
          backgroundColor='secondary'
          isRequired
          value={value1}
          setValue={setValue1}
        />
        <InputField
          name='Port Number'
          placeholder='Port Number'
          label={
            <Typography kind='label' htmlFor='Port Number'>
              Port Number
            </Typography>
          }
          backgroundColor='secondary'
          value={value2}
          setValue={setValue2}
        />
      </Box>
      {isExpanded && value1.length > 0 ? (
        <Box className='buttonFlexBox'>
          <Button type='button' kind='filled' onClick={() => handleSubmit()}>
            Continue
          </Button>
        </Box>
      ) : null}
    </Box>
  );
};

<Box className='bg'>
  <AccordionStepper
    isExpanded={isExpanded}
    setIsExpanded={setIsExpanded}
    prefixIconKind='Server'
    headerText='What server would you like to connect to?'
    primarySupportingText='Enter the Target Server Details'
    secondarySupportingText='Secondary Supporting Text'
    accordionValue={accordionSupportingValue()}
    suffixLink={
      <Link
        url='http://localhost:6060/#/Components/AccordionStepper'
        text='Optional Link'
        prefixIconKind='LinkChain'
        target='_self'
        shouldStopPropagation
      />
    }>
    {accordionPanelContent()}
  </AccordionStepper>
</Box>;
```

<style>
  .contentFlexBox {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%
  }
  .inputFlexBox {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    width: 100%
  }
  .buttonFlexBox {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0.5rem 0;
  }

  .accordionValueFlexBox {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  .accordionValueBody {
    display: flex;
    align-items: center; 
  }
  .accordionValueHeading {
    color: var(--color-foreground-secondary-bold, #00245B);
    font: var(--typography-body-1);
    margin: 0;
  }
  .accordionValue {
    color: var(--color-foreground-secondary-bold, #00245B);
    font: var(--typography-body-bold-1);
    margin: 0;
  }

  .bg {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem;
    background: #717385;
  }
</style>
