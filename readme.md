# Shleemy React 
Wrapper for [shleemy](https://github.com/bashleigh/shleemy) interval factory

## Install

```bash
$ yarn add shleemy-react
```

## Usage

```tsx
import React from 'react';
import { Shleemy } from 'shleemy-react';

export const ItemRow = ({name, created, price}: {name: string, created: string, price: number}) => (
  <tr>
    <td>{name}</td>
    <td>{price}</td>
    <td>
      <Shleemy date={created} />
    </td>
  </tr>
);
```
Outputs 

name | price | 12 days ago

### Options

```tsx
<Shleemy
  date={created}
  rounding="floor"
  toDate={new Date()}
  className="shleemy-is-so-cool-and-shit"
  humanReadable={{
    future: (value: number, interval: TimeIntervalLabel) => `starting in ${value} ${ShleemyInterval.pluralInterval(value, interval)}`,
    future: (value: number, interval: TimeIntervalLabel) => `created ${value} ${ShleemyInterval.pluralInterval(value, interval)} ago`,
  }}
/>
```