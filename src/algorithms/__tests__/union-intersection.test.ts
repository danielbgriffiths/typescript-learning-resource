import { unionIntersection } from '../union-intersection'

describe('Union Intersection', () => {
    it('should find a valid unions and intersections', () => {
        const result = unionIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])

        expect(result).toStrictEqual([
            [1, 2, 3, 4, 5, 6, 7],
            [3, 4, 5],
        ])
    })
})
