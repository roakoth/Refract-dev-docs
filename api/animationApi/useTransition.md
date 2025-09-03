---
id: useTransition
sidebar_label: useTransition
sidebar_position: 2
---

## Description
`useTransition` handles smooth transitions when values enter or leave.
It’s ideal for lists, routes, or conditional rendering.

## Syntax

```js
const transition = lens.useTransition(items, options);

```
## Parameters
- **items**: The values or components to animate in and out.
- **options** (optional):
  - `duration` (number): Transition duration in ms.
  - `easing` (function): Custom easing curve.
  - `keyExtractor` (function): A function to identify items uniquely.

## Returns
An array of **transition objects**, each with:
- `item`: The original value or component.
- `phase`: `"enter" | "update" | "leave"`.
- `style`: Animated style values for the current phase.

**Example**

```js
import { createComponent } from 'refract';

const TodoList = createComponent(({ lens }) => {
  const todos = lens.useRefraction([
    { id: 1, text: 'Learn Refract' }
  ]);

  const transitions = lens.useTransition(todos.value, {
    duration: 300,
    keyExtractor: todo => todo.id
  });

  return (
    <ul>
      {transitions.map(({ item, phase, style }) => (
        <li key={item.id} style={style}>
          {item.text} ({phase})
        </li>
      ))}
    </ul>
  );
});

```
Items animate smoothly when added or removed from the list.