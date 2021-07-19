const myPromise = new Promise((resolve, reject) => {
    let num = 20;
    if (num === 20) {
        resolve("Promise is resolved successfuly!")
    } else {
        reject("Promise is rejected!")
    }
});

myPromise.then(massage =>{
    console.log(massage);
}).catch(massage =>{
    console.log(massage);
})