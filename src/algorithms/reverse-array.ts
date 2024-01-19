/**
 * Reverse array by creating new array in memory
 * Space Complexity: O(n)
 * Time Complexity: O(n)
 */
export function reverseArray<T = any>(arr: Array<T>): Array<T> {
    const nextArray: Array<T> = [];
    for (let i = 0; i < arr.length; i++) {
        nextArray.push(arr[arr.length - 1 - i]);
    }
    return nextArray;
}

/**
 * Reverse array by splicing existing array, shifting elements
 * Space Complexity: O(n)
 * Time Complexity: O(1)
 */
export function reverseArrayInPlace<T = any>(arr: Array<T>): Array<T> {
    let currentIteration = 0;
    const totalIterations = arr.length;
    while (currentIteration < totalIterations) {
        const itemToMove = arr.pop();
        if (!itemToMove) break;
        arr.splice(currentIteration, 0, itemToMove);
        currentIteration++;
    }
    return arr;
}

export const fns = [reverseArray, reverseArrayInPlace];
