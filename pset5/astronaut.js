/*
const dailyActivities = [
	"Clean Solar Panel",
	"Video Chat with Houston",
	"Hydrate Space Food",
	"Take Earth Picture",
	"Learn Russian" ]

function pickRandomActivity() {
    let randNum = Math.floor(Math.random()*5)
    return dailyActivities[randNum]
}

print("Today's activity is "+pickRandomActivity())
*/
//next section

const maxLifeSpan = 1000

function checkLifeSpan(hours) {
    if (typeof hoursUsed != number) { 
        print("no")
        return "please enter valid number" 
    } 
    print("hey")
    if (hours < 800) {
        print("yeah")
        return("Suit in working condition")
    } else if (hours < 1000) {
        return("Less than 200 hours remaining")
    } else {
        return("Suit needs replacement")
    } 
}

let hoursUsed = prompt("How many hours have you used the spacesuit?")

checkLifeSpan()
console.log(hoursUsed)