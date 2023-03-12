let departedDateEntry = prompt("Write the departed date in format (DD/MM/YYYY)");

alert(departedDateEntry);

let departedDate = moment(departedDateEntry, "DD/MM/YYYY");

let today = moment();

let dateDiff = (today - departedDate);

alert(dateDiff);

let chooseOption = parseInt(prompt("Choose your number: \n" + "1 - Second\n" + "2 - Minute\n" + "3 - Hour\n" + "4 - Day\n" + "5 - Year\n"));

switch (chooseOption) {
    case 1:
        alert(Math.round(dateDiff / 1000));
    break;
    case 2:
        alert(dateDiff / 1000 / 60);
    break;
    case 3:
        alert(dateDiff / 1000 / 60 / 60);
    break;
    case 4: 
        alert(dateDiff / 1000 / 60 / 60 / 24);
    break;
    default:
        alert(Math.round(dateDiff / 1000 / 60 / 60 / 24 / 365));
}
  