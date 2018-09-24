class Animal{
    constructor(){
        this.name = name;
        this.hasCellWall = false;
    }
    eat(){
        console.log("NOM NOM");
    }
}

class Mamal extends Animal{
    constructor(name){
        super(name);
        this.hasFur = true;
    }
    giveLiveBirth(){
        console.log("It;s a boy");
    }
}

const rhino = new Mamal("rhino");
console.log(rhino);
rhino.giveLiveBirth();