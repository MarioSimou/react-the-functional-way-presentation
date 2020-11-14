
const arr = [1,2,3,4,5]

// filtering
const filterElementsNotEqualOne = arr => {
    const newArr = []
    for(const num of arr){
        if(num !== 1){
            newArr.push(num)
        }
    }
    return newArr
}

filterElementsNotEqualOne(arr) // [2,3,4,5]
arr.filter(num => num !== 1) // [2,3,4,5]

// mapping 
const doupleArrayElements = arr => {
    const newArr = []
    for(const num of arr){
        newArr.push(num * 2)
    }
    return newArr
} 

doupleArrayElements(arr) // [2,4,6,8,10]
arr.map(num => num * 2) // [2,4,6,8,10]