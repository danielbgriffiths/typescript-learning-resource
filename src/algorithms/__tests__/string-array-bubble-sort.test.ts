import { stringArrayBubbleSort } from '../string-array-bubble-sort'

describe('Bubble Sort on a string array', () => {
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

    it('should sort a valid array of strings descending', () => {
        const result = stringArrayBubbleSort(testArray, 'desc')
        expect(result).toStrictEqual(testArray.sort().reverse())
    })

    it('should sort a valid array of strings ascending', () => {
        const result = stringArrayBubbleSort(testArray, 'asc')
        expect(result).toStrictEqual(testArray.sort())
    })

    it('should sort by default in ascending direction', () => {
        const result = stringArrayBubbleSort(testArray)
        expect(result).toStrictEqual(testArray.sort())
    })

    it('should gracefully exit an empty array', () => {
        const result = stringArrayBubbleSort([], 'desc')
        expect(result).toStrictEqual([])
    })
})
