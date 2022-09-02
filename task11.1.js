let datedeparty = prompt("Write departydate: (Formata DD/MM/YYYY)");

let datedepartyform = moment(datedeparty, "DD/MM/YYYY");

let datetoday = moment();

let datediff = (datetoday - datedepartyform);

alert(
    "Second = " + Math.round(datediff / 1000) + "\n" +
    "Minute = " + Math.round(datediff / 100 / 60) + "\n" +
    "Hour = " + Math.round(datediff / 1000 / 60 / 60) + "\n" +
    "Day = " + Math.round(datediff / 1000 / 60 / 60 / 24) + "\n" +
    "Year = " + Math.round(datediff / 1000 / 60 / 60 / 24 / 365) + "\n" +
    "Decade = " + Math.round(datediff / 1000 / 60 / 60 / 24 / 365 / 10) + "\n"
);