function swap(arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
  return arr;
}
function randomInt(max) {
  return Math.floor(Math.random() * max);
}
function shuffle(arr) {
  for (var i = 0; i < arr.length; i++) {
    swap(arr, randomInt(arr.length), i);
  }
  return arr;
}

console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8]));

function removeRange(arr, start, end) {
  if (start < 0) {
    start = 0;
  }
  if (end >= arr.length) {
    end = arr.length - 1;
  }
  for (var i = start; i <= arr.length; i++) {
    if (i + end > arr.length) {
      break;
    }
    arr[i] = arr[i + end - 1];
  }
  arr.length = arr.length - end + start - 1;
  return arr;
}
console.log(removeRange([20, 30, 40, 50, 60, 70], 2, 4));
console.log(removeRange([20, 30, 40, 50, 60, 70], 2, 7));
console.log(removeRange([20, 30, 40, 50, 60, 70], 1, 2));

function intermediateSums(arr) {
  var sum = 0;
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (i && i % 10 == 0) {
      newArr.push(sum);
      sum = 0;
    }
    sum += arr[i];
    newArr.push(arr[i]);
  }
  newArr.push(sum);
  return newArr;
}
console.log(intermediateSums([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]));
console.log(intermediateSums([1, 2, 1, 2, 1, 2, 1, 2, 1, 2]));

console.log(intermediateSums([1, 2, 1, 2, 1, 2, 1, 2, 1]));
function doubleTrouble(arr) {
  var range = arr.length;
  for (var i = range - 1; i >= 0; i--) {
    arr[i * 2] = arr[i];
    arr[i * 2 + 1] = arr[i];
  }
  return arr;
}
console.log(doubleTrouble([4, "Ulysses", 42, false]));

function zipIt(arr1, arr2) {
  // index for the zip
  sameIdx = Math.min(arr1.length, arr2.length);
  // arr1 is dynamic, so save the original length.
  var range = arr1.length;

  // add arr1's leftover
  if (arr1.length > sameIdx) {
    var jdx = range + arr2.length - 1;
    for (var i = range - 1; i >= sameIdx; i--) {
      arr1[jdx] = arr1[i];
      console.log(jdx, arr1[jdx]);
      jdx--;
    }
  }
  // zip
  // place arr1 to even index
  for (var i = sameIdx - 1; i >= 0; i--) {
    arr1[i * 2] = arr1[i];
  }
  // place arr2 to odd index
  for (var j = 0; j < sameIdx; j++) {
    arr1[j * 2 + 1] = arr2[j];
  }
  // add arr2's leftover
  if (arr2.length > sameIdx) {
    var idx = range + arr2.length - 1;
    for (var k = arr2.length - 1; k >= sameIdx; k--) {
      arr1[idx] = arr2[k];
      idx--;
    }
  }
  return arr1;
}

console.log(zipIt([1, 2], [10, 20, 30, 40]));
console.log(zipIt([1, 2, 3, 4], [10, 20]));
console.log(zipIt([], [4]));
console.log(zipIt([1, 2, 3, 4, 5], [10, 20]));
console.log(zipIt([1, 2], [10, 20, 30, 40, 50]));
