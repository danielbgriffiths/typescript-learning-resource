import * as algos from './algorithms';

function init() {
    for (const fn of algos.reverseArrayFns) {
        const payload = [1, 2, 3, 4, 5];
        console.info(`Reverse Array: ${payload}`);
        const result = fn<number>(payload);
        console.info(`Result: ${result}\n`);
    }
}

init();
