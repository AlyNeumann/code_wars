// function iqTest(numbers){
//     let numArr = numbers.split(' ')
        
//     function isEven(){
//         let odd = [];
//         let even = [];
        
//         numArr.filter(num => {
//             if(num % 2 === 0){
//                 even.push(num);
//             }else{
//                 odd.push(num);
//             }
//         })
//         if(odd.length > even.length){
//             console.log(even);
//             return true;
//         }  
         
//     }
//     function findEven(number){
//         isEven(number);
//         if(isEven){
//             numArr.filter(num => {
//                 if(num % 2 === 0){
//                     return num;
//                 }
//             })
//         }else{
//             numArr.filter(num => {
//                 if(num % 2 !== 0){
//                     return num;
//                 }
//             }) 
//         }
//     }
//     return numArr.findIndex(findEven) + 1;
   
//     }


//     console.log(iqTest("2 4 7 8 10"),3);
// function countAnimals(sentence) {
//     let animalsArr = sentence.split(' ')
//     let filtered = animalsArr.filter(function(item){
//       return (parseInt(item) == item)
//     })
//     console.log(filtered);
//     if(Number(filtered )=== 0){
//         return 0;
//     }else{
//         const reducer = (accumulator, currentValue) => Number(accumulator) + Number(currentValue);
//         let animals = filtered.reduce(reducer);
//         return Number(animals);
        
//     }
    
//   }
// console.log(countAnimals("I see 3 zebras, 5 lions and 6 giraffes."), 14, 'Live from the Savannah') 
// console.log(countAnimals("I do not see any animals here!"), 0, 'Live from the kitchen') ;

//find min & max number if array is reduced - 
// const ary = [1,2,3,4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// function findMin(arr){
//     let minNumber = Math.min(...arr);
//     let totalMin = arr.reduce(reducer);
//     return console.log(totalMin - minNumber);
    
// }
// function findMax(arr){
//     let maxNumber = Math.max(...arr);
//      let totalMax = arr.reduce(reducer);
//      return console.log(totalMax - maxNumber);
// }

// findMax(ary);
// findMin(ary);

//find count of maximum numbers 
// let x = [1,2,2,4,2,4]
// function findMaxCount(){
//     let maxNumber = Math.max(...x);
//     let maxNumberCount = 0;
//     for( let i=0; i < x.length; i++){
//         if(x[i] === maxNumber){
//          maxNumberCount ++;
//         }
//     }
//     return maxNumberCount;
// }
// console.log(findMaxCount(x));

//prints 1 to 100, if x of 3 print Fizz, if x of 5 print Buzz, both FizzBuzz

// function fizzBuzz() {
//     for(let i=1; i <=100; i++){
//         if(i % 3 === 0 && i % 5 === 0){
//             console.log("FizzBuzz")
//         }else if(i % 3 === 0){
//             console.log("Fizz")
//         }else if(i % 5 === 0){
//             console.log("Buzz")
//         }else{
//             console.log(i);
//         }
//     }

// }
// fizzBuzz();

//find the greatest commun diviser of two numbers
// function communDivide(num1, num2) {
//     let dividers = [];
//     for(let i=0; i <=num1; i++){
//         if( num1 % i === 0 && num2 % i === 0){
//             dividers.push(i);
//         }
//     }
//     return console.log(dividers.pop());
// }

// communDivide(20,30);

//check score and only update if different

// function checkScore(){
//     let currentScore = 0;
//     let newScore = '';
//     setTimeout(()=>{
// //check back end for updated score
//     }, 1000)
//     if( newScore !== currentScore){
//         currentScore = newScore;
//     }
//     return currentScore;
// }

//n amount of kids, k toys, i starting position, find ending position

// function findLastPos(n,k,i){
//     let positions = [];
//     for(let j = i; j < k.length; j++){
//         positions.push(j)
//     }
//     //use indexOf
//     console.log(positions.pop());
// }


// function findLastPos(n,k,i){
//     let position = i;
//     if (k > n){
//        let pos =  k % n 
//        position += pos;
//     }else{
//         let pos = n - k
//         position += pos;
//     }
//     return console.log(position);
// }
// findLastPos(3,7,1);
// console.log(NaN === NaN);

//is a given number a pallandrome?
// change number into string, chop in half, reverse and compare ex: 12521

// function isPal(number){
//     let strArr = number.toString().split('')
//     let strArrStart = [];
//     let strArrEnd = [];
//     if(strArr.length % 2 === 0){
//     for(let i=0; i <= strArr.length/2; i++){
//         strArrStart += strArr[i];
//     }
//     for(let i=0; i<= strArr.length/2; i++){
//         strArrEnd += strArr.reverse()[i];
//     }
//     }else{
// //remove middle number & split
//     }
//     if(strArrStart === strArrEnd){
//         return console.log(true);
//     }
// }

//do it without converting to string - 

// function reverseNumber(number) {
//     var revNumber = 0;
//     while (number > 0) {
//       revNumber = (revNumber * 10) + (number % 10);
//       number = Math.floor(number / 10);
//     }
//     return revNumber;
//   }
//   console.log(reverseNumber(876));

//   function isPal(num){
//       let number = num;
//       let revNumber = 0;
//       while(num > 0){
//           revNumber = (revNumber * 10) + (num % 10);
//           num = Math.floor(num / 10);
//           console.log(num);
//           console.log(revNumber);
//       }
//       if(number === revNumber){
//           return true;
//       }else{
//           return false;
//       }
//   }

//   console.log(isPal(1325231));

//find character in string that is first not to repeat
//split string into array
//make empty array to store repeating letters in
//use for loop to find repeating letters and store them
//use loop to check if letter in string is in the repeating array, if it is move to next
//return first non repeating letter

// function firstNonRepeatingLetter(s) {
//     let letterArr = [...s];
//     let lowerCaseArr = letterArr.map(function(x){ return x.toLowerCase();})
//     let count = 0;
//     let result = '';
//     for(let i=0; i < lowerCaseArr.length; i++){
//         count = 0;
//         for(let j=0; j < lowerCaseArr.length; j++){
//             if(lowerCaseArr[i] === lowerCaseArr[j]){
//                 count += 1;
//             }
//         }
//         if(count < 2){
//             let index = lowerCaseArr.indexOf(lowerCaseArr[i])
//             result = letterArr[index];
//             break;
//         }
//     }
//     return result;
//   }
//   console.log(firstNonRepeatingLetter('strEtssr'));