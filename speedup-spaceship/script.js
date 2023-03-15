const spaceShip = {updateVelocity: function(velocity){
    this.velocity += velocity;
    if(this.velocity  === velocity){
        return 1;
    }else{
        return 0;
    }
}};

const inputDate = () => {
    alert("Hello, Helcome to my sistem!");
    spaceShip.name = prompt("Write the name of your spaceship please:");
    spaceShip.velocity = parseInt("0");
    spaceShip.maxVelocity = parseFloat(prompt("Now, write the max velocity of your spaceship can reach: "));
    spaceShip.typeSpaceship = validate(prompt("Your space ship is type One ou type Two? "));
    showMenu();
}

const showMenu = () => {
    if((validate(prompt("1: SpeedUp the spaceship\n 2: Stop the spaceship"))) == 1){
        const validate = parseFloat(prompt("Please, write the value to acellerate less the max velocity: "));
        while((validate + spaceShip.velocity) > spaceShip.maxVelocity){
            validate = parseFloat(prompt("Please, write the value to acellerate less the max velocity: "));
        };
        spaceShip.updateVelocity(validate);
        alert(`Name: ${spaceShip.name}\nType of Spaceship: ${spaceShip.typeSpaceship}\nVelocity: ${spaceShip.velocity}\nMax Velocity: ${spaceShip.maxVelocity}\n`)
        showMenu();
    }else{
        alert(`Name: ${spaceShip.name}\nType of Spaceship: ${spaceShip.typeSpaceship}\nVelocity: ${spaceShip.velocity}\nMax Velocity: ${spaceShip.maxVelocity}\n`)
        alert("Thanks for using our sistem!!");
    }

}

const validate = (validateValue) => {
    switch (validateValue){
        case "1":
            return 1;
        break
        case "2":
            return 2;
        break
        case 1:
            return 1;
        break
        case 2:
            return 2;
        break
        case "One":
            return 1;
        break
        case "Two":
            return 2;
        break
        case "one":
            return 1;
        break
        case "two":
            return 2;
        break
        default:
            alert("Value invalid");
        break;
    }
}

inputDate();