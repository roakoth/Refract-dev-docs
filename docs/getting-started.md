---
sidebar_position: 2
---

# Getting Started

The best way to learn Refract is by building something small. This guide covers installation, project setup (with JavaScript and TypeScript), and building your first app.

## Installation

Install Refract using npm:

```bash
npm install refract-js

```
:::note

Refract requires Node.js 16 or higher. If you’re using an older version, please upgrade before continuing.

:::

## Project Setup

A typical Refract project is organized like this:

```css
my-app/
├── components/
│   └── Header.js
├── optics/
│   └── useTheme.js
├── refract.config.js
├── main.js
└── index.html

```
- components/ – your UI components.
- optics/ – reusable logic patterns (like hooks).
- refract.config.js – configuration file for build and compiler settings.
- main.js – entry point where you mount your app.
- index.html – root HTML file that includes the app container.

:::tip

Organizing your logic into **components** and **optics** keeps your code modular and easier to maintain.

:::

## Basic usage

To render your app, import `createApp` and your `root` component:

```js
import { createApp } from 'refract';
import App from './App';

createApp(App).mount('#root');

```
Refract will mount the `App` component inside the `#root` element in `index.html`.

## Build your first Refract app

Here’s a simple counter example:

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
Update your `main.js` to render it:

```js
import { createApp } from 'refract';
import Counter from './components/Counter';

createApp(Counter).mount('#root');

```
Run your app:

```bash
npm run dev

```
Visit `http://localhost:5173` in your browser. You should see a button that counts clicks.

## Using Typescript

Refract works seamlessly with TypeScript.

### Create a new project with Vite + TypeScript

```bash
npm create vite@latest my-refract-app

```
When prompted, choose:

- Vanilla + TypeScript

Then install dependencies and Refract:

```bash
cd my-refract-app
npm install
npm install refract-js

```
### Example with TypeScript

```ts
import { createComponent } from 'refract';

type CounterProps = {
  initial?: number;
};

const Counter = createComponent<CounterProps>(({ lens, props }) => {
  const count = lens.useRefraction(props.initial ?? 0);

  return (
    <button onClick={() => count.set(count.value + 1)}>
      Clicked {count.value} times
    </button>
  );
});

export default Counter;

```
:::note

The `<CounterProps>` type ensures your component props are type-checked, making it easier to catch bugs early.

:::

