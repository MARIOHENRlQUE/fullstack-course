let requeredDistance = prompt("Write one distance in light years:")

let requeredOption = prompt("Choose between this three transformation options:\n" +
    "1-Parsec(pc)" + "\n" +
    "2-Astromic Unit(au)" + "\n" +
    "3-Quilometros(km)"
)
let transformationDistance = 0;
switch(requeredOption){
    case "1":
        transformationDistance = (requeredDistance * 0.3066010);
        alert("Distance requered in light years: " + requeredDistance + "\n" +
            "Tranformation requered for Pc(Parsec): " + transformationDistance
        )
    break;
    case "2":
        transformationDistance = (requeredDistance * 63241.1);
        alert("Distance requered in light years: " + requeredDistance + "\n" +
            "Tranformation requered for au(Astromic Unit): " + transformationDistance
        )
    break;
    case "3":
        transformationDistance = (requeredDistance * (9.5 * Math.pow(10, 12)));
        alert("Distance requered in light years: " + requeredDistance + "\n" +
            "Tranformation requered for km(Quilometros): " + transformationDistance
        );
    break;
    default:
        alert("Option choosed don´t exist!");
    break;
}
