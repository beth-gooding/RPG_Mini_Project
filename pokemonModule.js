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
      console.log("game over");
    }
  }
  moves(target) {
    let damage = Math.floor(Math.random() * 22) + 8;
    target.HP = target.HP - damage;
  }
  healing() {
    let health = Math.floor(Math.random() * 22) + 1;
    this.HP = this.HP + health;
  }
}

// Fire class

export class Fire extends Pokemon {
  constructor() {
    super("Fire", ["Fireball", "Flamethrower", "Sacred Fire", "Blastburn", "Heal"]);
  }
}

// Rock Class

export class Rock extends Pokemon {
  constructor() {
    super("Rock", ["Rock Throw", "Ancient Power", "Meteor Beam", "Rock Wrecker", "Heal"]);
  }
}

// Grass class

export class Grass extends Pokemon {
  constructor() {
    super("Grass", ["Spore", "Frenzyplant", "Leafblade", "Synthesis", "Heal"]);
  }
}

//Water pokemon class with moves

export class Water extends Pokemon {
  constructor() {
    super("Water", ["Watergun", "HydroCannon", "Surf", "WaterPulse", "Heal"]);
  }
}
