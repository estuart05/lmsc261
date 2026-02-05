const maxFrogCapacity = 15

let amountFrogs = prompt("How many frogs are hopping in?")
let isPondOverCapacity = amountFrogs > maxFrogCapacity

let messageToPrint = isPondOverCapacity ? ("There are too many frogs!"):("There are " + amountFrogs + " frogs in the pond.")
print(messageToPrint)