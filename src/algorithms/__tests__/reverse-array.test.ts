import { reverseArray, reverseArrayInPlace } from '../reverse-array'

describe('Reverse Array', () => {
    it('should reverse a valid array', () => {
        const result = reverseArray([1, 2, 3, 4, 5])
        expect(result).toStrictEqual([5, 4, 3, 2, 1])
    })
})

describe('Reverse Array (in place)', () => {
    it('should reverse a valid array', () => {
        const result = reverseArrayInPlace([1, 2, 3, 4, 5])
        expect(result).toStrictEqual([5, 4, 3, 2, 1])
    })
})
