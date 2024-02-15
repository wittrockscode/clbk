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
  console.log(`Hello from foo! Value: ${bar}`);
});
```

### Registering a callback

Use the `on` function to register a callback.

```js
on("foo", (bar) => {
  console.log(`Foo has been called with value ${bar}!`)
});
```

### Call the function

Call the `foo` function:

```js
foo("MyValue");
```

Excpected output:

```
Foo has been called with value MyValue!
Hello from foo! Value: MyValue
```
