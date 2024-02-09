import { numberOfPointsInsideCircle } from '../number-of-points-inside-circle'

describe('numberOfPointsInsideCircle', () => {
    it('should handle valid case one', () => {
        const result = numberOfPointsInsideCircle(
            [
                [1, 3],
                [3, 3],
                [5, 3],
                [2, 2],
            ],
            [
                [2, 3, 1],
                [4, 3, 1],
                [1, 1, 2],
            ]
        )

        expect(result).toEqual([3, 2, 2])
    })

    it('should handle valid case two', () => {
        const result = numberOfPointsInsideCircle(
            [
                [1, 1],
                [2, 2],
                [3, 3],
                [4, 4],
                [5, 5],
            ],
            [
                [1, 2, 2],
                [2, 2, 2],
                [4, 3, 2],
                [4, 3, 3],
            ]
        )

        expect(result).toEqual([2, 3, 2, 4])
    })

    it('should handle empty case', () => {
        const result = numberOfPointsInsideCircle([], [])

        expect(result).toEqual([])
    })
})
