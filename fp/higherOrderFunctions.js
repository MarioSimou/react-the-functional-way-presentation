const sum = (arr = []) => {
    return arr.reduce((acc, num) => acc + num, 0)
}

const doSomethingWithArray = (arr, cb) => {
    return cb(arr)
} 

doSomethingWithArray([1,2,3,4], sum) // 10