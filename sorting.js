function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        var min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (i != min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }

    }
    return arr;
}
var arr = [10, 3, 2, 12, 0];
var arr1 = [25, 4, -3, 12, 80];
// console.log(selectionSort(arr1));

function insertionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        var idx = i + 1;
        while (idx > 0) {
            if (arr[idx] < arr[idx - 1]) {
                var temp = arr[idx];
                arr[idx] = arr[idx - 1];
                arr[idx - 1] = temp;
            }
            idx--;
        }

    }
    return arr;
}
// console.log(insertionSort(arr));


function merge(a1, arr2) {
    var newArr = [];

    while (a1.length > 0 && arr2.length > 0) {
        if (a1[0] > arr2[0]) {
            newArr.push(arr2.shift());
        } else {
            newArr.push(a1.shift());
        }
    }

    if (a1.length === 0) {
        newArr = newArr.concat(arr2);
    }
    if (arr2.length === 0) {
        newArr = newArr.concat(a1);
    }

    return newArr;
}


// console.log(merge([0, 19, 6], [3, 5]))

function mergeSort(arr, start = 0, end = arr.length - 1) {
    if (start === end) {
        return [arr[end]];
    }
    var mid = Math.floor((start + end) / 2);
    return merge(mergeSort(arr, start, mid), mergeSort(arr, mid + 1, end));
}

console.log(mergeSort([3, 4, 1, 10, 33, 7]));
