---
sidebar_position: 1
---

# Components

Components are the building blocks of a Refract app.
- You create them with the `createComponent()` function.
- Each component is a **pure function** that returns JSX-like syntax.
- Props and local state are accessed through a special helper called a **lens**.

```js
import { createComponent } from 'refract';

const Counter = createComponent(({ lens }) => {
  const count = lens.useRefraction(0);

  return (
    <button onClick={() => count.set(count.value + 1)}>
      Clicked {count.value} times
    </button>
  );
});

export default Counter;

```
**What happens here?**

- `lens.useRefraction(0)` creates local state with the initial value 0.
- `count.value` gives you the current state.
- Calling `count.set()` updates the state and automatically re-renders the component.

:::tip

Components in Refract are just functions. This makes them easy to test and reason about.

:::