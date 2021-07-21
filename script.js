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
let app = document.querySelector(".app")
// fetch(url)
//     .then(responce => responce.json())
//     .then(data => console.log(data))

let getArticle = async (url) => {
    let responce = await fetch(url)
    let data = await responce.json()

    data.forEach(data => {
        // title.innerHTML = `${data.title}`
        // userId.innerHTML = `${data.userId}`
        // body.innerHTML = `${data.body}`
        app.innerHTML += `<article class="card">
        <h4 class="title">${data.title}</h4>
        <small class="userId">${data.userId}</small>
        <p class="body">${data.body}</p>
    </article> <hr>
    `
    })
}

getArticle(url)