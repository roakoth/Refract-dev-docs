---
sidebar_position: 2
---

# Refractions

A **refraction** is a reactive unit of state in Refract.

- Similar to **signals** (in Solid.js) or **refs** (in React).
- The UI updates automatically whenever a refraction’s value changes.
- Refractions can be local (inside a component) or global (shared across components).

```js
import { useRefraction } from 'refract';

const theme = useRefraction('light');

console.log(theme.value); // "light"
theme.set('dark');
console.log(theme.value); // "dark"

```
**What happens here?**
- The refraction starts with the value ***"light"**.
- When you call **theme.set('dark')**, any component using **theme** re-renders with the new value.

:::warning

Always update refractions with `.set()`. Mutating `theme.value` directly (`theme.value = "dark"`) won’t trigger a re-render.

:::