// Q1.----------------------------------------------------------
function isAnagram(str1, str2){
    str1 = str1.replace(/[^\w]/g, '').toLowerCase();
    str2 = str2.replace(/[^\w]/g, '').toLowerCase();

    if(str1.length!==str2.length){return false}

    let sortedstr1 = str1.split('').sort().join();
    let sortedstr2 = str2.split('').sort().join();

    return sortedstr1===sortedstr2;
}
console.log("\nQuestion 1:-")
console.log(isAnagram('sumit','timus')); //true
console.log(isAnagram('cake','popcorn')); //false
//-----------------------------------------------------------------


//Q2.----------------------------------------------------------------
function calculateTotalSpentByCategory(transactions) {
    const categoryTotals = {};

    transactions.forEach(transaction => {
        const { category, amount } = transaction;

        if (!categoryTotals[category]) {
            categoryTotals[category] = 0;
        }

        categoryTotals[category] += amount;
    });

    answer = Object.keys(categoryTotals).map(category => ({
        category: category,
        totalSpent: categoryTotals[category]
    }));
    return answer;
}
const transactions = [
    { category: 'Food', amount: 50 },
    { category: 'Entertainment', amount: 20 },
    { category: 'Food', amount: 30 },
    { category: 'Utilities', amount: 100 },
    { category: 'Entertainment', amount: 15 }
];
console.log("\nQuestion 2:-")
console.log(calculateTotalSpentByCategory(transactions));
//-----------------------------------------------------------------


//Q3.----------------------------------------------------------------
function findLargestElement(numbers){
    if(numbers.length===0){
        throw new Error("Array is empty");
    }
    return Math.max(...numbers)
}

numbers = [66,13,37,2,28];
answer = findLargestElement(numbers);
console.log("\nQuestion 3:-")
console.log("Largest number = "+answer);
//-----------------------------------------------------------------


//Q4.----------------------------------------------------------------
function isPalindrome(str){
    cleanStr = str.replace("/[^a-zA-Z0-9]/g","").toLowerCase();
    reverseStr = cleanStr.split('').reverse().join('');
    return cleanStr===reverseStr;
}
console.log("\nQuestion 4:-")
console.log(isPalindrome("cake")) //false
console.log(isPalindrome("racecar")) //true
//-----------------------------------------------------------------


//Q5.----------------------------------------------------------------
function calculateTime(n){
    const startTime = performance.now();

    sum = 0
    for(let i = 1; i <= n; i++){
        sum+=1;
    }

    const endTime = performance.now();

    const totalTime = (endTime-startTime)/1000;
    return totalTime;
}
console.log("\nQuestion 5:-")
console.log("Total time = "+calculateTime(1000));
//-----------------------------------------------------------------


//Q6.----------------------------------------------------------------
function countVowels(str){
    const vowels = 'aeiou';

    cleanStr = str.replace(/[^a-zA-Z]/g,"").toLowerCase()

    let  totalVowels = 0;
    
    for (const char of cleanStr) {
        if (vowels.includes(char)) {
            totalVowels++;
        }
    }

    return totalVowels;
}
console.log("\nQuestion 6:-");
console.log("Total vowels = "+countVowels("icecream melts")); // answer will be 3
//-----------------------------------------------------------------


//Q7.----------------------------------------------------------------
function sumArray(arr){
    let sum = 0;
    for(let num of arr){
        sum+=num;
    }
    return sum;
}
numbers = [12,34,23,67,23];
console.log("\nQuestion 7:-")
console.log("Total sum of array = "+sumArray(numbers));
//-----------------------------------------------------------------


//Q8.----------------------------------------------------------------
function filterEvenNumbers(numbers){
    const evenNum = [];
    for(const num of numbers){
        if(num%2 === 0){
            evenNum.push(num);
        }
    }
    return evenNum;
}
numbers = [12,23,34,45,56,67]
console.log("\nQuestion 8:-")
console.log("Even numbers = "+filterEvenNumbers(numbers))
//-----------------------------------------------------------------


//Q9.----------------------------------------------------------------
function findSmallestElement(numbers){
    
    if(numbers.length===0){console.log("Array is empty");}

    return Math.min(...numbers);
}
numbers = [76,12,45,11,56];
console.log("\nQuestion 9:-");
console.log(findSmallestElement(numbers) + " is the smallest")
//-----------------------------------------------------------------


//Q10.----------------------------------------------------------------
function reverseString(str){

    return str.split('').reverse().join('');
}

console.log("\nQuestion 10:-");
console.log(reverseString("Kewal Suthar"))
//-----------------------------------------------------------------


//Q11.----------------------------------------------------------------
function fibonacci(n){
    if (n===0) return 0;
    if (n===1) return 1;
    return fibonacci(n-1)+fibonacci(n-2);
}
console.log("\nQuestion 11:-");
console.log(fibonacci(10)); // answer will be 55
//-----------------------------------------------------------------


//Q12.----------------------------------------------------------------
function removeDuplicates(arr){
    newArr = [];
    for(const a of arr){
        if(newArr.includes(a)){}
        else{newArr.push(a)}
    }
    return newArr;
}
arr = [12,23,89,12,43,43];
console.log("\nQuestion 12:-");
console.log(removeDuplicates(arr));
//-----------------------------------------------------------------


//Q13.----------------------------------------------------------------
function countOccurrences(str,char){

    const strLow = str.replace(/[^a-zA-z]/g,"").toLowerCase();
    const charLow = char.toLowerCase();
    let count = 0;
    for(const s of strLow){
        if(s === charLow){
            count++
        }
    }
    return count;
}
str = "Kewal studies in Indus University";
char = "i";
console.log("\nQuestion 13:-");
console.log(countOccurrences(str,char));
//-----------------------------------------------------------------


//Q14.----------------------------------------------------------------
function findCommonElements(arr1,arr2){
    const set1 = new Set(arr1);

    const commonElements = arr2.filter(element => set1.has(element));
    return commonElements;
}
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];
console.log("\nQuestion 14:-")
console.log(findCommonElements(arr1, arr2));
//-----------------------------------------------------------------


//Q15.----------------------------------------------------------------
function sortStrings(arr){
    sortArr = arr.sort();
    return sortArr;
}
arr = ['s','t','a','e','j','c','h','q'];
console.log("\nQuestion 15:-");
console.log(sortStrings(arr));
//-----------------------------------------------------------------
