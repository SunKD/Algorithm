var arr = [9, 8, 52, 5, 94, 62, 7, 0, 78];

function secondMax(arr){
    var max1 = 0;
    var max2 = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max1){
            max2 = max1;
            max1 = arr[i];
        }else if(arr[i] > max2){
            max2 = arr[i];
        }
    }
    console.log(`first max = ${max1} second max = ${max2}`);
}

secondMax(arr);