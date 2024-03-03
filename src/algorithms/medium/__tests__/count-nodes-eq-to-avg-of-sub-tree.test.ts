import {
    countNodesEqToAvgOfSubTree,
    Node,
} from '../count-nodes-eq-to-avg-of-sub-tree'

describe('countNodesEqToAvgOfSubTree', () => {
    it('should handle valid case one', () => {
        const nodeThree = new Node(5, null, null)
        const nodeTwo = new Node(5, null, null)
        const root = new Node(5, nodeTwo, nodeThree)
        const result = countNodesEqToAvgOfSubTree(root)
        console.log('result: ', result)
        expect(result).toBe(3)
    })

    it('should handle valid case two', () => {
        const nodeFour = new Node(5, null, null)
        const nodeThree = new Node(5, null, null)
        const nodeTwo = new Node(5, nodeFour, null)
        const root = new Node(5, nodeTwo, nodeThree)
        const result = countNodesEqToAvgOfSubTree(root)
        expect(result).toBe(4)
    })

    it('should handle null case', () => {
        const result = countNodesEqToAvgOfSubTree(null)
        expect(result).toBe(0)
    })
})
