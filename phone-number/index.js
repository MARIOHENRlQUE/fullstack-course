
let count = 1; // Inicialmente, já existe uma linha com número 1, então começamos em 2

function addNewDiv() {
  const divQueQueroClonar = document.querySelector("#insert");
  //divQueQueroClonar é a div pai da div existente que contem o input e label
  const FilhodaDivQueQueroClonar = divQueQueroClonar.firstElementChild.cloneNode(true);
  //FilhodaDivQueQueroClonar vai ser armazenada o primeiro filho da div #insert tendo todos os seus elementos copiados para essa constante.
  FilhodaDivQueQueroClonar.querySelector("label").innerText = "Telefone " + (count + 1) + ": ";
  //Nessa linha, vamos na div 1 que foi copiada e alocada e mudamos sua label.
  divQueQueroClonar.appendChild(FilhodaDivQueQueroClonar);
  //Nessa linha vamos pegar a div clonada e motificada e empurramos na div pai, para ser a segunda div.
  count++;
  //Esse count vai garantir que a numeração de cada label presente nas divs filhas estejam sempre sendo incrementadas.
}

function showPhones() {
    let message = "";
    const formPhone = document.querySelectorAll("input[type='text']");
    //Estou pegando todos os elementos que é um input e tem type igual a text.
    formPhone.forEach((phone, id) => {
      message += "Phone " + (id + 1) + " = " + phone.value + "\n"
    });
    //Esse forEach vai ser responsavel por concatenar strings geradas pra dentro da variavel message e assim formar uma lista no alert.
    alert(message);
}