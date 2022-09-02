let naveName = prompt("What\'s the nave name?"), spacshipVelocity = parseInt(0), 
    naveMenu = parseInt(prompt( "1- Acelera 5 km\\s da nave\n" +  "2- Desavelera em 5km\\s da nave\n" +
                                "3 - Imprimir dados de bordo\n" + "4 - Sair do Programa"));
const defaultVelocity = 5;

while(naveMenu != 4){
    menuSystem(naveMenu);
    naveMenu = parseInt(prompt( "1- Speedup 5 km\\s of spaceship\n" +  "2- Slown down 5km\\s of spaceship\n" +
                                "3 - Print on-board data\n" + "4 - Get out of the Program"));
}

function acceleratesSpaceShip(naveVelocity, defaultVelocity){
    let resulthVelocity = parseInt((defaultVelocity + naveVelocity));
    return resulthVelocity;
}
function desacelerateSpaceShip(naveVelocity, defaultVelocity){
    let resulthVelocity = parseInt((naveVelocity - defaultVelocity));
    if(naveVelocity == 0){
        resulthVelocity = 0;
    }
    return resulthVelocity;
}
function printDateNave(name, velocity){
    alert("Spaceship name: " + name + "\nVelocity: " + velocity);
}
function menuSystem(nmenu){
    switch(nmenu){
        case 1:
            spacshipVelocity = acceleratesSpaceShip(spacshipVelocity, defaultVelocity);
        break;
        case 2:
            spacshipVelocity = desacelerateSpaceShip(spacshipVelocity, defaultVelocity);
        break;
        case 3:
            printDateNave(naveName, spacshipVelocity);
        break;
        case 4:
            exit();
        break;
        default:
            alert("Error! Incorrent command!!S");
        break;
    }
}