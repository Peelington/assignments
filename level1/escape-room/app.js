var readlineSync = require('readline-sync');

//establish players name
var playerName = readlineSync.question('What is your name?  ');
var playerName = {
    player: playerName,
    isAlive: true,
    hasKey: false,
   
    }

var gameRunning = true

var choices = ['Box', 'Table', "Hole", 'Door']

while(gameRunning){

    var search = readlineSync.keyInSelect(choices, 'You need to escape, you look around and see a few boxes, a table, a door, and a hole in the wall. what you you wanna check first ');

    if(search === 0){

        var box = readlineSync.keyInYNStrict('do you want to search the boxes? ');
        console.log(box)
        if (box) {
            if (playerName.hasKey === false){
            console.log('You find a key');
            playerName.hasKey = true
            }else if ( playerName.hasKey === true) {
            console.log("you've already searched this box")
        } else if (!box) {
            console.log('time is precious, you need to hurry')
        }
    }

    } if (search === 1){
        var table = readlineSync.keyInYNStrict('do you want to look through the clutter on the table?   ', {
        });
        if (table) {
            console.log('You find some newpaper clippings about an escape-room serial killer');
            
        } else if (!table) {
            console.log('You feel a chill up your spine')
        }

    } if (search === 2) {
        var hole = readlineSync.keyInYNStrict('Do you want to put your hand in to search the hole?   ', {
        });
        if (hole) {
            console.log('You have died cause you make a poor choices.....');
            gameRunning = false
        } else if (!hole) {
            console.log('Smart choice!! we dont know what is in there')
        }
        

    } if (search === 3){
        var door = readlineSync.keyInYNStrict('Do you want to try to open the door?   ', {
        });
         if (door){
             console.log(' The door is locked  ', ) 
             tryKey()
        } else if (!door){
                console.log('We need to escape');
        }
    }
    
}




function tryKey(){
    var keyChoice = readlineSync.keyInYN('Do you want to try the key to the door open the door')
    if (keyChoice){
        if(playerName.hasKey === true){
            console.log('You have escaped')
            gameOver()
        } else if (playerName.hasKey === false){
            console.log('the door is locked')
        }
    }
}

function gameOver (){
    gameRunning = false
}





// var tryKey = readlineSync.question('would you like to try the key you found?  ', {
//     trueValue: [ 'y', 'Y', 'yes', 'Yes'],
//     falseValue: [ 'n', 'N', 'no', 'No']
//     });
//     if (tryKey === true ) {
//     console.log('YOU CAN NOW ESCAPE!!!!!!!!!!');
//     } else if (tryKey === false) {
//     console.log("Yeah it wouldn't be that easy...")
//     }


//     function gameOver(){
//         if (playerName.isAlive === true){
//             console.log('congrats you escaped this time')
//         } else console.log('you died you idiot')
//     }


// //choosing the hole in the wall
// var hole = readlineSync.question('Do you want to put your hand in to search the hole?   ', {
//     trueValue: [ 'y', 'Y', 'yes', 'Yes'],
//     falseValue: [ 'n', 'N', 'no', 'No']
// });
// if (hole === true ) {
//     console.log('${playerName} has died');
//     playerName.isAlive = false
// } else if (hole === false) {
//     console.log('Smart choice!! we dont know what is in there')
// }

// console.log(playerName)


// // // searching the table
// var table = readlineSync.question('do you want to look through the clutter on the table?   ', {
//     trueValue: [ 'y', 'Y', 'yes', 'Yes'],
//     falseValue: [ 'n', 'N', 'no', 'No']
// });
// if (table === true ) {
//     console.log('You find some newpaper clippings about an escape-room serial killer');
//     playerName.isAlive = false
// } else if (table === false) {
//     console.log('')
// }
