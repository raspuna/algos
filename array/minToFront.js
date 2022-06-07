function minToFront(array){
    if (array.length == 1) {
        return array;
    }
    // find minimum
    var min = array[0]
    var minIdx = 0
    for( var i = 1; i < array.length; i++) {
        if (min > array[i]){
            min = array[i]
            minIdx = i 
            console.log(min, minIdx)
        }
    }
    // shift
    for ( var i = minIdx ; i > 0 ; i--){
        array[i] = array[i - 1]
    }
    array[0] = min
    return array
}

console.log(minToFront([4,2,1,3,5]))
