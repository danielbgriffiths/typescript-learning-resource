function getManhattanDistance(
    x1: number,
    x2: number,
    y1: number,
    y2: number
): number {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2)
}

/**
 * You are given two integers, x and y, which represent your current location on a Cartesian grid: (x, y).
 * You are also given an array points where each points[i] = [ai, bi] represents that a point exists at (ai, bi).
 * A point is valid if it shares the same x-coordinate or the same y-coordinate as your location.
 *      Return the index (0-indexed) of the valid point with the smallest Manhattan distance from your current location.
 *      If there are multiple, return the valid point with the smallest index. If there are no valid points,
 *      return -1.
 * @param arr
 * @param x
 * @param y
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
export function nearestPointWithSameXOrY(
    arr: [number, number][],
    x: number,
    y: number
): number | null {
    if (!arr?.length) return null
    let closestDistance = null
    let closestCoordsIdx = null
    for (let i = arr.length - 1; i >= 0; i--) {
        const [x2, y2] = arr[i]
        if (x !== x2 && y !== y2) continue
        const distance: number = getManhattanDistance(x, x2, y, y2)
        if (closestDistance && distance > closestDistance) continue
        closestCoordsIdx = i
        closestDistance = distance
    }
    return closestCoordsIdx
}
