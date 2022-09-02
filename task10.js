let pilotName = prompt("What\'s your name pilot? ")

let naveVelocity = 0

let naveVelocityRequered = prompt("How much do you want to speed up? ")

if(confirm("Do you really change the velocity from 0km/s for " + naveVelocityRequered + "km/s ? ") == true){
    naveVelocity = naveVelocityRequered
}
if(naveVelocity < 0){
    alert("Nave está parada. Considere partir e aumentar a velocidade")
}else if(naveVelocity < 40){
    alert("Você está devagar, podemos aumentar mais")
}else if(naveVelocity >= 40 && naveVelocity < 80){
    alert("Parece uma boa velocidade para manter")
}else if(naveVelocity >= 80 && naveVelocity < 100){
    alert("Velocidade alta. Considere diminuir.")
}else{
    alert("Velocidade perigosa. Controle automático forçado.")
}

alert("Pilot\'s name is " + pilotName + "\ncurrentVelocity is " + naveVelocity)
