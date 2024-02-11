/**
 * Given a m x n matrix mat and an integer k, return a matrix answer where each answer[i][j]
 * is the sum of all elements mat[x][y] for:
 *
 * @param {number[][]} matrix
 * @param {number} k
 *
 * Time complexity: O(n*m*k^2)
 * Space complexity: O(n^2)
 *
 * Mental Model:
 * Create a matrix with the same dimensions as the input matrix. For each element in the input matrix,
 * get the sum of the area of kth units from the position (i, j) and store it in the answer matrix.
 */
export function matrixBlockSum(matrix: number[][], k: number): number[][] {
    if (!matrix?.length) return []

    const m: number = matrix.length
    const n: number = matrix[0].length

    /**
     * Create a matrix with the same dimensions as the input matrix
     */
    const createAnswerMatrixWithDimensions = (): number[][] => {
        return Array.from({ length: m }).map((el) =>
            Array.from({ length: n }).map(() => 0)
        )
    }

    /**
     * Get the sum of the area of kth units from the position (i, j)
     * @param {number} i
     * @param {number} j
     */
    const getSumOfAreaKthUnitsFromPosition = (i: number, j: number): number => {
        let sum: number = 0

        for (let x = i - k; x <= i + k; x++) {
            if (x < 0 || x >= m) continue

            for (let y = j - k; y <= j + k; y++) {
                if (y < 0 || y >= n) continue

                sum += matrix[x][y]
            }
        }

        return sum
    }

    const matrixWithSums: number[][] = createAnswerMatrixWithDimensions()

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            matrixWithSums[i][j] = getSumOfAreaKthUnitsFromPosition(i, j)
        }
    }

    return matrixWithSums
}
