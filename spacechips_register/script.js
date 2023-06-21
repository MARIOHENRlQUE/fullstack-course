class spaceship {
    constructor(name = "", quantity = 0, engage = false, door = false){
        this.name = name
        this.quantity = quantity
        this.engage = engage
        this.door = door
    }
    confirmRegister(){
        this.engage = true
        this.door = true
    }
}

const showMenu = () => {
    alert("Welcome to the system");
    let name, quantity, spaceshiptOpt, opt;
    do{
        opt = parseInt(prompt("Digite um dos número desejados:\n1 - Realizar Engage\n2 - Imprimir Naves\n3 - Sair do programa"))
        switch(opt){
            case 1:
                name = prompt("White name of spaceship");
                quantity = parseInt(prompt("Write quantity of tripulantes"));
                spaceshiptOpt = new spaceship(name, quantity);
                spaceshiptOpt.confirmRegister();
                break; 
            case 2:
                console.log(spaceshiptOpt);
            break;
            default:
            break;
        }

    }while(opt != 3);
}
showMenu();