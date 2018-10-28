// vv First Javascript Calculator vv

function addNums(numOne, numTwo){
  return numOne + numTwo;
}
let ans = addNums(5,5);
console.log("it is " + ans);

function subtNums(num1, num2){
 return num1 - num2;
}
let ans1 = subtNums(152,27);
console.log("yo it's " + ans1);

function multNums(num1, num2){
 return num1 * num2;
}
 let ans2 = multNums(5,5);
 console.log("you know it's " + ans2);

 function diviNums(num1, num2){
   return num1 / num2;
 }
 let quotient = diviNums(100,20);
 console.log("here it is " + quotient);

function calculator(num1, num2, operation){
 if (operation === '+') {
   return addNums(num1,num2);

} if (operation === '-') {
   return subtNums(num1,num2);

} if (operation === '*') {
 return multNums(num1,num2);

} if (operation === '/') {
 return Math.floor(diviNums(num1,num2));

 }
}

calculator(4444,40,'-');