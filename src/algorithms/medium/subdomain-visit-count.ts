/**
 * A website domain "discuss.leetcode.com" consists of various subdomains. At the top level, we have "com",
 * at the next level, we have "leetcode.com" and at the lowest level, "discuss.leetcode.com".
 * When we visit a domain like "discuss.leetcode.com", we will also visit the parent domains "leetcode.com"
 * and "com" implicitly.
 *
 * A count-paired domain is a domain that has one of the two formats "rep d1.d2.d3" or "rep d1.d2" where rep
 * is the number of visits to the domain and d1.d2.d3 is the domain itself.
 *
 * For example, "9001 discuss.leetcode.com" is a count-paired domain that indicates that discuss.leetcode.com
 * was visited 9001 times.
 * Given an array of count-paired domains cpdomains, return an array of the count-paired domains of each
 * subdomain in the input. You may return the answer in any order.
 *
 * @param countPartsDomains
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 *
 * Mental Model:
 * Simple map accumulation of the count of each subdomain.
 */
export function subdomainVisitCount(countPartsDomains: string[]): string[] {
    if (!countPartsDomains?.length) return []

    const subdomainVisitCountMap = new Map<string, number>()

    for (const countPartsDomain of countPartsDomains) {
        const parts: string[] = countPartsDomain.split(' ')

        const visitCount: number = parseInt(parts[0])
        const subdomainParts: string[] = parts[1].split('.')

        while (subdomainParts.length) {
            const joinedSubdomain: string = subdomainParts.join('.')
            const accumulatedVisitCount: number =
                (subdomainVisitCountMap.get(joinedSubdomain) || 0) + visitCount

            subdomainVisitCountMap.set(joinedSubdomain, accumulatedVisitCount)
            subdomainParts.shift()
        }
    }

    return Array.from(subdomainVisitCountMap).map(
        ([visitCount, subdomainParts]) => `${visitCount} ${subdomainParts}`
    )
}

// Max*len
//
