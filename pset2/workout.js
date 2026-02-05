let workoutList = [];

//get many workouts


workoutList.push(prompt("Add a workout!"))
workoutList.push(prompt("Add a 2nd workout!"))
workoutList.push(prompt("Add a 3rd workout!"))
workoutList.push(prompt("Add a 4th workout!"))

/*
let wrk1 = prompt("Add a workout");
let wrk2 = prompt("Add a workout");
let wrk3 = prompt("Add a workout");
let wrk4 = prompt("Add a workout");

workoutList.push(wrk1);
workoutList.push(wrk2);
workoutList.push(wrk3);
workoutList.push(wrk4);

print(workoutList)*/

let randNum=Math.random() * 4
randNum=Math.floor(randNum)

print("Today's workout:")
print(workoutList[randNum])
