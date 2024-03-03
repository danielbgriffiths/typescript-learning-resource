import { stringArrayBubbleSort } from '../string-array-bubble-sort'

describe('stringArrayBubbleSort', () => {
    const testArray = [
        'car',
        'limo',
        'bus',
        'cat',
        'dog',
        'train',
        'motor',
        'piano',
        'candle',
        'operator',
        'blue',
        'green',
        'yellow',
        'fish',
        'cow',
    ]

    it('should handle valid case descending', () => {
        const result = stringArrayBubbleSort(testArray, 'desc')
        expect(result).toStrictEqual(testArray.sort().reverse())
    })

    it('should handle valid case ascending', () => {
        const result = stringArrayBubbleSort(testArray, 'asc')
        expect(result).toStrictEqual(testArray.sort())
    })

    it('should handle valid case default direction', () => {
        const result = stringArrayBubbleSort(testArray)
        expect(result).toStrictEqual(testArray.sort())
    })

    it('should handle empty case', () => {
        const result = stringArrayBubbleSort([], 'desc')
        expect(result).toStrictEqual([])
    })
})
