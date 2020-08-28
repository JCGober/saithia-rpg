
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
        console.log("")
        console.log("----------------")
        console.log ("")
    }

    examine(target){

        console.log(`${this.name} examines ${target.name}. Description: ${target.description}. Class: ${target.type}.`)
        console.log("")
        console.log("----------------")
        console.log ("")
    }

    gamble(target){

        console.log(`${this.name} asks to play a game of dice with ${target.name}`)

        if ((Math.random()*10) + this.acuity > (Math.random()*10) + target.acuity && target.gold >=10 && this.gold >=10){

            target.gold = target.gold - 10
            
            this.gold = this.gold + 10

            console.log(`${this.name} won 10 gold and now has ${this.gold} gold.`)
            console.log("")
            console.log("----------------")
            console.log ("")

        } else if ((Math.random()*10) + this.acuity < (Math.random()*10) + target.acuity && target.gold >=10 && this.gold >=10){

            this.gold = this.gold - 10
            
            target.gold = target.gold + 10

            console.log(`${this.name} has lost 10 gold and now has ${this.gold} gold.`)
            console.log("")
            console.log("----------------")
            console.log ("")

        } else if (this.gold < 10){

            console.log(`${this.name} doesn't have enough money to gamble with.`)
            console.log("")
            console.log("----------------")
            console.log ("")

        } else if (target.gold < 10) {

            console.log(`${target.name} doesn't have enough money to gamble with.`)
            console.log("")
            console.log("----------------")
            console.log ("")
        }
    }

    pickpocket(target){

        console.log(`${this.name} attempts to pickpocket ${target.name}`)

        if(this.acuity > target.acuity && target.gold >= 5){

            target.gold = target.gold - 5
            this.gold = this.gold + 5

            console.log(`${this.name} successfully pickpocketed 5 gold from ${target.name}!`)
            console.log(`${this.name} now has ${this.gold} gold.`)
            console.log("")
            console.log("----------------")
            console.log ("")

        }else if (target.gold < 5){

            console.log("The target doesn't have any gold to steal!")
            console.log("")
            console.log("----------------")
            console.log ("")

        } else {
            
            console.log(`${this.name} fails to pickpocket ${target.name}`)
            console.log("")
            console.log("----------------")
            console.log ("")
        }   
    }

    melee(target){

        console.log(`${this.name} attacks ${target.name}`)

        target.hitPoints -= this.strength

        console.log(`${target.name} has ${target.hitPoints} hp left `)
        console.log("")
        console.log("----------------")
        console.log ("")
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



