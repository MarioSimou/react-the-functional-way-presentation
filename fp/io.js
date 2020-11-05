
// simulates an XHR call - I/O
const fetchResource = (milli, isNetworkConnectionOk) => new Promise((resolve, reject) => {
    const cb = () => isNetworkConnectionOk() ? resolve() : reject()
    setTimeout(cb, milli)
})

// simulates a network failure
const isNetworkConnectionOk = () =>  Math.random() < 0.8

;(async () => {
    let nSuccesses = 0
    const nRetries = 10

    for(let retries = 0; retries < nRetries; retries++){
        try {
            await fetchResource(300, isNetworkConnectionOk)
            ++nSuccesses
        }catch(e){
            continue
        }
    }
    console.log('Successes: ', nSuccesses) // 7-9
    console.log('Failures: ', nRetries - nSuccesses) // 1-3
})()