function isAnagram(str1, str2){
    //breaking the string by char and putting them into an array
    var char1 = [...str1];
    var char2 = [...str2];

    //.sort() will sort the characters alphabetical order
    char1.sort();
    char2.sort();
    console.log(char1)
    console.log(char2)
    return char1.toString() == char2.toString();
}

console.log(isAnagram('abcd', 'cdsab'))