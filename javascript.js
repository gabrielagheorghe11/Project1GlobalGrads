//ex1
// drinks= [
//     {name: 'lemonade', price:50},
//     {name:'lime', price:10}
// ];

//Method 1 -> if , else if 
// function sortDrinkByPrice(a, b){
//     if(a.price < b.price){
//         return -1;
//     }
//     else if (a.price > b.price){
//         return 1;
//     }
//     else{
//         return 0;
//     }
// }
// console.log(drinks.sort(sortDrinkByPrice));


//Method 2
// console.log(drinks.sort(
//     function(a, b) {          
//        if (a.price === b.price) {
//           return b.price - a.price;
//        }
//        return a.price > b.price ? 1 : -1;
//     }));

//Method 3 -> array.sort(compareFunction) 
// const sortDrinkByPrice = function (a,b) {
//     return (a.price) - (b.price);
//   }
//   console.log(drinks.sort(sortDrinkByPrice));

//Method 4
// drinks.sort((a, b) => Number(a.price) - Number(b.price));
// console.log("ascending", drinks);





//ex2
// let firstWord = 'UcUNFYGaFYFYGtNUH';
// let secondWord= 'bEEFGBuFBRrHgUHlNFYaYr';
// let thirdWord = 'YFemHUFBbezFBYzFBYLleGBYEFGBMENTment';

//Method 1 -> Q: why it doesn't work with includes() method?
//  const extractLowerCase =(word) =>{
//     let newWord= "";
//     for(let i=0; i < word.length; i++){
//         if (word[i].includes("abcdefghijklmnopqrstwxyz", 0)){
//             newWord += (word[i]);
//     }
// }
//     return newWord;
//  };
//  console.log(extractLowerCase("UcUNFYGaFYFYGtNUH"));


//Method 2 -> toLowerCase()
//  const extractLowerCase =(word) =>{
//     let newWord= "";
//     for(let i=0; i < word.length; i++){
//         if ( word[i] === word[i].toLowerCase()){
//             newWord += (word[i]);
//     }
// }
//     return newWord;
//  };
//  console.log(extractLowerCase("UcUNFYGaFYFYGtNUH"));
//  console.log(extractLowerCase("bEEFGBuFBRrHgUHlNFYaYr"));
//  console.log(extractLowerCase("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));



//ex3 ->  Q:Using the "=" operator occurs the error: Invalid left-hand side in assignment).
//It was a mistake or is there another method to solve this exercise using just an equal?
// let a = "2 == 2";
// let b = "8 < 7";
// let x = "5 == 13";
// let y = "15 > 4";

//Method 1
// console.log(eval(a));
// console.log(eval(b));
// console.log(eval(x));
// console.log(eval(y));

//Method 2 -> using anonymous function
// It should work but it doesn't(no library was imported)
// let c = "5+7"
// let result = Function("return" + c)();
// console.log(result);



//ex4
// const object1={
//     "cyan":23,
//     "magenta":12,
//     "yellow":10
// }

// const object2={
//     "cyan":432,
//     "magenta":543,
//     "yellow":777
// }

// const object3 ={
//     "cyan":700,
//     "magenta":700,
//     "yellow":0
// }

// Method 1 
// console.log("The maximum number of pages: " + Math.min(object1.cyan, object1.magenta, object1.yellow));
// console.log("The maximum number of pages: " + Math.min(object2.cyan, object2.magenta, object2.yellow));
// console.log("The maximum number of pages: " + Math.min(object3.cyan, object3.magenta, object3.yellow));

// Method 2 -> Math() method
// let array = Object.values(object1);
// const min = Math.min(...array); // or using .apply 
// const min = Math.min.apply(null, array);
// console.log("The maximum number of pages " + min);

// Method 3 -> forEach()
// let array = Object.values(object2);
// let min_value = Infinity;
//     array.forEach(element => {
//         if(element< min_value)
//         min_value = element
//     })
// console.log("The maximum number of pages: " + min_value);

// Method 4 ->for loop
// let array = Object.values(object3);
// let min_value=Infinity;
// for(let i=0; i<array.length; i++){
//     let element = array[i];
//     if(element < min_value)
//     min_value = element;
// }
// console.log("The maximum number of pages: "+ min_value);



//ex5
//Method 1
// let originalArray = [1, 3, 3, 5, 5, 5];
// function getUnique(array){
// let set = [];
// for(i=0; i <array.length; i++){
//     if (set.indexOf(array[i]) === -1){
//         set.push(array[i]);
//     }
// }
// return set;
// }
// let uniqueSet = getUnique(originalArray);
// console.log(uniqueSet);


//Method 2
//let originalArray = [1, 3, 3, 5, 5, 5];
// newArray= originalArray.filter (function (item, index, inputArray){
//     return inputArray.indexOf(item) == index;
// });
// console.log (newArray);


//Method 3 
// array = [1, 3, 3, 5, 5, 5];
// unique = [];

// array.forEach(function(itm){
//   rtn =  findUnique(itm);
//   if(rtn==0)
//     unique.push(itm);
// });

// function findUnique(val)
// {
//   status = '0';  
//   unique.forEach(function(itm){
//     if(itm==val){ 
//       status=1;
//     }
//   })
//   return status;
// } 

// console.log(unique);  