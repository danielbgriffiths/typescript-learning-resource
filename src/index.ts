import * as algos from './algorithms'

function init() {
    for (const fn of algos.reverseArrayFns) {
        const payload = [1, 2, 3, 4, 5]
        console.info(`Reverse Array: ${payload}`)
        const result = fn<number>(payload)
        console.info(`Result: ${result}\n`)
    }

    for (const fn of algos.subArraySum) {
        const payload = {
            arr: [1, 2, 3, 4, 5, 5, 6, 7],
            sum: 11,
        }
        console.info(`Sum of Sub Array: Arr=${payload.arr}, Sum=${payload.sum}`)
        const result = fn(payload.arr, payload.sum)
        console.info(`Result: ${result}\n`)
    }

    for (const fn of algos.unionIntersectionFns) {
        const payload = {
            arr: [1, 2, 3, 4, 5, 5, 6, 7],
            arr2: [1, 2, 4, 5, 8, 12, 13, 14],
        }
        console.info(
            `Union / Intersection: Arr=${payload.arr}, Arr2=${payload.arr2}`
        )
        const result = fn(payload.arr, payload.arr2)
        console.info(`Result: Union=${result[0]}, Intersection=${result[1]}\n`)
    }
}

init()
