class SpaceShip {
    static get taxa(){
        return 0.0;
    }
    construtor(currentVelocity = taxa()){
        this.name;
        this.crewQuantity;
        this.currentVelocity = currentVelocity;
    }
    set inputName(name){
        this.name = name;
    }
    set inputCrewQuantity(qtd){
        this.crewQuantity = qtd;
    }
    set speedUp(vl){
        this.currentVelocity = vl + (vl * (1 - 0.17));
    }
    get outputName(){
        return this.name;
    }
    get outputCrew(){
        return this.crewQuantity;
    }
    get outputCurrentyVelocity(){
        return this.currentVelocity;
    }
}