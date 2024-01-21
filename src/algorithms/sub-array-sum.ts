/**
 * Find a target sum within a sub-array of the array
 * Method: Iterate through steps of the array and attempt to build a sub array
 * that sums to target. If sub-array sums greater than target restart at incremented index.
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */
export function subArraySum(arr: number[], sum: number): number[] {
    for (let i = 0; i < arr.length; i++) {
        let currentSum: number = 0
        let subArray: number[] = []

        for (let j = i; j < arr.length; j++) {
            if (currentSum === sum) return subArray
            if (currentSum > sum) break
            subArray.push(arr[j])
            currentSum += arr[j]
        }

        currentSum = 0
        subArray = []
    }

    return []
}

export const fns = [subArraySum]
