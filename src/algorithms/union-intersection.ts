/**
 * Find union and intersection of array. Return 2d array.
 * Method: Create set for union array. Push members the set already includes into intersection array.
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */
export function unionIntersection(arr: number[], arr2: number[]): number[][] {
    const unionSet = new Set<number>(arr)
    const intersectionsArray: number[] = []

    for (const el of arr2) {
        if (unionSet.has(el)) {
            intersectionsArray.push(el)
        }

        unionSet.add(el)
    }

    return [Array.from(unionSet), intersectionsArray]
}

export const fns: Function[] = [unionIntersection]
