class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(
        val: number = 0,
        left: TreeNode | null = null,
        right: TreeNode | null = null
    ) {
        this.val = val
        this.left = left
        this.right = right
    }
}

/**
 * You are given an integer array nums with no duplicates.
 * A maximum binary tree can be built recursively from nums using the following algorithm:
 *
 * Create a root node whose value is the maximum value in nums.
 * Recursively build the left subtree on the subarray prefix to the left of the maximum value.
 * Recursively build the right subtree on the subarray suffix to the right of the maximum value.
 * Return the maximum binary tree built from nums.
 *
 * @param nums array of numbers
 * @returns TreeNode
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 */
export function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
    if (nums.length === 0) return null
    const max = Math.max(...nums)
    const maxIndex = nums.indexOf(max)
    const left = nums.slice(0, maxIndex)
    const right = nums.slice(maxIndex + 1)
    return new TreeNode(
        max,
        constructMaximumBinaryTree(left),
        constructMaximumBinaryTree(right)
    )
}
