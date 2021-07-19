// ******* PROMISE ******* //

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

// ******* ASYNC & AWAIT ******* //

// const delayedColorChange = (color, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   });
// };

// async function rainbow() {
//   await delayedColorChange("red", 1000);
//   await delayedColorChange("orange", 1000);
//   await delayedColorChange("yellow", 1000);
//   await delayedColorChange("green", 1000);
//   await delayedColorChange("blue", 1000);
//   await delayedColorChange("indigo", 1000);
//   await delayedColorChange("violet", 1000);
//   return "All done!";
// }

// rainbow().then(() => console.log("End of rainbow"));

// ******* FETCH API ******* //

let url = "https://jsonplaceholder.typicode.com/posts";
let divApp = document.createElement("div")
divApp.setAttribute("id", "app")
let body = document.getElementsByTagName("body")
divApp.append(body)
// fetch(url)
//     .then(responce => responce.json())
//     .then(data => console.log(data))

let getArticle = async (url) => {
    let responce = await fetch(url)
    let data = await responce.json()

    // for (let i = 0; i < url.data.length; i++) {
    //     divApp.innerHTML = url.data[i].title

    // }

    data.forEach(data => {
        divApp.innerHTML = url.data.title
    })
}

getArticle(url)