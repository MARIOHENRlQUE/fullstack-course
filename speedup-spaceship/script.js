class SpaceShip{
    constructor(name = "", velocity = 0, maxVelocity = 0, typeSpaceship = ""){
        this.name = name;
        this.velocity = velocity;
        this.maxVelocity = maxVelocity;
        this.typeSpaceship = typeSpaceship;
    }
    inputDate(){
        this.name = prompt("Write the name of your spaceship please:");
        this.maxVelocity = parseFloat(prompt("Now, write the max velocity of your spaceship can reach: "));
        this.typeSpaceship = prompt("Your space ship is type One ou type Two? ");
    }
    speedUp(value){
        if(value + this.velocity <= this.maxVelocity){
            this.velocity += value;
        }else{
            alert("Error");
        }
    }
    showSpaceShips(){
        alert(`Spaceship: ${this.name}\nContent Velocity: ${this.velocity}\nMax Velocity: ${this.maxVelocity}\nType of Spaceship: ${this.typeSpaceship}`);
    }
}
const arrayFeed = (aux) => {
    let spaceShips = new Array(aux).fill(null).map((x, y) => {
        const ship = new SpaceShip();
        ship.inputDate();
        return ship;
    });
    return spaceShips;
    
}
const showMenu = () => {
    alert("Hello, Helcome to my sistem!");
    let aux = parseInt(prompt("How much spaceships you want register?"));
    const spaceShips = arrayFeed(aux);
    let opt = 1, opt2, value;
    do{
        opt = prompt("1: SpeedUp the spaceship\n 2: Stop the spaceship");
        if(opt == 1){
            opt2 = prompt(`Who spaceship you want interect? Remember, you have ${aux} spaceships registred`);
            value = parseFloat(prompt("Please, write the value to acellerate less the max velocity: "));
                spaceShips[opt2-1].speedUp(value);
        }else{
            for(i=0;i<aux;i++){
                spaceShips[i].showSpaceShips();
            }
        }
    }while(opt == 1);
}

showMenu();