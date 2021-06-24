export class Pokemon {
    constructor(type, attacks = [attack1, attack2, attack3, attack4, healing], player) {
      this.type = type;
      this.HP = 100;
      this.attacks = attacks;
      this.playing = true;
      this.player = player;
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
      super("Fire", ["Fireball", "Flamethrower", "Sacred Fire", "Blastburn", "Heal"], player);
      
    }
  }
  
  // Rock Class
  
  export class Rock extends Pokemon {
    constructor(player) {
      super("Rock", ["Rock Throw", "Ancient Power", "Meteor Beam", "Rock Wrecker", "Heal"], player);
    }
  }
  
  // Grass class
  
  export class Grass extends Pokemon {
    constructor(player) {
      super("Grass", ["Spore", "Frenzyplant", "Leafblade", "Synthesis", "Heal"], player); 
    }
  }
  
  //Water pokemon class with moves
  
  export class Water extends Pokemon {
    constructor(player) {
      super("Water", ["Watergun", "HydroCannon", "Surf", "WaterPulse", "Heal"], player);
    }
  }