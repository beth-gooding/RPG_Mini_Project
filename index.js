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
    checkHP() {
        let currentHP = this.HP
        if (currentHP <= 0) {
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

let grassPokemon = new Grass;
console.log(grassPokemon);
firePokemon.fireball(grassPokemon);
console.log(grassPokemon);
grassPokemon.leafblade(firePokemon);
console.log(firePokemon);

console.log(firePokemon);
firePokemon.fireball(firePokemon);
console.log(firePokemon);


let geodude = new Rock;
console.log(geodude);
geodude.rockwrecker(firePokemon);
console.log(firePokemon); // Seems to work for attacking another Pokemon


// water pokemon attacks fire pokemon ~ note damage is updated
let waterPokemon = new Water;
waterPokemon.WaterGun(firePokemon);
console.log(firePokemon);

