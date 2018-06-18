function HT() {
    this.arr = Array(5).fill(null);
    this.len = 0;
}

HT.prototype.hash = function (key) {
    var hash = 0;
    if (key.length == 0) return hash;
    for (i = 0; i < key.length; i++) {
        char = key.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    console.log("this is the hasingfunction", hash)
    return hash;
    // var hash = 5381,
    //     i = key.length;

    // while (i) {
    //     hash = (hash * 33) ^ key.charCodeAt(--i);
    // }

    /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
     * integers. Since we want the results to be always positive, convert the
     * signed int to an unsigned by doing an unsigned bitshift. */
    // return hash >>> 0;
}

HT.prototype.resize = function () {
    var newArr = Array(this.arr.length*2).fill(null);
    for (let i = 0; i < this.arr.length; i++) {
        if (this.arr[i] != null) {
            var idx = this.arr[i].key % this.arr.length;
            newArr[idx] = this.arr[i];
        }
    }
    this.arr = newArr;
}
HT.prototype.openAddressingAdd = function (key, val) {
    var hashed = this.hash(key);
    var idx = hashed % this.arr.length;

    if (Math.floor(this.arr.length / 2) <= this.len) {
        this.resize();
    }
    if (this.arr[idx] == null) {
        this.arr[idx] = { key: hashed, value: val };
        this.len++;
    } else {
        while (this.arr[idx] !== null) {
            idx++;
        }
        this.arr[idx] = { key: hashed, value: val };
        this.len++;
    }
    return this.arr;
}

function Node(key, val){
    this.val = val;
    this.key = key;
    this.next = null;
}

HT.prototype.chaningAdd = function(key, val){
    var hashed = this.hash(key);
    var idx = hashed % this.arr.length;
    if(this.arr[idx] == null){
        this.arr[idx] = new Node(key, val);
        console.log(this.arr[idx], "this is arr[idx]")
        console.log(this.arr)
    }else{
        var newNode = new Node(key, val);
        console.log(this.arr[idx], "this is arr[idx]2")
        newNode.next = this.arr[idx];
        this.arr[idx] = newNode;
        console.log(this.arr, "this is after adding new node in the smae index")
    }
}

var hashT = new HT();
// hashT.add('Jully', '425-555-6666')
// hashT.add('Mike', '534-562-9561')
// console.log(hashT.chaning('Tim', '252-256-8458'))
// console.log(hashT.chaning('Henry', '252-256-8458'))
// console.log(hashT.chaning('Mike', '252-256-8458'))
// console.log(hashT.chaning('Jully', '252-256-8458'))
// console.log(hashT.chaning('Jully', '252-256-8458'))
// console.log(hashT.chaning('Jully', '252-256-8458'))
// console.log(hashT.chaning('Jully', '252-256-8458'))
hashT.openAddressingAdd('Ted', '513-571-6987')
hashT.openAddressingAdd('Juliet', '425-555-6666')
hashT.openAddressingAdd('Keith', '534-562-9561')
hashT.openAddressingAdd('Gina', '513-571-6987')
console.log(hashT.openAddressingAdd('Tim', '252-256-8458'))
hashT.openAddressingAdd('6', 55)
hashT.openAddressingAdd('9', 33)
console.log(hashT.openAddressingAdd('7', 13))
