const conesPerHour = 14

const inventory = 200

print("Daily inventory is "+inventory+" ice cream cones.")

for (let hour = 1; hour <= 12; hour++) {
    
    print(conesPerHour * hour + " sold at hour " + hour)
    print("Hour "+hour+" inventory remaining: " + (inventory-(conesPerHour*hour)))

}
