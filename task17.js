let naveName = prompt("What\'s the nave name?"), spacshipVelocity = parseInt(0), 
naveMenu = parseInt(prompt("1- Acelera 5 km\\s da nave\n" + "2- Desavelera em 5km\\s da nave\n" +
"3 - Imprimir dados de bordo\n" + "4 - Sair do Programa"));
const defaultVelocity = 5;
while(naveMenu != 4){
    switch(naveMenu){
        case 1:
            acceleratesSpaceShip(spacshipVelocity, defaultVelocity);
        break;
        case 2:
            desacelerateSpaceShip(spacshipVelocity, defaultVelocity);
        break;
        case 3:
            printDateNave(naveName, spacshipVelocity);
        break;
        case 4:
            exitTask();
        break;
    }
}

function acceleratesSpaceShip(naveVelocity, defaultVelocity){
    let resulthVelocity = (defaultVelocity + naveVelocity);
    return resulthVelocity;
}
function desacelerateSpaceShip(naveVelocity, defaultVelocity){
    let resulthVelocity = (naveVelocity - defaultVelocity);
    return resulthVelocity;
}
function printDateNave(name, velocity){
    alert("Spaceship name: " + name + "\nVelocity: " + velocity);
}
function exitTask(){
    exit()
}