let naveName, aux2 = true, aux = true, warpSpaceCont = 0;

naveName = prompt("Write your nave name:\t");

while(aux == true){
    if(aux == true && aux2 == false){
        aux = confirm("Do you want to make the next warp?");
    }else if(aux2 == true){
        aux = confirm("Do you want to make the warp?");
        aux2 = false;
    }
    if(aux == true){
        warpSpaceCont++;
        alert(warpSpaceCont);
    }
}
alert("Nave name is " + naveName + "\n" +
    "Number of Warps: " + warpSpaceCont
)