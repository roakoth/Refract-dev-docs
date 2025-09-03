---
id: createComponent
title: createComponent
sidebar_label: createComponent
sidebar_position: 1
---


## Description

`createComponent` defines a new component in Refract.
A component is a pure function that returns JSX-like syntax. It uses a lens object to manage props, state, and lifecycle.

All API requests require authentication.

## Syntax

```js
createComponent(({ lens, props }) => {
  // component logic
  return <div>...</div>;
});

```
## Parameters
- **lens**: Provides access to [refractions](/docs/core-concepts/refractions), side effects, and lifecycle methods.
- **props**: Data passed from a parent component.

## Returns
A reusable Refract component that can be mounted with `createApp`.

**Example**

```js
import { createComponent } from 'refract';

const Counter = createComponent(({ lens }) => {
  const count = lens.useRefraction(0);

  return (
    <button onClick={() => count.set(count.value + 1)}>
      Count: {count.value}
    </button>
  );
});

```