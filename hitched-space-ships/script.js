const addingDockingPlatform = (filterArrWithMoreNineCrewFunc, findDockingPendence, showInScren) => {
    const arrNameCrewDockingProcess = [
        ["Fenix", 8, true],
        ["Golias", 10, true],
        ["Helmet", 5, false],
        ["Elemental", 3, true],
        ["Darwin", 15, false]
    ];
    const arrNameCrewDockingprocessDocking = arrNameCrewDockingProcess.map((nameSizeBolean, index) =>{
        nameSizeBolean[3] = index + 1;
        return nameSizeBolean;
    })
    arrNameCrewDockingprocessDocking.forEach((a) => {a[0] = a[0].toUpperCase()});
    const filterArrWithMoreNineCrew = arrNameCrewDockingprocessDocking.filter(filterArrWithMoreNineCrewFunc);
    const dockingPendence = arrNameCrewDockingprocessDocking.findIndex(findDockingPendence);
    showInScren(arrNameCrewDockingprocessDocking, filterArrWithMoreNineCrew, dockingPendence);
}
const filterArrWithMoreNineCrewFunc = (arr) => {
    if(arr[1] > 9){
        return arr;
    }
}
const findDockingPendence = (arr) => {
    if(arr[2] == false){
        return arr;
    }
}
const showInScren = (arr, arrMoreNineCrew, arrPendence) => {
    alert(`We'll show all spaceships:\n`)
    for(let i=0;i<arr.length;i++){ 
        confirm(`the ${i + 1}º spaceship: ${arr[i][0]}`);
    }
    alert(`We'll show spaceships with more than 9 crews:\n`)
    for(let i=0;i<arrMoreNineCrew.length;i++){
        alert(`Spaceship Number ${i+1}: ${arrMoreNineCrew[i][0]}`);
    }
    alert(`We'll show  the fist spaceship with docking pendence`);
    alert(`Spaceship Number ${arrPendence}: ${arr[arrPendence][0]}`);
}
addingDockingPlatform(filterArrWithMoreNineCrewFunc, findDockingPendence, showInScren);
