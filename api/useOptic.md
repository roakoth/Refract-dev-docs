---
id: useOptic
title: useOptic
sidebar_label: useOptic
sidebar_position: 4
---


## Description

`useOptic` defines reusable logic, also called an optic.
Optics are like hooks in React but optimized for dependency-aware caching and animation transitions.

## Syntax

```js
useOptic(setup, deps?);

```
## Parameters
- **setup**: A function that runs once when the optic is used. It can return a cleanup function.
- **deps** (optional): An array of dependencies. The optic re-runs when dependencies change.

## Returns
No direct return. The optic manages behavior such as event listeners or subscriptions.

**Example**

```js
import { useRefraction, useOptic } from 'refract';

function useMousePosition() {
  const pos = useRefraction({ x: 0, y: 0 });

  useOptic(() => {
    const handler = e => pos.set({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return pos;
}

```
:::note

This optic tracks the mouse position reactively.

:::