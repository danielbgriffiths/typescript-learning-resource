import { nearestPointWithSameXOrY } from '../nearest-point-with-same-x-or-y'

describe('nearestPointWithSameXOrY', () => {
    it('should handle valid case', () => {
        const result = nearestPointWithSameXOrY(
            [
                [1, 2],
                [3, 1],
                [2, 4],
                [2, 3],
                [4, 4],
            ],
            3,
            4
        )

        expect(result).toBe(2)
    })

    it('should handle valid case 2', () => {
        const result = nearestPointWithSameXOrY([[3, 4]], 3, 4)
        expect(result).toBe(0)
    })

    it('should handle invalid case', () => {
        const result = nearestPointWithSameXOrY([[2, 3]], 3, 4)
        expect(result).toBe(null)
    })

    it('should handle empty case', () => {
        const result = nearestPointWithSameXOrY([], 3, 4)
        expect(result).toBe(null)
    })
})
