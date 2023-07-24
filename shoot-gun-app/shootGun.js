class ShotGun {
    constructor(id = 0){
        this.identify = id
        this.shots = 5;
    }
    shootGun(){
        try{
            if(this.shots > 0){
                this.shots--;
                console.log(this.shots);
            }else{
                throw new Error("As balar acabaram");
            }
        } catch(e){
            console.log(e.message);
            this.reload();
            console.log(`Reload to ${this.shots}`);
        }
    }
    reload(){
        this.shots = 5;
    }
}