function divideByThree(num) {
    /* Returns the passed in number argument divided by three. */
    function divideByThree(number) {
        // Check if the argument is a valid number
        if (typeof number !== 'number' || isNaN(number)) {
          throw new Error('Invalid number provided. Please provide a valid number.');
        }
      
        // Calculate and return the result
        return number / 3; }
};

function averageOfTwo(num1, num2) {
    /* Returns the average of two numbers, num1 and num2. */
    // Check if both arguments are valid numbers
  if (typeof num1 !== 'number' || isNaN(num1) || typeof num2 !== 'number' || isNaN(num2)) {
    throw new Error('Invalid numbers provided. Please provide valid numbers.');
  }

  // Calculate and return the average
  return (num1 + num2) / 2;
};

function averageOfFour(num1, num2, num3, num4) {
    /* Takes in four numbers. The function should return the average of all of
    the numbers. */
    // Check if both arguments are valid numbers
  if (typeof num1 !== 'number' || isNaN(num1) || typeof num2 !== 'number' || isNaN(num2) || typeof num3 !== 'number' || isNaN(num3) || typeof num4 !== 'number' || isNaN(num4)) {
    throw new Error('Invalid numbers provided. Please provide valid numbers.');
  }

  // Calculate and return the average
  return (num1 + num2 + num3 + num4) / 4;
};

function doubler(nums) {
    /* Takes an array of numbers and returns a new array where every element of
    the original array is multiplied by 2. */
    // Check if the argument is an array
  if (!Array.isArray(nums)) {
    throw new Error('Invalid input. Please provide an array of numbers.');
  }

  // Map over the array and multiply each element by 2
  const resultArray = nums.map((number) => number * 2);

  return resultArray;
};

function combineArrays(arr1, arr2) {
    /* Takes in two arrays of numbers and returns the two arrays combined into
    a single array. **Hint**: Use the `Array.concat` method but be aware that
    calling this method won't permanently change, also known as **mutate**,
    either array. */
   // Check if the arguments are arrays
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error('Invalid input. Please provide two arrays.');
  }

  // Use Array.concat to combine the arrays into a new array
  const combinedArray = arr1.concat(arr2);

  return combinedArray;
};

function wordWithinArray(word, arr) {
    // Check if the second argument is an array
    if (!Array.isArray(arr)) {
      throw new Error('Invalid input. Please provide an array as the second argument.');
    }
  
    // Use Array.indexOf to check if the word is in the array
    const isWordInArray = arr.indexOf(word) !== -1;
  
    return isWordInArray;
  };
   


function echo(str) {
    return str.toUpperCase() + " ... " + str + " ... " + str.toLowerCase();
  }


   /* Takes a number, max and returns an array that contains every number from
    0 to max (not inclusive) that is divisible by either 3 or 5, **but not both**. */
function fizzBuzz(max) {
        const result = [];
        for (let i = 0; i < max; i++) {
          if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
            result.push(i);
          }
        }
        return result;
      };

function hello(name) {
    /* Takes in a string name and returns a string saying "Hello, " to that name. */
    return "Hello, " + name + "!";
};

function goodbye(name) {
    /* Takes in a string name and returns a string saying "Bye, " to that name. */
    return "Bye, " + name + "!";
};

function isFive(num) {
    /* Takes in a number, num, and returns `true` if a number is equal to 5 and
    `false` if it is not. */
    return num === 5;
};

function isOdd(num) {
    /* Takes in a number and returns `true` if the number is odd and returns
    `false` otherwise. Try writing this with and without `if` statements */
    return num % 2 !== 0;
};

function isSubString(searchString, subString) {
    /* Takes in two strings, `searchString` and `subString`. Should return
    `true` if `subString` is a part of the`searchString`, regardless of upper
    or lower case, and `false` if otherwise. */
    return searchString.toLowerCase().includes(subString.toLowerCase());
};

function aCounter(word) {
    /* Takes in a word and returns the number of a's within that word. Counts
    both lowercase (a) and uppercase (A). Your job is to translate the following
    function to use a `for` loop instead of the `while` loop it is currently
    using. */

    /* 
    let index = 0;
    let count = 0;
    while (index < word.length) {
        let char = word[index];
        if (char === "a" || char === "A") {
        count += 1;
        }
        index++;
    }
    return count;
    */
    let count = 0;

    for (let index = 0; index < word.length; index++) {
      let char = word[index];
      if (char === "a" || char === "A") {
        count += 1;
      }
    }
  
    return count;
  };

module.exports = {
    divideByThree,
    averageOfTwo,
    averageOfFour,
    doubler,
    combineArrays,
    wordWithinArray,
    echo,
    fizzBuzz,
    hello,
    goodbye,
    isFive,
    isOdd,
    isSubString,
    aCounter   
}