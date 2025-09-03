---
id: animatedModal
title: Build an Animated Modal
sidebar_label: Animated Modal
sidebar_position: 3
---

In this tutorial, you’ll learn how to build an animated modal using Refract’s `useFlash` [API](/api/useFlash/).
A modal is a dialog box that overlays the app’s content, often used for confirmations, forms, or alerts.
The `useFlash` hook makes it easy to animate components when they appear or disappear.

## Step 1: Create a modal component

Let’s start by creating a basic modal. Save this as `Modal.js`:

```js
import { createComponent } from 'refract';
import { useFlash } from 'refract/animation';

const Modal = createComponent(({ lens, children }) => {
  const isVisible = lens.useRefraction(false);

  const Flash = useFlash(isVisible, {
    from: { opacity: 0, transform: 'scale(0.95)' },
    to: { opacity: 1, transform: 'scale(1)' },
    exit: { opacity: 0, transform: 'scale(0.95)' },
    duration: 200, // in ms
  });

  return (
    <div>
      <button onClick={() => isVisible.set(true)}>Open Modal</button>

      {Flash(({ style }) => (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              ...style,
              background: '#fff',
              padding: '2rem',
              borderRadius: '8px',
              width: '300px',
              textAlign: 'center',
            }}
          >
            <h2>Animated Modal</h2>
            <p>This modal uses <code>useFlash</code> for animations.</p>
            <button onClick={() => isVisible.set(false)}>Close</button>
          </div>
        </div>
      ))}
    </div>
  );
});

export default Modal;

```
**What’s happening here?**
- `useRefraction(false)` tracks whether the modal is open.
- `useFlash` listens to `isVisible` and applies animations for entry and exit.
- The modal fades and scales smoothly when shown or hidden.

## Step 2: Mount the modal
In `main.js`, render the modal in your app root:

```js
import { createApp } from 'refract';
import Modal from './components/Modal';

createApp(Modal).mount('#root');

```
Make sure your `index.html` has a root container:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Refract Animated Modal</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./main.js"></script>
  </body>
</html>

```
## Step 3: Improve accessibility

Accessible modals are important for all users. Here are some quick improvements:
- Add `role="dialog"` and `aria-modal="true"` to the modal container.
- Use `aria-labelledby` to connect the modal title with assistive technologies.
- Trap focus inside the modal when open.

Example update:

```js
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  style={{ ...style, background: '#fff', padding: '2rem', borderRadius: '8px' }}
>
  <h2 id="modal-title">Animated Modal</h2>
  <p>This modal uses <code>useFlash</code> for animations.</p>
  <button onClick={() => isVisible.set(false)}>Close</button>
</div>

```
## Step 4: Customize animations

You can adjust the `useFlash` configuration to fit your design:
- **Slide in from bottom**

```js
const Flash = useFlash(isVisible, {
  from: { opacity: 0, transform: 'translateY(20px)' },
  to: { opacity: 1, transform: 'translateY(0)' },
  exit: { opacity: 0, transform: 'translateY(20px)' },
  duration: 250,
});

```
- **Fade only**

```js
const Flash = useFlash(isVisible, {
  from: { opacity: 0 },
  to: { opacity: 1 },
  exit: { opacity: 0 },
  duration: 150,
});

```
### Key Takeaways

If you followed the tutorial, you learned how to:
- Use `useRefraction` to track modal visibility.
- Use `useFlash` to animate modal entry and exit.
- Combine accessibility attributes (`role`, `aria-*`) for inclusive modals.
- Customize animations by changing `from`, `to`, and `exit` states.
