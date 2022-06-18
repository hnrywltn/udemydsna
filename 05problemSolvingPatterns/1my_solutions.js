//1st
let same = (one, two) => {
    if(one.length !== two.length) return false;
    let counter = {};
    let isSame = true;
    one.forEach(num => {
        counter[num] ? counter[num].push(num**2) : counter[num] = [num**2];
    });
    while(two.length) {
        let curr = two.pop();
        if(counter[Math.sqrt(curr)]) {
            counter[Math.sqrt(curr)].pop()
            if(!counter[Math.sqrt(curr)].length) delete counter[Math.sqrt(curr)]
            continue;
        }
        isSame = false;
    }
    if (Object.entries(counter).length) isSame = false
    return isSame;
}
//////////////////////////////////




//2nd
function validAnagram(one, two){
    if(one === '' && two === '')return true
    if(one.length !== two.length) return false;
    let res = true;
    let tracker = {};
    one = one.split('');
    two = two.split('');
    one.forEach(char => {
        tracker[char] ? tracker[char]++ : tracker[char] = 1;
    });
    two.forEach(char => {
        if(tracker[char]){
            tracker[char]--;
            if(!tracker[char]) delete tracker[char];
        };
    });
    Object.entries(tracker).length&&(res = false)
    return res;
}
/////////////////////////////////////////////////////////////

//3rd
//Use two pointers - found in course

/////////////////////////////////////////////////////////////

//4th
let countUniqueValues = arr => {
    if(!arr.length) return 0;
// debugger
    let one = 0;
    let two = 1;
    while(two < arr.length){
        let ref = arr[one];
        let scout = arr[two];
        if(scout > ref) {
            one++;
            arr[one] = scout;
        }
        two++;
    }
    return one + 1;
}


console.log(same([3, 2, 2, 9],[81, 9, 4, 4]))

console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'))
console.log(validAnagram('awesome', 'awesom'))
console.log(validAnagram('aaz', 'zza'))

console.log(countUniqueValues([1,1,1,1,1,1,2]))
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))
console.log(countUniqueValues([]))
console.log(countUniqueValues([-2,-1,-1,0,1]))
