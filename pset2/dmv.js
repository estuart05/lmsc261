const maxLength = 6

let plateName = prompt("Choose a lisence plate name:")
let plateLength = plateName.length

let withinLimit= plateLength > maxLength;
let messagePrint= withinLimit ? "Too long!":"Thank you";
print(messagePrint)
