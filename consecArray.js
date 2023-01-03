// Ratiorg got statues of different sizes as a 
// present from CodeMaster for his birthday, each statue 
// having an non-negative integer size. Since he likes to make 
// things perfect, he wants to arrange them from smallest to largest 
// so that each statue will be bigger than the previous one exactly 
// by 1. He may need some additional statues to be able to accomplish that. 
// Help him figure out the minimum number of additional statues needed.

// problem 1

// define variable "statues" equal to a set array of 6,2,3,8
const statues = [6, 2, 3, 8];
// initiate a function 
function consecArray(statues) {
   return Math.max(...statues) - Math.min(...statues) + 1 - statues.length;

}
//                             8         -          2           + 1 -        4 =  3
let statuesNeeded = Math.max(...statues) - Math.min(...statues) + 1 - statues.length;
// one thing I learned in this lesson is that putting [n - 1] elements the 0 whe you are uing the ".length" property
console.log(statuesNeeded);