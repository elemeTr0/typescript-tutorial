abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
    ){}

    abstract getSepia(): void
    getReelTime(): number{
        //some complex calculation
        return 8 //random number
    }
}
//const obj1 = new TakePhoto("test", "test")            //this is an error, can't create object from abstract class
class Instagram extends TakePhoto{
    constructor(
        public cameraMode:string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }
    getSepia(): void {
        console.log("Sepia");
    }
}

const obj1 = new Instagram("test", "test", 3)

obj1.getReelTime();