const getCounter = () => {
    let i = 0;
    return () => ++i
}

const counter = getCounter()
counter() // 1
counter() // 2
counter() // 3

const newCounter = getCounter()
newCounter() // 1
newCounter() // 2