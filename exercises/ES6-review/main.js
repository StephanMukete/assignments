class Player{
    constructor(){
        this.name = "";
        this.totalCoins = 0;
        this.status = "small";
        this.hasStar = false;
        this.gameActive = true;
    }
    setName(namePicked){
        this.name = namePicked;
    }
    gotHit(){
        if(this.status === "Powered Up"){
            this.status = "Big";
        } else if (this.status === "Big"){
            this.status = "Small";
        } else {
            this.status = "Dead"
            this.gameActive = false;
        }
    }
    gotPowerup(){   
        if(this.status === "Dead"){
            this.status = "small";
        } else if (this.status === "Small"){
            this.status = "Big";
        } else {
            this.status = "Powered Up"
        }
    }
    addCoin(){
        this.totalCoins++;
    }
    print(){
        console.log(`name: ${this.name} \n Total Coins: ${this.totalCoins} \n Status: ${this.status} \n Star Properties:${this.hasStar}`)
    }
    
}

class RangeFunction extends Player {
    constructor (name, totalCoins, status, hasStar, gameActive, randomNum){
    super (name, totalCoins, status, hasStar, gameActive);
      randomNum()
      {
           return Math.floor(Math.random() * 3 ) ;
}}
}