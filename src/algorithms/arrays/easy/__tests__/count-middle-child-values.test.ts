import { countMiddleChildValues } from '../count-middle-child-values'

describe('countMiddleChildValues', () => {
    it('should handle valid case one', () => {
        const result = countMiddleChildValues([11, 7, 2, 15])
        expect(result).toBe(2)
    })

    it('should handle valid case two', () => {
        const result = countMiddleChildValues([-3, 3, 3, 90])
        expect(result).toBe(2)
    })

    it('should handle invalid case', () => {
        const result = countMiddleChildValues([1, 1, 1])
        expect(result).toStrictEqual(0)
    })

    it('should handle empty case', () => {
        const result = countMiddleChildValues([])
        expect(result).toStrictEqual(0)
    })
})
