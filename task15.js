let naveName = prompt("Write the name of spaceship: "), characterChoosen = prompt("Write the hiden character choosen: "),
replacedCharacter = prompt("Whitch character do you want make for replace: "), naveNameHiden = "";

for(let i = 0; i < naveName.length; i++){
    if(naveName[i] == characterChoosen){
        naveNameHiden += replacedCharacter;
    }else{
        naveNameHiden += naveName[i];
    }
}
alert("Nave name hiden: " + naveNameHiden);
