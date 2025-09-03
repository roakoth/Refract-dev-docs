---
sidebar_position: 5
---

# Side Effects

Refract provides three ways to handle side effects:

- `useEffect` — run code after render (e.g., fetch data).
- `useOptic` — encapsulate reusable logic with cleanup.
- `useFlash` — run code once after render, often used for animations.

```js
import { createComponent } from 'refract';

const FadeIn = createComponent(({ lens }) => {
  lens.useFlash(() => {
    animateFadeIn('#box');
  });

  return <div id="box">Hello</div>;
});

```
:::note

Side effects in Refract are **explicit** and **opt-in**. This avoids hidden behavior and makes debugging easier.

:::