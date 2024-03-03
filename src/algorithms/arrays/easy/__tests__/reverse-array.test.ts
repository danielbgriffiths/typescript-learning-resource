import { reverseArray, reverseArrayInPlace } from '../reverse-array'

describe('reverseArray', () => {
    it('should handle valid case', () => {
        const result = reverseArray([1, 2, 3, 4, 5])
        expect(result).toStrictEqual([5, 4, 3, 2, 1])
    })
})

describe('reverseArrayInPlace', () => {
    it('should handle valid case', () => {
        const result = reverseArrayInPlace([1, 2, 3, 4, 5])
        expect(result).toStrictEqual([5, 4, 3, 2, 1])
    })
})
