

function BST(){
    this.root = null;
};

function Node(val){
    this.val = val;
    this.left = null;
    this.right = null;
}


BST.prototype.add = function(val){
    let newNode = new Node(val);

    if(this.root == null){
        this.root = newNode;
    }else{
        var runner = this.root;
        while(runner){
            console.log(runner);
            if(runner.val < val){
                if(runner.right == null){
                    runner.right = newNode;
                    return;
                }
                runner = runner.right;
                console.log("runner moved to right")
            }else{
                if(runner.left == null){
                    runner.left = newNode;
                    return;
                }
                runner = runner.left;
                
                console.log("runner moved to left")
            }
        }
        // runner = newNode;
        console.log("val added")
    }
    return this;
};

BST.prototype.contains = function(val){
    if(this.root == null){
        return false;
    }
    if(this.root.val == val){
        return true;
    }else{
        var runner = this.root;
        console.log(runner.val);
        while(runner){
            console.log(runner)
            if(val > runner.val){
                runner = runner.right;
            }else{
                runner = runner.left;
            }
            if(runner.val == val&& runner.val != null){
                return true;
            }
            else{
                return false;
            }
        }
        return false;
    }
}

BST.prototype.max = function(){
    if(this.root == null){
        return false;
    }else{
        let runner = this.root;
        while(runner.right!= null){
            runner = runner.right;
        }
        let max =  runner.val;
        console.log("max value", max);
    }
}
BST.prototype.min = function(){
    if(this.root == null){
        return false;
    }else{
        let runner = this.root;
        while(runner.left!= null){
            runner = runner.left;
        }
        let min =  runner.val;
        console.log("min value", min);
    }
}

// var BST1 = new BST();
// console.log(BST1.add(3))
// BST1.add(2);
// BST1.add(10);
// console.log(BST1);

// console.log(BST1.contains(3));
// console.log(BST1.contains(11));

// BST1.max();
// BST1.min();



function BSTRecus(arr, val, start = 0, end=arr.length-1){
    var mid = Math.floor((start+end)/2);
    if(arr[mid] === val){
        return mid;
    }

    if(start > end){
        return false;
    }

    if(val < arr[mid]){
        return BSTRecus(arr, val, start, mid-1);
    }else{
        return BSTRecus(arr, val, mid+1, end);
    }

}
var bstArray = [2, 4, 5, 6, 8, 9, 10]
console.log(BSTRecus(bstArray, 2));