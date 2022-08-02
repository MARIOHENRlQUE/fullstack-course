let naveName = prompt("Write the nave name:");
let invertedWord = "";

for(let i = naveName.length - 1; i >= 0; i--){
    invertedWord += naveName[i];
    if(naveName[i] == "e"){
        break
    }
}
alert("Nave name: " + naveName + "\nInverted nave name: " + invertedWord);