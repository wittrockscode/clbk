# CLBK

A tiny function wrapper to trigger callbacks.

## Installing

Install via NPM:
```bash
npm i clbk
```

## Usage

First, import the corresponding functions.
```js
import { bind, on } from "clbk";
```

### Bind a function to trigger callbacks

A function passed to `bind` will trigger all callbacks listening for that name.

```js
const foo = bind("foo", (bar) => {
  console.log(`Hello from ${bar}!`);
});
```

### Registering a callback

Use the `on` function to register a callback.

```js
on("foo", (bar) => {
  console.log(`${bar} has been called!`)
});
```

### Call the function

Call the `foo` function:

```js
foo("MyFunction");
```

Excpected output:

```
MyFunction has been called!
Hello from MyFunction!
```
