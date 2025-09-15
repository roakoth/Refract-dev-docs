---
sidebar_position: 5
---

# Optical Composition

Optical composition is Refract’s way to **reuse logic** across components.
These reusable units are called **optics**.

- Similar to React Hooks, but with built-in dependency tracking.
- Support animation-aware transitions and caching.
- Perfect for patterns like mouse tracking, theme handling, or data subscriptions.

```js
import { useOptic } from 'refract';
import { useRefraction } from 'refract';

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
How to use it in a component:

```js
const Tracker = createComponent(() => {
  const pos = useMousePosition();

  return <p>Mouse at {pos.value.x}, {pos.value.y}</p>;
});

```
:::tip

Optics make your codebase **more modular** by separating logic from rendering.

:::