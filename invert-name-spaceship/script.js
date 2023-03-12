// Solicita ao usuário o nome da espaçonave e a chave de interrupção da inversão
const requestSpaceshipNameAndStopKey = () => {
    const spaceshipName = prompt("Digite o nome da espaçonave:");
    const stopKey = prompt("Digite a chave de interrupção da inversão:");
    invertSpaceshipNameUntilStopKey(spaceshipName, stopKey);
  };
  
  // Inverte o nome da espaçonave até que a chave de interrupção seja encontrada
  const invertSpaceshipNameUntilStopKey = (spaceshipName, stopKey) => {
    let invertedName = "";
    for (let i = spaceshipName.length - 1; i >= 0; --i) {
      if (stopKey === spaceshipName[i]) {
        break;
      } else {
        invertedName += spaceshipName[i];
      }
    }
    alert(invertedName);
  };
  
  requestSpaceshipNameAndStopKey();
  