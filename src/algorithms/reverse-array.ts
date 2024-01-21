/**
 * Reverse array by creating new array in memory
 * Space Complexity: O(n)
 * Time Complexity: O(n)
 */
export function reverseArray<T = any>(arr: T[]): T[] {
    const reversedArray: T[] = []
    for (let i = 0; i < arr.length; i++) {
        reversedArray.push(arr[arr.length - 1 - i])
    }
    return reversedArray
}

/**
 * Reverse array by splicing existing array, shifting elements
 * Space Complexity: O(1)
 * Time Complexity: O(n)
 */
export function reverseArrayInPlace<T = any>(arr: T[]): T[] {
    let currentStep: number = 0
    const maxSteps: number = arr.length
    while (currentStep < maxSteps) {
        const elToMove: T = arr.pop()
        if (!elToMove) break
        arr.splice(currentStep, 0, elToMove)
        currentStep++
    }
    return arr
}

export const fns = [reverseArray, reverseArrayInPlace]
