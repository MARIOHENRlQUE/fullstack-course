class BattleSpaceship extends SpaceShip{
    constructor(currentVelocity = taxa()){
        super(currentVelocity);
        this.weaponsQuantity;
    }
    set inputWeapons(wp){
        this.weaponsQuantity = wp;
    }
    
}