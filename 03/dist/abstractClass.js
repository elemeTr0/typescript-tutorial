class TakePhoto {
    cameraMode;
    filter;
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //some complex calculation
        return 8; //random number
    }
}
//const obj1 = new TakePhoto("test", "test")            //this is an error, can't create object from abstract class
class Instagram extends TakePhoto {
    cameraMode;
    filter;
    burst;
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const obj1 = new Instagram("test", "test", 3);
obj1.getReelTime();
export {};
