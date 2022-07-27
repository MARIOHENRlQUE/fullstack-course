let naveName = prompt("What´s the nave name?"), warpNaveCount = 0, warpNaveAux = prompt("Do you want: \n" + "1- Meke the Warp\n" + "2- I don\'t");
if(warpNaveAux == "1"){
    while(warpNaveAux == "1"){
        warpNaveCount++;
        warpNaveAux = prompt("Do you want: \n" + "1- Meke the next Warp\n" + "2- I don\t");
    }
}else{
    alert("This option don\'t exist!")
    exit()
}
alert("Nave Name: " + naveName + "\n" + "Count of warp make: " + warpNaveCount);