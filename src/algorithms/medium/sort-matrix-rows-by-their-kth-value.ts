/**
 * There is a class with m students and n exams. You are given a 0-indexed m x n integer matrix score,
 * where each row represents one student and score[i][j] denotes the score the ith student got in the jth exam.
 * The matrix score contains distinct integers only.
 *
 * You are also given an integer k. Sort the students (i.e., the rows of the matrix) by their scores
 * in the kth (0-indexed) exam from the highest to the lowest.
 *
 * Return the matrix after sorting it.
 *
 * @param scoreMatrix
 * @param k
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(1)
 */
export function sortMatrixRowsByTheirKthValue_with_native_methods(
    scoreMatrix: number[][],
    k: number
): number[][] {
    return scoreMatrix.sort((rowA, rowB) => rowB[k] - rowA[k])
}

/**
 * Bubble Sort to sort matrix rows by their kth value
 *
 * @param scoreMatrix
 * @param k
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
export function sortMatrixRowsByTheirKthValue(
    scoreMatrix: number[][],
    k: number
): number[][] {
    for (let i = 0; i < scoreMatrix.length; i++) {
        for (let j = i + 1; j < scoreMatrix.length; j++) {
            if (scoreMatrix[j][k] >= scoreMatrix[i][k]) {
                const temp = scoreMatrix[j]
                scoreMatrix[j] = scoreMatrix[i]
                scoreMatrix[i] = temp
            }
        }
    }
    return scoreMatrix
}
