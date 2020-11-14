const factorial = (num) => {
    // edge case
    if(num <= 0){
        return undefined
    }

    // base of recursion
    if(num === 1){
        return num
    }

    return num * factorial(num - 1)
}

// Recursion depth: 5
factorial(5) // 120 
