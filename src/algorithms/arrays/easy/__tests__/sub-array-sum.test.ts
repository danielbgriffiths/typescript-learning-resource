import { subArraySum } from '../sub-array-sum'

describe('subArraySum', () => {
    it('should handle valid case', () => {
        const result = subArraySum([1, 2, 3, 4, 5], 7)
        expect(result).toStrictEqual([3, 4])
    })
})
