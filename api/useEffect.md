---
id: useEffect
title: useEffect
sidebar_label: useEffect
sidebar_position: 2
---


## Description
`useEffect` runs side effects in your component.
Side effects include data fetching, subscriptions, or logging.

## Syntax

```js
lens.useEffect(effectFn, deps?);

```
## Parameters
- **effectFn**: A function to run after rendering. May return a cleanup function.
- **deps** (optional): An array of dependencies. If empty `[]`, the effect runs only once.

## Returns
Nothing. The effect manages external behavior.

**Example**

```js
const TodoList = createComponent(({ lens }) => {
  const todos = lens.useRefraction([]);

  lens.useEffect(() => {
    fetch('/api/todos')
      .then(res => res.json())
      .then(todos.set);
  }, []);

  return <ul>{todos.value.map(t => <li key={t.id}>{t.text}</li>)}</ul>;
});

```
