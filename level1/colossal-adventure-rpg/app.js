

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
let enemy1 = new Fighter("Goblin", 14, 5, ["Goblin earing"]);
let enemy2 = new Fighter("Hobgoblin", 15, 7, ["Goblin fingers"]);
let enemy3 = new Fighter("Orc", 16, 8, ["Orc teeth", "Orc Necklace"]);
let enemy4 = new Fighter("Stabbin Eddy", 7, 9, ["Eddy's knife"]);
let enemy5 = new Fighter("Eddy's MOM", 10, 1, ["empty "]);

let enemies = [enemy1, enemy2, enemy3, enemy4, enemy5];
let normies = [enemy1, enemy2, enemy3]
let miniBoss = [enemy4]
let boss = [enemy5]
let defeated = []


//start & player creation
let player = readlineSync.question("what is your name?  ");
console.log(`!!!! Youre name is ${player}!!!!!! We have been looking for you. Now is the time you start your journy to stop Stabbin Eddie ` );
console.log('Stabbin Eddie has killed multipule people, you are our last hope');

// You the player
let playerInventory = ["basic sword ", "bow ", "hp_potion "];
let hero = new Fighter(`${player}`, 100, 8, playerInventory );
checkIventory = function(){
    console.log(`name: ${player}`);
    console.log(`Inventory: ${playerInventory}`)
}
// console.log(hero)
// console.log(enemies)
    

  // walking funtion.. want to put it in a while loop     
function walk(){
    playerAction = readlineSync.keyIn("press W to start walking or press p to check your inventory  ", {limit: ['w', 'p']})
    if( playerAction === 'w'){ 
        let walk = Math.floor(Math.random() * 4 + 1);  
        
            if (walk !== 1){
                herp.hp +
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
function encounters (boss) {
    console.log( "in Encounters")
    console.log(boss)
        console.log( `You've encountered ${boss.name} Fight them to the death for GLORY`)
        while ( boss.hp > 0 || hero.hp > 0){
            console.log("encounter while loop")
            boss.hp -= hero.attPwr;
            if (boss.hp <= 0){
                console.log(` Great now ${boss.name} has been defeat. I wonder how many more there are.`);
                
                console.log(boss.hp)
                break
            }
                hero.hp -= boss.attPwr;
            if(hero.hp <= 0){
                console.log(`How could you let a weakling like ${boss.name} beat you`)
                console.log(hero.hp)
                break
            }
                 
                
                
            }
        } 
    
 
// fight or run choice
 function engage () {
    console.log("ENGAGE function triggered")
    enemyEncountered = readlineSync.keyIn("You've run into and enemy press: a to attack or press: r to run away   ", {limit: ['a', 'r']})
    console.log('hellooooo')
        if( enemyEncountered === 'r' ){
            console.log('inside r')
                let flee = Math.floor(Math.random() * 2);
                    if ( flee === 0 ){
                        console.log( 'You got away safely.... you wont get very far being scared' )
                        console.log(flee);
                    }else if ( flee === 1 ){
                        console.log(flee);
                        console.log(`an enemy attacked you as you fled.  name: ${hero}  Health: ${hero.hp}  Next time fight and stop being a coward`)
                } 
        }else if(enemyEncountered === 'a'){
            let enemy = Math.floor(Math.random() * normies.length);
            console.log("before");
            console.log('hello', hero.hp, normies[enemy].hp);
            console.log('after')
                encounters(normies[enemy])
                
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
//while loop for walking





    
//     ### ***1 Story Point - Report as Story Point 83**
    
// 3. Walking 
// - Use a while loop to control this flow.
    
//     ### ***4 Story Points - Report as Story Point 87**
    
// 1. If a wild enemy appears
// - If attacking, a random amount of damage will be dealt between a min and max
// - If the player kills the enemy you can give the Player some HP and special item that is stored in the inventory . After this, the player will continue walking.
// - If the enemy kills the player the console prints a cool death message and the game ends
    
//     ### ***6 story points - Report as Story Point 93**
    
// 1. Inventory 
// - When the player kills enemies, they are awarded with items (optional)
