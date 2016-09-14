# bebo-react

A wrapper for the beboSDK in react 

## Get it

```npm install bebo-react --save```

## Usage

```jsx
import React from 'react';
import BeboReact from './js/utils/bebo-react';
import App from './js/components/App';

import './style.scss';
BeboReact.render(
  <App />,
  document.getElementById('app'),
  {
    disableKeyboardDoneStrip: true
  }
);
```