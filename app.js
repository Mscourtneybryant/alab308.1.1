/** --------------- PART ONE: MATH PROBLEMS --------------*/


// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check if each number
// is divisible by 5
const isDivisibleBy5 = (n1 % 5) && (n2 % 5) && (n3 % 5) && (n4 % 5) ;

console.log(isDivisibleBy5)

// Check if the first number
// is larger than the last number
const isLargerThanTheLastNumber = n1 > n4;

console.log(isLargerThanTheLastNumber)

// Subtract the first number
// from the second number
const subtractingNumbers = n2 - n1;

console.log(subtractingNumbers)

// Multiply the result from subtracting 
// numbers by the third number
const multiplyingNumbers = subtractingNumbers * n3;
console.log(multiplyingNumbers)

// Checking the remaining numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const findingTheRemainder = multiplyingNumbers % n4;
console.log(findingTheRemainder)

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const areAllOfTheseNumbersOver25 =  n1 > 25 && n2 > 25 && n3 > 25 && n4 > 25;

console.log(areAllOfTheseNumbersOver25)


// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


  /** --------------- PART TWO: PRACTICAL MATH --------------*/

  let distance = 1500
  