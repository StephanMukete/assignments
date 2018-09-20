function Ambassador(){
    this.message = "sweet sixteen"
    this.speak = function(){
        console.log(this.message);
    }
    this.translator = {
        translate: () => {
            console.log(this.message);
        }
    }
}
function Ambassador(){
    this.message = "sweet sixteen"
    this.speak = function(){
        console.log(this.message);
    }
    const self = this;
    this.translator = {
        translate: function(){
            console.log(self.message);
        }
    }
}


const erin = new Ambassador()
erin.speak();
erin.translator.translate();

const bubbleGumMachine = {
    flavors: [{
        color: 'blue',
        price: 20
    }, {
        color: 'yellow',
        price: 10
    }, {
        color: 'green',
        price: 15
    },{
        color: 'pink',
        price: 17
    } ],
    amt: 15,
    selectFlavors: function(amt){
        const self = this;
        return this.flavors.filter(function(flavor){
            return flavor.price <= self.amt
        })
    }
}
console.log(bubbleGumMachine.selectFlavors());
const arrow = () => {

}

//no parameters
() =>{

}

// one parameter
param => {

}

// two or more
(p1, p2) =>{

}

// single line return
const sum = (z, y) => x + y;

// single line return object
const genObj = (key1, key2) => ({key1, key2})

// multiple line
const multiReturn = () => {
    if (true){
        console.log("I can't fit everything on one line");
        return "Use normal return function"
    }
}