# Try Catch

Return result and error instead of throwing.

## Installation

```bash
npm i @zhaoyao91/try-catch
```

## Usage

### handle sync function

```js
const tryCatch = require("@zhaoyao91/try-catch");

function fn(...args) {
  // throw or return
}

const [error, result] = tryCatch(fn, ...args);
```

### handle async function

```js
const tryCatch = require("@zhaoyao91/try-catch");

async function fn(...args) {
  // throw or return
}

const [error, result] = await tryCatch(fn, ...args);
```

### Customize promise judge logic

```js
require("@zhaoyao91/try-catch").isPromise = function(x) {
  // customized logic to tell if x is a promise
};
```

## License

MIT
