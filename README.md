# Trabee Design System

A react based ui components.

This project skeleton was created to help people get started with creating their own React component library using:

- [React](https://reactjs.org/)
- [Rollup](https://rollupjs.org/guide/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled-Components](https://styled-components.com/)

It also features:

- [Storybook](https://storybook.js.org/)
- [Jest](https://jestjs.io/)

## Install

```
npm install --save @class101/ui
```

## Development

### Building

```
npm run build
```

### Storybook

To run a live-reload storybook server on your local machine:

```
npm run storybook
```

To export your storybook as static files:

```
npm run storybook:build
```

Also, can deploy to gh-pages:

```
npm run storybook:deploy
```

## Usage

```tsx
import React from "react";
import { Button } from "@trabee/ui";

const Example = () => (
  <div>
    <Button>Hello WOrld</Button>
  </div>
);

export default Example;
```
