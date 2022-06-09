function removeNegatives(arr) {
  var idx = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      arr[idx] = arr[i];
      idx += 1;
    }
  }
  arr.length = idx;
  return arr;
}

console.log(removeNegatives([-9, 1, 2, 3, -4, 4, -2, -9, -10, 5]));

function secondToLast(arr) {
  if (arr.length < 2) {
    return null;
  }
  return arr[arr.length - 2];
}

console.log(secondToLast([42, true, 4, "Kate", 7]));

function nthToLast(arr, n) {
  if (arr.length < n) {
    return null;
  }
  return arr[arr.length - n];
}
console.log(nthToLast([42, true, 4, "Kate", 7], 2));
console.log(nthToLast([42, true, 4, "Kate", 7], 5));

function secondLargest(arr) {
  if (arr.length < 2) {
    return null;
  }
}
class minHeap {
  constructor() {
    this.array = [];
    this.length = 0;
  }
  print() {
    console.log(this.array);
  }
  insert(num) {
    this.length++;
    if (this.length == 0) {
      this.array[1] = num;
    } else {
      // find the place for num
      // start with the last position
      // compare its' parent
      // if parent is bigger than num, than compare parent of parent
      let idx = this.array.length;
      while (idx != 1 && this.array[Math.floor(idx / 2)] > num) {
        this.array[idx] = this.array[Math.floor(idx / 2)];
        idx = Math.floor(idx / 2);
      }
      this.array[idx] = num;
    }
  }
  peep() {
    return this.array[1];
  }
  pop() {
    if (this.length == 0) {
      return null;
    } else {
      //save the min value to ret
      let ret = this.array[1];
      // save the last value to tmp
      let tmp = this.array[this.length];
      let idx = 1;
      this.length--;
      this.array.length--;
      while (idx < this.length) {
        // choose smaller child and swap with it
        // go to left
        if (this.array[idx * 2] < this.array[idx * 2 + 1]) {
          this.array[idx] = this.array[idx * 2];
          idx *= 2;
        } else {
          // go to right
          this.array[idx] = this.array[idx * 2 + 1];
          idx = idx * 2 + 1;
        }
      }
      this.array[idx] = tmp;
      return ret;
    }
  }
}

function nthLargest(arr, n) {
  //array is too short
  if (arr.length < n) {
    return null;
  }
  // sort first n element,
  // compare i element to n-1th element.
  // if n-1th is larger than i
  // than find the position of i
  // and the new n-1 th play the role
  // so I decided to use a minHeap.
  var nMinHeap = new minHeap();
  for (var i = 0; i < n; i++) {
    nMinHeap.insert(arr[i]);
  }
  for (var i = n; i < arr.length; i++) {
    if (nMinHeap.peep() < arr[i]) {
      nMinHeap.pop();
      nMinHeap.insert(arr[i]);
    }
    nMinHeap.print();
  }
  return nMinHeap.peep();
}
console.log(nthLargest([42, 1, 4, Math.PI, 7], 2));

function skilineHeights(arr) {
  var watchable = [];
  var max = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= max) {
      continue;
    } else {
      max = arr[i];
      watchable.push(arr[i]);
    }
  }
  return watchable;
}
//console.log(skilineHeights([-1, 1, 1, 7, 3]));
//console.log(skilineHeights([0, 4]));
