// class User {
//     email: string
//     name: string
//     private readonly city: string = "Skopje"
//     //#city makes it private as well

//     constructor(email:string, name:string){
//         this.email = email;
//         this.name = name;
//     }
// }
class User {

    protected _courseCount = 1

    readonly city: string = "Skopje"
    //#city makes it private as well
    constructor(public email:string, public name:string){
        this.email = email;
        this.name = name;
    }

    private deleteToken(){
        console.log("Token deleted")
    }

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number{
        return this._courseCount
    }

    set courseCount(courseNum){ //you cant annotate a setter 
        if(courseNum <= 1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

class SubUser extends User {
    isFamily: boolean = true;
    changeCourseCount(){
        this._courseCount = 4
    }
}


const mateo = new User("m@m.com", "mateo")
//mateo.city -> not accessible
