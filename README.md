# Typescript Learning Resource

By: Daniel Griffiths

---

### Algorithms and Data Structures

This section of the learning resource will be focused on documenting algorithm and data structure implementations in Typescript.

#### 1. Arrays

In javascript arrays are ordered lists of items, of potentially varying types, accessible by their index (position). The Array prototype has a wide variety of methods that can be used to manipulate the state of the array.

```typescript
const list: Array<unknown> = []
list.push(1) // [1]
list.unshift(2) // [2, 1]
list.pop() // [2]
// etc...
```

See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) for more documentation on javascript arrays.

-   [Reverse Array](./src/algorithms/reverse-array.ts)
    1.  Create an array in memory and build the array by iterating over the original array and pushing the inverse index.
    2.  Iterate over the original array, splicing elements into position, until the array is reversed.
-   [Sub of Sub Array](./src/algorithms/sub-array-sum.ts)
    1.  Iterate through steps of the array and attempt to build a sub array that sums to target. If sub-array sums greater than target restart at incremented index.
-   [Union / Intersection](./src/algorithms/union-intersection.ts)
    1.  Create set for union array. Push members the set already includes into intersection array.

---

## Function Performance Evaluation

### 1. What is Space Complexity

TODO

### 2. What is Time Complexity

TODO

---

## Function Syntax Evaluation

### 1. Typescript Usage and Practices

TODO

---