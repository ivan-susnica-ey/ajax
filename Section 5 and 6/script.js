// const myPromise = new Promise((resolve, reject)=>{
//     reject('reason')

//     resolve('value');
//     resolve('value2')
// })

// console.log(myPromise)

// const myPromise = new Promise((resolve, reject)=>{
//     resolve('Hello world');
// })

// myPromise.then((value)=>{
//     console.log(value)
// });

// myPromise.then(value=>{
//     console.log('this is inside onfulfilled function')
// })

// console.log('This is written after myPromise.then')

// function calculateSquare(number) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         if (typeof number !== 'number'){
//             return reject(new Error('Argument of type number is expected'))
//         }
//         const result = number*number;
//         resolve(result);
//     },1000)
//   });
//   return promise;
// }

// calculateSquare('string')
// .then((value)=>console.log(value),(reject)=>console.log(reject))

// PROMISIFY A FUNCTION :)

// function capitalize(text) {
//     return text[0].toUpperCase() + text.substr(1);
// }

// console.log(capitalize('cat'))

// function capitalize(text) {
//     return new Promise((resolve,reject)=>{
//         if (typeof text !== 'string') {
//             return reject(new Error('Argument must be a string'))
//         }
//         const result = text[0].toUpperCase() + text.substr(1);
//         return resolve(result);
//     })
// }

// capitalize(33)

// CHAINING PROMISES

// function calculateSquare(number) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof number !== "number") {
//         return reject(new Error("Argument of type number is expected"));
//       }
//       const result = number * number;
//       resolve(result);
//     }, 1000);
//   });
//   return promise;
// }

// calculateSquare(1)
//   .then((value) => {
//     console.log(value);
//   })
//   .then((value2) => {
//     console.log(value2);
//   });

// calculateSquare(1)
//   .then((value) => {
//     console.log(value);
//     // throw new Error('error');
//     return calculateSquare(2);
//   })
//   .then((value2) => {
//     console.log(value2);
//   }, reason=>{
//     console.log('error happened: ' + reason)
//   });

//   calculateSquare(1)
//   .then((value) => {
//     console.log(value);
//     return calculateSquare('string');
//   })
//   .then((value2) => {
//     console.log(value2);
//   }, reason=>{
//     console.log('error happened: ' + reason)
//   });

// fetch("https://www.omdbapi.com/?s=batman&y=2018&apikey=20956839")
// .then(res=>res.json())
// .then(data=>console.log(data))

// function calculateSquare(number) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof number !== "number") {
//         return reject(new Error("Argument of type number is expected"));
//       }
//       const result = number * number;
//       resolve(result);
//     }, 1000);
//   });
//   return promise;
// }

// calculateSquare(1)
//   .then((value) => {
//     console.log(value);
//     return calculateSquare(2);
//   })
//   .then((value) => {
//     console.log(value);
//     return calculateSquare(3);
//   })
//   .then(value=>{
//     console.log(value)
//   })

//HANDLING PROMISE REJECTIONS

// function calculateSquare(number) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof number !== "number") {
//         return reject(new Error("Argument of type number is expected"));
//       }
//       const result = number * number;
//       resolve(result);
//     }, 1000);
//   });
//   return promise;
// }

// calculateSquare(1)
//   .then((value) => {
//     console.log(value);
//     return calculateSquare(2);
//   })
//   .then(
//     (value) => {
//       return new Promise((resolove,reject)=>{
//         return reject(new Error('smth went wrong'));
//       })
//       console.log(value);
//     }
//   )
//   .catch((value) => {
//     console.log('error happened: ' + value);
//   });

// function logToConsole(somePromise){
//     somePromise.then(value=>console.log(value))
//     .catch(value=>console.log('error: ' + value))
// }

// const somePromise = new Promise((resolve,reject)=>{
//     resolve('Hello');
// })

// logToConsole(somePromise)

// const value = 'string';

// logToConsole(value);

// const promisifiedValue = Promise.resolve(value);
// logToConsole(promisifiedValue);

// const rejectedPromise = Promise.reject(value);
// logToConsole(rejectedPromise);

// Promise All

// function askFristDealer() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(8000), 3000);
//   });
// }
// function askSecondDealer() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => reject("Not suitable car"), 3000);
//   });
// }
// function askThirdDealer() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(10000), 3000);
//   });
// }

// Promise.all([
//   askFristDealer().catch((error) => {
//     return error;
//   }),
//   askSecondDealer().catch((error) => {
//     return error;
//   }),
//   askThirdDealer().catch((error) => {
//     return error;
//   }),
//   Promise.reject("rejected for some reason"),
// ])
//   .then((prices) => console.log(prices))
//   .catch((error) => console.log(error));

// var askJohn = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Yep, I got one extra pen."), 3000);
//   });
// };

// var askEugene = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => reject("Sorry man, I got only one."), 1000);
//   });
// };

// var askSusy = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Sure, I have a pen for you!."), 2000);
//   });
// };

// Promise.race([askJohn(), askSusy(), askEugene()])
// .then(value=>{
//     console.log(value);
// })
// .catch(value=>{
//     console.log(value)
// })

// var askAtTheShop = () =>{
//     return Promise.resolve('We always have pens. Buy one.')
// }

// Promise.race([askJohn(), askEugene(), askSusy(), askAtTheShop()])
// .then(res=>console.log(res))



