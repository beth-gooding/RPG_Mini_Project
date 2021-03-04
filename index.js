/*
- 4 classes - each class is one type of poken - each has 4 different moves
                                                            - each move does different "damage" = negative HP
                                                - each class has different "health point"(HP)
                                                - 
*/
import reader from "readline-sync";
import { Pokemon, Fire, Rock, Water, Grass } from "./pokemonModule.js";

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

function startGame() {
  let playing = true;

  //choose player 1 pokemon

  let type = reader.question(
    `Choose your Pokemon - Fire(1), Water(2), Grass(3), Rock(4): `
  );

  if (type == 1) {
    var pokemon1 = new Fire();
  } else if (type == 2) {
    var pokemon1 = new Water();
  } else if (type == 3) {
    var pokemon1 = new Grass();
  } else if (type == 4) {
    var pokemon1 = new Rock();
  } else {
    console.log("Choose a number between 1 and 4");
    let type = reader.question(
      `Choose your Pokemon - Fire(1), Water(2), Grass(3), Rock(4): `
    );
  }

  console.log(pokemon1);

  let pokemon2 = new Rock();

  console.log(pokemon2);

  //turns

  while (playing == true) {
    //player 1 turn
    let attack = reader.question(
      `Choose your attack - ${pokemon1.attack1}(1), ${pokemon1.attack2}(2), ${pokemon1.attack3}(3), ${pokemon1.attack4}(4): `
    );
    if (attack == 1) {
      pokemon1.move1(pokemon2);
      console.log("You used fireball!");
    } else if (attack == 2) {
      pokemon1.move2(pokemon2);
      console.log("You used flamethrower!");
    } else if (attack == 3) {
      pokemon1.move3(pokemon2);
      console.log("You used sacred fire!");
    } else if (attack == 4) {
      pokemon1.move4(pokemon2);
      console.log("You used blast burn!");
    } else {
      console.log("Choose a number between 1 and 4");
      let attack = reader.question(
        "Choose your attack - Fireball(1), Flamethrower(2), Sacred Fire(3), Blast Burn(4): "
      );
    }

    //check pokemon 2 hp
    playing = pokemon2.checkHP();
    

    //show hp
    console.log(`Your HP: ${pokemon1.HP}, Computer HP: ${pokemon2.HP}`);


    // Was trying to exit game using this, but it doesn't work here, still lets computer have another go.
    if (playing == false) {
        playAgain();
    }

    //computer turn
    attack = Math.floor(Math.random() * 4) + 1;
    if (attack == 1) {
      pokemon2.move1(pokemon1);
      console.log("Computer used Rock Throw!");
    } else if (attack == 2) {
      pokemon2.move2(pokemon1);
      console.log("Computer used Ancient Power!");
    } else if (attack == 3) {
      pokemon2.move3(pokemon1);
      console.log("Computer used Meteor Beam");
    } else {
      pokemon2.move4(pokemon1);
      console.log("Computer used Rock Wrecker!");
    }

    //check pokemon 1 hp
    playing = pokemon1.checkHP();

    //show hp
    console.log(`Your HP: ${pokemon1.HP}, Computer HP: ${pokemon2.HP}`);
  }



  playAgain();
}

startGame();
