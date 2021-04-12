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

const loveThree = function(number){
    for(n=1; n<=number; n++){
        const num = String(n)
        // console.log(num.indexOf("3"))
        if(num.indexOf("3") != -1){
            console.log(n + "!!!!!!!")
        }
        if(n % 3 === 0){
            console.log(n + "!!!!!!!")
        }
        
        
    }
}
loveThree(100)
