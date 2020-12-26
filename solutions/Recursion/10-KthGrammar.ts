// works but slow
function slowKthGrammar(N: number, K: number): number {
    let row = [0];

    for(let i = 1; i < N; i += 1) {
        const newRow = [];
        row.forEach(value => {
            if(value === 0) {
                newRow.push(0, 1)
            } else {
                newRow.push(1, 0)
            }
        });
        row = newRow;
    }
    
    console.log(row);

    return row[K - 1];
};
/*
    0
    0   | 1   |
    0 1 | 1 0 |
    get prev index by dividing existing in half
    e.g. N4 K5 => N3 K3 => N2 K2 => N1 K1
    e.g. N4 K4 => N3 K2 => N2 K1 => N1 K1
    thus can get O(N) time complexity
    0 1 | 1 0 | 1 0 | 0 1 |
*/

function kthGrammar(N: number, K: number): number {
    if (N === 1) {
        return 0;
    }
    
    const prev =  kthGrammar(N - 1, Math.ceil(K/2));
    const isOdd = K % 2;

    if(prev === 1) {
        return isOdd ? 1 : 0;
    }

    if(prev === 0) {
        return isOdd ? 0 : 1;
    }
};

console.log(kthGrammar(3000, 100));