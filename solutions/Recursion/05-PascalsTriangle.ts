function getRow (rowIndex: number): number[] {
    const row: number[] = [1];

    for(let i = 0; i < rowIndex; i += 1){
        row.push(row[i] * (rowIndex - i)/(i + 1))
    }

    return row;
}

console.log(getRow(10));