function tryCatch(fn, ...params) {
  try {
    const result = fn(...params);
    if (tryCatch.isPromise(result)) {
      return new Promise(resolve => {
        result
          .then(result => resolve([undefined, result]))
          .catch(err => resolve([err, undefined]));
      });
    } else {
      return [undefined, result];
    }
  } catch (err) {
    return [err, undefined];
  }
}

tryCatch.isPromise = x => x instanceof Promise;

module.exports = tryCatch;
