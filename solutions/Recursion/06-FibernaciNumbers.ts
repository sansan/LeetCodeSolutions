const cache = new Map();

cache.set(0, 0);
cache.set(1, 1);

function fib(n: number): number {
    if(cache.has(n)){
        return cache.get(n);
    }

    const result = fib(n-1) + fib(n - 2);

    cache.set(n, result);

    return result;
};

console.log(fib(100));
