

const readlineSync = require("readline-sync")
var gameRunning = true
//enemies
class Fighter{
    constructor(name, hp, attPwr, inv) {
        this.name = name;
        this.hp = hp;
        this.attPwr = attPwr;
        this.inv = inv;
        }
        printProfile() {
        console.log("name:", this.name)
        console.log("HP:", this.hp)
        console.log("Attack:", this.attPwr)
        console.log("Inventory: ", this.inv)
        }
    }
let enemy1 = new Fighter("Goblin", 40, 5, ["Goblin earing"]);
let enemy2 = new Fighter("Hobgoblin", 50, 7, ["Goblin fingers"]);
let enemy3 = new Fighter("Orc", 60, 8, ["Orc teeth", "Orc Necklace"]);
let enemy4 = new Fighter("Stabbin Eddy", 75, 9, ["Eddy's knife"]);
let enemy5 = new Fighter("Eddy's MOM", 100, 15, ["empty "]);
let enemies = [enemy1, enemy2, enemy3, enemy4, enemy5];
let normies = [enemy1, enemy2, enemy3]
let miniBoss = [enemy4]
let boss = [enemy5]
//start & player creation
let player = readlineSync.question("what is your name?  ");
console.log(`!!!! Youre name is ${player}!!!!!! We have been looking for you. Now is the time you start your journy to stop THE BOSS ` );
console.log('You find yourself on a path to beat THE BOSS shall we head down the path');

// You the player
let playerInventory = ["basic sword ", "bow ", "hp_potion "];
let hero = new Fighter(`${player}`, 100, 8, playerInventory );
checkIventory = function(){
    console.log(`name: ${player}`);
    console.log(`Inventory: ${playerInventory}`)
}
// console.log(hero)
// console.log(enemies)
    
//     while (hero.hp > 0){
       
function walk(){
    playerAction = readlineSync.keyIn("press W to start walking or press p to check your inventory  ", {limit: ['w', 'p']})
    if( playerAction === 'w'){ 
        let walk = Math.floor(Math.random() * 4 + 1);  
        
            if (walk !== 1){
            console.log("walking...") 
                
            console.log( walk )
            }else if ( walk === 1 ){
                console.log("You run into an enemy")
                console.log(walk)
                engage()
                
            }
        
    }else if(playerAction === 'p'){
        console.log(`name: ${player} and your current health is ${hero.hp}`)
        console.log("inventory: " + playerInventory);
    }
}

// The fighting function
function encounters () {
    let enemy = Math.floor(Math.random() * normies.length);
        console.log( `You've encountered ${normies[enemy]} Fight them to the death for GLORY`)
        while ( hero.hp > 0 || normies[enemy].hp > 0){
            normies[enemy].hp - hero.attPwr;
            hero.hp - normies[enemy].attPwr;
                if(hero.hp <= 0){
                    console.log(`How could you let a weakling like ${normies[enemy]} beat you`)
                }if (enemy.hp <= 0){
                    console.log(` Great now ${enemy} has been defeat. I wonder how many more there are.`)
                }
            console.log(normies[enemy])
            }
        } 
    
 
// fight or run choice
 function engage() {
    console.log("ENGAGE function triggered")
    enemyEncountered = readlineSync.keyIn(" You've run into and enemy press: a to attack or press: r to run away   ", {limit: ['a', 'r']})
        if( enemyEncountered === 'r' ){
            function running() {
                let run = Math.floor(Math.random() * 2)}
                    if( run === 0 ){
                        console.log( 'You got away safely.... you wont get very far being scared' )
                        console.log(run);
                    if ( run === 1 ){
                        console.log(run);
                        console.log(`an enemy attacked you as you fled.  name: ${hero}  Health: ${hero.hp}  Next time fight and stop being a coward`)
                    }   
        }else if ( enemyEncountered === 'a'){
            while ( hero.hp > 0 || enemy.hp > 0){
                encounters()
            }
            
        }
   }
}
 
//    
//     }if( normies.length = 0 && miniBoss.length === 1 ){
//         console.log('Mini boss works')
//     }if( miniBoss.length = 0 && boss.length === 1 ){
//         console.log(' boss works')
// }
 
while(hero.hp > 0){
    walk()
}

//Encounters causing a infinite loop
//Attacking while in engage