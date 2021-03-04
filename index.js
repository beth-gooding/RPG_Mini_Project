/*
- 4 classes - each class is one type of poken - each has 4 different moves
                                                            - each move does different "damage" = negative HP
                                                - each class has different "health point"(HP)
                                                - 
*/

class Pokemon{
    constructor(type, attack1, attack2, attack3, attack4, player){
        this.type = type;
        this.HP = 100;
        this.attack1 = attack1;
        this.attack2 = attack2;
        this.attack3 = attack3;
        this.attack4 = attack4;
        this.player = player;
    }     
}

class Fire extends Pokemon {
    constructor(){
        super('Fire', 'fireball', 'flamethrower', 'sacredfire', 'blastburn', 'player1');
                    
    }
    fireball(target){
        target.HP = target.HP - 10;
    }
    flamethrower(target){
        target.HP = target.HP - 10;
    }
    sacredfire(target){
        target.HP = target.HP - 10;
    }
    blastburn(target){
        target.HP = target.HP - 10;
    }

}


// ROCK CLASS

class Rock extends Pokemon {
    constructor () {
        super("Rock", "rockthrow", "ancientpower", "meteorbeam", "rockwrecker", "player1")
    }

    rockthrow(target){
        target.HP = target.HP - 10;
    }
    ancientpower(target){
        target.HP = target.HP - 10;
    }
    meteorbeam(target){
        target.HP = target.HP - 10;
    }
    rockwrecker(target){
        target.HP = target.HP - 10;
    }


}

let firePokemon = new Fire;
console.log(firePokemon);
firePokemon.fireball(firePokemon);
console.log(firePokemon);

let geodude = new Rock;
console.log(geodude);
geodude.rockwrecker(firePokemon);
console.log(firePokemon); // Seems to work for attacking another Pokemon