
// Constructor for heroes
class RpgChar{
    constructor(name, description, type, gold, weapon, currentHp, maxHp, acuity, speed, wisdom, defence, magic, strength){
        this.name = name;
        this.description = description;
        this.type = type
        this.gold = gold
        this. weapon = weapon;
        this.currentHp = currentHp
        this.maxHp = maxHp;
        this.acuity = acuity;
        this.speed = speed
        this.wisdom = wisdom;
        this.defence = defence;
        this.magic = magic;
        this.strength = strength;
    }
    
    // METHODS FOR RPGCHAR


    // Social methods

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




    //Side skill methods

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



    //Training methods

    trainHp(){

        console.log(`${this.name} trains the HP skill. `)

        if(this.maxHp <= 100){

            this.maxHp = this.maxHp + 1
    
            console.log(`${this.name}'s HP is now ${this.maxHp}.`)
            console.log("")
            console.log("----------------")
            console.log ("")

        } else {

            console.log(`${this.name} has 100 HP. They do not need to train anymore.`)
            console.log("")
            console.log("----------------")
            console.log ("")

        }

    }


    trainAcuity(){


    }
    trainSpeed(){}
    trainWisdom(){}
    trainDefence(){}
    trainMagic(){}
    trainStrength(){}


    //Combat methods 

    melee(target){

        console.log(`${this.name} attacks ${target.name}`)

        target.currentHp -= this.strength

        console.log(`${target.name} has ${target.currentHp} hp left `)
        console.log("")
        console.log("----------------")
        console.log ("")
        // if(this.weapon === "sword"){
        // }
    }

    // Healing Methods

    eat(food){
        // Only food objects for now: apple(1) soon to come: bread(5), meat(10)
        console.log(`${this.name} has ${this.currentHp} HP`)

        if(food === "apple"){

            if(this.currentHp < this.maxHp){

                this.currentHp += 1

                console.log(`${this.name} eats an apple.`)
                console.log(`It heals 1 HP`)

            }else if(this.currentHp === this.maxHp ){

                console.log(`${this.name} isn't hungry`)

            }else{

                console.log(`${this.name} trys to eat ${food} but throws it up.`)
            }
        }

            //Insurance so that health doesnt exceed max HP level
            if(this.currentHp > this.maxHp){
            
                this.currentHp = this.maxHp

            }

        console.log(`${this.name} now has ${this.currentHp} HP`)
        console.log("")
        console.log("----------------")
        console.log ("")


    }
};



//Character creation 

//The user playing will control this character 
var user = new RpgChar("user", "Close friend of Corinthe", "mage", 100, "None", 20, 20, 5, 5, 5, 5, 5, 5)

var cor = new RpgChar("Corinthe", "Tribe leader", "mage", 100, "None", 20, 20, 10, 8, 10, 10, 10, 7)

var kel = new RpgChar("Kellian", "son of Corinthe", "mage", 100, "None", 15, 15, 6, 8, 5, 6, 9, 6)

var ell = new RpgChar("Ellora", "Wife of Corinthe", "mage", 100, "none", 19, 20, 10, 8, 10, 5, 8, 5)


//test zone

console.log("")
console.log("----------------")
console.log ("")
console.log("What is(are) your action(s)?")
console.log("")
console.log("----------------")
console.log ("")

// Run tests here

ell.eat("apple")
ell.eat("apple")







// JAVASCRIPT/HTML INTERACTION





