const processData = (e,data) => {
    if(e){
        return console.log('Error: ', e.message)
    }

    console.log('Processing data: ', data)
}

const fetchData = (number, delay, cb) => {
    if(number < 10){
        return setTimeout(cb, delay, new Error('The number is lower than 10'))
    }
    return setTimeout(cb, delay, null, {name: 'foo', email: 'foo@gmail.com'})
}

fetchData(20, 1000, processData) // Processing data:  { name: 'foo', email: 'foo@gmail.com' }

fetchData(5, 1000, processData) // Error:  The number is lower than 10 