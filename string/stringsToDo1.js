function removeBlanks(str) {
  strArr = str.split(" ");
  newStr = strArr.join("");
  console.log(newStr);
  return newStr;
}
removeBlanks("Pl ayTha tF u nkyM usi c");
removeBlanks("I can not BELIEVE it's not BUTTER");

const getDigits = (str) => {
  let digits = [];
  for (var i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      digits.push(str[i]);
    }
  }
  const result = Number(digits.join(""));
  return result;
};
console.log(getDigits("abc8c0d1ngd0j0!8") === 801008);
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0") === 1357924680);

const acronym = (str) => {
  const strArr = str.split(" ");
  let result = "";
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length < 1) {
      continue;
    }
    console.log(strArr[i][0]);
    result += strArr[i][0].toUpperCase();
  }
  console.log(result);
  return result;
};
console.log(
  acronym(" there's no free lunch - gotta pay yer way. ") == "TNFL-GPYW"
);
console.log(acronym("Live from New York, it's Saturday Night!") === "LFNYISN");

const countNonSpaces = (str) => {
  const strArr = str.split(" ");
  const newStr = strArr.join("");
  return newStr.length;
};
console.log(countNonSpaces("Honey pie, you are driving me crazy") === 29);
console.log(countNonSpaces("Hello world !") === 11);

const removeShorterStrings = (strArr, num) => {
  var newArr = [];
  for (i in strArr) {
    if (strArr[i].length >= num) {
      newArr.push(strArr[i]);
    }
  }
  return newArr;
};
console.log(
  removeShorterStrings(
    ["Good morning", "sunshine", "the", "Earth", "says", "hello"],
    4
  )
);
console.log(
  removeShorterStrings(["There", "is", "a", "bug", "in", "the", "system"], 3)
);
