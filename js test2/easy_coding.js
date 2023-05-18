1; // isPrime - Returns true or false, indicating whether the given number is prime.
function test_prime(n) {
  if (n === 1 || n === 0) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(test_prime(0));
console.log(test_prime(1));
console.log(test_prime(17));
console.log(test_prime(10000000000000));

2; // factorial - Returns a number that is the factorial of the given number.
function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(6));

3; // fib - Returns the nth Fibonacci number.
function fib(n, a = 1, b = 0) {
  if (n === 0) {
    return b;
  } else {
    return fib(n - 1, b, a + b);
  }
}

console.log(fib(0));
console.log(fib(1));
console.log(fib(10));
console.log(fib(20));

4; // isSorted - Returns true or false, indicating whether the given array of numbers is sorted.
function isSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] && arr[i + 1] > arr[i]) {
      continue;
    } else if (arr[i + 1] && arr[i + 1] < arr[i]) {
      return false;
    }
  }
  return true;
}

console.log(isSorted([]));
console.log(isSorted([-Infinity, -5, 0, 3, 9]));
console.log(isSorted([3, 9, -3, 10]));

5; // reverse - Reverses the given string (yes, using the built in reverse function is cheating).
function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

console.log(reverseString(""));
console.log(reverseString("abcdef"));
console.log(reverseString("Hello"));

6; //indexOf - Implement the indexOf function for arrays.
function indexOf(arr, numb) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === numb) {
      return i;
    }
  }
  return -1;
}
console.log(indexOf([1, 2, 3], 1));
console.log(indexOf([1, 2, 3], 4));

7; // isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).
function isPalindrome(str) {
  let testString = str.replace(/ /g, "").toLowerCase();
  for (let i = 0; i < testString.length / 2; ++i) {
    if (testString.charAt(i) !== testString.charAt(testString.length - i - 1)) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(""));
console.log(isPalindrome("abcdcba"));
console.log(isPalindrome("abcd"));
console.log(isPalindrome("A man a plan a canal Panama"));

8; // missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.
function missing(arr) {
  let max = Math.max(...arr);
  for (let i = 1; i < max; i++) {
    if (arr.indexOf(i) === -1) {
      return i;
    }
  }
}

console.log(missing([]));
console.log(missing([1, 4, 3]));
console.log(missing([2, 3, 4]));
console.log(missing([5, 1, 4, 2]));
console.log(missing([1, 2, 3, 4]));

9; // isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.
function isBalanced(str) {
  if (str.indexOf("}{") >= 0) {
    return false;
  }
  if (str.match(/{/g).length !== str.match(/}/g).length) {
    return false;
  }
  str = str.replace(/[^{}]/g, "");
  while (str.length > 1) {
    str = str.replace(/{}/g, "");
  }
  return str.length === 0;
}
console.log(isBalanced("}{"));
console.log(isBalanced("{{}"));
console.log(isBalanced("{}{}"));
console.log(isBalanced("foo { bar { baz } boo }"));
console.log(isBalanced("foo { bar { baz }"));
console.log(isBalanced("foo { bar } }"));
