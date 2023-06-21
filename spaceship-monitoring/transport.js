class TransportSpaceship extends SpaceShip{
    constructor(currentVelocity = taxa()){
        super(currentVelocity);
        this.quantityPlaces;
    }
    set inputPlaces(pc){
        this.quantityPlaces = pc;
    }
}