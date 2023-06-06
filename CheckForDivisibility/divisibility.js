// check for Divisibility 
// print all the numbers that are divisible by 3, but not by 2.
// Using a for loop and continue statement

// let array = [2,3,9,4,21,8,16,10];
// for(let i = 0; i<array.length; i++) {
//     let num = array[i];
//     if(num % 2 === 0) {
//         continue;
//     }
//     if(num % 3 === 0) {
//         console.log(num);
//     }
// }
/*
3
9
21
*/

// *******************************************************************
// using while loop

let numbers = [1,2,3,4,5,6,7,8,9,27,39];
let result = [];
let i = 0;

while(i < numbers.length) {
    let num = numbers[i];
    if(num % 2 != 0 && num % 3 == 0) {
        result.push(num);
    }
   i++;
}
console.log(result);

/* Output:
[ 3, 9, 27, 39 ]
*/

//*********************************************************************
