/*
- 4 classes - each class is one type of poken - each has 4 different moves
                                                            - each move does different "damage" = negative HP
                                                - each class has different "health point"(HP)
                                                - 
*/
import reader from "readline-sync";
import { Pokemon, Fire, Rock, Water, Grass, typesArray, addNewType } from "./pokemonModule.js";

function sleep(ms) {
  return new Promise((resolve) => {
  setTimeout(resolve, ms);
    });
}

addNewType("Dragon");

async function delayTimer(ms) {
  await sleep(ms)
}


function playerType(playerID) {
    let newstring = `Choose your Pokemon - `
    for (let i of typesArray){
        newstring = newstring + i +", ";
    }
    newstring = newstring + ":";
  let type = reader.question(newstring)
    /*try { //there is a class called type
        var pokemon1 = new Fire(playerID);
    }
    catch(err) {
        console.log("broken")
    }*/
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

function player1turn(pokemon1, pokemon2){
    //call player1 turn
    playerturn(pokemon1, pokemon2);
  
    //check pokemon 2 hp
    pokemon2.checkHP();
  
    //show hp
    console.log(`${pokemon1.player} HP: ${pokemon1.HP}, ${pokemon2.player} HP: ${pokemon2.HP}\n`);
    if (pokemon2.playing == false){
        playing = false;
        playAgain();
        
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


        player1turn(pokemon1, pokemon2);

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
    console.log(`You sent out ${pokemon1.type}\nYour HP: ${pokemon1.HP}\n` );


    //time gap between turns
    
    await delayTimer(1500);


    //Player 2 chooses pokemon
    console.log("Player 2:");
    let pokemon2 = playerType("Player 2");
    
  

    while (playing == true) {
        //player 1 turn
        
 

        player1turn(pokemon1, pokemon2);


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



