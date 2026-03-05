let itemsToToss = ["Towel", "Lamp", "Turntable", "Plant", "Bookcase"] 
console.log(itemsToToss.length)

function shouldToss(item) 
{
    for(let i = 0; i < itemsToToss.length; i++) {
        if( itemsToToss[i] === item)
        {
            return itemsToToss[i] === item;
        }

    }
}

print(shouldToss("Plant"))