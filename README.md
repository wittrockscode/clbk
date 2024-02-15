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
const isNotEqual = bind("isNotEqual", (arg1, arg2) => {
  if (arg1 !== arg2) console.log("Values are not equal!");	
});
```

### Registering a callback

Use the `on` function to register a callback.

```js
on("isNotEqual", function () {
  console.log(`isNotEqual has been called with arguments: ${Array.from(arguments)}`);
});
```

Since `arguments` is not defined in arrow functions, you have to specify them when using ES6 syntax:
```js
on("isNotEqual", (arg1, arg2) =>  {
  console.log(`isNotEqual has been called with arguments: ${arg1} ${arg2}`);
});
```

### Call the function

Call the `foo` function:

```js
isNotEqual(1, 2);
```

Excpected output:

```
isNotEqual has been called with arguments: 1,2
Values are not equal!
```
