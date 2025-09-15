---
sidebar_position: 4
---

# Lenses

A **lens** connects your component’s props, local refractions, and lifecycle effects.
Think of it as a scoped context that gives each component its own “view” into state and side effects.

```js
import { createComponent } from 'refract';

const TodoList = createComponent(({ lens }) => {
  const todos = lens.useRefraction([]);

  lens.useEffect(() => {
    fetchTodos().then(todos.set);
  }, []);

  return (
    <ul>
      {todos.value.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
});

```
**What happens here?**

- `todos` is a refraction that stores an array.
- `lens.useEffect()` fetches todos once when the component mounts.
- When `todos.set()` is called, the list updates automatically.

:::note

Effects in Refract are scoped to the component. When the component unmounts, Refract cleans them up for you.

:::