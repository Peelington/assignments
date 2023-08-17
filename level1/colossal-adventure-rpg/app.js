

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
let enemy2 = new Fighter("Hobgoblin", 55, 7, ["Goblin fingers"]);
let enemy3 = new Fighter("Orc", 65, 8, ["Orc teeth", "Orc Necklace"]);
let enemy4 = new Fighter("Stabbin Eddy", 75, 9, ["Eddy's knife"]);
let enemy5 = new Fighter("Eddy's MOM", 100, 15, ["empty "]);
let enemy6 = new Fighter("Eddies Brother", 60, 8, ["Eddie's Diary (He's sensitive)"] )

let enemies = [enemy1, enemy2, enemy3, enemy4, enemy5];
let normies = [enemy1, enemy2, enemy3, enemy6]
let miniBoss = [enemy4]
let final = [enemy5]
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
                hero.hp += 5;
                console.log("Player hp:", hero.hp)
                console.log("walking...") 
                
                
            console.log( walk )
            }else if ( walk === 1 ){
                console.log("You run into an enemy")
                console.log("walking was equal to", walk)
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
    console.log( `You've encountered ${boss.name} Fight them to the death for GLORY`)
    console.log(boss)
        while ( boss.hp > 0 || hero.hp > 0){
            boss.hp -= hero.attPwr;
            if (boss.hp <= 0){
                console.log(` Great now ${boss.name} has been defeated. I wonder how many more there are.`);
                hero.attPwr += 2;
                for ( i = 0; i < boss.inv.length; i++){
                playerInventory.push(boss.inv[i])};
                for (i = 0; i < normies.length; i++){
                    if (normies[i] === boss){
                        defeated.push(boss);
                        normies.splice(i, 1)
                    }
                }
                console.log(hero)
                console.log("enemy's health once dead", boss.hp)
                break
            }
                hero.hp -= boss.attPwr;
            if(hero.hp <= 0){
                console.log(`How could you let a weakling like ${boss.name} beat you`)
                console.log("youre final health: ", hero.hp)
                break
            }      
            }
        } 
    
 
// fight or run choice
 function engage () {
    console.log("ENGAGE function triggered")
    enemyEncountered = readlineSync.keyIn("You've run into and enemy press: a to attack or press: r to run away   ", {limit: ['a', 'r']})
        if( enemyEncountered === 'r' ){
                let flee = Math.floor(Math.random() * 2);
                    if ( flee === 0 ){
                        console.log( 'You got away safely.... you wont get very far being scared' )
                        console.log(flee);
                    }else if ( flee === 1 ){
                        console.log(flee);
                        console.log("an enemy attacked you as you fled." ) 
                        ambush = Math.floor(Math.random() * 8 +1);
                        hero.hp -= ambush;
                        console.log(`name: ${hero.name}  Health: ${hero.hp}  Next time fight and stop being a coward`)
                } 
        }else if(enemyEncountered === 'a'){
            if ( normies.length >= 0 ){
                let enemy = Math.floor(Math.random() * normies.length);
                    encounters(normies[enemy])  
            }             
            }if( normies.length == 0 && miniBoss.length == 1 ){
                encounters(miniBoss[0]);
            }if( defeated.length > 3 ){
                encounters(final[0]);
                console.log("You have defeated Stabbin Eddie and his terrible gang, now choose to rule with an iron fist or be caring")
            }
    }
        

 
while(hero.hp > 0){
    walk()
}







    

    

    

