const listFruits = (fruits = []) => {
    while(fruits.length){
        const fruit = fruits.pop()

        // Product: orange, Product: banana, Product: apple
        console.log('Product: ', fruit) 
    }
}

const fruits = ['apple', 'banana', 'orange']

listFruits([...fruits]) // recreating the array
console.log(fruits.length) // 0

listFruits(fruits) // mutating the array
console.log(fruits.length) // 0

