import { deepestLeavesSum, Node } from '../deepest-leaves-sum'

describe('deepestLeavesSum', () => {
    it('should handle valid case one', () => {
        const node8 = new Node(8, null, null)
        const node7 = new Node(7, null, null)
        const node6 = new Node(6, null, node8)
        const node5 = new Node(5, null, null)
        const node4 = new Node(4, node7, null)
        const node3 = new Node(3, null, node6)
        const node2 = new Node(2, node4, node5)
        const node1 = new Node(1, node2, node3)

        const result = deepestLeavesSum(node1)

        expect(result).toBe(15)
    })

    it('should handle valid case two', () => {
        const node4 = new Node(4, null, null)
        const node5 = new Node(5, null, null)
        const node3 = new Node(3, null, node5)
        const node2 = new Node(2, node4, null)
        const node1 = new Node(1, node2, node3)

        const result = deepestLeavesSum(node1)

        expect(result).toBe(9)
    })

    it('should handle null case', () => {
        const result = deepestLeavesSum(null)

        expect(result).toBe(0)
    })
})
