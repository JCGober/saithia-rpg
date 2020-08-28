
// Constructor for heroes
class Hero{
    constructor(name, description, gold, weapon, hitPoints, acuity, speed, wisdom, defence, magic, strength){
        this.name = name;
        this.description = description;
        this.gold = gold
        this. weapon = weapon;
        this.hitPoints = hitPoints;
        this.acuity = acuity;
        this.speed = speed
        this.wisdom = wisdom;
        this.defence = defence;
        this.magic = magic;
        this.strength = strength;
    }
    
    // methods for heroes
    greet(target) {

        console.log(`${this.name} says Greetings to ${target.name}`)
    }

    examine(target){

        console.log(`${this.name} examines ${target.name}. Description: ${target.description}. Hit points: ${target.hitPoints}.`)

    }
}


//Character creation 
var cor = new Hero("Corinthe", "Tribe leader", 100, "None", 20, 10, 8, 10, 10, 10, 7)

var kel = new Hero("Kellian", "son of Corinthe", 100, "None", 15, 6, 8, 5, 6, 9, 6)



//test zone

cor.greet(kel)

kel.examine(cor)