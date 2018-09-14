if(5 > 3){
    console.log("is greater than");
}
if("cat".length === 3){
    console.log("Is the length")
}
if ("cat" === "dog"){
    console.log("is the same")
} else{
    console.log("Not the same")
}

var person = {
    name: "Bobby",
    age: 12
}
if (person.name[0] === "B"){
    console.log(`allow ${person.name} into the movie`)
} 
if(person.name[0] === "B" && person.age > 18){
    console.log(`allow ${person.name} into the movie`)
} else{
    console.log(`don't allow ${person.name} into the movie`)
}
if(1 === "1"){
    console.log("strict")
} else if(1 == "1"){
    console.log("loose or abstract")
} else{
    console.log("Not equal at all")
}
if ((1 <= 2) && (2 === 4)){
    console.log("yes")
} else{
    console.log("no")
}
if (typeof "dog" === "string"){
    console.log("true");
}
if (typeof true === "boolean"){
    console.log("true");
}