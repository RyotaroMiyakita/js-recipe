// const display = document.getElementById("display")
// const plusButton = document.getElementById("plus-button")
// const minusButton = document.getElementById("minus-button")
// const twotimesButton = document.getElementById("twotimes-button")
// let count = 0
// plusButton.onclick = function() {
//   count += 1
//   display.textContent = count
// }

// 発展問題1
// minusButton.onclick = function() {
//   count -= 1
//   display.textContent = count
// }

// twotimesButton.onclick = function() {
//   count *= 2
//   display.textContent = count
// }

// 発展問題2

const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const twotimesButton = document.getElementById("twotimes-button")
const dividedButton = document.getElementById("divided-button")
const numberButton = document.getElementsByClassName("number-button")

let count = 0
const inputText = document.getElementById("input-text")

button = document.querySelector(".button")
// console.log(button)
button.onclick = function() {
  document.querySelector("inputText").value = button
}
