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

function playerType(playerID) {
  let type = reader.question(`Choose your Pokemon - Fire(1), Water(2), Grass(3), Rock(4): `)

  if (type == 1) {
      var pokemon1 = new Fire(playerID);
  } else if (type == 2) {
      var pokemon1 = new Water(playerID);
  } else if (type == 3) {
      var pokemon1 = new Grass(playerID);
  } else if (type == 4) {
      var pokemon1 = new Rock(playerID);
  } else {
      console.log("Choose a number between 1 and 4\n");
      var pokemon1 = playerType(playerID);
  }

  return pokemon1;

}

function playAgain() {
    let again = reader.question("Would you like another battle? yes/no: ");
    if (again == "yes") {
        chooseGame();
    } else if (again == "no") {
        console.log("Thanks for battling!");
    } else {
        console.log("Invalid answer. Type yes or no.");
        playAgain();
    }
}

function chooseGame() {
    let choice = reader.question("Would you like to player 1-player (1) or 2-player (2)?: ");
    if (choice == '1') {
        startGame();
    } else if (choice == '2') {
        twoPlayerGame();
    } else {
        console.log("Invalid answer. Type 1 or 2.")
        chooseGame();
    }
}

async function startGame() {
  

    let playing = true;
    //choose player 1 pokemon
    let pokemon1 = playerType("Player 1");
    console.log(`You sent out ${pokemon1.type}\nYour HP: ${pokemon1.HP}` );

    await delayTimer(1000);


    let pokemonPC = Math.floor(Math.random() * 4) + 1;
    if (pokemonPC == 1) {
        var pokemon2 = new Fire("Computer");
    } else if (pokemonPC == 2) {
        var pokemon2 = new Water("Computer");
    } else if (pokemonPC == 3) {
        var pokemon2 = new Grass("Computer");
    } else if (pokemonPC == 4) {
        var pokemon2 = new Rock("Computer");
    };
    console.log(`Computer sent out ${pokemon2.type}\nComputer HP: ${pokemon2.HP}\n`);

    //turns
    while (playing == true) {

        //player 1 turn
        function player1turn(){
            let attack = reader.question(`Choose your attack - ${pokemon1.attacks[0]}(1), ${pokemon1.attacks[1]}(2), ${pokemon1.attacks[2]}(3), ${pokemon1.attacks[3]}(4), ${pokemon1.attacks[4]}(5): `);
    
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
        pokemon1.checkHP();

        //show hp
        console.log(`Your HP: ${pokemon1.HP}, Computer HP: ${pokemon2.HP}\n`);

        if (pokemon1.playing == false) {
            playing = false;
            playAgain();
        }

    }
 
}

async function twoPlayerGame(){
    let playing = true;


    //choose player 1 pokemon
    console.log("Player 1:");
    let pokemon1 = playerType("Player 1");
    /*let type1 = reader.question(`Player 1:\nChoose your Pokemon - Fire(1), Water(2), Grass(3), Rock(4): `)

    if (type1 == 1) {
        var pokemon1 = new Fire("Player 1");
    } else if (type1 == 2) {
        var pokemon1 = new Water("Player 1");
    } else if (type1 == 3) {
        var pokemon1 = new Grass("Player 1");
    } else if (type1 == 4) {
        var pokemon1 = new Rock("Player 1");
    } else {
        console.log("Choose a number between 1 and 4\n");
        type;

    } */
    console.log(`You sent out ${pokemon1.type}\nYour HP: ${pokemon1.HP}\n` );


    //time gap between turns
    
    await delayTimer(1500);


    //Player 2 chooses pokemon
    console.log("Player 2:");
    let pokemon2 = playerType("Player 2");
    /*let type2 = reader.question(`Player 2:\nChoose your Pokemon - Fire(1), Water(2), Grass(3), Rock(4): `)

    if (type2 == 1) {
        var pokemon2 = new Fire("Player 2");
    } else if (type2 == 2) {
        var pokemon2 = new Water("Player 2");
    } else if (type2 == 3) {
        var pokemon2 = new Grass("Player 2");
    } else if (type2 == 4) {
        var pokemon2 = new Rock("Player 2");
    } else {
        console.log("Choose a number between 1 and 4\n");
        type;
    }
    console.log(`You sent out ${pokemon2.type}\nYour HP: ${pokemon2.HP}\n` );
    */

  

    while (playing == true) {
        //player 1 turn
        function playerturn(attacker, target){
            let attack = reader.question(`${attacker.player}:\nChoose your attack - ${attacker.attacks[0]}(1), ${attacker.attacks[1]}(2), ${attacker.attacks[2]}(3), ${attacker.attacks[3]}(4), ${attacker.attacks[4]}(5): `);
    
            var after_attack = console.log(`You used ${JSON.stringify(attacker.attacks[attack-1])}\n`);
            switch(attack) {
                case '1':
                case '2':
                case '3':
                case '4':
                    attacker.moves(target);
                    break;
                case '5':
                    attacker.healing();
                    break;
                default:
                    console.log("Choose a number between 1 and 5");
                    playerturn(attacker, target); 
                    break;
             
            }
    
            after_attack;
        }

        //call player1 turn
        playerturn(pokemon1, pokemon2);

        //check pokemon 2 hp
        pokemon2.checkHP();
    
        //show hp
        console.log(`Player 1 HP: ${pokemon1.HP}, Player 2 HP: ${pokemon2.HP}\n`);
        if (pokemon2.playing == false){
            playing = false;
            playAgain();
            break;
        }


        await delayTimer(1500);

    
    

        //Call player2turn
        playerturn(pokemon2, pokemon1);


        //check pokemon 1 hp
        pokemon1.checkHP();
        
        //show hp
        console.log(`Player 1 HP: ${pokemon1.HP}, Player 2 HP: ${pokemon2.HP}\n`);
        if (pokemon1.playing == false){
            playing = false;
            playAgain();
            break;
        }
    
        //time gap between turns
        
        await delayTimer(1500)
        
   
    }
}

chooseGame();