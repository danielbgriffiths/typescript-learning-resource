import { maxIncreaseToKeepCitySkyline } from '../max-increase-to-keep-city-skyline'

describe('maxIncreaseToKeepCitySkyline', () => {
    it('should handle valid case one', () => {
        expect(
            maxIncreaseToKeepCitySkyline([
                [3, 0, 8, 4],
                [2, 4, 5, 7],
                [9, 2, 6, 3],
                [0, 3, 1, 0],
            ])
        ).toEqual([
            [8, 4, 8, 7],
            [7, 4, 7, 7],
            [9, 4, 8, 7],
            [3, 3, 3, 3],
        ])
    })

    it('should handle valid case two', () => {
        expect(
            maxIncreaseToKeepCitySkyline([
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0],
            ])
        ).toEqual([
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ])
    })

    it('should handle empty case', () => {
        expect(maxIncreaseToKeepCitySkyline([])).toEqual([])
    })
})
