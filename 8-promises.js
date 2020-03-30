const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([7,4,11]);
        reject('Things went wrong, Perfect!');
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('Success!', result)
}).catch((error) => {
    console.log('Error!', error)
})

//
//                               fulfilled
//                              /
// Promise      -- pending -->
//                              \
//                                rejected
//
