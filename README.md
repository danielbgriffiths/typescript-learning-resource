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

-   [Reverse Array](./src/algorithms/easy/reverse-array.ts)
    1. Impl 1: Create an array in memory and build the array by iterating over the original array and pushing the inverse index.
    2. Impl 2: Iterate over the original array, splicing elements into position, until the array is reversed.
-   [Sub of Sub Array](./src/algorithms/easy/sub-array-sum.ts)
    1. Impl 1: Iterate through steps of the array and attempt to build a sub array that sums to target. If sub-array sums greater than target restart at incremented index.
-   [Union / Intersection](./src/algorithms/easy/union-intersection.ts)
    1. Impl 1: Create set for union array. Push members the set already includes into intersection array.
-   [Bubble Sort of string array](./src/algorithms/easy/string-array-bubble-sort.ts)
    1. Impl 1: Bubble Sort mutates an array in-place. Start with two pointers and step through the array. Compare adjacent values and if they are out of order depending on your sort direction, swap positions.
-   [Sort array by frequency](./src/algorithms/easy/sort-array-by-frequency.ts)
    1. Impl 1: Using Bubble Sort, first sort array by direction. Then create map where Map<Value, NOccurrences> and sort map by occurrence. Finally return only the keys of the map.
-   [Find Nearest Point that Includes X or Y Value](./src/algorithms/easy/sort-array-by-frequency.ts)
    1. See description on [Leetcode](https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/description/)
-   [Count (Middle Child Values) Elements With Strictly Smaller and Greater Elements ](./src/algorithms/easy/count-middle-child-values.ts)
    1. See description on [Leetcode](https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/description/)

           Mental Model:
           original = [3, 1, 5, 7, 3]
           sorted = [1, 3, 3, 5, 7]
           bounds (exclusive) = [sorted[0], sorted[1]]
           isMiddleChild = sorted[i] > bounds[0] && sorted[i] < bounds[1]
-   [Group Indexes By Group Size They Belong To](./src/algorithms/medium/group-by-size.ts)
    1. See description on [Leetcode](https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/description/)
-   [Count the Number of Given Points that Fall Within the Area of Given Circles](./src/algorithms/medium/number-of-points-inside-circle.ts)
    1. See description on [Leetcode](https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/description/)
            
            Mental Model:
            for query in queries
                for point in points
                    test fn of point in area of circle
                    accumulate values
-   [Convert Array to Matrix With Conditions](./src/algorithms/medium/convert-arr-to-matrix-with-conditions.ts)
    1. See description on [Leetcode](https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/description/)
        
            Mental Model:
            Iterate nums and build map of frequencies
            Iterate map and build matrix


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
