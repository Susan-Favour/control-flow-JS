//Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10. Return the array with the new values

arrayOfNumbers([10,14,16,7,6,5,3,2,1,]);
function arrayOfNumbers(arr){
    let newArr = [];
    let arr1 = arr.slice(0,4);
    let arr2 = arr.slice(-2);
    arr1.forEach(num => {
        let i =num*num;
        newArr.push(i);
    })
    arr2.forEach(num => {
        let j =num+10;
        newArr.push(j);
    })
    console.log(newArr);

return newArr;
}

//Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];

 function mainFour(){
    let arrNum = [1,2,3,4,5,6,7,8,9];
    const i =  arrNum.slice(0,5)
           while(i){
            console.log(i);
            break;
           }

 }
 mainFour()

 //Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']

 function arrayOfStrings(){
    let fruits= ['apple','plum','banana','strawberries','kiwi'];
    let i = 0;
    while(i < 4){
        i++;
        if(i /2 === 1 ) continue;
        console.log(fruits[i])
    }
 }
 arrayOfStrings()

 //Write a function that accepts an array of strings and console.logs each element using a for loop.

 acceptArray(["Susie",'sells',"sea","shells", "by", "the", "sea", "shore"]);
function acceptArray(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

//Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string.

reverseString("Beautiful Day")
function reverseString(str){
    let j = str.split("").reverse().join("");
     while(j){
        console.log(j);
        break;
     }
   }
