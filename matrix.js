//given the multi dimentional arrays, if any value is 0 on the index make that row and col all to 0

function makeTo0(arr) {
    var row = [];
    var col = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] === 0) {
                row.push(i);
                col.push(j);
            }
        }
    }

    var rowNum = 0;
    var colNum = 0;
    while(rowNum < row.length){
        for (let j = 0; j < arr[rowNum].length; j++) {
            if (row[rowNum] == row[rowNum + 1]) {
                row.splice(rowNum, 1);
            }
            console.log(rowNum, j)
            arr[row[rowNum]][j] = 0;
        }
        rowNum++;
    }

    while(colNum < col.length){
        for (let j = 0; j < arr.length; j++) {
            if (col[colNum] == col[colNum + 1]) {
                col.splice(colNum, 1);
            }
            arr[j][col[colNum]] = 0;
        }
        colNum++;
    }
    return arr;
}

var arr = [[1, 1, 2, 2, 3],
            [1, 3, 5, 7, 8],
            [9, 0, 7, 0, 7],
            [9, 7, 5, 4, 2]];
            
console.log(makeTo0(arr));