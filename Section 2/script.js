function print1() {
  const number1 = 1;
  console.log(number1);
}

function print2() {
  function getNumber2() {
    return 2;
  }
  const number2 = getNumber2();
  console.log(number2);
}

function print3() {
  setTimeout(() => {
    console.log(3);
    print4();
  }, 2000);
}

function print4() {
  const number4 = 4;
  console.log(number4);
}

// print1();
// print2();
// print3();

// CALLBACKS

function print(number) {
  console.log(number);
}

const numbers = [1, 2, 3, 4];
// numbers.forEach(print);

function f(callback) {
  callback();
}

// f(()=>console.log('This is a callback'))

// console.log('Hello World');

// function calculateSquare(number, callback) {
//   setTimeout(function () {
//     if (typeof number !== 'number') {
//       throw new Error('Argument of type number is expected')
//     }
//     const result = number * number;
//     callback(result);
//   }, 1000);
// }

// try {
//   calculateSquare('bad argument', function (result){
//     console.log(result);

//   })
// } catch (error) {
//   console.log('Caught error: ' + String(error))
// }

// function calculateSquare(number, callback) {
//   setTimeout(function () {
//     if (typeof number !== "number") {
//       callback(new Error("Argument of type number is expected"));
//       return;
//     }
//     const result = number * number;
//     callback(null, result);
//   }, 1000);
// }

// calculateSquare('bad argument', function(error, result){
//   if (error !== null){
//     console.log('Caught error: ' + String(error))
//     return;
//   }
//   console.log(result);
// })

// calculateSquare(2, function(error, result){
//   if (error !== null){
//     console.log('Caught error: ' + String(error))
//     return;
//   }
//   console.log(result);
// })

// const xhr = new XMLHttpRequest();

// xhr.open("GET", "https://dog.ceo/api/breeds/list/all");

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === XMLHttpRequest.DONE) {
//     const response = JSON.parse(xhr.responseText);
//     const breeds = Object.keys(response.message);
//     const firstBreedInTheList = breeds[0];

//     const xhr2 = new XMLHttpRequest();

//     xhr2.open("GET", "https://dog.ceo/api/breed/" + firstBreedInTheList + "/images/random");

//     xhr2.onreadystatechange = function () {
//       if (xhr2.readyState === XMLHttpRequest.DONE) {
//         console.log(xhr2.responseText)
//       }
//     };

//     xhr2.send(null);
//   }
// };

// xhr.send(null);

function calculateSquare(number, callback) {
  setTimeout(function () {
    if (typeof number !== "number") {
      callback(new Error("Argument of type number is expected"));
      return;
    }
    const result = number * number;
    callback(null, result);
  }, 1000);
}

calculateSquare(1, (error, result) => {
  console.log(result);
  calculateSquare(2, (error, result) => {
    console.log(result);
    calculateSquare(3, (error, result) => {
      console.log(result);
    });
  });
});


