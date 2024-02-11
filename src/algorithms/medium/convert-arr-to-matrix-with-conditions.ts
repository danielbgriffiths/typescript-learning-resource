/**
 * You are given an integer array nums. You need to create a 2D array from nums satisfying the following conditions:
 *
 * The 2D array should contain only the elements of the array nums.
 * Each row in the 2D array contains distinct integers.
 * The number of rows in the 2D array should be minimal.
 * Return the resulting array. If there are multiple answers, return any of them.
 *
 * Note that the 2D array can have a different number of elements on each row.
 *
 * @param {number[]} nums array of integers
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */
export function convertArrToMatrixWithConditions(nums: number[]): number[][] {
    if (!nums?.length) return []

    let maxFrequency: number = 0
    const frequencies = new Map<number, number>()

    for (const num of nums) {
        const nextNumFrequency = (frequencies.get(num) || 0) + 1
        frequencies.set(num, nextNumFrequency)
        if (nextNumFrequency > maxFrequency) maxFrequency = nextNumFrequency
    }

    const matrix: number[][] = Array.from({ length: maxFrequency }, () => [])

    for (const [num, freq] of Array.from(frequencies.entries())) {
        for (let i = 0; i < freq; i++) {
            matrix[i].push(num)
        }
    }

    return matrix
}
