import { sortArrayByFrequencyBubbleSort } from '../sort-array-by-frequency'

describe('sortArrayByFrequencyBubbleSort', () => {
    const testArray = [
        1, 2, 2, 2, 3, 4, 4, 4, 4, 5, 5, 6, 6, 6, 6, 6, 6, 7, 8, 9, 9, 10, 10,
        10, 10,
    ]

    it('should handle valid case descending', () => {
        const result = sortArrayByFrequencyBubbleSort(testArray, 'desc')
        expect(result).toStrictEqual([6, 4, 10, 2, 5, 9, 1, 3, 7, 8])
    })

    it('should handle valid case ascending', () => {
        const result = sortArrayByFrequencyBubbleSort(testArray, 'asc')
        expect(result).toStrictEqual([6, 4, 10, 2, 5, 9, 1, 3, 7, 8].reverse())
    })

    it('should handle valid case default direction', () => {
        const result = sortArrayByFrequencyBubbleSort(testArray)
        expect(result).toStrictEqual([6, 4, 10, 2, 5, 9, 1, 3, 7, 8].reverse())
    })

    it('should handle empty case', () => {
        const result = sortArrayByFrequencyBubbleSort([], 'desc')
        expect(result).toStrictEqual([])
    })
})
