// 1st
function power(num, base, res = 1){
    if(base === 0) return res;
    res *= num
    return power(num, --base, res)
}

////////////////////////////////////////////
//2nd
let factorial = num => num === 0 ? 1 : num * factorial(--num);

////////////////////////////////////////////
//3rd
let productOfArray = (arr, prod = 1) => {
    if(!arr.length) return prod
    prod *= arr.pop()
    return productOfArray(arr, prod)
}

//4th
let recursiveRange = num => num === 0 ? 0 : num + recursiveRange(--num);

////////////////////////////////////////////

//5th
let fib = (num, memo={}) => memo[num] ? memo[num] : num < 2 ? num : memo[num] = fib(num - 1, memo) + fib(num - 2, memo);






console.log(power(2, 4))

console.log(factorial(5));

console.log(productOfArray([1,2,3]));

console.log(fib(35)); //9227465
