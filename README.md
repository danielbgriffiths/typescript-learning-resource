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

-   [Reverse Array](./src/algorithms/arrays/easy/reverse-array.ts)
    1. Impl 1: Create an array in memory and build the array by iterating over the original array and pushing the inverse index.
    2. Impl 2: Iterate over the original array, splicing elements into position, until the array is reversed.
-   [Sub of Sub Array](./src/algorithms/arrays/easy/sub-array-sum.ts)
    1. Impl 1: Iterate through steps of the array and attempt to build a sub array that sums to target. If sub-array sums greater than target restart at incremented index.
-   [Union / Intersection](./src/algorithms/arrays/easy/union-intersection.ts)
    1. Impl 1: Create set for union array. Push members the set already includes into intersection array.
-   [Bubble Sort of string array](./src/algorithms/arrays/easy/string-array-bubble-sort.ts)
    1. Impl 1: Bubble Sort mutates an array in-place. Start with two pointers and step through the array. Compare adjacent values and if they are out of order depending on your sort direction, swap positions.
-   [Sort array by frequency](./src/algorithms/arrays/easy/sort-array-by-frequency.ts)
    1. Impl 1: Using Bubble Sort, first sort array by direction. Then create map where Map<Value, NOccurrences> and sort map by occurrence. Finally return only the keys of the map.
-   [Find Nearest Point that Includes X or Y Value](./src/algorithms/arrays/easy/sort-array-by-frequency.ts)
    1. See description on [Leetcode](https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/description/)
-   [Count (Middle Child Values) Elements With Strictly Smaller and Greater Elements ](./src/algorithms/arrays/easy/count-middle-child-values.ts)
    1. See description on [Leetcode](https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/description/)

           Mental Model:
           original = [3, 1, 5, 7, 3]
           sorted = [1, 3, 3, 5, 7]
           bounds (exclusive) = [sorted[0], sorted[1]]
           isMiddleChild = sorted[i] > bounds[0] && sorted[i] < bounds[1]
-   [Group Indexes By Group Size They Belong To](./src/algorithms/arrays/medium/group-by-size.ts)
    1. See description on [Leetcode](https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/description/)
-   [Count the Number of Given Points that Fall Within the Area of Given Circles](./src/algorithms/arrays/medium/number-of-points-inside-circle.ts)
    1. See description on [Leetcode](https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/description/)
            
            Mental Model:
            for query in queries
                for point in points
                    test fn of point in area of circle
                    accumulate values
-   [Convert Array to Matrix With Conditions](./src/algorithms/arrays/medium/convert-arr-to-matrix-with-conditions.ts)
    1. See description on [Leetcode](https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/description/)
        
            Mental Model:
            Iterate nums and build map of frequencies
            Iterate map and build matrix
-   [Construct Maximum Binary Tree](./src/algorithms/trees/medium/maximum-binary-tree.ts)
    1. See description on [Leetcode](https://leetcode.com/problems/maximum-binary-tree/description/)

            Mental Model:
            Find max value
            Create root node
            Split given array into left/right at max value
            recurse on either side of the split
-   [Sort the Students by their Kth Score](./src/algorithms/arrays/medium/sort-matrix-rows-by-their-kth-value.ts)
    1. See description on [Leetcode](https://leetcode.com/problems/sort-the-students-by-their-kth-score/description/)

            Mental Model:
            Nested sort (sort by internal value of each item)
    2. Impl 1: Sort with native method
    3. Impl 2: Sort with custom sorting algorithm (in this case bubble sort)
-   [Max Increase to Keep City Skyline](./src/algorithms/arrays/medium/max-increase-to-keep-city-skyline.ts)
    1. See description on [Leetcode](https://leetcode.com/problems/max-increase-to-keep-city-skyline/description/)

            Mental Model:
            new zd = Min(Max(xd), Max(yd))
-   [Subdomain Visit Count](./src/algorithms/arrays/medium/subdomain-visit-count.ts)
    1. See description on [Leetcode](https://leetcode.com/problems/subdomain-visit-count/description/)

            Mental Model:
            for each domain, split by '.' and accumulate counts
                Map<DomainPart, VisitCount>
            return Map->string[]
-   [Matrix Block sum](./src/algorithms/arrays/medium/matrix-block-sum.ts)
    1. See description on [Leetcode](https://leetcode.com/problems/matrix-block-sum/description/)

            Mental Model:
            for i in rows
                for j in cols
                    for x in range(i - K, i + K)
                        for y in range(j - K, j + K)
                            accumulate sum


#### 2. Trees

-   [Count Nodes Equal to Average of Subtree](./src/algorithms/trees/medium/count-nodes-eq-to-avg-of-sub-tree.ts)
    1. See description on [Leetcode](https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/description/)

            We can use a recursive function to traverse the tree and calculate the sum of the left and right subtree.
            By calling the recursions prior to calculating the sum and averages we can hoist the size and sum of the
            subtrees up to the level of the parent node.
            This allows us to calculate the average at each level without storing a map or array of values to
            calculate the average post-pass.
-   [Deepest Leaves Sum](./src/algorithms/trees/medium/deepest-leaves-sum.ts)
    1. See description on [Leetcode](https://leetcode.com/problems/deepest-leaves-sum/description/)

           DFS to find depth of tree.
           DFS to accumulate a sum of the values at that depth on each branch
