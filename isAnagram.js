function isAnagram(str1, str2){
    var char1 = [...str1];
    var char2 = [...str2];

    char1.sort();
    char2.sort();
    console.log(char1)
    console.log(char2)
    return char1.toString() == char2.toString();
}

console.log(isAnagram('abcd', 'cdsab'))