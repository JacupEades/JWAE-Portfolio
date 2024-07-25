```jsx
import React from 'react';
import myImage from './alertbanner-bezier-opacity.png';

const MyImage = () => {
  return <img src={myImage} alt='Bezier Control Points' width='200px' />;
};

<>
  Animation bezier function
  <br />
  <br />
  <MyImage />
</>;
```

**Success Position Fixed:**

```jsx
import { Button, Icon, Link } from '@saviynt/design-system';
import { useState } from 'react';
const [isVisible, setIsVisible] = useState(false);
const onCancel = (e) => setIsVisible(false);

<>
  <AlertBanner
    colorTheme='Success'
    title='Success!'
    description="You've extended your access. I'm a fixed position alert banner."
    isVisible={isVisible}
    onCancel={onCancel}
    isColonVisible={false}
    isFloating
    position={{ type: 'fixed', top: '4.25rem' }}
    LinkComponent={
      <Link
        url='https://duckduckgo.com'
        text='View Details'
        suffixIconKind='ChevronRight'
        color='neutralInverse'
      />
    }
  />

  <Button onClick={() => setIsVisible(true)}>View Floating Banner</Button>
</>;
```

**Success Position Fixed Auto Dismiss:**

```jsx
import { Button, Icon, Link } from '@saviynt/design-system';
import { useState } from 'react';
const [isVisible, setIsVisible] = useState(false);
const onCancel = (e) => setIsVisible(false);

<>
  <AlertBanner
    colorTheme='Success'
    title='Success!'
    description="You've extended your access. I'm a fixed position alert banner."
    isVisible={isVisible}
    onCancel={onCancel}
    isColonVisible={false}
    isFloating
    position={{ type: 'fixed', top: '4.25rem' }}
    shouldAutoDismiss
    autoDismissDelay={2000}
    LinkComponent={
      <Link
        url='https://duckduckgo.com'
        text='View Details'
        suffixIconKind='ChevronRight'
        color='neutralInverse'
      />
    }
  />

  <Button onClick={() => setIsVisible(true)}>View Floating Banner</Button>
</>;
```

**Critical:**

```jsx
import { useState } from 'react';
const [isVisible, setIsVisible] = useState(true);
const onCancel = (e) => setIsVisible(false);

<AlertBanner
  colorTheme='Critical'
  title='Connection Failure'
  description='The attempt may have timed out or was denied by the server for some reason.'
  isVisible={isVisible}
  onCancel={onCancel}
/>;
```

**Warning:**

```jsx
import { useState } from 'react';
const [isVisible, setIsVisible] = useState(true);
const onCancel = (e) => setIsVisible(false);

<AlertBanner
  colorTheme='Warning'
  title='Server Connection Timed Out'
  description='The connection to the URL server timed out. Error Code: 502.'
  isVisible={isVisible}
  onCancel={onCancel}
/>;
```

**Success:**

```jsx
import { useState } from 'react';
const [isVisible, setIsVisible] = useState(true);
const onCancel = (e) => setIsVisible(false);

<AlertBanner
  colorTheme='Success'
  title='Connection Successful'
  description='You can now save this connection, and you can edit it later if needed.'
  isVisible={isVisible}
  onCancel={onCancel}
/>;
```

**Information:**

```jsx
import { useState } from 'react';
const [isVisible, setIsVisible] = useState(true);
const onCancel = (e) => setIsVisible(false);

<AlertBanner
  colorTheme='Information'
  title='Evaluating Risks'
  description='We’ll email you once the evaluation is complete.'
  onCancel={onCancel}
  isVisible={isVisible}
/>;
```

**Critical with Link:**

```jsx
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Icon, Link } from '@saviynt/design-system';

const [isVisible, setIsVisible] = useState(true);
const onCancel = (e) => setIsVisible(false);

<AlertBanner
  colorTheme='Critical'
  title='Connection Failure'
  description='The attempt may have timed out or was denied by the server for some reason.'
  onCancel={onCancel}
  isVisible={isVisible}
  LinkComponent={
    <Link
      url='https://duckduckgo.com'
      text='Link'
      suffixIconKind='ChevronRight'
      color='neutralInverse'
    />
  }
/>;
```

**Warning with Link:**

```jsx
import { Link as RouterLink } from 'react-router-dom';
import { Icon, Link } from '@saviynt/design-system';
import { useState } from 'react';

const [isVisible, setIsVisible] = useState(true);
const onCancel = (e) => setIsVisible(false);

<AlertBanner
  colorTheme='Warning'
  title='Server Connection Timed Out'
  description='The connection to the URL server timed out. Error Code: 502.'
  onCancel={onCancel}
  isVisible={isVisible}
  LinkComponent={
    <Link
      url='https://duckduckgo.com'
      text='Link'
      suffixIconKind='ChevronRight'
      color='neutral'
    />
  }
/>;
```

**Success with Link:**

```jsx
import { Link as RouterLink } from 'react-router-dom';
import { Icon, Link } from '@saviynt/design-system';
import { useState } from 'react';

const [isVisible, setIsVisible] = useState(true);
const onCancel = (e) => setIsVisible(false);

<AlertBanner
  colorTheme='Success'
  title='Connection Successful'
  description='You can now save this connection, and you can edit it later if needed.'
  onCancel={onCancel}
  isVisible={isVisible}
  LinkComponent={
    <Link
      url='https://duckduckgo.com'
      text='Link'
      suffixIconKind='ChevronRight'
      color='neutralInverse'
    />
  }
/>;
```

**Information with Link:**

```jsx
import { Link as RouterLink } from 'react-router-dom';
import { Icon, Link } from '@saviynt/design-system';
import { useState } from 'react';

const [isVisible, setIsVisible] = useState(true);
const onCancel = (event) => setIsVisible(false);

<AlertBanner
  colorTheme='Information'
  title='Evaluating Risks'
  description='We’ll email you once the evaluation is complete.'
  onCancel={onCancel}
  isVisible={isVisible}
  LinkComponent={
    <Link
      url='https://duckduckgo.com'
      text='Link'
      suffixIconKind='ChevronRight'
      color='neutralInverse'
    />
  }
/>;
```

**Success (Low Emphasis):**

```jsx
import { useState } from 'react';

const [isVisible, setIsVisible] = useState(true);
const onCancel = (e) => setIsVisible(false);

<AlertBanner
  colorTheme='Success'
  kind='low'
  title='Success'
  description='Your profile has been updated.'
  onCancel={onCancel}
  isVisible={isVisible}
/>;
```

**Information (Low Emphasis):**

```jsx
import { useState } from 'react';

const [isVisible, setIsVisible] = useState(true);
const onCancel = (e) => setIsVisible(false);

<AlertBanner
  colorTheme='Information'
  kind='low'
  title='Evaluating Risks'
  description='We’ll email you once the evaluation is complete.'
  onCancel={onCancel}
  isVisible={isVisible}
/>;
```

**Warning (Low Emphasis):**

```jsx
import { useState } from 'react';

const [isVisible, setIsVisible] = useState(true);
const onCancel = (e) => setIsVisible(false);

<AlertBanner
  colorTheme='Warning'
  kind='low'
  title='Evaluating Risks'
  description='We’ll email you once the evaluation is complete.'
  onCancel={onCancel}
  isVisible={isVisible}
/>;
```

**Success with Link (Low Emphasis):**

```jsx
import { Link as RouterLink } from 'react-router-dom';
import { Icon, Link } from '@saviynt/design-system';
import { useState } from 'react';

const [isVisible, setIsVisible] = useState(true);
const onCancel = (e) => setIsVisible(false);

<AlertBanner
  colorTheme='Success'
  kind='low'
  title='Success'
  description='Your profile has been updated.'
  onCancel={onCancel}
  isVisible={isVisible}
  LinkComponent={
    <Link
      url='https://duckduckgo.com'
      text='Link'
      suffixIconKind='ChevronRight'
      color='brand'
    />
  }
/>;
```

**Information with Link (Low Emphasis):**

```jsx
import { Link as RouterLink } from 'react-router-dom';
import { Icon, Link } from '@saviynt/design-system';
import { useState } from 'react';

const [isVisible, setIsVisible] = useState(true);
const onCancel = (e) => setIsVisible(false);

<AlertBanner
  colorTheme='Information'
  kind='low'
  title='Evaluating Risks'
  description='We’ll email you once the evaluation is complete.'
  onCancel={onCancel}
  isVisible={isVisible}
  LinkComponent={
    <Link
      url='https://duckduckgo.com'
      text='Link'
      suffixIconKind='ChevronRight'
    />
  }
/>;
```

**Warning with Link (Low Emphasis):**

```jsx
import { Link as RouterLink } from 'react-router-dom';
import { Icon, Link } from '@saviynt/design-system';
import { useState } from 'react';

const [isVisible, setIsVisible] = useState(true);
const onCancel = (e) => setIsVisible(false);

<AlertBanner
  colorTheme='Warning'
  kind='low'
  title='Evaluating Risks'
  description='We’ll email you once the evaluation is complete.'
  onCancel={onCancel}
  isVisible={isVisible}
  LinkComponent={
    <Link
      url='https://duckduckgo.com'
      text='Link'
      suffixIconKind='ChevronRight'
    />
  }
/>;
```

**Information with content:**

```jsx
import { useState } from 'react';

const [isVisible, setIsVisible] = useState(true);
const onCancel = (e) => setIsVisible(false);

<AlertBanner
  colorTheme='Information'
  kind='low'
  title='Evaluating Risks'
  description='We’ll email you once the evaluation is complete.'
  onCancel={onCancel}
  isVisible={isVisible}
  hasContent
  content='Connection Denied by Server: The connection to the server was denied. Error Code: Unexpected Connection Reset: Th TCP connection to the server unexpectedly reset. Error Code: Server Connection Timed Out: The connection to the server timed out.'
/>;
```
