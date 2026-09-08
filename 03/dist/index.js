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
    email;
    name;
    _courseCount = 1;
    city = "Skopje";
    //#city makes it private as well
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.email = email;
        this.name = name;
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    isFamily = true;
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const mateo = new User("m@m.com", "mateo");
export {};
//mateo.city -> not accessible
