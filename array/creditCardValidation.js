function isCreditCardValid(digitArr) {
  //set aside last digit
  var lastDigit = digitArr.pop();
  // if the length of the array is odd, then index 0, 2, 4 need to be twiced
  // else odd index need to be twiced
  var isOddTwice = true;
  if (digitArr.length % 2 != 0) {
    isOddTwice = false;
  }
  var sum = 0;
  for (var i = 0; i < digitArr.length; i++) {
    if ((isOddTwice && i % 2 != 0) || (!isOddTwice && i % 2 == 0)) {
      digitArr[i] = 2 * digitArr[i];
      //if the number is over 9, then subtract 9
      if (digitArr[i] > 9) {
        digitArr[i] -= 9;
      }
    }
    sum += digitArr[i];
  }
  console.log(digitArr);
  console.log({ sum });
  if ((sum + lastDigit) % 10 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isCreditCardValid([5, 2, 2, 8, 2]));
