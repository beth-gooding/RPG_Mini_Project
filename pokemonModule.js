class Pokemon{
    constructor(type, attack1, attack2, attack3, attack4, player){
        this.type = type;
        this.HP = 100;
        this.attack1 = attack1;
        this.attack2 = attack2;
        this.attack3 = attack3;
        this.attack4 = attack4;
        this.player = player;
    }  
    checkHP() {
        let currentHP = this.HP
        if (currentHP <= 0) {
            playing = false;
            console.log('game over');
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