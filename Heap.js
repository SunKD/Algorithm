function Heap() {
    this.array = [0];
}

Heap.prototype.addHeap = function (val) {
    var parentIdx = Math.floor(this.array.length / 2);
    var idx = this.array.length;
    if (this.array.length === 1) {
        this.array.push(val);
        return this.array;
    }

    this.array.push(val);

    while (this.array[parentIdx] > val && parentIdx != 0) {

        var temp = this.array[parentIdx];
        this.array[parentIdx] = this.array[idx];
        this.array[idx] = temp;
        idx = parentIdx;
        parentIdx = Math.floor(parentIdx / 2);
    }
    return this.array;
}

Heap.prototype.addHeapRecurs = function (val, idx = this.array.length, parent = Math.floor(idx / 2), added = false) {
    if (!added) {
        this.array.push(val);
        added = true;
    }
    if (parent < 1) {
        return this.array;
    }

    while (this.array[parent] > val) {
        var temp = this.array[parent];
        this.array[parent] = this.array[idx];
        this.array[idx] = temp;
        return this.addHeapRecurs(val, parent, Math.floor(parent / 2), true);
    }
    return this.array;
}

var first = new Heap();

console.log(first.addHeapRecurs(-9));
console.log(first.addHeapRecurs(15));
console.log(first.addHeapRecurs(20));
console.log(first.addHeapRecurs(1));
console.log(first.addHeapRecurs(23));
console.log(first.addHeapRecurs(7));
console.log(first.addHeapRecurs(12));
console.log(first.addHeapRecurs(-33));
console.log(first.addHeapRecurs(77));

Heap.prototype.removeHeap = function (val) {
    if (this.array[this.array.length - 1] == val) {
        this.array.pop();
        return this.array;
    }

    var idx;
    for (let i = 0; i < this.array.length; i++) {
        if (this.array[i] === val) {
            idx = i;
            break;
        }
    }
    if(idx == null){
        return false;
    }
    var temp = this.array[idx];
    this.array[idx] = this.array[this.array.length - 1];
    this.array[this.array.length - 1] = temp;
    this.array.pop();


    var child = idx * 2;
    var child2 = (idx * 2) + 1;
    var path = this.array[child] < this.array[child2] ? child : child2;

    //sink down
    if (this.array[idx] > this.array[path]) {
        while (idx < this.array.length && (this.array[idx] > this.array[path])) {
            let temp = this.array[path];
            this.array[path] = this.array[idx];
            this.array[idx] = temp;
            idx = path;
            child = child * 2;
            child2 = child + 1;
            if (this.array[child2] == null) {
                path = child;
            } else {
                path = this.array[child] < this.array[child2] ? child : child2;
            }
        }
        return this.array;
    }

    //bubble up
    var parent = Math.floor(idx / 2);
    if (this.array[idx] < this.array[parent]) {
        while (idx > 0 && this.array[idx] > this.array[parent]) {
            let temp = this.array[parent]
            this.array[parent] = this.array[idx];
            this.array[idx] = temp;
            idx = parent;
            parent = Math.floor(idx / 2);
        }
    }
    return this.array;
}


console.log(first.removeHeap(-33));