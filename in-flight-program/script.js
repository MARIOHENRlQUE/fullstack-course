//O sistema deve receber o nome da nave do usuario.
//O sistema deve possuir velocidade inicial da nave igual a 0
//O sistema deve possuir um menu interativo.
//O menu do sistema deve possibilitar acesso as funções.
//O sistema deve possibilitar acelerar a nave em 5km/s a partir da velocidade atual.
//O sistema deve possibilitar desacelerar a nave em 5km/s a partir da velocidade atual.
//O sistema deve bloquear a possibilidade da nave chegar a 0km/s
//O sistema deve imprimir os dados de bordo.
//Os dados de bordo devem possuir o nome da nave e sua velocidade atual.
//O sistema deve possibilitar a saída do mesmo.
//Caso o usuario escolha um numero fora do menu, deve-se insistir na request do dado.

const confirmationOptions = (option, defaultVelocity = 0) => {

    switch (option){
        case 1:
            defaultVelocity += 5;
        break;
        case 2: 
            defaultVelocity += -5
        break;
    }
    return defaultVelocity;
}

const inputUserName = () => {
    const inputDate = prompt("Write your user name:");
    return validDate(inputDate, "");
}

const inputSpacshipName = () => {
    const inputDate = prompt("Write your spaceship name:");
    return validDate("", inputDate);
}

const validDate = (userName = "", spaceshipName = "") => {
    let inputDateConfirm;
    if(userName != ""){
        inputDateConfirm = prompt("Write your user name again:");
        while(userName != inputDateConfirm){
            alert("Your user name and the confirm user name are differents");
            inputDateConfirm = prompt("Write your user name again:");
        }
        return userName;
    }
    if(spaceshipName != ""){
        inputDateConfirm = prompt("Write your user name again:");
        while(inputDateConfirm != spaceshipName){
            alert("Your user spaceship name and the confirm  name are differents");
            inputDateConfirm = prompt("Write your user name again:");
        }
        return spaceshipName;
    }
}

const interectMenu = () => {
    const nameUser = inputUserName(), spaceshipName = inputSpacshipName();
    let confirmVelocity = true;
    let confirmOptionTratment = 0;
    alert(`Hi ${nameUser}, welcome to my system`);
    alert(`Please, tell me what's your gonna do with the ${spaceshipName} here`);
    let option;
    while(option > 3 || option <= 0){
        alert("Opção não reconhecida, tente novamente");
        option = parseInt(prompt("1 - Acelerar a nave em 5km/s\n" + "2 - Desacelerar a nave em 5km/s\n" + "3 - Exit of system\n"));
    }
    do{
        option = parseInt(prompt("1 - Acelerar a nave em 5km/s\n" + "2 - Desacelerar a nave em 5km/s\n" + "3 - Exit of system\n"));
        confirmOptionTratment += confirmationOptions(option);
        //O erro está aqui, tente fazer com que a repetição seja interrompida do questionario caso a nave chegue em 0km. Tentei porém ela reconhece que 10 + (-5) = 0, pois corrija.
        if((confirmOptionTratment + confirmationOptions(option)) == 0){
            while((confirmOptionTratment + confirmationOptions(option)) <= 0){
                alert("Sua velocidade não pode cheagar a zero, sua velocidade é de " + confirmOptionTratment + " escolha outra opção!");
                option = parseInt(prompt("1 - Acelerar a nave em 5km/s\n" + "2 - Desacelerar a nave em 5km/s\n" + "3 - Exit of system\n"));
                confirmOptionTratment += confirmationOptions(option);
                confirmVelocity = confirm(`Your velocity is ${confirmOptionTratment}km/h`);
            }
        }else{
            confirmVelocity = confirm(`Your velocity is ${confirmOptionTratment}km/h`);
        }
    } while(option != 3);
}
interectMenu();