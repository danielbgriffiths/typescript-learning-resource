import { subdomainVisitCount } from '../subdomain-visit-count'

describe('subdomainVisitCount', () => {
    it('should handle valid case one', () => {
        expect(subdomainVisitCount(['9001 discuss.leetcode.com'])).toEqual([
            '9001 discuss.leetcode.com',
            '9001 leetcode.com',
            '9001 com',
        ])
    })

    it('should handle valid case two', () => {
        expect(
            subdomainVisitCount([
                '900 google.mail.com',
                '50 yahoo.com',
                '1 intel.mail.com',
                '5 wiki.org',
            ])
        ).toEqual([
            '900 google.mail.com',
            '901 mail.com',
            '951 com',
            '50 yahoo.com',
            '1 intel.mail.com',
            '5 wiki.org',
            '5 org',
        ])
    })

    it('should handle empty case', () => {
        expect(subdomainVisitCount([])).toEqual([])
    })
})
