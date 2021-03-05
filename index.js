/*
- 4 classes - each class is one type of poken - each has 4 different moves
                                                            - each move does different "damage" = negative HP
                                                - each class has different "health point"(HP)
                                                - 
*/
import reader from "readline-sync";

let pokemon1 = new Fire;

let pokemon2 = new Rock;

let playing = true;

while (playing == true){
    //turns 
}

//pokemon 1's turn

let attack = reader.question("Choose your attack - Fireball(1), Flamethrower(2), Sacred Fire(3), Blast Burn(4): ");
if (attack == 1){
    pokemon1.fireball(pokemon2);
    pokemon2.checkHP();
} else if (attack == 2){
    pokemon1.flamethrower(pokemon2);
} else if (attack == 3) {
    pokemon1.sacredfire(pokemon2);
} else if (attack == 4) {
    pokemon1.blastburn(pokemon2);
} else {
    console.log("Choose a number between 1 and 4");
    let attack = reader.question("Choose your attack - Fireball(1), Flamethrower(2), Sacred Fire(3), Blast Burn(4): ");
}

//check pokemon2's hp
if(attack==1){
pokemon1.fireball(pokemon2), pokemon2.checkHP();

// pokemon 2's turn


let attack = Math.floor(Math.random() * 4) + 1;
if (attack == 1){
    pokemon2.rockthrow(pokemon1);
    console.log('Computer used Rock Throw!');
} else if (attack == 2){
    pokemon2.ancientpower(pokemon1);
    console.log('Computer used Ancient Power!');
} else if (attack == 3) {
    pokemon2.meteorbeam(pokemon1);
    console.log('Computer used Meteor Beam');
} else {
    pokemon2.rockwrecker(pokemon1);
    console.log('Computer used Rock Wrecker!');
} 

//check pokemon1's hp

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
    checkHP() {
        let currentHP = this.HP
        if (currentHP <= 0) {
            playing = false;
            console.log('game over');
        }
    }   
}

class Fire extends Pokemon {
    constructor(){
        super('Fire', 'fireball', 'flamethrower', 'sacredfire', 'blastburn');
                    
    }
    fireball(target){
        target.HP = target.HP - 10;
        return target.HP;
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

class Grass extends Pokemon {
    constructor(){
        super('Grass', 'spore', 'frenzyplant', 'leafblade', 'synthesis');
                    
    }
    spore(target){
        target.HP = target.HP - 10;
    }
    frenzyplant(target){
        target.HP = target.HP - 10;
    }
    leafblade(target){
        target.HP = target.HP - 25;
    }
    synthesis(target){
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
