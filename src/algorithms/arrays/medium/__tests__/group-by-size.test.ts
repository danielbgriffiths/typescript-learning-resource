import { groupBySize } from '../group-by-size'

describe('groupBySize', () => {
    it('should handle valid case one', () => {
        const result = groupBySize([3, 3, 3, 3, 3, 1, 3])

        expect(result).toStrictEqual([[5], [0, 1, 2], [3, 4, 6]])
    })

    it('should handle valid case two', () => {
        const result = groupBySize([2, 1, 3, 3, 3, 2])

        expect(result).toStrictEqual([[1], [0, 5], [2, 3, 4]])
    })

    it('should handle empty case', () => {
        const result = groupBySize([])

        expect(result).toStrictEqual([])
    })
})
