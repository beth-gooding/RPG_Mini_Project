/*
- 4 classes - each class is one type of poken - each has 4 different moves
                                                            - each move does different "damage" = negative HP
                                                - each class has different "health point"(HP)
                                                - 
*/
import reader from "readline-sync";
import {Pokemon, Fire, Rock, Water, Grass} from "./pokemonModule.js";

let pokemon1 = new Fire;

let pokemon2 = new Rock;

// let playing = true;

while ((pokemon1.playing) && (pokemon2.playing)){

    let attack = reader.question("Choose your attack - Fireball(1), Flamethrower(2), Sacred Fire(3), Blast Burn(4): ");
if (attack == 1){
    pokemon1.fireball(pokemon2);
    
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
pokemon2.checkHP();


// pokemon 2's turn

let attack2 = Math.floor(Math.random() * 4) + 1;
if (attack2 == 1){
    pokemon2.rockthrow(pokemon1);
    console.log('Computer used Rock Throw!');
} else if (attack2 == 2){
    pokemon2.ancientpower(pokemon1);
    console.log('Computer used Ancient Power!');
} else if (attack2 == 3) {
    pokemon2.meteorbeam(pokemon1);
    console.log('Computer used Meteor Beam');
} else {
    pokemon2.rockwrecker(pokemon1);
    console.log('Computer used Rock Wrecker!');
} 
    pokemon1.checkHP();

}



