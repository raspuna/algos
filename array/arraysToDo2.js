function reverse(array) {
  var tmp = null;

  var range = (array.length - (array.length % 2)) / 2;
  for (var i = 0; i < range; i++) {
    tmp = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = tmp;
  }
  return array;
}

console.log(reverse([1, 2, 3, 4, 5, 6, 7]));
console.log(reverse([1, 2, 3, 4, 5, 6]));
console.log(reverse([]));
console.log(reverse([1]));

function getNext(idx, shiftBy, len) {
  var newIdx = (len + idx - shiftBy) % len;
  return newIdx;
}
function rotate(arr, shiftBy, idx) {
  var origIdx = idx;
  var tmp = arr[idx];
  var cnt = 0;
  while (true) {
    idxNext = getNext(idx, shiftBy, arr.length);
    //console.log("idx, idxNext:", idx, arr[idx], idxNext, arr[idxNext]);
    arr[idx] = arr[idxNext];
    idx = idxNext;
    if (idx == (arr.length + origIdx + shiftBy) % arr.length) {
      arr[idx] = tmp;
      break;
    }
    //console.log(cnt++, arr);
    if (cnt > arr.length) break;
  }
  return arr;
}
function rotateArr(arr, shiftBy) {
  if (shiftBy < 0) {
    shiftBy = arr.length + shiftBy;
  }
  if (arr.length % shiftBy == 0) {
    for (var i = 0; i < shiftBy; i++) {
      rotate(arr, shiftBy, i);
    }
  } else {
    rotate(arr, shiftBy, 0);
  }
  return arr;
}
function filterRange(arr, min, max) {
  var idx = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= min && arr[i] <= max) {
      arr[idx] = arr[i];
      idx++;
    }
  }
  arr.length = idx;
  return arr;
}

function concat(arr1, arr2) {
  var newArr = [];
  for (var i = 0; i < arr1.length; i++) {
    newArr[i] = arr1[i];
  }
  for (var j = 0; j < arr2.length; j++) {
    newArr[arr1.length + j] = arr2[j];
  }
  return newArr;
}
console.log("rotate");
console.log(rotateArr([1, 2, 3], 1));
console.log(rotateArr([1, 2, 3, 4, 5, 6, 7, 8, 9], 4));
console.log(rotateArr([1, 2, 3, 4, 5, 6], 2));
console.log(rotateArr([1, 2, 3, 4, 5, 6], 3));

console.log(rotateArr([1, 2, 3], -2));

console.log(rotateArr([1, 2, 3], -1));

console.log(filterRange([1, 3, 5, 6, 8, 11, -3, -5, 2, 6, 9], 3, 8));
console.log(concat([1, 2, 3], [5, 6, 7]));
