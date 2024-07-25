Sizes:

```jsx
import { Icon } from '@saviynt/design-system';

<div
  style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
  }}>
  <ButtonIcon
    size='large'
    kind='bold'
    icon={<Icon kind='Edit' size='xSmall' />}
    onClick={() => {
      console.log('Button has been clicked.');
    }}
  />
  <ButtonIcon
    size='medium'
    kind='bold'
    icon={<Icon kind='Edit' size='xSmall' />}
    onClick={() => {
      console.log('Button has been clicked.');
    }}
  />
  <ButtonIcon
    size='small'
    kind='bold'
    icon={<Icon kind='Edit' size='xSmall' />}
    onClick={() => {
      console.log('Button has been clicked.');
    }}
  />
</div>;
```

Kinds:

```jsx
import { Icon } from '@saviynt/design-system';

<>
  <div
    style={{
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
    }}>
    <ButtonIcon
      size='large'
      kind='bold'
      icon={<Icon kind='Edit' size='medium' />}
      onClick={() => {
        console.log('Button has been clicked.');
      }}
    />
    <ButtonIcon
      size='large'
      kind='outlinedSecondary'
      icon={<Icon kind='Edit' size='medium' />}
      onClick={() => {
        console.log('Button has been clicked.');
      }}
    />
    <ButtonIcon
      size='large'
      kind='outlinedNeutral'
      icon={<Icon kind='Edit' size='medium' />}
      onClick={() => {
        console.log('Button has been clicked.');
      }}
    />
    <ButtonIcon
      size='large'
      kind='ghost'
      icon={<Icon kind='Edit' size='medium' />}
      onClick={() => {
        console.log('Button has been clicked.');
      }}
    />
    <ButtonIcon
      size='large'
      kind='outlinedCritical'
      icon={<Icon kind='Edit' size='medium' />}
      onClick={() => {
        console.log('Button has been clicked.');
      }}
    />
    <div style={{ backgroundColor: '#001A40', padding: '0.5rem' }}>
      <ButtonIcon
        dataTheme='dark'
        size='large'
        kind='ghost'
        icon={<Icon kind='Edit' size='medium' />}
        onClick={() => {
          console.log('Button has been clicked.');
        }}
      />
    </div>
    <ButtonIcon
      size='large'
      kind='bold'
      isDisabled
      icon={<Icon kind='Edit' size='medium' />}
      onClick={() => {
        console.log('Button has been clicked.');
      }}
    />
    <ButtonIcon
      size='large'
      kind='ghost'
      isDisabled
      icon={<Icon kind='Edit' size='medium' />}
      onClick={() => {
        console.log('Button has been clicked.');
      }}
    />
  </div>
</>;
```

Selected state:

```jsx
import { Icon } from '@saviynt/design-system';
import { useState } from 'react';

const [selected1, setSelected1] = useState(1);

<>
  <div
    style={{
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
    }}>
    <ButtonIcon
      size='large'
      kind='bold'
      isSelected={selected1 === 1 ? true : false}
      icon={<Icon kind='Edit' size='xSmall' />}
      onClick={() => {
        setSelected1(1);
      }}
    />
    <ButtonIcon
      size='large'
      kind='bold'
      isSelected={selected1 === 2 ? true : false}
      icon={<Icon kind='Edit' size='xSmall' />}
      onClick={() => {
        setSelected1(2);
      }}
    />
    <ButtonIcon
      size='large'
      kind='bold'
      isSelected={selected1 === 3 ? true : false}
      icon={<Icon kind='Edit' size='xSmall' />}
      onClick={() => {
        setSelected1(3);
      }}
    />
  </div>
  <br />
  <div
    style={{
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
    }}>
    <ButtonIcon
      size='large'
      kind='outlinedSecondary'
      isSelected={selected1 === 1 ? true : false}
      icon={<Icon kind='Edit' size='xSmall' />}
      onClick={() => {
        setSelected1(1);
      }}
    />
    <ButtonIcon
      size='large'
      kind='outlinedSecondary'
      isSelected={selected1 === 2 ? true : false}
      icon={<Icon kind='Edit' size='xSmall' />}
      onClick={() => {
        setSelected1(2);
      }}
    />
    <ButtonIcon
      size='large'
      kind='outlinedSecondary'
      isSelected={selected1 === 3 ? true : false}
      icon={<Icon kind='Edit' size='xSmall' />}
      onClick={() => {
        setSelected1(3);
      }}
    />
  </div>
  <br />
  <div
    style={{
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
    }}>
    <ButtonIcon
      size='large'
      kind='outlinedNeutral'
      isSelected={selected1 === 1 ? true : false}
      icon={<Icon kind='Edit' size='xSmall' />}
      onClick={() => {
        setSelected1(1);
      }}
    />
    <ButtonIcon
      size='large'
      kind='outlinedNeutral'
      isSelected={selected1 === 2 ? true : false}
      icon={<Icon kind='Edit' size='xSmall' />}
      onClick={() => {
        setSelected1(2);
      }}
    />
    <ButtonIcon
      size='large'
      kind='outlinedNeutral'
      isSelected={selected1 === 3 ? true : false}
      icon={<Icon kind='Edit' size='xSmall' />}
      onClick={() => {
        setSelected1(3);
      }}
    />
  </div>
  <br />
  <div
    style={{
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
    }}>
    <ButtonIcon
      size='large'
      kind='ghost'
      isSelected={selected1 === 1 ? true : false}
      icon={<Icon kind='Edit' size='xSmall' />}
      onClick={() => {
        setSelected1(1);
      }}
    />
    <ButtonIcon
      size='large'
      kind='ghost'
      isSelected={selected1 === 2 ? true : false}
      icon={<Icon kind='Edit' size='xSmall' />}
      onClick={() => {
        setSelected1(2);
      }}
    />
    <ButtonIcon
      size='large'
      kind='ghost'
      isSelected={selected1 === 3 ? true : false}
      icon={<Icon kind='Edit' size='xSmall' />}
      onClick={() => {
        setSelected1(3);
      }}
    />
  </div>
  <br />
  <div
    style={{
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
      backgroundColor: '#001A40',
      padding: '0.5rem',
    }}>
    <ButtonIcon
      dataTheme='dark'
      size='large'
      kind='ghost'
      isSelected={selected1 === 1 ? true : false}
      icon={<Icon kind='Edit' size='xSmall' />}
      onClick={() => {
        setSelected1(1);
      }}
    />
    <ButtonIcon
      dataTheme='dark'
      size='large'
      kind='ghost'
      isSelected={selected1 === 2 ? true : false}
      icon={<Icon kind='Edit' size='xSmall' />}
      onClick={() => {
        setSelected1(2);
      }}
    />
    <ButtonIcon
      dataTheme='dark'
      size='large'
      kind='ghost'
      isSelected={selected1 === 3 ? true : false}
      icon={<Icon kind='Edit' size='xSmall' />}
      onClick={() => {
        setSelected1(3);
      }}
    />
  </div>
</>;
```
