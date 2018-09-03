var shopper = {
    name: "Stephan",
    age: 23,
    isBuying: true,
    groceryCart:[ "meat","milk", "bread"],
    details: function (){
        return `${this.name} is ${this.age} years old`
    }
};
document.getElementById("demo").innerHTML = shopper.details();
