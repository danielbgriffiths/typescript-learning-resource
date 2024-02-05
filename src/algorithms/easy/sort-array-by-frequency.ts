/**
 * Sorts an array of integers by frequency with Bubble Sort
 * @param list array on integers
 * @param direction sort direction
 * - This implementation uses Bubble Sort
 * - First sort array by direction. Then create map where Map<Value, NOccurrences> and sort map by occurrence. Finally return only the keys of the map.
 * - Time Complexity:
 * - Space Complexity:
 */
export function sortArrayByFrequencyBubbleSort(
    list: number[],
    direction: 'asc' | 'desc' = 'asc'
): number[] {
    // Order array in-place
    let temp!: number
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (direction === 'desc' ? list[i] > list[j] : list[j] > list[i])
                continue
            temp = list[j]
            list[j] = list[i]
            list[i] = temp
        }
    }

    // Create occurrence map
    const occurrenceMap = new Map<number, number>()
    for (let i = 0; i < list.length; i++) {
        occurrenceMap.set(list[i], (occurrenceMap.get(list[i]) ?? 0) + 1)
    }

    // Order entries of occurrence map
    let mapTemp!: [number, number]
    const entries = Array.from(occurrenceMap.entries())
    for (let i = 0; i < entries.length; i++) {
        for (let j = i + 1; j < entries.length; j++) {
            if (
                direction === 'desc'
                    ? entries[i][1] > entries[j][1]
                    : entries[j][1] > entries[i][1]
            )
                continue
            mapTemp = entries[j]
            entries[j] = entries[i]
            entries[i] = mapTemp
        }
    }

    // Take keys
    const result = []
    for (let i = 0; i < entries.length; i++) {
        result.push(entries[i][0])
    }

    return result
}
