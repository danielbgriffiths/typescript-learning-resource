import { convertArrToMatrixWithConditions } from '../convert-arr-to-matrix-with-conditions'

describe('convertArrToMatrixWithConditions', () => {
    test('should handle valid case one', () => {
        const result = convertArrToMatrixWithConditions([
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        ])

        expect(result).toEqual([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]])
    })

    test('should handle valid case two', () => {
        const result = convertArrToMatrixWithConditions([1, 3, 4, 1, 2, 3, 1])

        expect(result).toEqual([[1, 3, 4, 2], [1, 3], [1]])
    })

    test('should handle valid case three', () => {
        const result = convertArrToMatrixWithConditions([1, 2, 3, 4])

        expect(result).toEqual([[1, 2, 3, 4]])
    })

    test('should handle empty case one', () => {
        const result = convertArrToMatrixWithConditions([])

        expect(result).toEqual([])
    })
})
