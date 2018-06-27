function segregate0(arr){
    var newArr = [];
    var i = 0;
    while(i <= arr.length){
        if(arr[i] == 0){
            let item = arr.splice(i, 1)
            newArr.push(item[0])
        }else{
            i++;
        }
    }    
    newArr = newArr.concat(arr);
    arr.length = 0;
    console.log(arr)
    return newArr;
}

var array   =  [0, 1, 0, 1, 0, 0, 1, 1, 1, 0] 
console.log(segregate0(array))