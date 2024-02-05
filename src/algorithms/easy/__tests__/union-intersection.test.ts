import { unionIntersection } from '../union-intersection'

describe('unionIntersection', () => {
    it('should handle valid case', () => {
        const result = unionIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])

        expect(result).toStrictEqual([
            [1, 2, 3, 4, 5, 6, 7],
            [3, 4, 5],
        ])
    })
})
