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

function insertionSort(arr){
    for(let i = 0; i < arr.length-1; i++){
        var idx = i+1;
        while(idx > 0){
            if(arr[idx]< arr[idx-1]){
                var temp = arr[idx];
                arr[idx] = arr[idx-1];
                arr[idx-1] = temp;
            }
            idx--;
        }
        
    }
    return arr;
}
console.log(insertionSort(arr));
