// let car = new Object()

let prop = "Fuel Consumption"

let car = {
    model: "Audi",
    yom: 2020,
    fuel: "diesel",
    [prop]: "15km/l"
}

let user1 = {
    username: "john",
    fullname: "John Doe",
    age: 30,
    address: "Chuka ",
    height: "6'2"
}
// console.log(car);

//accessing properties
console.log(car.yom)
console.log(car["fuel"]);

console.log(user1.height);
console.log(user1.fullname);

user1.age = 31

console.log(user1);

user1.weight = "50kgs"

delete user1.height

console.log(user1);

//checking the properties
for(let key in user1){
    console.log(key);
}

console.log(user1.height === undefined);

//combining 2 objects

let combined = Object.assign({}, car, user1)

console.log(combined);

// let prop = "Consumption"

// car = {
//     [prop]:"10KM/L"
// }

console.log(car);

// ARRAYS
let trainees = ["Earljoe", "Melissa", "Peter", "felix", "Eric", "John",]

// let user2 = "Glen"

// console.log(user2[0]);

// console.log(trainees.length);

trainees.push("Jeff")

console.log(trainees);

trainees.unshift("Lincorn")

trainees.pop()

console.log(trainees);

trainees.shift()

console.log(trainees);

// let trainees = ["Earljoe", "Melissa", "Peter", "felix", "Eric", "John",]

trainees.splice(1, 1)

console.log(trainees);

trainees.splice(2, 1, "Emmanuel")

console.log(trainees);

trainees.splice(-1, 0, "Naomi")

console.log(trainees);

// trainees.fill("xyz")

// console.log(trainees);

let sometrainees = trainees.slice(1, 4)

console.log(sometrainees);

let usernames = ["Salome", "Stanley", "Sammy"]

let allUsers = trainees.concat(usernames)

console.log(allUsers.reverse().sort());

let filteredUsers = allUsers.filter(el=>{
    
    return el == "John"
})

console.log(filteredUsers);

let mappedArray = allUsers.map((el, i)=>{
    console.log(el, i);
})

console.log(allUsers.indexOf("Sammy"));

console.log(allUsers.join(''));

let arrWitharr = ["Earljoe", "Melissa", "Peter", "felix", "Eric", "John", ["Salome", "Stanley", "Sammy"]]

console.log(arrWitharr[6][1]);