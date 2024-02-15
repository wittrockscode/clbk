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

## Instance Methods

#### on(name, callback)

Register a callback

- `name` - the name of the event to listen for
- `callback` - the callback function to execute when an event is recieved

#### bind(name, function, [passArgs])

Bind a function to trigger an event

- `name` - the name of the event to trigger
- `function` - the function that will trigger the event
- `passArgs` - (optional) - wether to pass the function arguments to the event (default `true`)

## TypeScript support

To ensure type safety when using TypeScript, the bind function accepts types:

```js
const isDifferent = bind<boolean, [number, number, boolean]>("test", (a: number, b: number, reverse: boolean) => {
  return reverse ? a !== b : a === b;
});
```

Which will produce the following type signature:

```js
const isDifferent: (args_0: number, args_1: number, args_2: boolean) => boolean
```
