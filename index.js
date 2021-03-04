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

//Water pokemon class with moves

class Water extends Pokemon {
    constructor(){
        super('Water', 'Watergun', 'HydroCannon', 'Surf', 'WaterPulse', 'player1');
                    
    }
    WaterGun(target){
        target.HP = target.HP - 10;
    }
    HydroCannon(target){
        target.HP = target.HP - 10;
    }
    Surf(target){
        target.HP = target.HP - 10;
    }
    WaterPulse(target){
        target.HP = target.HP - 10;
    }

}

let firePokemon = new Fire;
console.log(firePokemon);
firePokemon.fireball(firePokemon);
console.log(firePokemon);


// water pokemon attacks fire pokemon ~ note damage is updated
let waterPokemon = new Water;
waterPokemon.WaterGun(firePokemon);
console.log(firePokemon);
