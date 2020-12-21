/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[], iteration = 0): void {  
    const firstIndex = iteration;
    const lastIndex = s.length - 1 - iteration;
    
    if(firstIndex >= lastIndex) {
        return;
    }

    const firstValue = s[firstIndex];
    const lastValue = s[lastIndex];

    s[firstIndex] = lastValue;
    s[lastIndex] = firstValue;

    reverseString(s, iteration + 1);
};