// Sum of n numbers create a javascipt program that 
// take a number n from the user, use a loop to calculate the sum of numbers from 1 to n, and display the result.
function calculateSum() {
let n = parseInt(document.getElementById("numberInput").value);
let sum = 0;
// let n = parseInt(prompt("Enter the number upto which you have to calculate the sum:")); 
// let sum = 0;

if(n>0){
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }

    // console.log("The sum of numbers from 1 to " + n + " is: " + sum);
    alert("The sum of numbers from 1 to " + n + " is: " + sum);
}
    else{
        console.log("Please enter a valid number."); 
    }
}
