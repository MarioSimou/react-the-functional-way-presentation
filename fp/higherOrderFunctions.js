const getSum = (numbers = []) => {
    let sum = 0
    for(const number of numbers){
        sum +=  number
    }

    return sum
}

const doSomethingWithArray = (arr, cb) => {
    return cb(arr)
} 

doSomethingWithArray([1,2,3,4], getSum) // 10