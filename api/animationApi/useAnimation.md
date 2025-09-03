---
id: useAnimation
sidebar_label: useAnimation
sidebar_position: 1
---

## Description
`useAnimation` creates an animated refraction.
It interpolates values over time instead of updating instantly.

## Syntax

```js
const animated = lens.useAnimation(initialValue, options);

```
## Parameters
- **initialValue**: The starting value of the animation. Can be a number, color, or object with numeric properties.
- **options** (optional): An object to configure animation behavior.
  - `duration` (number, in ms): How long the animation runs.
  - `easing` (function): Custom easing curve. Defaults to linear.
  - `loop` (boolean): If true, the animation repeats.

## Returns
A refraction-like object with:
- **value**: The current animated value.
- **set(newValue)**: Starts an animation from the current value to **newValue**.

**Example**

```js
import { createComponent } from 'refract';

const FadingBox = createComponent(({ lens }) => {
  const opacity = lens.useAnimation(0, { duration: 500 });

  lens.useFlash(() => {
    opacity.set(1); // animate to visible on mount
  });

  return (
    <div style={{ opacity: opacity.value, transition: 'opacity 0.5s' }}>
      I fade in!
    </div>
  );
});

```
When the component mounts, the box animates from transparent (`0`) to fully visible (`1`) in 500 ms.