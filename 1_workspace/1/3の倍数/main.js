// const number = 24
// if(number % 3 === 0){
//     console.log(number + "!!!!!!")
// }else{
//     console.log(number)
// }

// for(let n=1; n<=number; n++){
//     if(n % 3 === 0){
//         console.log(n + "!!!!!!!!")
//     }else{
//         console.log(n)
//     }
// }

// const genkiMax = function(number){
//     for(n=1; n <= number; n++){
//         if(n % 3 === 0){
//             console.log(n + "!!!!!!!!")
//         }else{
//             console.log(n)
//         }
//     }
// }

// genkiMax(100)

// const FizzBuzz =function(number){
//     for(n=1; n <= 100; n++){
//         if(n % 15 === 0){
//             console.log("FizzBuzz")
//         }else if(n % 5 === 0){
//             console.log("Buzz")
//         }else if(n % 3 === 0){
//             console.log("Fizz")
//         }else{
//             console.log(n)
//         }
//     }
// }
// FizzBuzz(100)

// const loveThree = function(number){
//     for(n=1; n<=number; n++){
//         const num = String(n)
//         // console.log(num.indexOf("3"))
//         if(num.indexOf("3") != -1){
//             console.log(n + "!!!!!!!")
//         }else if(n % 3 === 0){
//             console.log(n + "!!!!!!!")
//         }else{
//             console.log(n)
//         }

//     }
// }
// loveThree(100)

const startButton = document.getElementById("start-button")
const stopButton = document.getElementById("stop-button")

let count = 0
const countUp = function() {
  count += 1
  if (count % 3 == 0) {
    console.log(count + "!!!!!!!")
  } else {
    console.log(count)
  }
}
// console.log(count)

// setInterval(countUp, 1000)

startButton.onclick = function() {
  start = setInterval(countUp, 1000)
  start
}

stopButton.onclick = function() {
  clearInterval(start)
}
