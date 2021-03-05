export class Pokemon {
  constructor(type, attack1, attack2, attack3, attack4) {
    this.type = type;
    this.HP = 100;
    this.attack1 = attack1;
    this.attack2 = attack2;
    this.attack3 = attack3;
    this.attack4 = attack4;
    this.playing = true;
  }
  checkHP() {
    if (this.HP <= 0) {
      this.playing = false;
      console.log("game over");
    }
  }
  move1(target) {
    let damage = Math.floor(Math.random() * 10) + 10;
    target.HP = target.HP - damage;
  }
  move2(target) {
    let damage = Math.floor(Math.random() * 15) + 10;
    target.HP = target.HP - damage;
  }
  move3(target) {
    let damage = Math.floor(Math.random() * 15) + 10;
    target.HP = target.HP - damage;
  }
  move4(target) {
    let damage = Math.floor(Math.random() * 20) + 15;
    target.HP = target.HP - damage;
  }
}

// Fire class

export class Fire extends Pokemon {
  constructor() {
    super("Fire", "Fireball", "Flamethrower", "Sacred Fire", "Blastburn");
  }
}

// Rock Class

export class Rock extends Pokemon {
  constructor() {
    super("Rock", "Rock Throw", "Ancient Power", "Meteor Beam", "Rock Wrecker");
  }
}

// Grass class

export class Grass extends Pokemon {
  constructor() {
    super("Grass", "Spore", "Frenzyplant", "Leafblade", "Synthesis");
  }
}

//Water pokemon class with moves

export class Water extends Pokemon {
  constructor() {
    super("Water", "Watergun", "HydroCannon", "Surf", "WaterPulse");
  }
}
