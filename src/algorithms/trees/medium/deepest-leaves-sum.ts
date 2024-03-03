export class Node {
    value!: number
    left!: Node | null
    right!: Node | null

    constructor(value: number, left: Node | null, right: Node | null) {
        this.value = value
        this.left = left
        this.right = right
    }
}

/**
 * Given the root of a binary tree, return the sum of values of its deepest leaves.
 *
 * @param {Node | null} node Root node of tree
 *
 * Time Complexity: O(2n)
 * Space Complexity: O(1)
 * Mental Model:
 *      DFS to find depth of tree.
 *      DFS to accumulate a sum of the values at that depth on each branch
 */
export function deepestLeavesSum(node: Node | null): number {
    let totalSumOfDeepestLeaves: number = 0
    if (!node) return totalSumOfDeepestLeaves

    /**
     * Find the depth of the tree
     * @param {Node | null} currentNode Current node
     * @param {number} currentDepth Current depth
     */
    function findDepthOfTree(
        currentNode: Node | null,
        currentDepth: number
    ): number {
        if (!currentNode) return currentDepth
        return Math.max(
            ...[
                findDepthOfTree(currentNode.left, currentDepth + 1),
                findDepthOfTree(currentNode.right, currentDepth + 1),
            ]
        )
    }

    /**
     * Find the sum of nodes at a given depth
     * @param {Node | null} currentNode Current node
     * @param {number} currentDepth Current depth
     */
    function findSumOfNodesAtDepth(
        currentNode: Node | null,
        currentDepth: number
    ): number {
        if (!currentNode) return
        if (currentDepth === depth) totalSumOfDeepestLeaves += currentNode.value
        findSumOfNodesAtDepth(currentNode.left, currentDepth + 1)
        findSumOfNodesAtDepth(currentNode.right, currentDepth + 1)
    }

    const depth: number = findDepthOfTree(node, 0)
    findSumOfNodesAtDepth(node, 1)
    return totalSumOfDeepestLeaves
}
