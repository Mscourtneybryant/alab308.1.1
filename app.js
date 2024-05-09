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

  let totalDistance = 1500;
  let carFuelEffciency55 = 30;
  let fuelEffiency55 = 1500 / 30;
  console.log(fuelEffiency55)


  let carFuelEffciency60 = 28;
  let fuelEffiency60 = 1500 / 28;
  console.log(fuelEffiency60);


  let carFuelEffciency75 = 23;
  let fuelEffiency75 = 1500 / 23;
  console.log(fuelEffiency75);

  let fuelBudget = 175
  let averageFuelCost = 3

  const isFuelBudgetEnough = fuelBudget === averageFuelCost * 3;
  console.log(isFuelBudgetEnough) 

  const howMuchFuelCost55 = fuelEffiency55 * averageFuelCost;
  console.log(howMuchFuelCost55)

  const howMuchFuelCost60 = fuelEffiency60 * averageFuelCost;
  console.log(howMuchFuelCost60)

  const howMuchFuelCost75 = fuelEffiency75 * averageFuelCost;
  console.log(howMuchFuelCost75)



  if (howMuchFuelCost55 > fuelBudget){
    console.log("You are over the fuel budget!")
  }else{
    console.log("You are within your fuel budget!")
  }


  if(howMuchFuelCost60 > fuelBudget){
    console.log("You are over the fuel budget!")
  }else{
    console.log("You are within your fuel budget!")
  }

  
  if(howMuchFuelCost75 > fuelBudget){
    console.log("You are over the fuel budget!")
  }else{
    console.log("You are within your fuel budget!")
  }
