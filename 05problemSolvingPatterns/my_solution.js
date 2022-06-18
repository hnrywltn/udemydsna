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


console.log(same([3, 2, 2, 9],[81, 9, 4, 4]))
