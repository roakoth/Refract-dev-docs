---
id: useFlash
title: useFlash
sidebar_label: useFlash
sidebar_position: 3
---

## Description
`useFlash` runs after the first render of a component.
It’s useful for animations or DOM-dependent logic.

## Syntax

```js
lens.useFlash(callback);

```
## Parameters
- **callback**: A function to run once after the component’s initial render.

## Returns
Nothing. 

**Example**

```js
const AnimatedBox = createComponent(({ lens }) => {
  const visible = lens.useRefraction(false);

  lens.useFlash(() => {
    visible.set(true);
  });

  return (
    <div className={visible.value ? 'fade-in' : 'hidden'}>
      Hello, world!
    </div>
  );
});

```
Here, the box fades in only after the first render.


