import { subArraySum } from '../sub-array-sum'

describe('Sum of Sub Array', () => {
    it('should find a valid sub array', () => {
        const result = subArraySum([1, 2, 3, 4, 5], 7)
        expect(result).toStrictEqual([3, 4])
    })
})
