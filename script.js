
// Constructor for heroes
class RpgChar{
    constructor(name, description, type, gold, weapon, hitPoints, acuity, speed, wisdom, defence, magic, strength){
        this.name = name;
        this.description = description;
        this.type = type
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

        console.log(`${this.name} says 'Greetings' to ${target.name}`)
    }

    examine(target){

        console.log(`${this.name} examines ${target.name}. Description: ${target.description}. Class: ${target.type}.`)

    }

    pickpocket(target){

        if(this.acuity > target.acuity && target.gold >= 5){

            target.gold = target.gold - 5
            this.gold = this.gold + 5

            console.log(`${this.name} successfully pickpocketed 5 gold from ${target.name}!`)
            console.log(`${this.name} now has ${this.gold} gold.`)

        }else if (target.gold < 5){

            console.log("The target doesn't have any gold to steal!")

        } else {
            
            console.log(`${this.name} fails to pickpocket ${target.name}`)

        }   
    }

    melee(target){

        console.log(`${this.name} attacks ${target.name}`)

        target.hitPoints -= this.strength

        console.log(`${target.name} has ${target.hitPoints} hp left `)
        // if(this.weapon === "sword"){
        // }
    }
}


//Character creation 

//The user playing will control this character 
var user = new RpgChar("user", "Close friend of Corinthe", "mage", 100, "None", 20, 5, 5, 5, 5, 5, 5)

var cor = new RpgChar("Corinthe", "Tribe leader", "mage", 100, "None", 20, 10, 8, 10, 10, 10, 7)

var kel = new RpgChar("Kellian", "son of Corinthe", "mage", 100, "None", 15, 6, 8, 5, 6, 9, 6)

var ell = new RpgChar("Ellora", "Wife of Corinthe", "mage", 100, "none", 20, 10, 8, 10, 5, 8, 5)


//test zone

kel.melee(cor)