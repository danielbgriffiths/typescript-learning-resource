function isPointInCircleArea(point: number[], query: number[]): boolean {
    const xDeltaSquared = Math.abs(point[0] - query[0]) ** 2
    const yDeltaSquared = Math.abs(point[1] - query[1]) ** 2
    const radiusSquared = query[2] ** 2
    return xDeltaSquared + yDeltaSquared <= radiusSquared
}

/**
 * You are given an array points where points[i] = [xi, yi] is the coordinates of the ith point on a 2D plane.
 * Multiple points can have the same coordinates.
 *
 *      You are also given an array queries where queries[j] = [xj, yj, rj] describes a circle centered at (xj, yj) with a radius of rj.
 *
 *      For each query queries[j], compute the number of points inside the jth circle. Points on the border of the circle are considered inside.
 *
 *      Return an array answer, where answer[j] is the answer to the jth query.
 *
 * @param {number[][]} points array of tuple [x, y] coordinates
 * @param {number[][]} queries array of [x, y, r] values
 *
 * Time Complexity: O(n**2)
 * Space Complexity: O(1)
 */
export function numberOfPointsInsideCircle(
    points: number[][],
    queries: number[][]
): number[] {
    return queries.reduce((allQueriesPointCount, query) => {
        return [
            ...allQueriesPointCount,
            points.reduce((queryPointCount, point) => {
                return isPointInCircleArea(point, query)
                    ? queryPointCount + 1
                    : queryPointCount
            }, 0),
        ]
    }, [])
}
