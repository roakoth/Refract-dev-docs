---
id: counterApp
title: Build a Counter App
sidebar_label: Counter App
sidebar_position: 1
---

In this tutorial, you’ll learn how to build a simple **counter app** using Refract.
This first project introduces you to **components**, **refractions** (Refract’s reactivity system), and **event handling**.

## Step 1: Set up your project
First, install Refract in a new project:

```bash
npm install refract-js
```
Next, create the basic project structure:

```arduino
my-app/
├── components/
│   └── Counter.js
├── refract.config.js
├── main.js
└── index.html

```
- `components/` stores your reusable UI components.
- `refract.config.js` holds project-specific settings.
- `main.js` is the entry point for your app.
- `index.html` is the root page.

## Step 2: Create the Counter component

Create a new file called `Counter.js` inside the `components/` folder.

```js
import { createComponent } from 'refract';

const Counter = createComponent(({ lens }) => {
  const count = lens.useRefraction(0);

  return (
    <button onClick={() => count.set(count.value + 1)}>
      Count: {count.value}
    </button>
  );
});

export default Counter;

```
**What’s happening here?**
- `createComponent` defines a new Refract component.
- `lens.useRefraction(0)` creates a refraction starting at `0`.
A refraction is a reactive state container that automatically updates the UI when its value changes.
- The button shows the current value and increments it when clicked.

## Step 3: Mount the app

Now, open `main.js` and add:

```js
import { createApp } from 'refract';
import Counter from './components/Counter';

createApp(Counter).mount('#root');

```
This code:

- Calls `createApp` with your root component (`Counter`).
- Mounts the app to the element with `id="root"` in `index.html`.

Make sure your `index.html` has a root element:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Refract Counter</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./main.js"></script>
  </body>
</html>

```
## Step 4: Run the app

If you’re using [Vite](https://vite.dev/):

```bash
npm run dev
```
Open your browser at http://localhost:5173.
You should see a button that starts at `Count: 0`. Each click increases the number by 1.

## Step 5: Extend the counter (optional)

Let’s add a **reset button** to practice working with multiple refractions.

Update `Counter.js`:

```js
import { createComponent } from 'refract';

const Counter = createComponent(({ lens }) => {
  const count = lens.useRefraction(0);

  return (
    <div>
      <button onClick={() => count.set(count.value + 1)}>
        Count: {count.value}
      </button>
      <button onClick={() => count.set(0)}>
        Reset
      </button>
    </div>
  );
});

export default Counter;

```
Now your counter can both **increment** and **reset**.

### Key Takeaways
If you followed the tutorial, you learned how to:
- A **refraction** is a reactive state container, similar to hooks in other frameworks.
- `createComponent` defines a reusable UI component.
- `createApp` mounts your component tree to the DOM.



