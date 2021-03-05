/*
- 4 classes - each class is one type of poken - each has 4 different moves
                                                            - each move does different "damage" = negative HP
                                                - each class has different "health point"(HP)
                                                - 
*/
import reader from "readline-sync";
import { Pokemon, Fire, Rock, Water, Grass } from "./pokemonModule.js";

function sleep(ms) {
  return new Promise((resolve) => {
  setTimeout(resolve, ms);
      });
  }

async function delayTimer(ms) {
  await sleep(ms)
}

function playerType() {
  let type = reader.question(`Choose your Pokemon - Fire(1), Water(2), Grass(3), Rock(4): `)

  if (type == 1) {
      var pokemon1 = new Fire;
  } else if (type == 2) {
      var pokemon1 = new Water;
  } else if (type == 3) {
      var pokemon1 = new Grass;
  } else if (type == 4) {
      var pokemon1 = new Rock;
  } else {
      console.log("Choose a number between 1 and 4\n");
      playerType();
  }

  return pokemon1;

}

function playAgain() {
    let again = reader.question("Would you like another battle? yes/no:");
    if (again == "yes") {
      startGame();
    } else if (again == "no") {
      console.log("Thanks for battling!");
    } else {
      console.log("Invalid answer. Type yes or no.");
      playAgain();
    }
  }

async function startGame() {
  
  let playing = true;
  //choose player 1 pokemon
  let pokemon1 = playerType();
console.log(`You sent out ${pokemon1.type}\nYour HP: ${pokemon1.HP}` );

await delayTimer(1000);

let pokemonPC = Math.floor(Math.random() * 4) + 1;
if (pokemonPC == 1) {
    var pokemon2 = new Fire;
} else if (pokemonPC == 2) {
    var pokemon2 = new Water;
} else if (pokemonPC == 3) {
    var pokemon2 = new Grass;
} else if (pokemonPC == 4) {
    var pokemon2 = new Rock;
};
console.log(`Computer sent out ${pokemon2.type}\nComputer HP: ${pokemon2.HP}`);


  //turns

  while (playing == true) {
    //player 1 turn
    function player1turn(){
    let attack = reader.question(
      `Choose your attack - ${pokemon1.attacks[0]}(1), ${pokemon1.attacks[1]}(2), ${pokemon1.attacks[2]}(3), ${pokemon1.attacks[3]}(4), ${pokemon1.attacks[4]}(5): `);
    
    var after_attack = console.log(`You used ${JSON.stringify(pokemon1.attacks[attack-1])}\n`);
    switch(attack) {
        case '1':
        case '2':
        case '3':
        case '4':
            pokemon1.moves(pokemon2);
            break;
        case '5':
            pokemon1.healing();
            break;
        default:
            console.log("Choose a number between 1 and 5");
            player1turn(); 
            break; 
        }
    
    
    //Text display of attack used by User
    after_attack;
    }


    player1turn();
    //check pokemon 2 hp
    pokemon2.checkHP();
    
    //show hp
    console.log(`Your HP: ${pokemon1.HP}, Computer HP: ${pokemon2.HP}\n`);
    if (pokemon2.playing == false){
      playing = false;
      playAgain();
      break;
    }

//time gap between turns
    
    await delayTimer(1500);


    //computer turn
    let attackPC = Math.floor(Math.random() * 5);

    let after_PC = console.log(`Computer used ${JSON.stringify(pokemon2.attacks[attackPC])}\n`);
    
    switch(attackPC) {
      case 0:
      case 1:
      case 2:
      case 3:
        pokemon2.moves(pokemon1);
        break;
      case 4:
        pokemon2.healing();
        break;
    }
    
    
    //Text display of attack by Computer
    after_PC;
    //Check pokemon1 HP
    pokemon1.checkHP(pokemon2);

    //show hp
    console.log(`Your HP: ${pokemon1.HP}, Computer HP: ${pokemon2.HP}\n`);

    await delayTimer(1500);

    if (pokemon1.playing == false) {
      playing = false;
      playAgain();
  }

  }
 
}

startGame();