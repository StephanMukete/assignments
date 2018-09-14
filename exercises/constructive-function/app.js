var subaru = {
    model: "outback",
    year: 1999,
    mileage: 264000,
    owner: "Stephan",
    color: "blanched-almond"
}

function Car(model, year, mileage, owner, color, sound){
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    this.owner = owner;
    this.color = color;
    this.sound = sound;
}

Car.prototype.turnOn = function(){
    console.log(this.sound);
}
var tesla = new Car("Tesla model 3", 2018, -500, "Mukete", "black", "......Beep");
var ferrari = new Car("ferrari Testarosa", 2018, -500, "Mukete", "black", "...Veep");
ferrari.turnOn();

function Animal(){
    this.hasCellWall = false;
}

Animal.prototype.eat = function(){
    console.log("NOM NOM NOM");
}

function Dog(){
    Animal.apply(this);
    this.hasFangs = true;
}

Dog.prototype = Object.create(Animal.prototype);

var scruffy = new Dog();

console.log(scruffy);
var squid = new Animal();
console.log(squid);
scruffy.eat();
function User(username, password){
    this.username = username;
    this.password = password;    
}
User.prototype.authenticate