import reader from "readline-sync";

export class Game {
    constructor() {
        this.timer1000 = new Timer(1000);
        this.timer1500 = new Timer(1500);
        this.player1 = new Player();
        this.player2 = new Player();
        //this.pokemon1 = this.player1.playerType();
        this.playing = true;
        this.gameType;
    }

    async  startGame() {
        console.log(this.player1.playerType("Player 1"))
        //let pokemon1 = this.player1.playerType("Player 1");
        console.log(`You sent out ${pokemon1.type}\nYour HP: ${pokemon1.HP}` );
        
        
        await this.timer1000.delayTimer();
    
        if (this.gameType == "1 Player") {
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
        } else if (this.gameType == "2 Player") {
            var pokemon2 = this.player2.playerType("Player 2");
        console.log(`You sent out ${pokemon2.type}\nYour HP: ${pokemon2.HP}\n` );
        }
        
        //turns
        while (this.playing == true) {
    
            //player 1 turn
            this.player1.playerturn(pokemon1, pokemon2);
    
            //check pokemon 2 hp
            pokemon2.checkHP();
        
            //show hp
            console.log(`${pokemon1.player} HP: ${pokemon1.HP}, ${pokemon2.player} HP: ${pokemon2.HP}\n`);


            if (pokemon2.playing == false){
                this.playing = false;
                this.playAgain();
                break;
            }
    
            //time gap between turns
        
            await this.timer1500.delayTimer();
            
            if (this.gameType == "1 Player"){
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
            } else if (this.gameType == "2 Player"){
                this.player2.playerturn(pokemon2, pokemon1);
            }
    
            //Check pokemon1 HP
            pokemon1.checkHP();
    
            //show hp
            console.log(`${pokemon1.player} HP: ${pokemon1.HP}, ${pokemon2.player} HP: ${pokemon2.HP}\n`);
    
            if (pokemon1.playing == false) {
                this.playing = false;
                this.playAgain();
            }
    
        }
     
    }


    chooseGame() {
        let choice = reader.question("Would you like to player 1-player (1) or 2-player (2)?: ");
        if (choice == '1') {
            this.gameType = "1 Player";   
        } else if (choice == '2') {
            this.gameType = "2 Player";
        } else {
            console.log("Invalid answer. Type 1 or 2.")
            this.chooseGame();
        }
        this.startGame();
    }

    playAgain() {
        let again = reader.question("Would you like another battle? yes/no: ");
        if (again == "yes") {
            this.playing = true;
            this.chooseGame();
        } else if (again == "no") {
            console.log("Thanks for battling!");
        } else {
            console.log("Invalid answer. Type yes or no.");
            this.playAgain();
        }
    }
}



export class Player {
    constructor() {

    }

    playerType(playerID) {
        let type = reader.question(`${playerID}:\nChoose your Pokemon - Fire(1), Water(2), Grass(3), Rock(4): `)
      
        if (type == 1) {
            var pokemon = new Fire(playerID);
        } else if (type == 2) {
            var pokemon = new Water(playerID);
        } else if (type == 3) {
            var pokemon = new Grass(playerID);
        } else if (type == 4) {
            var pokemon = new Rock(playerID);
        } else {
            console.log("Choose a number between 1 and 4\n");
            this.playerType(playerID);
        }
      
        return pokemon;
      
      }

      playerturn(attacker, target){
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
                this.playerturn(attacker, target); 
                break;
         
        }

        after_attack;
    }
}

export class Timer {
    constructor(ms) {
        this.ms = ms;
    }
      
      async delayTimer() {
        async function sleep(duration) {
            return new Promise((resolve) => {
            setTimeout(resolve, duration);
                });
            }
        await sleep(this.ms);
      }
}

export class Pokemon {
    constructor(type, attacks = [attack1, attack2, attack3, attack4, healing]) {
      this.type = type;
      this.HP = 100;
      this.attacks = attacks;
      this.playing = true;
    }
    checkHP() {
      if (this.HP <= 0) {
        this.playing = false;
        console.log(`${this.player} has lost the battle. Game over.`);
      }
    }
    moves(target) {
      let damage = Math.floor(Math.random() * 22) + 8;
      target.HP = target.HP - damage;
      if (target.HP < 0) {
        target.HP = 0;
      }
    }
    healing() {
      let health = Math.floor(Math.random() * 22) + 1;
      this.HP = this.HP + health;
      if (this.HP > 100) {
        this.HP = 100;
      }
    }
  }
  
  // Fire class
  
  export class Fire extends Pokemon {
    constructor(player) {
      super("Fire", ["Fireball", "Flamethrower", "Sacred Fire", "Blastburn", "Heal"]);
      this.player = player;
    }
  }
  
  // Rock Class
  
  export class Rock extends Pokemon {
    constructor(player) {
      super("Rock", ["Rock Throw", "Ancient Power", "Meteor Beam", "Rock Wrecker", "Heal"]);
      this.player = player;
    }
  }
  
  // Grass class
  
  export class Grass extends Pokemon {
    constructor(player) {
      super("Grass", ["Spore", "Frenzyplant", "Leafblade", "Synthesis", "Heal"]);
      this.player = player;
    }
  }
  
  //Water pokemon class with moves
  
  export class Water extends Pokemon {
    constructor(player) {
      super("Water", ["Watergun", "HydroCannon", "Surf", "WaterPulse", "Heal"]);
      this.player = player;
    }
  }
  