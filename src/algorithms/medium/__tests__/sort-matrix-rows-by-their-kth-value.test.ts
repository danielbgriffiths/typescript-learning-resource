import {
    sortMatrixRowsByTheirKthValue,
    sortMatrixRowsByTheirKthValue_with_native_methods,
} from '../sort-matrix-rows-by-their-kth-value'

describe('sortMatrixRowsByTheirKthValue', () => {
    test('should handle valid case one', () => {
        expect(
            sortMatrixRowsByTheirKthValue(
                [
                    [10, 6, 9, 1],
                    [7, 5, 11, 2],
                    [4, 8, 3, 15],
                ],
                2
            )
        ).toEqual([
            [7, 5, 11, 2],
            [10, 6, 9, 1],
            [4, 8, 3, 15],
        ])
    })

    test('should handle valid case two', () => {
        expect(
            sortMatrixRowsByTheirKthValue(
                [
                    [3, 4],
                    [5, 6],
                ],
                0
            )
        ).toEqual([
            [5, 6],
            [3, 4],
        ])
    })

    test('should handle empty case', () => {
        expect(sortMatrixRowsByTheirKthValue([], 2)).toEqual([])
    })
})

describe('sortMatrixRowsByTheirKthValue_with_native_methods', () => {
    test('should handle valid case one', () => {
        expect(
            sortMatrixRowsByTheirKthValue_with_native_methods(
                [
                    [10, 6, 9, 1],
                    [7, 5, 11, 2],
                    [4, 8, 3, 15],
                ],
                2
            )
        ).toEqual([
            [7, 5, 11, 2],
            [10, 6, 9, 1],
            [4, 8, 3, 15],
        ])
    })

    test('should handle valid case two', () => {
        expect(
            sortMatrixRowsByTheirKthValue_with_native_methods(
                [
                    [3, 4],
                    [5, 6],
                ],
                0
            )
        ).toEqual([
            [5, 6],
            [3, 4],
        ])
    })

    test('should handle empty case', () => {
        expect(sortMatrixRowsByTheirKthValue([], 2)).toEqual([])
    })
})
