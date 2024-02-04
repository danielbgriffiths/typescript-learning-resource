/**
 * Given an integer array nums, return the number of elements that have both a strictly smaller
 * and a strictly greater element appear in nums.
 *
 * @param {number[]} list unsorted integer list
 *
 * Time Complexity: O(n(log*n))
 * Space Complexity: O(n)
 *
 * Mental Model:
 *      original = [3, 1, 5, 7, 3]
 *      sorted = [1, 3, 3, 5, 7]
 *      bounds (exclusive) = [sorted[0], sorted[1]]
 *      isMiddleChild = sorted[i] > bounds[0] && sorted[i] < bounds[1]
 */
export function countMiddleChildValues(list: number[]): number {
    let count: number = 0

    list = list.sort((a, b) => a - b)

    for (let i = 0; i < list.length; i++) {
        if (i === 0 || i === list.length - 1) continue
        if (list[i] <= list[0] || list[i] >= list[list.length - 1]) continue
        count++
    }

    return count
}
