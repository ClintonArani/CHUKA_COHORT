// let fname = prompt("Input your name", '')

// console.log(fname == "Stanley");

// if(fname == "Stanley"){
//     alert("Welcome Stanley")
// }else if(fname == "Naomi"){
//     alert("Welcome Naomi")
// }else{
//     alert(`You are a guest ${fname}`)
// }

let footballclub = "Mancity";

let message = (footballclub == "ManU") ? "You failed the world" : (footballclub == "Liverpool") ? "You are walking alone" : (footballclub == "Mancity") ? "You are a champion" : "You should get a life"

console.log(message);

let isTall = true;
let isMale = false;

// if(!isTall || isMale){
//     console.log("You are a Short Lady");
// }else if(!isTall || isMale ){
//     console.log("Hey there Short Lady");
// }else if(isTall || !isMale){
//     console.log("Hey there Tall Man");
// }else{
//     console.log("Where do you stand");
// }

if(isTall && isMale){
    console.log("Hey there tall Lady")
}else if(!isTall && isMale){
    console.log("Hey there short lady");
}else if(isTall && !isMale){
    console.log("Hey there tall man");
}else{
    console.log("Hey there short man");
}

let university = "UON";

let my_choice = university ?? "Chuka University"

console.log(my_choice);