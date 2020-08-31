// Miscelanious Variables
var fishBank = $("#fishBank")
var fishCaught = 0;

var berryBank = $("#basketsGathered")
var basketsOfBerry = 0;

var bearsBank = $("#bearsTricked")
var bearsAmount = 0;


// Constructor for heroes
class RpgChar{
    constructor(name, description, type, gold, weapon, currentHp, maxHp, alive, acuity, speed, wisdom, defence, magic, strength){
        this.name = name;
        this.description = description;
        this.type = type
        this.gold = gold
        this. weapon = weapon;
        this.currentHp = currentHp
        this.maxHp = maxHp;
        this.alive = alive
        this.acuity = acuity;
        this.speed = speed
        this.wisdom = wisdom;
        this.defence = defence;
        this.magic = magic;
        this.strength = strength;
    }
    
    // METHODS FOR RPGCHAR

    // Social methods

    //Side skill methods

    // gamble(target){

    //     console.log(`${this.name} asks to play a game of dice with ${target.name}`)

    //     if ((Math.random()*10) + this.acuity > (Math.random()*10) + target.acuity && target.gold >=10 && this.gold >=10){

    //         target.gold = target.gold - 10
            
    //         this.gold = this.gold + 10

    //         console.log(`${this.name} won 10 gold and now has ${this.gold} gold.`)
    //         console.log("")
    //         console.log("----------------------------")
    //         console.log ("")

    //     } else if ((Math.random()*10) + this.acuity < (Math.random()*10) + target.acuity && target.gold >=10 && this.gold >=10){

    //         this.gold = this.gold - 10
            
    //         target.gold = target.gold + 10

    //         console.log(`${this.name} has lost 10 gold and now has ${this.gold} gold.`)
    //         console.log("")
    //         console.log("----------------------------")
    //         console.log ("")

    //     } else if (this.gold < 10){

    //         console.log(`${this.name} doesn't have enough money to gamble with.`)
    //         console.log("")
    //         console.log("----------------------------")
    //         console.log ("")

    //     } else if (target.gold < 10) {

    //         console.log(`${target.name} doesn't have enough money to gamble with.`)
    //         console.log("")
    //         console.log("----------------------------")
    //         console.log ("")
    //     }
    // }

    // pickpocket(target){

    //     console.log(`${this.name} attempts to pickpocket ${target.name}`)

    //     if(this.acuity > target.acuity && target.gold >= 5){

    //         target.gold = target.gold - 5
    //         this.gold = this.gold + 5

    //         console.log(`${this.name} successfully pickpocketed 5 gold from ${target.name}!`)
    //         console.log(`${this.name} now has ${this.gold} gold.`)
    //         console.log("")
    //         console.log("----------------------------")
    //         console.log ("")

    //     }else if (target.gold < 5){

    //         console.log("The target doesn't have any gold to steal!")
    //         console.log("")
    //         console.log("----------------------------")
    //         console.log ("")

    //     } else {
            
    //         console.log(`${this.name} fails to pickpocket ${target.name}`)
    //         console.log("")
    //         console.log("----------------------------")
    //         console.log ("")
    //     }   
    // }

        // Healing Methods

    // eat(food){
    //     // Only food objects for now: apple(1) soon to come: bread(5), meat(10)
    //     console.log(`${this.name} has ${this.currentHp} HP`)

    //     if(food === "apple"){

    //         if(this.currentHp < this.maxHp){

    //             this.currentHp += 1

    //             console.log(`${this.name} eats an apple.`)
    //             console.log(`It heals 1 HP`)

    //         }else if(this.currentHp === this.maxHp ){

    //             console.log(`${this.name} isn't hungry`)

    //         }else{

    //             console.log(`${this.name} trys to eat ${food} but throws it up.`)
    //         }
    //     }

    //         //Insurance so that health doesnt exceed max HP level
    //         if(this.currentHp > this.maxHp){
            
    //             this.currentHp = this.maxHp

    //         }

    //     console.log(`${this.name} now has ${this.currentHp} HP`)
    //     console.log("")
    //     console.log("----------------------------")
    //     console.log ("")
    // }

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

                statBox.html(`<h3><strong>${user.name}</strong></h3><p>Gold:${user.gold}<h3>Skills</h3> HP: ${user.currentHp}/${user.maxHp} <br> Acuity: ${user.acuity}<br> Speed: ${user.speed} <br> Wisdom: ${user.wisdom} <br> Defence: ${user.defence} <br> Magic: ${user.magic} <br> Strength: ${user.strength}</p>`)
                var gainStrengthDiv = ($("<div>"))
                gainStrengthDiv.text("You Got a big haul and gained a strengh point!")
                gainStrengthDiv.appendTo(fishAction)

            }else{

                var catchAmount = $("<div>")
                catchAmount.text(`You caught ${fishInNet} fish!`)
                catchAmount.appendTo(fishAction)
            }

        var spaceDiv = $("<div>")
        spaceDiv.text("----------------------------")
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

            statBox.html(`<h3><strong>${user.name}</strong></h3><p>Gold:${user.gold}<h3>Skills</h3> HP: ${user.currentHp}/${user.maxHp} <br> Acuity: ${user.acuity}<br> Speed: ${user.speed} <br> Wisdom: ${user.wisdom} <br> Defence: ${user.defence} <br> Magic: ${user.magic} <br> Strength: ${user.strength}</p>`)

            var gainAcuityDiv = $("<div>")
            gainAcuityDiv.text("You avoided all thorny branches and gained an acuity point!")
            gainAcuityDiv.appendTo(gatherAction)
        }

        var berrySucDiv= $("<div>")
        berrySucDiv.text("You collect 1 basket of Wildberries!")
        berrySucDiv.appendTo(gatherAction)

        berryBank.text(basketsOfBerry)

        var spaceDiv = $("<div>")
        spaceDiv.text("----------------------------")
        spaceDiv.appendTo(gatherAction)

        gatherAction.prependTo(actionBox1)
    }



    investigate(){

        var investigateAction = $("<div>")

        var investDiv = $("<div>")
        investDiv.text("You take a walk around your tribes encampment searching for any threats.")
        investDiv.appendTo(investigateAction)

        var check = Math.random()

        if(check < .25){

            var safe = $("<div>")
            safe.text("Everything is safe and secure.")
            safe.appendTo(investigateAction)

            var spaceDiv = $("<div>")
            spaceDiv.text("----------------------------")
            spaceDiv.appendTo(investigateAction)

        } else if(check >.25 && check < .8){

            var possibleDanger= $("<div>")
            possibleDanger.text("You see a bear in the distance, but it's several miles away from camp.")
            possibleDanger.appendTo(investigateAction)

            console.log("You see a bear, but it's a good ways in the distance.")

            var spaceDiv = $("<div>")
            spaceDiv.text("----------------------------")
            spaceDiv.appendTo(investigateAction)

        }else if(check > .80){

            console.log("A bear tears out of the brush and chalenges you!")
            var bearChallenge = $("<div>")
            bearChallenge.text("A bear tears out of the brush and chalenges you!")
            bearChallenge.appendTo(investigateAction)

            var trickBear = confirm("A bear tears out of the brush and chalenges you! can you lead it away from the camp? (Hit 'Ok' to try and trick the bear, 'cancel' to run! (WARNING: Trciking the bear is dangerous))")

            var yesTrickBear = $("<div>")

            if(trickBear === true){

                var trickRoll = Math.floor(Math.random()* this.wisdom)

                if(trickRoll >= 4){
                    
                    var yesFightBear = $("<div>")
                    yesTrickBear.text("You lead the bear a good ways from camp and escape unharmed!")
                    yesTrickBear.appendTo(investigateAction)

                    var gainWisdomDiv = $("<div>")
                    gainWisdomDiv.text("You gained a wisdom point!")
                    gainWisdomDiv.appendTo(investigateAction)
                    
                    user.wisdom = user.wisdom +1
    
                    statBox.html(`<h3><strong>${user.name}</strong></h3><p>Gold:${user.gold}<h3>Skills</h3> HP: ${user.currentHp}/${user.maxHp} <br> Acuity: ${user.acuity}<br> Speed: ${user.speed} <br> Wisdom: ${user.wisdom} <br> Defence: ${user.defence} <br> Magic: ${user.magic} <br> Strength: ${user.strength}</p>`)

                    bearsAmount = bearsAmount + 1
                    bearsBank.text(bearsAmount)

                }else if (trickRoll < 4 && trickRoll > 1){

                    var yesFightBear = $("<div>")
                    yesTrickBear.text("You lead the bear a good ways from camp but get injured during the process!")
                    yesTrickBear.appendTo(investigateAction)

                    var lostHealth = $("<div>")
                    lostHealth.text("You lost 5 health")
                    lostHealth.appendTo(investigateAction)

                    bearsAmount = bearsAmount + 1
                    bearsBank.text(bearsAmount) 
                    
                    user.currentHp = user.currentHp - 5

                    if(this.currentHp <= 0){

                        var deathHp = alert("You lost all of your HP and died.")

                        main.html("<h1> GAME OVER </h1>")
                        main.attr("style", "text-align: center;")
                        next2.attr("style", "display: none")

                    }

                    statBox.html(`<h3><strong>${user.name}</strong></h3><p>Gold:${user.gold}<h3>Skills</h3> HP: ${user.currentHp}/${user.maxHp} <br> Acuity: ${user.acuity}<br> Speed: ${user.speed} <br> Wisdom: ${user.wisdom} <br> Defence: ${user.defence} <br> Magic: ${user.magic} <br> Strength: ${user.strength}</p>`)

                }else{

                    var death =  alert("While leading the bear away you trip over a log and are mauled to death.")
                    main.html("<h1> GAME OVER </h1>")
                    main.attr("style", "text-align: center;")
                    next2.attr("style", "display: none")
                }

                var spaceDiv = $("<div>")
                spaceDiv.text("----------------------------")
                spaceDiv.appendTo(investigateAction)


            }else if(trickBear === false){

                var runRoll = Math.floor(Math.random() * user.speed)
                console.log(runRoll)

                if(runRoll >= 4){

                var noFightBear = $("<div>")
                noFightBear.text("You run as hard as you can and escape the bear. By some miracle he doesn't follow you.")
                noFightBear.appendTo(investigateAction)

                var gainSpeedDiv = $("<div>")
                gainSpeedDiv.text("You gained a speed point!")
                gainSpeedDiv.appendTo(investigateAction)
                
                user.speed = user.speed +1

                statBox.html(`<h3><strong>${user.name}</strong></h3><p>Gold:${user.gold}<h3>Skills</h3> HP: ${user.maxHp} <br> Acuity: ${user.acuity}<br> Speed: ${user.speed} <br> Wisdom: ${user.wisdom} <br> Defence: ${user.defence} <br> Magic: ${user.magic} <br> Strength: ${user.strength}</p>`)

                } else if (runRoll > 1 && runRoll < 4){

                    var noFightBear = $("<div>")
                    noFightBear.text("You throw some of your food at the bear and run!")
                    noFightBear.appendTo(investigateAction)

                    basketsOfBerry = basketsOfBerry - 1

                    fishCaught = fishCaught - 3

                    fishBank.text(fishCaught)
                    berryBank.text(basketsOfBerry)

                }else{

                    var cowardice = $("<div>")
                    cowardice.text("The bear won't stop chasing you so you have to drop all of the food you have!")
                    cowardice.appendTo(investigateAction)

                    basketsOfBerry = 0;

                    fishCaught = 0;

                    fishBank.text(fishCaught)
                    berryBank.text(basketsOfBerry)

                }

                var spaceDiv = $("<div>")
                spaceDiv.text("----------------------------")
                spaceDiv.appendTo(investigateAction)
            }
        }

        investigateAction.prependTo(actionBox1)
    }



    eatMeal(){

        var mealAction = $("<div>")

        if (fishCaught >= 10 && basketsOfBerry >= 5){

            this.currentHp = this.maxHp
            statBox.html(`<h3><strong>${user.name}</strong></h3><p>Gold:${user.gold}<h3>Skills</h3> HP: ${user.currentHp}/${user.maxHp} <br> Acuity: ${user.acuity}<br> Speed: ${user.speed} <br> Wisdom: ${user.wisdom} <br> Defence: ${user.defence} <br> Magic: ${user.magic} <br> Strength: ${user.strength}</p>`)


            var meal = $("<div>")
            meal.text("You sit down around the fire for a meal with your tribesmen. Your HP is restored.")
            meal.appendTo(mealAction)
    
            var depletion = $("<div>")
            depletion.text("You deplete 10 fish and 5 baskets of berries from your stores.")
            depletion.appendTo(mealAction)

            fishCaught = fishCaught - 10

            fishBank.text(fishCaught)

            basketsOfBerry = basketsOfBerry - 5

            berryBank.text(basketsOfBerry)

            var mealRoll = Math.random()

                if(mealRoll > .6){

                    var gainMaxHp = $("<div>")
                    gainMaxHp.text("You gained an HP point!")
                    gainMaxHp.appendTo(mealAction)

                    this.maxHp = this.maxHp +1
                    this.currentHp = this.currentHp +1

                    statBox.html(`<h3><strong>${user.name}</strong></h3><p>Gold:${user.gold}<h3>Skills</h3> HP: ${user.currentHp}/${user.maxHp} <br> Acuity: ${user.acuity}<br> Speed: ${user.speed} <br> Wisdom: ${user.wisdom} <br> Defence: ${user.defence} <br> Magic: ${user.magic} <br> Strength: ${user.strength}</p>`)
                }

        } else {

            var notEnough = $("<div>")
            notEnough.text("You don't have enough in your food stores.")
            notEnough.appendTo(mealAction)

        }

        var spaceDiv = $("<div>")
        spaceDiv.text("----------------------------")
        spaceDiv.appendTo(mealAction)

        mealAction.prependTo(actionBox1)
    }



    experiment(){

        var experimentAction = $("<div>")

        var tryExpDiv = $("<div>")
        tryExpDiv.text("You try to experiment with Magic")
        tryExpDiv.appendTo(experimentAction)

        var experimentRoll = Math.random() * user.magic

        if(experimentRoll >= 4){

            var expSuc = $("<div>")
            expSuc.text("You gain more knowledge of the mysterious Arcane particles!")
            expSuc.appendTo(experimentAction)

            user.magic = user.magic + 1
            statBox.html(`<h3><strong>${user.name}</strong></h3><p>Gold:${user.gold}<h3>Skills</h3> HP: ${user.currentHp}/${user.maxHp} <br> Acuity: ${user.acuity}<br> Speed: ${user.speed} <br> Wisdom: ${user.wisdom} <br> Defence: ${user.defence} <br> Magic: ${user.magic} <br> Strength: ${user.strength}</p>`)


            var gainMagicDiv = $("<div>")
            gainMagicDiv.text("You gained a magic point!")
            gainMagicDiv.appendTo(experimentAction)


        }else if (experimentRoll > 2 && experimentRoll < 4){

            var expFail = $("<div>")
            expFail.text("You failed to gain more knowledge of the Arcane.")
            expFail.appendTo(experimentAction)

        }else{

            var expInjury = $("<div>")
            expInjury.text("You hurt yourself while experimenting with magic.")
            expInjury.appendTo(experimentAction)

            user.currentHp = user.currentHp - 5;

                if (user.currentHp <= 0 ){

                    var deathHp = alert("You lost all of your HP and died.")

                    main.html("<h1> GAME OVER </h1>")
                    main.attr("style", "text-align: center;")
                    next2.attr("style", "display: none")

                }

            statBox.html(`<h3><strong>${user.name}</strong></h3><p>Gold:${user.gold}<h3>Skills</h3> HP: ${user.currentHp}/${user.maxHp} <br> Acuity: ${user.acuity}<br> Speed: ${user.speed} <br> Wisdom: ${user.wisdom} <br> Defence: ${user.defence} <br> Magic: ${user.magic} <br> Strength: ${user.strength}</p>`)


            var expHealth = $("<div>")
            expHealth.text("You lost 5 HP")
            expHealth.appendTo(experimentAction)
        }

        var spaceDiv = $("<div>")
        spaceDiv.text("----------------------------")
        spaceDiv.appendTo(experimentAction)

        experimentAction.prependTo(actionBox1)
    }
};


//CHARACTER CREATION ZONE

// HUMANS

//The user playing will control this character 
var user = new RpgChar("user", "Close friend of Corinthe", "mage", 0, "None", 20, 20, true, 5, 5, 5, 5, 5, 5)

var cor = new RpgChar("Corinthe", "Tribe leader", "mage", 100, "None", 20, 20, true,  10, 8, 10, 10, 10, 7)

var kel = new RpgChar("Kellian", "son of Corinthe", "mage", 100, "None", 15, 15, true, 6, 8, 5, 6, 9, 6)

var ell = new RpgChar("Ellora", "Wife of Corinthe", "mage", 100, "none", 19, 20, true, 10, 8, 10, 5, 8, 5)


//test zone

console.log("")
console.log("----------------------------")
console.log ("")
console.log("What is(are) your action(s)?")
console.log("")
console.log("----------------------------")
console.log ("")

// Run tests here


// JAVASCRIPT/HTML INTERACTION


//INTRO

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

// CHAPTER 1

var game1 = $("#game1")

var statBox = $("#statsBox")

var actionBox1 = $("#actionBox1")

var next2 = $("#next2")

next1.on("click", function(){

    chap1.attr("style", "display: none;")

    next1.attr("style", "display: none;")

    main.attr("style", "height: 400px")

    statBox.html(`<h3><strong>${user.name}</strong></h3><p>Gold:${user.gold}<h3>Skills</h3> HP: ${user.maxHp} <br> Acuity: ${user.acuity}<br> Speed: ${user.speed} <br> Wisdom: ${user.wisdom} <br> Defence: ${user.defence} <br> Magic: ${user.magic} <br> Strength: ${user.strength}</p>`)
    console.log(user.name)

    game1.attr("style", "display: initial;")

    next2.attr("style", "display: initial;")

})

var catchFish = $("#cast")

catchFish.on("click", function(){

    user.cast()

})

var gather = $("#gather")

gather.on("click", function(){

    user.gatherBerries()
})

var investigate = $("#investigate")

investigate.on("click", function(){

    user.investigate()
})

var meal = $("#meal")

meal.on("click", function(){

    user.eatMeal()

})

var exper = $("#exper")

exper.on("click", function(){

    user.experiment() 

})


// Depart to next chapter/
var next3 = $("#next3")

var chap2 = $("#chap2")



next2.on("click", function(){

    if(fishCaught > 30 && basketsOfBerry > 15){

    //    main.html("<h1>CHAPTER 2 COMING SOON!</h1>")
    //    main.attr("style", "text-align: center;")

        // REMOVE from screen
       next2.attr("style", "display: none;")

       game1.attr("style", "display: none;")

       actionBox1.attr("style", "display: none;")


        // ADD to screen
       next3.attr("style", "display: initial;")

       chap2.attr("style", "display: initial;")

       main.attr("style", "height: auto;")

       

    } else {
        alert("Your people are not prepared for the journey! You need a storehouse of at least 30 fish and 15 baskets of wildberries to depart.")
    }
})

// CHAPTER 2 

next3.on("click", function(){

    main.html("<h1> COMING SOON! </h1>")
    main.attr("style", "text-align: center;")

    next3.attr("style", "display: none;")
})
















