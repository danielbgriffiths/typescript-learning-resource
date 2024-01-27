/**
 * Bubble Sort to sort array of strings
 * @param list unsorted array of strings
 * @param direction
 * - Bubble Sort is a sorting algorithm that steps through an unsorted array
 *      and checks (depending on ASC/DESC direction) if n+1 < n, if so, it swaps the position of n, and n + 1
 *      as the pointers step through the array, swapping at unordered items, we end with a sorted array
 * - Time Complexity: O(n^2)
 * - Space Complexity: O(1)
 */
export function stringArrayBubbleSort(
    list: string[],
    direction?: 'asc' | 'desc'
): string[] {
    let tempSwap!: string
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (
                direction === 'desc'
                    ? list[j].localeCompare(list[i]) <= 0
                    : list[i].localeCompare(list[j]) <= 0
            )
                continue
            tempSwap = list[j]
            list[j] = list[i]
            list[i] = tempSwap
        }
    }
    return list
}
