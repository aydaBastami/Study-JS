// const myPromise = new Promise((resolve, reject) => {
//     let num = 20;
//     if (num === 20) {
//         resolve("Promise is resolved successfuly!")
//     } else {
//         reject("Promise is rejected!")
//     }
// });

// myPromise.then(massage =>{
//     console.log(massage);
// }).catch(massage =>{
//     console.log(massage);
// })

// let hello = async () => {
//     return "Hello!"
// }
// hello().then((value) => console.log(value))


const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};


async function rainbow() {
  await delayedColorChange("red", 1000);
  await delayedColorChange("orange", 1000);
  await delayedColorChange("yellow", 1000);
  await delayedColorChange("green", 1000);
  await delayedColorChange("blue", 1000);
  await delayedColorChange("indigo", 1000);
  await delayedColorChange("violet", 1000);
  return "All done!";
}

rainbow().then(() => console.log("End of rainbow"));

