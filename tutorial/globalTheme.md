---
id: globalTheme
title: Build a Global Theme
sidebar_label: Global Theme
sidebar_position: 2
---


In this tutorial, you’ll learn how to create a **global theme system** in Refract.
A global theme lets you share design tokens like colors, font sizes, or spacing across your entire app without duplicating values in each component.

## Step 1: Create a theme optic

An **optic** in Refract is a container for shared state or logic. It’s ideal for themes because every component can subscribe to it.

Create a new file `optics/useTheme.js`:

```js
import { createOptic } from 'refract';

export const useTheme = createOptic(() => {
  const theme = {
    colors: {
      background: '#ffffff',
      text: '#222222',
      primary: '#4f46e5',
    },
    font: {
      size: '16px',
      family: 'Arial, sans-serif',
    },
  };

  return theme;
});

```

**What’s happening here?**
- `createOptic` defines a global container.
- `theme` is a plain JavaScript object with colors and fonts.
- Any component can read values from `useTheme`.

## Step 2: Use the theme in a component
Now let’s consume the global theme inside a component.

Create a `Header.js` component:

```js
import { createComponent } from 'refract';
import { useTheme } from '../optics/useTheme';

const Header = createComponent(() => {
  const theme = useTheme();

  return (
    <header style={{
      background: theme.colors.primary,
      color: theme.colors.background,
      fontFamily: theme.font.family,
      fontSize: theme.font.size,
      padding: '1rem',
    }}>
      <h1>Welcome to Refract</h1>
    </header>
  );
});

export default Header;

```
Here:

- `useTheme()` gives you access to the global theme.
- Inline styles use values from the theme object.
- You can change the theme in one place, and all components update automatically.

## Step 3: Mount the app
Update your `main.js`:

```js
import { createApp } from 'refract';
import Header from './components/Header';

createApp(Header).mount('#root');

```
Make sure your `index.html` has a root element:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Refract Theme Example</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./main.js"></script>
  </body>
</html>

```
## Step 4: Extend the theme (optional)
Let’s add support for dark mode by modifying useTheme.js.

```js
import { createOptic } from 'refract';

export const useTheme = createOptic(() => {
  const light = {
    colors: {
      background: '#ffffff',
      text: '#222222',
      primary: '#4f46e5',
    },
    font: {
      size: '16px',
      family: 'Arial, sans-serif',
    },
  };

  const dark = {
    colors: {
      background: '#222222',
      text: '#ffffff',
      primary: '#6366f1',
    },
    font: {
      size: '16px',
      family: 'Arial, sans-serif',
    },
  };

  // Start with light theme
  return light;
});

```
Switching between themes later is as simple as returning `dark` instead of `light`, or using a refraction to toggle.

### Key Takeaways

If you followed the tutorial, you learned how to:
- Optics provide global state that components can share.
- A global theme keeps styles consistent across your app.
- You can extend the theme to handle advanced use cases like dark mode or user preferences.