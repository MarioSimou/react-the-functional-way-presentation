const curry = fn => (...args) => {
    if(args.length < fn.length){
        return (...other) => curry(fn)(...args, ...other)
    }
    return fn(...args)
}

const addition = (a,b,c) => a + b + c
const curriedAddition = curry(addition)

curriedAddition(10,20,30) // 60

curriedAddition(10,20)(30) // 60 - Partial Application

curriedAddition(10)(20)(30) // 60 - Currying

const firstStep = curriedAddition(10)
const secondStep = firstStep(20)
secondStep(30) // 60