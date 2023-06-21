class App {
    constructor(){
        this.spaceShip = null;
    }
    startApp(){
        this.inputDateSpaceShip();
    }

    inputDateSpaceShip(){
        const typeOfSpaceship = parseInt(prompt("Que tipo de nave você quer cadastrar:\n\nNave de Batalha - Digite 1\nNave de Transporte - Digite 2"));
        const nameOfSpaceship = prompt("Qual o nome da nave?");
        const crewsQuantity = prompt("Qual a quantidade de tripulantes?");
        const spaceShip = this.processingInputData(typeOfSpaceship, nameOfSpaceship, crewsQuantity);
        if(spaceShip !== 0){
            this.menu(spaceShip);
        }else{
            alert("Error");
        }
    }
    
    processingInputData(typeOfSpaceship, nameOfSpaceship, crewsQuantity){
        let type;
        switch(typeOfSpaceship){
            case 1:
                type = new BattleSpaceship(0);
                type.inputName = nameOfSpaceship;
                type.inputCrewQuantity = crewsQuantity;
                type.inputWeapons = prompt("Quantas armas a nave tem disponivel?");
            break;
            case 2:
                type = new TransportSpaceship(0);
                type.inputName = nameOfSpaceship;
                type.inputCrewQuantity = crewsQuantity;
                type.quantityPlaces = prompt("Quantos lugares a nave tem disponivel?");
            break;
            default:
                type = 0;
            break;
        }
        if(type === 0){
            return 0;
        } else {
            return type;
        }
    }
    
    menu(spaceShip){
        let opt = undefined;
        opt = parseInt(prompt("1-Acelerar a nave\n2-Trocar a nave\n3-Imprimir e Sair"));
        switch(opt){
            case 1:
                spaceShip.speedUp = parseInt(prompt("Escreva a velocidade que deseja acelerar:"));
                this.menu(spaceShip);
            break;
            case 2:
                this.inputDateSpaceShip();
            break;
            case 3:
                this.outputDateSpaceship(spaceShip);
            break;
            default:
                alert("Comando Incorreto");
               this.menu(spaceShip);
            break;
        }
    }
    
    outputDateSpaceship(spaceShip){
        alert(`Name: ${spaceShip.outputName}\nQuantidade de tripulantes: ${spaceShip.outputCrew}\nVelocidade atual: ${spaceShip.outputCurrentyVelocity}`);
    }
}


