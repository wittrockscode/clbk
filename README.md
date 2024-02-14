# CLBK

A tiny function wrapper to trigger callbacks.

## Usage

```js
import { clbk, on } from "clbk";

const foo = clbk("foo", (bar) => {
  console.log(`Hello from ${bar}!`);
}, true);

on("foo", (bar) => {
  console.log(`${bar} has been called!`)
});

foo("MyFunction");
```

Excpected output:

```
MyFunction has been called!
Hello from MyFunction!
```