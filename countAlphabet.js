
function countAlpabet(input){
    var numCount = Array(26).fill(0);
    input = input.toLowerCase();
    for(let i = 0; i < input.length; i++){
        if(input[i] != ' '){
            let idx = input[i].charCodeAt(0) - 'a'.charCodeAt(0);
            numCount[idx] ++;
        }
    }
    printResult(numCount);
}

function printResult(numCount){
    for(let i = 0; i < numCount.length; i++){
        console.log(String.fromCharCode(i + 'a'.charCodeAt(0))+ ": " + numCount[i]);
    }
}

countAlpabet("This is Sun Davey");