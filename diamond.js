const rows = parseInt(prompt("Enter the number of rows: "));


for (let i = 0; i < rows; i++) {
    console.log(' '.repeat(rows - i - 1) + '*'.repeat(2 * i + 1));
}


for (let i = rows - 2; i >= 0; i--) {
    console.log(' '.repeat(rows - i - 1) + '*'.repeat(2 * i + 1));
}
