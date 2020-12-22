
// calculate permutation
const permutation = (n: number): number => {
    let p = n;

    for(let i = p- 1; i > 0; i -= 1) {
        p = p * i;
    }

    return p;
}

// calculate combinations based on formula r = total digit count = n 
const calculateCombinations = (a: number, b: number) => permutation(a + b)/(permutation(a) * permutation(b));

function climbStairs(n: number): number {
    let combinations = 0;
    let smallStepCount = n;
    let largeStepCount = 0;
    
    for (let i = 0; i <= n; i += 1) {
        if(smallStepCount === n || largeStepCount * 2 === n) {
            combinations += 1;
        }       

        smallStepCount -= 1;

        if(smallStepCount <= 0 || largeStepCount * 2 >= n){
            break;
        }

        const sum = smallStepCount + largeStepCount * 2;

        if (sum > n) {
            continue;
        }

        if(sum < n) {
            largeStepCount += 1;
            continue;
        }
        
        combinations += calculateCombinations(smallStepCount, largeStepCount);

    }

    return combinations;
};

climbStairs(6);


/*
    n = 4
    1 1 1 1
    1 1 1 2 => discard
    1 1 2 => ok
    1 2 2 => discard
    2 2 => ok
*/