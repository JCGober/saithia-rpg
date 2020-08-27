
// Constructor for heros
class Hero{
    constructor(name, description, weapon, hitPoints, acuity, speed, wisdom, defence, magic, strength){
        this.name = name;
        this.description = description;
        this. weapon = weapon;
        this.hitPoints = hitPoints;
        this.acuity = acuity;
        this.speed = speed
        this.wisdom = wisdom;
        this.defence = defence;
        this.magic = magic;
        this.strength = strength;
    }
    
    // methods for heros
    greet(target) {

        console.log(`${this.name} says hello to ${target.name}`)

    }
}


//Character creation 
var cor = new Hero("Corinthe", "Tribe leader", "None", 20, 10, 8, 10, 10, 10, 7)

var kel = new Hero("Kellian", "son of Corinthe", "None", 15, 6, 8, 5, 6, 9, 6)


//test zone

cor.greet(kel)