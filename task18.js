let spaceShipSpeed = parseInt(150);
function speedDownSpaceShip(a, b){
    alert("Speed now is " + spaceShipSpeed);
    while(a > 0){
        a -= 20;
        if(a < 0){
            a = 0;
        }
        b(a);
    }
    return a;
}
spaceShipSpeed = speedDownSpaceShip(spaceShipSpeed, (printOfSpeed) => {
    alert("The speed was dropping for " + (printOfSpeed));
    if(printOfSpeed <= 0){
        alert("The spaceShip was stopped, now come out!");
    }
});
 