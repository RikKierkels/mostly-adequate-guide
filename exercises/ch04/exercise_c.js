// Considering the following function:
//
// const keepHighest = (x, y) => (x >= y ? x : y);
//
// Refactor `max` to not reference any arguments using the helper function `keepHighest`.

// max :: [Number] -> Number
// const max = xs => reduce((acc, x) => (x >= acc ? x : acc), -Infinity, xs);

// eslint-disable-next-line max-len
// Some confusion about the arg naming here. Reduce takes 3 args, (reduceFn, accumulator/init.value, collection)
// Collection is passed to the reduce function implicitly.

const max = reduce(keepHighest, -Infinity);
