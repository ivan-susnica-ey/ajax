//ASYNC

async function f() {
  return "Hello World";
}

//  console.log(f());

async function f2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(true), 1000);
  });
}

const var1 = f();

// console.log(var1)

async function f3() {
  return Promise.reject(404);
}

// console.log(f3())

async function f4() {}

// console.log(f4());

function getSpecificNumber() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(42), 2000);
  });
}

//AWAIT

async function f5() {
  const specificNumber = await getSpecificNumber();
  console.log(specificNumber);
}

// console.log(f5());

function f6() {
  getSpecificNumber().then((specificNumber) => console.log(specificNumber));
}

// console.log(f6())

// FETCH

// function getRandomDogImage() {
//     fetch('https://dog.ceo/api/breeds/image/random')
//     .then(res=>res.json())
//     .then(data=>console.log(data.message))
// }

async function getRandomDogImage() {
  let response = await fetch("https://dog.ceo/api/breeds/image/random");
  let data = await response.json();
  console.log(data.message);
}

// getRandomDogImage();

// function testing() {
//     let response = await fetch('https://dog.ceo/api/breeds/image/random');
//     let data = await response.json();
//     console.log(data.message);
// }

// testing();

// (async function(){
//     const specificNumber = await getSpecificNumber();
//     console.log(specificNumber)
// })();

// const specificNumber = await getSpecificNumber();
// console.log(specificNumber);

// async function fX() {
//   try{
//     const response = await fetch('https://blasadoqwe/wrong-url')
//   } catch(e){
//     console.log(alert(e))
//   }
// }

async function fX() {
  const response = await fetch("https://blasadoqwe/wrong-url");
}

// fX().catch(e=>alert(`Custom error: ${e}`))

function printNumber1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("printNumber1 is done");
      resolve(1);
    }, 1000);
  });
}

function printNumber2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("printNumber2 is done");
      resolve(2);
    }, 1000);
  });
}

async function oneByOne() {
  const number1 = await printNumber1();
  const number2 = await printNumber2();
  console.log(number1, number2);
}

// oneByOne();

async function oneByOne() {
  const number1 = await printNumber1();
  const number2 = await printNumber2();
  console.log(number1, number2);
}

async function inParallel() {
  const promise1 = printNumber1();
  const promise2 = printNumber2();

  // const number1 = await promise1;
  // const number2 = await promise2;

  // const [number1, number2] = [await promise1, await promise2]

  console.log(await promise1, await promise2);
}

// inParallel()

async function asyncPromAll() {
  const resultArray = await Promise.all([printNumber1(), printNumber2()]);

  for (let i=0; i<resultArray.length; i++) {
    console.log(resultArray[i]);
  }
}

asyncPromAll();
