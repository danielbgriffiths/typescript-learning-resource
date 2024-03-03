export class Node {
    val!: number
    left!: Node | null
    right!: Node | null

    constructor(val: number, left: Node | null, right: Node | null) {
        this.val = val
        this.left = left
        this.right = right
    }
}

/**
 * Given the root of a binary tree, return the number of nodes where the value
 * of the node is equal to the average of the values in its subtree.
 *
 * Note:
 *      The average of n elements is the sum of the n elements divided by n and rounded down to the nearest integer.
 *      A subtree of root is a tree consisting of root and all of its descendants.
 *
 * @param {Node} node
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 * Mental Model:
 *      We can use a recursive function to traverse the tree and calculate the sum of the left and right subtree.
 *      By calling the recursions prior to calculating the sum and averages we can hoist the size and sum of the
 *      subtrees up to the level of the parent node.
 *      This allows us to calculate the average at each level without storing a map or array of values to
 *      calculate the average post-pass.
 */
export function countNodesEqToAvgOfSubTree(node: Node | null): number {
    if (node === null) return 0

    let count = 0

    const depthFirstRecursion = (
        node: Node | null
    ): [number, number, number] => {
        if (node === null) return [0, 0, 0]

        const [leftSize, leftSum, leftCount]: [number, number, number] =
            depthFirstRecursion(node.left)
        const [rightSize, rightSum, rightCount]: [number, number, number] =
            depthFirstRecursion(node.right)

        const size: number = leftSize + rightSize + 1
        const sum: number = leftSum + rightSum + node.val
        const avg: number = Math.floor(sum / size)

        if (avg * size === sum) count++

        return [size, sum, count]
    }

    depthFirstRecursion(node)

    return count
}
