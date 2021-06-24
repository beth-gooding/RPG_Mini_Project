interface PokemonI {
  type: string;
  HP: number;
  attacks: string[];
  playing: boolean;
  player: string;
  checkHP: () => void;
  moves: (target: PokemonI) => void;
  healing: () => void;
}

export class Pokemon implements PokemonI {
    type: string;
    HP: number;
    attacks: string[];
    playing: boolean;
    player: string;

    constructor(type: string, attacks: string[], player: string) {
      this.type = type;
      this.HP = 100;
      this.attacks = attacks;
      this.playing = true;
      this.player = player;
    }
    checkHP(): void {
      if (this.HP <= 0) {
        this.playing = false;
        console.log(`${this.player} has lost the battle. Game over.`);
      }
    }
    moves(target: PokemonI): void {
      let damage = Math.floor(Math.random() * 22) + 8;
      target.HP = target.HP - damage;
      if (target.HP < 0) {
        target.HP = 0;
      }
    }
    healing(): void {
      let health = Math.floor(Math.random() * 22) + 1;
      this.HP = this.HP + health;
      if (this.HP > 100) {
        this.HP = 100;
      }
    }
  }
  
  // Fire class
  
  export class Fire extends Pokemon {
    constructor(player: string) {
      super("Fire", ["Fireball", "Flamethrower", "Sacred Fire", "Blastburn", "Heal"], player);
      
    }
  }
  
  // Rock Class
  
  export class Rock extends Pokemon {
    constructor(player: string) {
      super("Rock", ["Rock Throw", "Ancient Power", "Meteor Beam", "Rock Wrecker", "Heal"], player);
    }
  }
  
  // Grass class
  
  export class Grass extends Pokemon {
    constructor(player: string) {
      super("Grass", ["Spore", "Frenzyplant", "Leafblade", "Synthesis", "Heal"], player); 
    }
  }
  
  //Water pokemon class with moves
  
  export class Water extends Pokemon {
    constructor(player: string) {
      super("Water", ["Watergun", "HydroCannon", "Surf", "WaterPulse", "Heal"], player);
    }
  }