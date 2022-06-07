function pushFront(array, num) {
    var newArray = [num, ...array];
    return newArray;
}
function popFront(array){
    var newArray = []
    for( var i = 1; i < array.length; i++){
        newArray.push(array[i])
    }
    console.log(newArray)
    return array[0]
}
function insertAt(array, pos, num) {
    var newArray =[];
    for (var i = 0; i < array.length; i ++){
        if (i == pos) {
            newArray.push(num);
        }
        newArray.push(array[i]);    
    }
    return newArray;
}

function removeAt(array, pos) {
    var newArray = [];
    var val = null;
    for (var i = 0; i < array.length; i++) {
        if (i == pos) {
            val = array[i]; 
        } else {
            newArray.push(array[i]);
        }
    }
    console.log(newArray);
    return val;
}

function swapPairs(array){
    var tmp = null;
    var range = array.length - array.length % 2;
    for(var i=0; i < range; i++){
        if(i % 2 == 1) {
            tmp = array[i];
            array[i] = array[i-1];
            array[i-1] = tmp;
        }
    }
    return array;
}

function removeDupes(array){
    if (array.length < 1){
        return array;
    }
    var head = array[0];
    var newArray = [];
    newArray.push(array[0]);
    for(var i = 1; i < array.length; i++){
        if (head != array[i]) {
            newArray.push(array[i])
            head = array[i]
        }
    }
    return newArray;
}

console.log(pushFront([5,7,2,3], 8));
console.log(popFront([0,5,10,15]))
console.log(insertAt([100,200,5], 2, 311))
console.log(insertAt([9,33,7], 1, 42) )
console.log(removeAt([1000,3,204,77], 1));
console.log(removeAt([8,20,55,44,98], 3) );
console.log(swapPairs([1,2,3,4]));
console.log(swapPairs(["Brendan",true,42]));
console.log(removeDupes([-2,-2,3.14,5,5,10]))
console.log(removeDupes([9,19,19,19,19,19,29]) )