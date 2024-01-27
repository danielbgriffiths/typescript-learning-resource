import { sortArrayByFrequencyBubbleSort } from '../sort-array-by-frequency'

describe('Sort array of integers by frequency with Bubble Sort', () => {
    const testArray = [
        1, 2, 2, 2, 3, 4, 4, 4, 4, 5, 5, 6, 6, 6, 6, 6, 6, 7, 8, 9, 9, 10, 10,
        10, 10,
    ]

    it('should sort a valid array by frequency descending', () => {
        const result = sortArrayByFrequencyBubbleSort(testArray, 'desc')
        expect(result).toStrictEqual([6, 4, 10, 2, 5, 9, 1, 3, 7, 8])
    })

    it('should sort a valid array by frequency ascending', () => {
        const result = sortArrayByFrequencyBubbleSort(testArray, 'asc')
        expect(result).toStrictEqual([6, 4, 10, 2, 5, 9, 1, 3, 7, 8].reverse())
    })

    it('should sort by default in ascending direction', () => {
        const result = sortArrayByFrequencyBubbleSort(testArray)
        expect(result).toStrictEqual([6, 4, 10, 2, 5, 9, 1, 3, 7, 8].reverse())
    })

    it('should gracefully exit an empty array', () => {
        const result = sortArrayByFrequencyBubbleSort([], 'desc')
        expect(result).toStrictEqual([])
    })
})
