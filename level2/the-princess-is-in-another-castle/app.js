var playerStatus = ["dead", "small", "big", "powered Up"]
var playerStatusIndex = 2

class Player{
    constructor(name){
        this.name = name
        this.totalCoins = 5
        this.status = playerStatus[playerStatusIndex]
        this.hasStar = false
        this.isAlive = true

    }
    setName (namePicked){
        this.name = namePicked
    }

    gotHit () {
    //if statments
         console.log("got Hit")
        //console.log(playerStatusIndex)
        //console.log(mario.status)

        if(this.hasStar === true){
            console.log("Your Star has protected you")
        
        }else if(this.status !== "small"){    
             this.status = playerStatus[playerStatusIndex - 1]
             playerStatusIndex--
        
        }else{
            this.status = playerStatus[playerStatusIndex - 1]
            playerStatusIndex--
            console.log('You have died')
            clearInterval(play)
        }
    }
    // switch
    //     playerStatusIndex--;             //statusIndex changes but status remains at big
    //     switch (this.status) {
    //         case this.status !== "small": -1
    //             break;

    //         case this.hasStar === true: this.hasStar === false
    //             break;
        
    //         default: 
    //             clearInterval(play)
    //             break;
    //     }
    // }

    //es6
    //     this.status !== 'dead' ? playerStatusIndex-- : console.log(status), clearInterval();   //statusIndex changes but status remains at big
    //     console.log(mario.status)
    // }

    gotPowerUp () {
        console.log("got Power Up")
        if( playerStatus[playerStatusIndex] === "big" ){
            //console.log("test === big")
            this.status = playerStatus[playerStatusIndex + 1]
            playerStatusIndex++
            mario.hasStar = true
            this.print()
            console.log(`${this.name} Has Star Power!!!!!!\n` )
            star();
        }
        else if (playerStatusIndex <= 2) {
           //console.log("power up !== big")
            this.status = playerStatus[playerStatusIndex + 1]
            playerStatusIndex++
            console.log(this.status)

        }
        else if(this.status === "powered Up" && this.hasStar === true){
            console.log('you already have Star power')
        }
    }

    addCoin() {
        console.log("got Coins")
        this.totalCoins++
    }

    print(){
        console.log(`Name ${this.name}\nstatus ${this.status}\nCoins: ${this.totalCoins}\nstar: ${this.hasStar}\n`);
        //console.log(mario.isAlive)

    }
}

const mario = new Player("Mario")
console.log(mario)

function star() {setTimeout(()=>{
    console.log("star power deactivated")
    mario.hasStar = false; 
    mario.status = playerStatus[playerStatusIndex - 1]
        playerStatusIndex--
}, 3000 )}

 const play = setInterval(()=>{
        let play = Math.floor(Math.random() * 3 + 1);
        //console.log(play)

            if(play === 1){
                mario.gotHit();
                mario.print()

            }if( play === 2) {
                mario.gotPowerUp();
                mario.print()

            }if(play === 3){
                mario.addCoin();
                mario.print()
            }

     }, 1000)

    