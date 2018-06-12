function stockSelling(arr){
    var total = 0;
    var Psell = 0;
    var bought = arr[0];
    total -= bought;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] >= bought && arr[i] >Psell){
            Psell = arr[i];
        }
        console.log("possible highest selling price: ", +Psell);
        if(arr[i] <= bought){
            total += Psell;
            console.log("sold the stock", Psell)
            total -= arr[i];
            console.log("I bought my stock: ", arr[i]);
            Psell = 0; 
            bought = arr[i];
        }
    }
    total += Psell;
    console.log(total);
    return total;
}

console.log(stockSelling([100, 180, 260, 310, 40, 535, 695]));
console.log(stockSelling([400, 180, 260, 310, 40, 535, 695]));
console.log(stockSelling([100, 40, 180, 50, 50, 50, 50]));
