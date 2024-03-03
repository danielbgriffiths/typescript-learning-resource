import { constructMaximumBinaryTree } from '../maximum-binary-tree'

describe('constructMaximumBinaryTree', () => {
    test('should return null when nums is empty', () => {
        expect(constructMaximumBinaryTree([])).toBeNull()
    })

    test('should return TreeNode when nums is not empty', () => {
        const nums = [3, 2, 1, 6, 0, 5]
        const expected = {
            val: 6,
            left: {
                val: 3,
                left: null,
                right: {
                    val: 2,
                    left: null,
                    right: {
                        val: 1,
                        left: null,
                        right: null,
                    },
                },
            },
            right: {
                val: 5,
                left: {
                    val: 0,
                    left: null,
                    right: null,
                },
                right: null,
            },
        }
        expect(constructMaximumBinaryTree(nums)).toEqual(expected)
    })
})
