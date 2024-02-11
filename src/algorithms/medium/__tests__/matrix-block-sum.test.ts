import { matrixBlockSum } from '../matrix-block-sum'

describe('matrixBlockSum', () => {
    it('should handle valid case one', () => {
        expect(
            matrixBlockSum(
                [
                    [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9],
                ],
                1
            )
        ).toEqual([
            [12, 21, 16],
            [27, 45, 33],
            [24, 39, 28],
        ])
    })

    it('should handle valid case two', () => {
        expect(
            matrixBlockSum(
                [
                    [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9],
                ],
                2
            )
        ).toEqual([
            [45, 45, 45],
            [45, 45, 45],
            [45, 45, 45],
        ])
    })

    it('should handle empty case', () => {
        expect(matrixBlockSum([], 2)).toEqual([])
    })
})
