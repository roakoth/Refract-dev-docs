---
id: useSpring
sidebar_label: useSpring
sidebar_position: 3
---

## Description
`useSpring` animates values with spring physics instead of fixed durations.
Springs feel natural and are useful for dragging, snapping, or bouncy UI.

## Syntax

```js
const spring = lens.useSpring(initialValue, options);

```
## Parameters
- **initialValue**: The starting value.
- **options** (optional):
  - `stiffness` (number): Spring stiffness. Higher values snap faster.
  - `damping` (number): Resistance to motion. Higher values reduce oscillation.
  - `mass` (number): Affects speed and bounciness.

## Returns
A refraction-like object:
- `value`: The current spring value.
- `set(newValue)`: Animates the spring toward newValue..

**Example**

```js
import { createComponent } from 'refract';

const BouncyBall = createComponent(({ lens }) => {
  const y = lens.useSpring(0, { stiffness: 150, damping: 10 });

  return (
    <div
      style={{
        transform: `translateY(${y.value}px)`,
        transition: 'transform 50ms'
      }}
      onClick={() => y.set(200)}
    >
      🟠
    </div>
  );
});

```
Each click makes the ball bounce down to 200px and spring back naturally.

