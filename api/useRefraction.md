---
id: useRefraction
title: useRefraction
sidebar_label: useRefraction
sidebar_position: 5
---

## Description

`useRefraction` creates a refraction, a reactive unit of state.
When its value changes, the UI updates.

## Syntax

```js
const state = useRefraction(initialValue);

```
## Parameters
- **initialValue**: The starting value of the refraction. Can be a string, number, object, or array.

## Returns
An object with:
- `value`: The current state.
- `set(newValue)`: Updates the state.

**Example**

```js
import { useRefraction } from 'refract';

const theme = useRefraction('light');

theme.set('dark');
console.log(theme.value); // 'dark'

```