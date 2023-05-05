// // Write a function that takes a string as 
// input and returns the number of vowels in the string.
 function number_vowels(name1){

    count=0
    let vowels =['a','i','u','o','e']
  
    for(let i = 0;i<=name1.length;i++){
        if(vowels.includes(name1[i])){
            count ++;
        }
    }
    return count;
}
console.log(number_vowels("anne"));
// Write a function that takes an array of numbers as input
// //  and returns the sum of all the numbers.
function of_list(number){
    let sums=0
   for (let i=0;i<number.length-1;i++){
     sums+=number[i]

   }
   return sums
   
}
let number=[1,2,3,4,2,4,5,6];
console.log(of_list(number))


// 
// Write a function that takes two numbers as
//  input and returns true if their sum is greater than 100, and false otherwise.
function greate(number1,number2){
    sum=number1+number2 

    if(sum>100){
        return true
    }else{
        return false
  
  }

}
console.log(greate(89,90))
