// Miscelanious Variables
var fishBank = $("#fishBank")
var fishCaught = 0;

var berryBank = $("#basketsGathered")
var basketsOfBerry = 0;


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


    cast(){

        var fishAction = $("<div>")

        var castDiv = $("<div>")
        castDiv.text("You cast a net into the water.")
        console.log('You cast a net into the water')

        castDiv.appendTo(fishAction)
        

            var fishInNet = (Math.floor(Math.random()*7))

            console.log(fishInNet)

            fishCaught = fishCaught + fishInNet

            if(fishInNet > 5){

                user.strength = user.strength + 1 

                statBox.html(`<h3><strong>${user.name}</strong></h3><p>Gold:${user.gold}<h3>Skills</h3> HP: ${user.maxHp} <br> Acuity: ${user.acuity}<br> Speed: ${user.speed} <br> Wisdom: ${user.wisdom} <br> Defence: ${user.defence} <br> Magic: ${user.magic} <br> Strength: ${user.strength}</p>`)
                var gainStrengthDiv = ($("<div>"))
                gainStrengthDiv.text("You Got a big haul and gained a strengh point!")
                gainStrengthDiv.appendTo(fishAction)

            }else{

                var catchAmount = $("<div>")
                catchAmount.text(`You caught ${fishInNet} fish!`)
                catchAmount.appendTo(fishAction)
            }

            var spaceDiv = $("<div>")
            spaceDiv.text("---------------")
            spaceDiv.appendTo(fishAction)

            fishAction.prependTo(actionBox1)

            fishBank.text(fishCaught)
    }

    gatherBerries(){

        var gatherAction = $("<div>")

        var goGathDiv = $("<div>")
        goGathDiv.text("You head out to the surrounding wild to gather some berries.")
        goGathDiv.appendTo(gatherAction)

        basketsOfBerry = basketsOfBerry + 1

        var slightOfHand = Math.random()

        if (slightOfHand > 0.85){

            this.acuity = this.acuity + 1

            statBox.html(`<h3><strong>${user.name}</strong></h3><p>Gold:${user.gold}<h3>Skills</h3> HP: ${user.maxHp} <br> Acuity: ${user.acuity}<br> Speed: ${user.speed} <br> Wisdom: ${user.wisdom} <br> Defence: ${user.defence} <br> Magic: ${user.magic} <br> Strength: ${user.strength}</p>`)

            var gainAcuityDiv = $("<div>")
            gainAcuityDiv.text("You avoided all thorny branches and gained an acuity point!")
            gainAcuityDiv.appendTo(gatherAction)
        }

        var berrySucDiv= $("<div>")
        berrySucDiv.text("You collect 1 basket of Wildberries!")
        berrySucDiv.appendTo(gatherAction)

        berryBank.text(basketsOfBerry)

        var spaceDiv = $("<div>")
        spaceDiv.text("---------------")
        spaceDiv.appendTo(gatherAction)

        gatherAction.prependTo(actionBox1)
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
var user = new RpgChar("user", "Close friend of Corinthe", "mage", 0, "None", 20, 20, 5, 5, 5, 5, 5, 5)

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










// JAVASCRIPT/HTML INTERACTION

var startGame = $("#start")

var main = $("#main")

var gameBox = $("#game")

var buttons = $("#buttons")

var next =$("#next")

var intro = $("#intro")

var next0 = $("#next0")

startGame.on("click", function(){

    var userName = prompt("Please name your character. (0-10 characters)")

    user.name = userName

    gameBox.html(`<h1>Character: ${user.name}</h1> Gold: ${user.gold} <br> class: ${user.type} <br> Description: ${user.description} <h3>Skills</h3> HP: ${user.maxHp} <br> Acuity: ${user.acuity}<br> Speed: ${user.speed} <br> Wisdom: ${user.wisdom} <br> Defence: ${user.defence} <br> Magic: ${user.magic} <br> Strength: ${user.strength}`)

    console.log(user)

    intro.attr("style", "display: none;")

    main.attr("style", "text-align: center;")

    next0.attr("style", "display: initial;")

})

var chap1 = $("#chap1")

var next1 = $("#next1")

next0.on("click", function(){
    
    next0.attr("style", "display: none;")

    gameBox.html("")

    chap1.attr("style", "display: initial;")

    next1.attr("style", "display: initial;")


})

//Chapter 1

var game1 = $("#game1")

var statBox = $("#statsBox")

var actionBox1 = $("#actionBox1")

next1.on("click", function(){

    chap1.attr("style", "display: none;")

    next1.attr("style", "display: none;")

    main.attr("style", "height: 400px")

    statBox.html(`<h3><strong>${user.name}</strong></h3><p>Gold:${user.gold}<h3>Skills</h3> HP: ${user.maxHp} <br> Acuity: ${user.acuity}<br> Speed: ${user.speed} <br> Wisdom: ${user.wisdom} <br> Defence: ${user.defence} <br> Magic: ${user.magic} <br> Strength: ${user.strength}</p>`)
    console.log(user.name)

    game1.attr("style", "display: initial;")
})

var catchFish = $("#cast")

catchFish.on("click", function(){

    user.cast()

})

var gather = $("#gather")

gather.on("click", function(){

    user.gatherBerries()
})

var next2 = $("#next2")

if(fishcaught > 30 && basketsOfBerry > 15){

    next2.attr("style", "display: initial;")

}














